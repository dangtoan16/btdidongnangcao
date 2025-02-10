import { TouchableOpacity, View } from "react-native"
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent } from "../../components"
import { Image } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import { useState } from "react"
import { appColors } from "../../constants/appColors"
import Fontisto from 'react-native-vector-icons/Fontisto'
const ProfileScreen = ()=>{
    const [email, setEmail] = useState('aaa@gmail.com');
    const [phone, setPhone] = useState('0999999999');
    const [address, setAddress] = useState('Bình Dương');
    return (
        <ContainerComponent back title="Profile">
           <SectionComponent>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: 'https://photo.znews.vn/w660/Uploaded/vpibtwvo/2025_01_31/Betterimage.ai_1738298235454.jpeg' }}
                            style={{
                                width:  150,
                                height:  150,
                                borderRadius:  100,
                                borderWidth:  1,
                                borderColor:  'gray',
                            }}
                        />
                        <View style={{position:'absolute',right:20,bottom:0,backgroundColor:'#DEDEDE',padding:4,borderRadius:100}}>
                            <Entypo name="camera" size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
           </SectionComponent>
           <SectionComponent>
                <InputComponent 
                    value={email}
                    onChange={(val)=>setEmail(val)}
                    placeholder="Email"
                    affix={<Fontisto name='email' size={25} color={appColors.gray} />}
                    
                />
                <InputComponent 
                    value={phone}
                    onChange={(val)=>setPhone(val)}
                    placeholder="Phone"
                    affix={<Fontisto name='phone' size={25} color={appColors.gray} />}
                    
                />
                <InputComponent 
                    value={address}
                    onChange={(val)=>setAddress(val)}
                    placeholder="Address"
                    affix={<Entypo name='address' size={25} color={appColors.gray} />}
                    
                />
           </SectionComponent>
           <ButtonComponent text="Cập nhập" type="primary" onPress={()=>console.log("Cập nhập")}/>
        </ContainerComponent>
    )
}
export default ProfileScreen