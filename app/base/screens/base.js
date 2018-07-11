import React, { Component } from 'react'
import {
  Container, Text, Content, List,
  ListItem, Fab, Body, Right,
  Form, Item, Input, Icon
} from 'native-base';
import { Button, View, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allImages } from '../actions'

class ImagesList extends Component {
  
  state = {selected: (new Map(): Map<string, boolean>)};
  
  getData=()=>{
    this.props.dispatch(allImages());
  }

  componentDidMount() {
    this.getData();
  }

  _keyExtractor = (item, index) => item;
  _renderItem = ({item}) => (            
       <View>        
        <Image source={{uri: item }} style={{height: Dimensions.get("screen").height * 0.15, width: Dimensions.get("screen").width * 0.25}} />
       </View>
  );

  render() {
    return (
      <Container>
        <View style={{flex:1}}>
          <View>
            <FlatList
                  data={this.props.images.results.message}
                  extraData={this.state}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
                  refreshing={this.props.images.isLoading}
                  onRefresh={this.getData}
                  numColumns={4}
                  />
          </View>
          <Fab
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#f9AA33' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('VideosList')}>
            <Icon name="md-search" />
          </Fab>
        </View>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.imagesReducer
  }
}

export default connect(mapStateToProps)(ImagesList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
