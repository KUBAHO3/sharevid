import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.heavenstech.sharevid',
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
    const avatars = new Avatars(client)
    const databases = new Databases(client);

    export const createUser = async( email, password, username ) => {
        try {
            const newAccount = await account.create(
                ID.unique(), email, password, username
            );
            if(!newAccount) throw new Error;

            const avatarUrl = avatars.getInitials(username)
            await signIn(email, password);

            const newUser = await databases.createDocument(
                config.databaseId,
                config.userCollectionId,
                ID.unique(),
                {
                    accountId: newAccount.$id,
                    email,
                    username,
                    avatar: avatarUrl
                }
            )
            return newUser;
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    export const signIn = async( email, password) => {
        try {
            const session = await account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    export const getCurrentUser = async() =>{
        try {
            const currentAccount = await account.get();

            if(!currentAccount) throw new Error;

            const currentUser = await databases.listDocuments(
                config.databaseId, config.userCollectionId, [Query.equal('accountId', currentAccount.$id)]
            )

            if(!currentUser) throw new Error;

            return currentUser.documents[0]
        } catch (error) {
            console.log(error)
        }
    }
    