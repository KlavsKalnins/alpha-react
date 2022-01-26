import React, {useState} from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {lightTheme, darkTheme, sharedStyles} from '../Theme';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface OfferItemProps {
  foodName: string;
  currency: number;
  images: string;
  add: (item: OfferItemPropsData) => void;
  onDelete: (item: OfferItemPropsData) => void;
}

export interface OfferItemPropsData {
  foodName: string;
  currency: number;
}

export const OfferItem: React.FC<OfferItemProps> = ({
  foodName,
  currency,
  images,
  add,
  onDelete,
}) => {
  const isDarkMode = useColorScheme();
  const themeStyle = isDarkMode === 'dark' ? darkTheme : lightTheme;
  const styles = {...sharedStyles, ...themeStyle};
  const [pressed, setPressed] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View style={[styles.offerItem, styles.background]}>
      <View>
        <Text style={styles.primaryFont}>{foodName}</Text>
        <TouchableOpacity
          style={[styles.details, styles.offerItemDiv]}
          onPress={() => setCollapsed(!collapsed)}>
          <Text style={styles.primaryFont}>Details</Text>
          {collapsed ? (
            <Icon
              name="caret-down"
              size={20}
              style={[styles.primaryFont, {marginLeft: 5}]}
            />
          ) : (
            <Icon
              name="caret-up"
              size={20}
              style={[styles.primaryFont, {marginLeft: 5}]}
            />
          )}
        </TouchableOpacity>
        <Collapsible collapsed={collapsed}>
          <View style={styles.offerItemDetails}>
            <Image style={styles.offerItemImage} source={{uri: images}} />
            <Text style={styles.offerItemDetailsText}>
              A programming language designed for reliable and efficient
              software
            </Text>
          </View>
        </Collapsible>
      </View>
      <View>
        <Text style={[styles.primaryFont, {textAlign: 'right'}]}>
          € {currency}
        </Text>
        {pressed ? (
          <TouchableOpacity
            style={[styles.add, styles.removeColor]}
            onPress={() => {
              onDelete({foodName, currency});
              setPressed(false);
            }}>
            <Text>- Rem</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.add}
            onPress={() => {
              add({foodName, currency});
              setPressed(true);
            }}>
            <Text>+ Add</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
