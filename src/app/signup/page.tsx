import { Pressable, Text, TextInput, View,Image  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { layoutTheme } from "../../../constants/theme";
import { Link } from "expo-router";

export default function SignupPage() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.titleC} >
                    <Text style={styles.title_} >Sign Up</Text>
                    <View style={styles.line}/>
                </View>

                <View style={styles.formC} >
                    <View  style={styles.formItem}>
                        <Text style={styles.InputTitle} >FULL NAME</Text>
                        <TextInput style={styles.input} placeholder="Loerm Ipsum"/>
                    </View>

                    <View style={styles.formItem} >
                        <Text style={styles.InputTitle}>EMAIL OR PHONE</Text>
                        <TextInput style={styles.input} placeholder="Loremipsum@gmail.com"/>
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.InputTitle}>PASSWORD</Text>
                        <TextInput style={styles.input} placeholder="********"/>
                    </View>

                    <Pressable style={styles.button} onPress={() => {
                        alert("Log In");
                    }}>
                        <Text style={styles.buttonTxet}>Log In</Text>
                    </Pressable>

                    <Text style={styles.TextO}>OR</Text>

                    <View>
                        <Pressable style={styles.socialButton} onPress={() => {alert("Google"); }}>
                            <Image source={require('../../../assets/images/google.png')} style={styles.socialIcon}/>
                            <Text style={styles.socialText} >Continue With Google</Text>
                        </Pressable>

                        <Pressable style={styles.socialButton} onPress={() => {alert("FaceBook"); }}>
                            <Image source={require('../../../assets/images/facebook.png')} style={styles.socialIcon}/>
                            <Text style={styles.socialText} >Continue With Facebook</Text>
                        </Pressable>
                    </View>

                    <View  style={styles.signInR}>
                        <Text style={styles.signInT} >Have an account Already?</Text>
                        <Link href="/signin/page" style={styles.signInL}>Sign In</Link>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 38,
    },
    titleC : {
        width : "100%"
    },
    title_:{
        color : "black",
        fontSize : 54,
        marginBottom : 20,
        fontFamily: layoutTheme.fonts.imprima.regular,
    },
    line : {
        backgroundColor: layoutTheme.colors.primary.colorPrimary,
        width : 58,
        height : 4,
        marginBottom : 20,
        borderRadius : 2
    },
    formC : {
        width : "100%",
        gap : 24
    },
    InputTitle : {
        color : "black",
        fontSize : 16,
        textTransform: "uppercase",
    },
    input : {
        borderColor : "#3D4F58",
        width : "100%",
        height : 40,
        borderBottomWidth : 1,
        paddingHorizontal: 20,
    },
    formItem : {
        gap : 4
    },
    button : {
        backgroundColor: layoutTheme.colors.primary.colorPrimary,
        width : "100%",
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 8,
        paddingVertical: 18
    },
    buttonTxet : {
        color : "white",
        fontWeight : "bold",
        fontSize : 18
    },
    TextO : {
        fontWeight : "200",
        justifyContent : "center",
        alignItems : "center",
        fontSize : 19,
        left : 144
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        paddingVertical: 18,
        paddingHorizontal: 20,
        marginBottom: 12,
        gap: 45,
    },
      socialIcon: {
        width: 24,
        height: 24,
        left : 10
    },
      socialText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
    },
    signInR: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        gap : 30
      },
      signInT: {
        color: '#888',
        fontSize: 15,
        width : 180,
        fontWeight : "300",
        lineHeight : 13
      },
      signInL : {
        color: '#FCC21B',
        fontStyle: 'italic',
        fontWeight: '700',
        fontSize: 13,
        lineHeight: 13,
    },
})