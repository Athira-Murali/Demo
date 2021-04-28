
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Button,
} from 'react-native';

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';

const Register = () => {
  const [
    defaultAnimationDialog, setDefaultAnimationDialog
  ] = useState(false);
  const [
    scaleAnimationDialog, setScaleAnimationDialog
  ] = useState(false);
  const [
    slideAnimationDialog, setSlideAnimationDialog
  ] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        
        {/* For Default Animation Dialog */}
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => setDefaultAnimationDialog(true)}>
          <Text style={styles.buttonTextStyle}>
            POPUP BOX
          </Text>
        </TouchableHighlight>

       

        {/* For Slide Animation Dialog */}
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => setSlideAnimationDialog(true)}>
          <Text style={styles.buttonTextStyle}>
            Slider Dialog
          </Text>
        </TouchableHighlight>

        <Dialog
          onDismiss={() => {
            setDefaultAnimationDialog(false);
          }}
          width={0.9}
          visible={defaultAnimationDialog}
          rounded
          actionsBordered
          dialogTitle={
            <DialogTitle
              title="WELCOME"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                bordered
                onPress={() => {
                  setDefaultAnimationDialog(false);
                }}
                key="button-1"
              />
              <DialogButton
                text="OK"
                bordered
                onPress={() => {
                  setDefaultAnimationDialog(false);
                }}
                key="button-2"
              />
            </DialogFooter>
          }>
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}>
            <Text>
              Hi, Welcome to the screen
            </Text>
          </DialogContent>
        </Dialog>


        <Dialog
          onDismiss={() => {
            setSlideAnimationDialog(false);
          }}
          onTouchOutside={() => {
            setSlideAnimationDialog(false);
          }}
          visible={slideAnimationDialog}
          dialogTitle={
            <DialogTitle
              title="popup_Slider"
            />
          }
          dialogAnimation={
            new SlideAnimation({slideFrom: 'bottom'})
          }>
          <DialogContent>
            <Text>
              hello, 
            </Text>
          </DialogContent>
        </Dialog>
      </View>
    </SafeAreaView>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E90FF',
    padding: 16,
  },
  buttonStyle: {
    minWidth: '100%',
    padding: 10,
    backgroundColor: '#f5821f',
    margin: 15,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});