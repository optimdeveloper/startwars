import RNFetchBlob from 'rn-fetch-blob';
import { RNS3 } from 'react-native-s3-upload';
import _ from "lodash"
import { Platform } from 'react-native';



const options = {
    bucket: "fit-logger-bckt",
    region: "us-east-2",
    accessKey: "AKIAXPOOG6QZXZP35YAA",
    secretKey: "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",
    successActionStatus: 201
}


const mimeTypes = {

    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    pdf: 'application/pdf',
    txt: 'text/plain'
}


export const uploadFile = async (uri) => {

    try {

        if (!uri || uri == null || _.isEmpty(uri.trim()))
            return uri

        if (uri.startsWith(`https://s3.${options.region}`)) {
            return uri
        }
        // if (!isExist)
        //     return uri
        console.log('File uri', uri)

        let path = uri

        if (Platform.OS === "android") {
            const stat = await RNFetchBlob.fs.stat(uri)
            console.log('File Info', stat)
            path = stat.originalFilepath || stat.path
            console.log('path', path)
        }

        let extention = path.substr(path.lastIndexOf(".") + 1);
        let filename = Math.random().toString(36).substring(7) + '.' + extention;
        let type = mimeTypes[extention];

        type = !type ? mimeTypes["jpg"] : type

        console.log('type', type)

        //const buffer = await readFile(uri);


        const file = {
            uri: Platform.select({ ios: uri, android: `file://${path || uri}` }),
            name: filename,
            type: type,
        }
        // const response = await Storage.put(filename, buffer, {
        //     level: BUCKET_NAME,
        //     contentType: type
        // })

        console.log("File", file)
        const response = await RNS3.put(file, options);
        if (response.status !== 201)
            throw new Error("Failed to upload image to S3");

        console.log("response", response);
        /**
         * {
         *   postResponse: {
         *     bucket: "your-bucket",
         *     etag : "9f620878e06d28774406017480a59fd4",
         *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
         *   }
         * }
         */

        // console.log(response)

        return response.body.postResponse.location//`https://s3.${REGION}.amazonaws.com/${BUCKET_NAME}/${filename}`

    } catch (err) {
        console.log("Error", err)

        return uri
    }
}

export const uploadFiles = async (files) => {

    try {

        let paths = await Promise.all(await files.map(async (value) => {

            await uploadFile(value.uri)

        }))



        console.log(paths)

        return paths


    } catch (err) {

        console.log(err)
        return []
    }
}


const readFile = (filePath) => {
    return RNFetchBlob.fs.readFile(filePath, 'base64').then(data => new Buffer.from(data, 'base64'));
}

