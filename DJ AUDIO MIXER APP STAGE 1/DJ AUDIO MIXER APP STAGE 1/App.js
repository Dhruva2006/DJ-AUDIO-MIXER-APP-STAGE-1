import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class DJbutton extends Component{
displayAlert(){    
alert('Play Sound 1')
}
render(){
return(
<Button  color='red' title="SOUND 1" onPress={this.displayAlert}/>

)
}
}



class DJbutton1 extends Component{
displayAlert(){    
alert('Play Sound 2')
}
render(){
return(
<View style={{marginTop:50,margin:0}}>
<Button  color='blue' title="SOUND 2" onPress={this.displayAlert}/>
</View>
)
}
}


class DJbutton2 extends Component{
displayAlert(){    
alert('Play Sound 3')
}
render(){
return(
<View style={{marginTop:50,margin:0}}>
<Button color='purple' title="SOUND 3" onPress={this.displayAlert}/>
</View>
)
}
}


class DJbutton3 extends Component{
displayAlert(){    
alert('Play Sound 4')
}
render(){
return(
<View style={{marginTop:50,margin:0}}>
<Button color='green' title="SOUND 4" onPress={this.displayAlert}/>
</View>
)
}
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 50 ,margin: 50}}>
       
   <DJbutton/>
      <DJbutton1/>
      <DJbutton2/>
      <DJbutton3/>
      </View>
    );
  }

}




