/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
#import "TiUIView.h"
#import <UIKit/UIKit.h>


@interface ComKossoTiKBlurLiveView : TiUIView {
    UIView *square;
}

@property (nonatomic) BOOL translucent; //do you want blur effect? (default: YES)
@property (nonatomic) CGFloat translucentAlpha; //alpha of translucent  effect (default: 1)
@property (nonatomic) UIBarStyle translucentStyle; //blur style, Default or Black
@property (nonatomic, strong) UIColor *translucentTintColor; //tint color of blur, [UIColor clearColor] is default


@end
