import { Account, Client, ID } from 'react-native-appwrite';
export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '663a01640016a48bb4bd',
    databaseId: '663ceb0d00195387136d',
    userCollectionId: '663ceb650008d07cfbb7',
    videoCollectionId: '663ceba2001fd69433d9',
    storageId: '663ceedd000acbfaa6d4'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform);

    const account = new Account(client);

    export const createUser = ( ) => {
        // Register User
        account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
            .then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
    }
    