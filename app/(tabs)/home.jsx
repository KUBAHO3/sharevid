import {   Alert, FlatList, Image, RefreshControl, RefreshingControl, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPosts } from '../../lib/appwrite'

const Home = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = async () => {
    setRefreshing(true);
    //re call videos...
    setRefreshing(false);
  }

  useEffect(() =>{
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllPosts();
        setData(response)
      } catch (error) {
        Alert.alert('Error', error.message)
      } finally {
        setIsLoading(false);
      }
    };
    fetchData()
  },[])
  console.log('---------+++',data)

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{id:1},{id:2},{id:3},{id:4},{id:5}]}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() =>(
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-center flex-row mb-6">
              <View>
                <Text className="text-sm font-pmedium text-gray-100">
                  Welcome back
                </Text>
                <Text className="text-2xl font-pmedium text-white"> Linne Heaven</Text>
              </View>
              <View>
                <Image 
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode='contain'
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest videos
              </Text>
              <Trending posts={[{id: 1},{id: 2},{id: 3}] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={()=>(
          <EmptyState
            title="No videos found"
            subtitle="You can be the first one to upload video here"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
      
    </SafeAreaView>
  )
}

export default Home

 