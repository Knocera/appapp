import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, FlatList, Button } from "react-native";

class profilePage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      allergies: "[]"
    };
    this.name = this.state.name;
  }
  onPressSubmit(val){
      this.setState({name: val})
  }

  render() {
    return (
      <View style={styles.container}>
        {/* {this.state.name ? <View>
                <Text>Name: {this.state.name}</Text>
                <Text>Allergies: </Text>
                <FlatList 
                  data = {this.state.allergies}  renderItem={({item}) => <Text style={styles.item}>{item.name}: {item.severity}
                      
                  </Text>}
                />

            </View> : */}
        <View>
          <Text>Name: {this.state.name}</Text>
          <Text>{this.state.allergies}</Text>

          <TextInput style={styles.input} placeholder="Enter your name" />
        </View>
        <View style={styles.buttonContainer}>
            <Button 
            title="submit"
            />

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    marginTop: 300
  },
  sectionHeader: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  buttonContainer: {
    margin: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 250
  }
});

export default profilePage;
