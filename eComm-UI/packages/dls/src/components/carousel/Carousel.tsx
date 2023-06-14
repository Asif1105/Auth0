import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

export interface CarouselProps {
  children: any[] | any;
  index: number;
  autoPlayEnabled?: boolean;
  onChangeIndex?: (index: number, previousIndex: number, data: any)=> void;
  enableDesktopSwiping?: boolean;
  disableTouchEvents?: boolean;
  swipeDirection?: 'x' | 'x-reverse' | 'y' | 'y-reverse';
  animateHeight?: boolean;
  containerStyle?: object;
  slideClassName?: string;
}

/**
 * @Carousel
 *
 * Component that provides a carousel that can be configured to be swipeable
 * on desktop or mobile.
 *
 * NOTE: This is a controlled component so you need to pass it an index
 *
 * @param {Array<any>} children: each child will be a slide
 * @param {number} index: the index that the carousel should be on
 * @param {Function} onChangeIndex: callback that fires only when the user
 *   engages with the component, so on when a slide is changed by swiping
 * @param {boolean} enableDesktopSwiping: allows carousel to be swiped with mouse
 * @param {boolean} disableTouchEvents: disables swiping entirely
 * @param {boolean} autoPlayEnabled: enable or disable auto play
 * @param {enum} swipeDirection: can be configured to swipe in 4 directions
 * @param {boolean} animateHeight: changes the height of each slide but careful
 *   if you don't have a height when initially rendered, it could set the height to 0
 * @param {object} containerStyle: styles applied to the carousel container
 * @param {string} slideClassName: className applied to each slide
 *
 * ```typescript
 *
 * import {Carousel} from '@ion/dls/src/components/carousel';
 *
 *  <Carousel enableDesktopSwiping
 *    index={activeTabIndex}
 *    onChangeIndex={onTabChangeIndex}
 *    swipeDirection='y'>
 *    <div>Slide1</div>
 *    <div>Slide2</div>
 *    <div>Slide3</div>
 *  </Carousel>
 *
 * ```
 */
export const Carousel = ({
  children,
  index,
  onChangeIndex,
  slideClassName,
  autoPlayEnabled = true,
  enableDesktopSwiping = true,
  disableTouchEvents = false,
  swipeDirection = 'x',
  animateHeight = false,
  containerStyle = {}
}: CarouselProps) => {
  function handleChangeIndex(index, previousIndex, data) {
    onChangeIndex?.(index, previousIndex, data);
  };

  const AutoPlaySwipeableViews = autoPlayEnabled ? autoPlay(SwipeableViews) : SwipeableViews;

  return (
    <AutoPlaySwipeableViews index={index}
      onChangeIndex={handleChangeIndex}
      enableMouseEvents={enableDesktopSwiping}
      disabled={disableTouchEvents}
      axis={swipeDirection}
      animateHeight={animateHeight}
      containerStyle={containerStyle}
      slideClassName={slideClassName}>
      {children}
    </AutoPlaySwipeableViews>);
};

export default Carousel;
