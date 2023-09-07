import { View, Text, StyleSheet, Button, Image } from "react-native";

const Post = ({ children, file }) => {
    return(
        <View>
            <UsernameBox>
                <Text>{children}</Text>
            </UsernameBox>
              <Image 
              style = {styles.img}
              source={require("../assets/favicon.png")}/>
            <Location></Location>
            
            <View style = {styles.box}>
                <Likes></Likes>
                <Comments></Comments>
            </View>
        </View>
    )
}



const UsernameBox = ({ children }) => {
    return (
      <View style={styles.username}>
        {children}
      </View>
    );
  };

const Location = ({longitude, lattitude}) => {
return (
    <View style={styles.location}>
        <Button style={styles.button}
          onPress={locationReveal}
          title="Reveal Location"
          color="green"
        />
    </View>
);
};

const locationReveal = () => {
  //call reverse geocode from map_feature
  //open up map pop up linke in map_feature
};

const Likes = () => {
return(
  <View style = {styles.likes}>
    
    <Button
      onPress={incrementLikes}
      title="Like, Count: " 
      color="black"
    />
  </View>
);
};

const incrementLikes = () => {
  //increment mongoDB
};
const getLikes = () => {
  //retrieve mongoDB
  return 0;
};

const Comments = () => {
  return(
    <View style = {styles.comments}>
      <Button
        onPress={showComments}
        title="Comments" 
        color="black"
      />
    </View>
  );
  };

  const showComments = () => {
    //retrieve mongoDB comments
  }

  const Box = () => {
    return (
      <View style={styles.Box}>
        <Likes></Likes>
        <Comments></Comments>
      </View>
    );
  };

  const styles = StyleSheet.create({
    username: {
      width: 200,        // Set your desired width
      height: 25,       // Set your desired height
      backgroundColor: '#808080', // Set your desired background color
      justifyContent: 'center', // Center content vertically
      alignItems: 'center',     // Center content horizontally
    },
    media: {
      width: 200,        // Set your desired width
      height: 200,       // Set your desired height
      backgroundColor: 'red', // Set your desired background color
      justifyContent: 'center', // Center content vertically
      alignItems: 'center',     // Center content horizontally
    },
    img: {
      width: 175,        // Set your desired width
      height: 175,       // Set your desired height
      justifyContent: 'center', // Center content vertically
      alignItems: 'center',     // Center content horizontally
    },
    location: {
      width: 200,        // Set your desired width
      height:50,       // Set your desired height
      backgroundColor: '#808080', // Set your desired background color
      justifyContent: 'center', // Center content vertically
      alignItems: 'center',     // Center content horizontally
    },
    button: {
      width: 200,        // Set your desired width
      height: 100,       // Set your desired height
      backgroundColor: 'green',
      borderColor: '#fff', // Set your desired background color
      justifyContent: 'center', // Center content vertically
      alignItems: 'center',     // Center content horizontally
    },
    likes: {
      width: 100,        // Set your desired width
      height: 50,       // Set your desired height
      backgroundColor: 'red', // Set your desired background color
      justifyContent: 'center', // Center content vertically
      alignItems: 'left',     // Center content horizontally
    },
    comments: {
      width: 100,        // Set your desired width
      height: 50,       // Set your desired height
      backgroundColor: 'blue', // Set your desired background color
      justifyContent: 'center', // Center content vertically
      alignItems: 'right',     // Center content horizontally
    },
    box: {
      width: 200,        // Set your desired width
      height: 50,       // Set your desired height
      backgroundColor: 'green', // Set your desired background color
      justifyContent: 'center', // Center content vertically
      alignItems: 'right',     // Center content horizontally
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });

  export default Post;
