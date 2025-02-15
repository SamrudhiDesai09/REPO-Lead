import React from 'react';
import {View, StyleSheet,  Image } from 'react-native';
import cardstyle from '../styles/cardstyle';
import TextStyle from '../styles/TextStyle';
import CustomText from './CustomText';

const RectCardcomp = () => {
  return (

    <View>
      <View style={style.Frame1}>
        <View style={cardstyle.task}>
          <View style={cardstyle.Vertical}>
            <CustomText style={TextStyle.cardname} text={"Barbara Moore"} />
            <CustomText style={TextStyle.cardnum} text={"+91 9876543210"} />
            <CustomText style={TextStyle.carddate} text={"02 Feb 2025 - 12:00 PM"} />
          </View >
          <View style={style.arrowcentre}>
          <Image source={require("../assets/icons/Arrow.png")} style={cardstyle.arrow} />
          </View>
        </View>
      </View>

      <View style={style.Frame1}>
        <View style={cardstyle.task}>
          <View style={cardstyle.Vertical}>
            <CustomText style={TextStyle.cardname} text={"Karlene Chaidez"} />
            <CustomText style={TextStyle.cardnum} text={"+91 9876543210"} />
            <CustomText style={TextStyle.carddate} text={"02 Feb 2025 - 12:00 PM"} />
          </View>
          <View style={style.arrowcentre}>
            <Image source={require("../assets/icons/Arrow.png")} style={cardstyle.arrow} />
          </View>
        </View>
      </View>

      <View style={style.Frame1}>
        <View style={cardstyle.task}>
          <View style={cardstyle.Vertical}>
            <CustomText style={TextStyle.cardname} text={"Russell Copeland"} />
            <CustomText style={TextStyle.cardnum} text={"+91 9876543210"} />
            <CustomText style={TextStyle.carddate} text={"02 Feb 2025 - 12:00 PM"} />
          </View>
          <View style={style.arrowcentre}>
          <Image source={require("../assets/icons/Arrow.png")} style={cardstyle.arrow} />
          </View>
        </View>
      </View>

      <View style={style.Frame1}>
        <View style={cardstyle.task}>
          <View style={cardstyle.Vertical}>
            <CustomText style={TextStyle.cardname} text={"Joseph Collins"} />
            <CustomText style={TextStyle.cardnum} text={"+91 9876543210"} />
            <CustomText style={TextStyle.carddate} text={"02 Feb 2025 - 12:00 PM"} />
          </View>
          <View style={style.arrowcentre}>
          <Image source={require("../assets/icons/Arrow.png")} style={cardstyle.arrow} />
          </View>
        </View>
      </View>
    </View>

  );
};
export default RectCardcomp;


const style = StyleSheet.create({
  Frame1: {
    // gap: 24,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  arrowcentre: {
    alignItems: "center",
    justifyContent: "center"
  },
});