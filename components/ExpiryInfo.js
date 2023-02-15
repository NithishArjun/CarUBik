import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";

function ExpiryInfo({date}){

    if(!date){
        return <></>;
    }
    const today = new Date();
    const inputDate = new Date(date);
    const diffTime = Math.floor(inputDate.getTime() - today.getTime());
    const day = 1000*60*60*24;
    const diffDays = Math.floor(diffTime/day)+ 1;
    const diffMonths = Math.floor(diffDays/30);
    const diffYears = Math.floor(diffMonths/12);
    if(diffYears > 0 || diffMonths >=1){
        
        return (
            <View style={styles.detailImageRowEachFooterContainer}>
              <View style={[styles.detailImageRowEachFooter, styles.green]}>
                <Image
                  source={require("../assets/images/tick.png")}
                  style={styles.detailImageRowEachFooterIcon}
                ></Image>
                <Text
                  style={[styles.detailImageRowEachFooterText, styles.green]}
                >
                  {diffYears>0?`Expires in ${diffYears} year(s)`:`Expires in ${diffMonths} month(s)`}
                </Text>
              </View>
            </View>
        )
    }else if(diffMonths>0 || diffDays >= 0){
        return (
            <View style={styles.detailImageRowEachFooterContainer}>
              <View style={[styles.detailImageRowEachFooter, styles.amber]}>
                <Image
                  source={require("../assets/images/warning.png")}
                  style={styles.detailImageRowEachFooterIcon}
                ></Image>
                <Text
                  style={[styles.detailImageRowEachFooterText, styles.amber]}
                >
                  {diffMonths>0?`Expires in ${diffMonths} months`:`Expires ${diffDays==0?'today':'in '+diffDays+' day(s)'}`}
                </Text>
              </View>
            </View>
        )
    }else{
        return (<View style={styles.detailImageRowEachFooterContainer}>
        <View style={[styles.detailImageRowEachFooter, styles.red]}>
          <Image
            source={require("../assets/images/error.png")}
            style={styles.detailImageRowEachFooterIcon}
          ></Image>
          <Text style={[styles.detailImageRowEachFooterText, styles.red]}>
            Expired
          </Text>
        </View>
      </View>)
    }

}

export default ExpiryInfo;


const styles = StyleSheet.create({
    detailImageRowEachFooterContainer: {
        marginTop: 8,
        alignItems: "flex-start",
      },
      detailImageRowEachFooter: {
        flexDirection: "row",
        paddingLeft: 4,
        paddingRight: 8,
        paddingVertical: 2,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        opacity: 0.8,
      },
      detailImageRowEachFooterIcon: {
        width: 14,
        height: 14,
        resizeMode: "contain",
      },
      detailImageRowEachFooterText: {
        fontSize: 9,
        marginLeft: 4,
        fontWeight: "bold",
      },
      green: {
        color: "green",
        borderColor: "green",
      },
      amber: {
        color: "#F57F17",
        borderColor: "#F57F17",
      },
      red: {
        color: "red",
        borderColor: "red",
      },
})