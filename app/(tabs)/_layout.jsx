import {   Image, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({ icon, color, namee, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image 
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused? 'font-psemibold': 'font-pregular'} text-xs`} style={{color: color}}>{namee}</Text>
        </View>
    )
}

const LayoutTab = () => {
  return (
    <>
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FFA001',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle:{
                backgroundColor: '#161622',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 84,
            }
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.home}
                            color={color}
                            namee="Home"
                            focused={focused}
                        />
                    )
                }}
                />
            <Tabs.Screen
                name="bookmarks"
                options={{
                    title: "Bookmarks",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.bookmark}
                            color={color}
                            namee="Bookmarks"
                            focused={focused}
                        />
                    )
                }}
                />
            <Tabs.Screen
                name="create"
                options={{
                    title: "Create",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.plus}
                            color={color}
                            namee="Create"
                            focused={focused}
                        />
                    )
                }}
                />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.profile}
                            color={color}
                            namee="Profile"
                            focused={focused}
                        />
                    )
                }}
                />
        </Tabs>
    </>
  )
}

export default LayoutTab

 