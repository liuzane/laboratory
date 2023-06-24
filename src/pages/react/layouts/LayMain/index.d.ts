interface LayoutCommonType {
  className?: string;
  style?: {
    [key: string]: string | number;
  };
  children?: any;
}

interface LayContainerType extends LayoutCommonType {
  contentClassName?: string;
  contentStyle?: {
    [key: string]: string | number;
  };
}

export declare const LayMain: React.FC<LayoutCommonType>;
export declare const LayHeader: React.FC<LayoutCommonType>;
export declare const LaySider: React.FC<LayoutCommonType>;
export declare const LaySection: React.FC<LayoutCommonType>;
export declare const LayContainer: React.FC<LayContainerType>;
