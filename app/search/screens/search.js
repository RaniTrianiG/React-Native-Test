import React, { Component } from 'react'
import {
  Container, Text, Content, List,
  ListItem, Fab, Body, Right,
  Form, Item, Input, Icon
} from 'native-base';
import { Button, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allVideos } from '../actions'

class VideosList extends Component {
  constructor(){
    super()
    this.state={
        val:''    
    }
  }  
  
  componentDidMount() {
    this.props.dispatch(allVideos())
  }

  render() {
    const searchFilter = this.props.videos.results.filter( (filter) => {
        return(filter.title.toLowerCase().indexOf(this.state.val.toLowerCase())!==-1)    
    })
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{padding:10}}>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" value={this.state.val} onChangeText={(text)=> this.setState({val:text})} />
              </Item>
          </View>
          <List>
            {searchFilter.map((item, i) => (
              <ListItem key={i} >
                <Body>
                  <Text>{item.title}</Text>
                  <Text note>{item.url}</Text>
                </Body>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videosReducer
  }
}

export default connect(mapStateToProps)(VideosList);

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
