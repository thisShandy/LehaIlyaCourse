import type { PropsWithChildren } from "react";

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import axios from "axios";

import ItemComponent from "../../components/ItemComponent/ItemComponent";

export interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface IPostsData {
  loading: boolean,
  error: boolean,
  data: IPost[],
}

interface IPostsResponse {
  data: IPost[],
}

const SettingsScreen: React.FC<PropsWithChildren<{}>> = () => {
  const [ postsData, setPostsData ] = useState<IPostsData>({
    loading: true,
    error: false,
    data: [],
  });

  const getPosts = async () => {
    setPostsData({
      ...postsData,
      loading: true,
      error: false
    });
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await axios.get(url) as IPostsResponse;
      setPostsData({
        ...postsData,
        data: response.data,
        loading: false,
      });
    } catch (e) {
      setPostsData({
        ...postsData,
        loading: false,
        error: true,
      });
      console.log(e);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getPosts();
    };
    init();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      {
        !postsData.loading && !postsData.error && (
          postsData.data.map((el) => <ItemComponent data={el} key={el.id.toString()} />)
        )
      }
      {
        postsData.loading && (
          <View style={styles.loading}>
            <Text style={styles.title}>Loading...</Text>
          </View>
        )
      }
      {
        postsData.error && !postsData.loading && (
          <View style={styles.loading}>
            <Text style={styles.title}>Error</Text>
          </View>
        )
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    minHeight: "80%",

    padding: 12,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
});

export default SettingsScreen;
