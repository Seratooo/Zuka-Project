import React, { useCallback, useMemo, useRef } from 'react';
import {useNavigation} from '@react-navigation/native'
import BottomSheet from '@gorhom/bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, ContainerModal, ContainerContent, Text } from './style';

const Moviment = () => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => ['10%', '25%'], []);

    // callbacks
    // const handleSheetChanges = useCallback((index: number) => {
    //     console.log('handleSheetChanges', index);
    // }, []);

    const navigation = useNavigation();

    // renders
    return (
        <Container>
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                // onChange={handleSheetChanges}        
            >
                <ContainerModal>
                    <ContainerContent 
                        onPress={()=>navigation.navigate('transfer')}
                    >
                        <MaterialCommunityIcons name="bank-transfer-out" size={32} color='#1C1C1E' 
                        />
                        <Text>Transferencia</Text>
                    </ContainerContent>
                    <ContainerContent
                         onPress={()=>navigation.navigate('payment')}
                    >
                        <MaterialIcons name="payment" size={28} color='#1C1C1E' />
                        <Text>Pagamento</Text>
                    </ContainerContent>
                </ContainerModal>
            </BottomSheet>
        </Container>
    );
};

export default Moviment;