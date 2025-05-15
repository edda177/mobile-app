import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const NewsCard = () => {
  const { theme } = useTheme();
  const [news, setNews] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    try {
      const data = require("../data/news.json");

      if (!data) {
        setIsLoading(false);
        setError("Något gick fel med att hämta nyheten");
      } else {
        setNews(data);
        setIsLoading(false);
      }
    } catch (error) {
      setError("Något gick fel med try-blocket");
      setIsLoading(false);
    }
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text style={{ color: "red" }}>{error}</Text>;
    }
    console.log(news);

    return (
      <>
        {news.map((item) => (
          //   <View style={theme.card} key={item.id}>
          //     {console.log(item.id)}
          //     <View style={{ flex: 1, gap: 16, padding: 10 }}>
          //       <Text>{item.timestamp}</Text>
          //       <View style={{ flex: 1, gap: 16 }}>
          //         <Image
          //           source={{ uri: item.image }}
          //           resizeMode="cover"
          //           style={[
          //             {
          //               width: "100%",
          //               height: 280,
          //               borderRadius: theme.radius.md,
          //             },
          //           ]}
          //         />
          //         <View style={{ flex: 1 }}>
          //           <Text style={theme.textStyles.titleMedium}>
          //             {item.heading}
          //           </Text>

          //           {showMore ? (
          //             <>
          //               <Text
          //                 style={theme.textStyles.textBody}
          //                 numberOfLines={"100%"}
          //               >
          //                 {item.message}
          //               </Text>
          //               <Pressable onPress={setShowMore(false)}>
          //                 <Text
          //                   style={[
          //                     theme.textStyles.titleMeta,
          //                     {
          //                       textDecorationLine: "underline",
          //                       alignSelf: "flex-end",
          //                     },
          //                   ]}
          //                 >
          //                   Show less
          //                 </Text>
          //               </Pressable>
          //             </>
          //           ) : (
          //             <>
          //               <Text style={theme.textStyles.textBody} numberOfLines={2}>
          //                 {item.message}...
          //               </Text>
          //               <Pressable onPress={setShowMore(true)}>
          //                 <Text
          //                   style={[
          //                     theme.textStyles.titleMeta,
          //                     {
          //                       textDecorationLine: "underline",
          //                       alignSelf: "flex-end",
          //                     },
          //                   ]}
          //                 >
          //                   Show more
          //                 </Text>
          //               </Pressable>
          //             </>
          //           )}
          //         </View>
          //       </View>
          //     </View>
          //   </View>
          <View
            key={item.id}
            style={{
              backgroundColor: theme.colors.snow,
              borderRadius: theme.radius.lg,
              paddingHorizontal: 16,
              paddingVertical: 16,
              flex: 1,
              gap: 10,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: "100%",
                height: 280,
                borderRadius: theme.radius.lg,
              }}
            />
            <Text style={theme.textStyles.titleMedium}>{item.heading}</Text>
            {showMore ? (
              <>
                <Text style={theme.textStyles.textBody}>{item.message}</Text>
                <Pressable onPress={() => setShowMore(false)}>
                  <Text
                    style={[
                      theme.textStyles.titleMeta,
                      {
                        textDecorationLine: "underline",
                        alignSelf: "flex-end",
                      },
                    ]}
                  >
                    Show less
                  </Text>
                </Pressable>
              </>
            ) : (
              <>
                <Text style={theme.textStyles.textBody} numberOfLines={2}>
                  {item.message}...
                </Text>
                <Pressable onPress={() => setShowMore(true)}>
                  <Text
                    style={[
                      theme.textStyles.titleMeta,
                      {
                        textDecorationLine: "underline",
                        alignSelf: "flex-end",
                      },
                    ]}
                  >
                    Show more
                  </Text>
                </Pressable>
              </>
            )}
          </View>
        ))}
      </>
    );
  };
  return <View style={{ flex: 1, gap: 16 }}>{getContent()}</View>;
};

export default NewsCard;

const styles = StyleSheet.create({});
