// import AsyncStorage from "@react-native-async-storage/async-storage";


// class Storage{
//     static instance = new Storage();

//     store = async (key,value) => {
//         try {
//             await AsyncStorage.setItem(key,value);
//             return true;
//         } catch (e) {
//             console.log("Error: ",e);
//             return false;
//         }
//     }

//     get = async (key) => {
//         try {
//             return await AsyncStorage.getItem(key)
//         } catch (e) {
//             console.log("Error: ",e);
//             throw Error(e);
//         }
//     }

//     allKeys = async () => {
//         try {
//             return await AsyncStorage.getAllKeys();
//         } catch (e) {
//             console.log("Error: ",e);
//             throw Error(e);
//         }
//     }

//     multiGet = async (keys) => {
//         try {
//             return await AsyncStorage.multiGet(keys);
//         } catch (e) {
//             console.log("Error: ",e);
//             throw Error(e);
//         }
//     }

//     remove = async (key) => {
//         try {
//             await AsyncStorage.removeItem(key);
//             return true;
//         } catch (e) {
//             console.log("Error: ",e);
//             return false;
//         }
//     }
// }

// export default Storage;