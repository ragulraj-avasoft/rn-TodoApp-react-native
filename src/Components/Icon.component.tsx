import React from 'react';
import {Image, Pressable, ViewStyle} from 'react-native';

interface IconProps {
  onPress: Function;
  iconName: 'back' | 'save' | 'attachment' | 'edit' | 'Delete';
  height: number;
  width: number;
  marginRight?: number;
}

const Icon: React.FC<IconProps> = props => {
  const image = () => {
    if (props.iconName === 'back') {
      return (
        <Image
          style={{height: props.height, width: props.width}}
          source={require(`../images/chevron-left.png`)}
        />
      );
    }

    if (props.iconName === 'attachment') {
      return (
        <Image
          style={{
            height: props.height,
            width: props.width,
            marginRight: props.marginRight,
          }}
          source={require('../images/attachment.png')}
        />
      );
    }

    if (props.iconName === 'save') {
      return (
        <Image
          style={{height: props.height, width: props.width}}
          source={require('../images/newSave.png')}
        />
      );
    }

    if (props.iconName === 'edit') {
      return (
        <Image
          style={{
            height: props.height,
            width: props.width,
            marginRight: props.marginRight,
          }}
          source={require('../images/edit.png')}
        />
      );
    }

    if (props.iconName === 'Delete') {
      return (
        <Image
          style={{height: props.height, width: props.width}}
          source={require('../images/delete.png')}
        />
      );
    }
  };

  return <Pressable onPress={() => props.onPress()}>{image()}</Pressable>;
};

export default Icon;
