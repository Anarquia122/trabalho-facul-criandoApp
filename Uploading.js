import React, { useState } from "react";
import { View, Button, Image, Text, TouchableOpacity } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import storage from '@react-native-firebase/storage';
import { ActivityIndicator } from "react-native";
import { cadastroStyles } from "./styles/CadastroStryle";

export default function Uploading({ onUploadComplete }) {
    const [imageUri, setImageUri] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const imgDefault = "https://firebasestorage.googleapis.com/v0/b/criandoapprn.appspot.com/o/fornecedor-default.png?alt=media&token=7f96512e-3346-4ffb-a9c0-399644e7f24c";

    const selectImage = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.errorMessage) {
                console.log("ImagePicker Error: ", response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const selectedImage = response.assets[0];
                setImageUri(selectedImage.uri);
            }
        });
    };

    const uploadImage = async () => {
        if (imageUri) {
            setIsUploading(true);
            const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
            const cleanUri = imageUri.startsWith('file://') ? imageUri.replace('file://', '') : imageUri;
            const storageRef = storage().ref(`images/${fileName}`);

            try {
                const task = storageRef.putFile(cleanUri);
                task.on('state_changed', (snapshot) => {
                    console.log(`Progress: ${(snapshot.bytesTransferred / snapshot.totalBytes) * 100}%`);
                });

                await task;
                const downloadUrl = await storageRef.getDownloadURL();

                setUploadStatus('Upload successful!');
                setIsUploading(false);

                if (onUploadComplete) {
                    onUploadComplete(downloadUrl);
                }
            } catch (error) {
                setUploadStatus('Upload failed');
                setIsUploading(false);
            }
        }
    };

    return (
        <View>
            <View style={cadastroStyles.divImg}>
                <Image source={{ uri: imageUri || imgDefault }} style={cadastroStyles.img} />

                <TouchableOpacity style={cadastroStyles.btnImg} onPress={selectImage} activeOpacity={1}>
                    <Text style={cadastroStyles.btnText}>📷</Text>
                </TouchableOpacity>
            </View>

            {imageUri && (
                <View>
                    {/* <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
                    <Button title="Upload Image" onPress={uploadImage} />
                    {isUploading && <ActivityIndicator size="large" color="#0000ff" />}
                    {uploadStatus !== '' && <Text style={{color: '#000'}}>{uploadStatus}</Text>}
                </View>
            )}
        </View>
    );
}