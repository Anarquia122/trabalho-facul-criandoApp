import React, { useState } from "react";
import { View, Button, Image, Text } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import storage from '@react-native-firebase/storage';

export default function Uploading() {
    const [imageUri, setImageUri] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

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
            } else if (response.assets && response.assets.legth > 0) {
                const selectedImage = response.assets[0];
                setImageUri(selectedImage.uri);
            }
        })
    }

    const uploadImage = async () => {
        if (imageUri) {
            const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
            const cleanUri = imageUri.startWith('file://') ? imageUri.replace('file://', '') : imageUri;
            const storageRef = storage().ref(`images/${fileName}`);

            try {
                const task = storageRef.putFile(cleanUri);
                task.on('state_changed', (snapshot) => {
                    console.log(`Progress: ${(snapshot.bytesTransferred / snapshot.totalBytes) * 100}%`)
                });

                await task;
                const downloadUrl = await storageRef.getDownloadURL();

                setUploadStatus('Upload sucessful!');
                console.log('Download URL: ', downloadUrl);

                if (onUploadComplete) {
                    onUploadComplete(downloadUrl);
                }
            } catch (error) {
                setUploadStatus('Upload failed');
                console.log('Upload Error: ', error);
            }
        }
    };

    return (
        <View>
            <Button title="Selected Image" onPress={selectImage && (
                <View>
                    <Image source={{ uri: imageUri }} />
                    <Button title="Upload Image" onPress={uploadImage} />
                    {uploadStatus !== '' && <Text>{uploadStatus}</Text>}
                </View>
            )} />
        </View>
    )
}