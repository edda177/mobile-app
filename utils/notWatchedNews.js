import AsyncStorage from "@react-native-async-storage/async-storage";
let storageList = [];
export const saveNotWatched = async (notWatchList) => {
  try {
    const result = await AsyncStorage.setItem(
      "NotWatched",
      JSON.stringify(notWatchList)
    );

    if (!result) {
      throw new Error("Problem with saving not watched status to storage");
    }
    storageList = notWatchList;
    return "it worked setting to storage";
  } catch (error) {
    console.error(error.message, error);
  }
};
export const getFirstNotWatched = async (
  notWatchList,
  setNotWatched,
  notWatched,
  news
) => {
  try {
    console.log("notWatchList:", notWatchList);
    const result = await AsyncStorage.getItem("NotWatched");
    const data = await JSON.parse(result);
    if (data == "[]" || data == null || data == undefined) {
      for (let i = 0; i < news.length; i++) {
        notWatchList.push(news[i].heading);
      }
      await saveNotWatched(notWatchList);
      setNotWatched(notWatchList);
      storageList = notWatchList;
      return notWatchList;
    } else {
      setNotWatched(JSON.parse(result));
      notWatchList = notWatched;
      storageList = notWatchList;
      return JSON.parse(result);
    }
  } catch (error) {
    console.error(error.message, error);
  }
};
export const getNotWatched = async () => {
  try {
    const result = await AsyncStorage.getItem("NotWatched");
    const data = await JSON.parse(result);
    if (!data) {
      throw new Error("cannot get length");
    }
    return data;
  } catch (error) {
    console.error(error.message, error);
  }
};
