declare module 'react-native-swiper' {
  import {Component} from 'react';
  import {ViewStyle, StyleProp} from 'react-native';

  interface SwiperProps {
    onIndexChanged?: (index: number) => void;
    horizontal?: boolean;
    loop?: boolean;
    index?: number;
    autoplay?: boolean;
    autoplayTimeout?: number;
    showsPagination?: boolean;
    dotStyle?: StyleProp<ViewStyle>;
    activeDotStyle?: StyleProp<ViewStyle>;
    paginationStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
  }

  export default class Swiper extends Component<SwiperProps> {}
}
