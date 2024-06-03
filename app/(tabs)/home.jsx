import {   FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{id:1},{id:2},{id:3},{id:4},{id:5}]}
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
      >

      </FlatList>
    </SafeAreaView>
  )
}

export default Home

 