import React from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { Image, View,StyleSheet, SafeAreaView, FlatList, ScrollView } from "react-native";
const App = () => {
  return (
    
    <ScrollView>
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item style={styles.container} flexDirection="row" alignItems="center" marginTop={40}>
        <SkeletonPlaceholder.Item  Image={styles.tinyLogo} width={180} height={180} borderRadius={150} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item marginTop={6} width={200} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={150}
            height={20}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item marginTop={6} width={250} height={60} borderRadius={4}  />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item style={styles.container} flexDirection="row" alignItems="center" marginTop={40}>
        <SkeletonPlaceholder.Item  Image={styles.tinyLogo} width={180} height={180} borderRadius={150} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item marginTop={6} width={200} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={150}
            height={20}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item marginTop={6} width={250} height={60} borderRadius={4}  />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item style={styles.container} flexDirection="row" alignItems="center" marginTop={40}>
        <SkeletonPlaceholder.Item  Image={styles.tinyLogo} width={180} height={180} borderRadius={150} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item marginTop={6} width={200} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={150}
            height={20}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item marginTop={6} width={250} height={60} borderRadius={4}  />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item style={styles.container} flexDirection="row" alignItems="center" marginTop={40}>
        <SkeletonPlaceholder.Item  Image={styles.tinyLogo} width={180} height={180} borderRadius={150} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item marginTop={6} width={200} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={150}
            height={20}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item marginTop={6} width={250} height={60} borderRadius={4}  />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
    </ScrollView>
   
    
  );
};
function image (){}

const styles =StyleSheet.create({
  container:{
    padding:20,
    flex:1,
    backgroundColor:'#fff',

  },
 

})




// import React from "react";
// import { View } from "react-native";
// import SkeletonPlaceholder from "react-native-skeleton-placeholder";
// import BVlinearGradient from "react-native-linear-gradient";
// const App = () => {
//   return (
//     <SkeletonPlaceholder>
//       <View style={{ flexDirection: "column", alignItems: "center" }}>
//         <View style={{ width: 300, height: 300, borderRadius: 150}} />
//         <View style={{ margin: 20 }}>
//           <View style={{ width: 150, height: 50, borderRadius: 4 }} />
//           <View
//             style={{ marginTop: 10, width: 75, height: 25, borderRadius: 4 }}
//           />
//         </View>
//       </View>
//     </SkeletonPlaceholder>
//   );
// };

export default App;

