interface LayoutCommonType {
  className?: string;
  style?: {
    [key: string]: string | number;
  };
  children?: any;
}

interface LayMainType extends LayoutCommonType {
  wrapperClassName?: string;
  wrapperStyle?: {
    [key: string]: string | number;
  };
}

export declare const LayMain: React.FC<LayoutCommonType>;
export declare const LayHeader: React.FC<LayoutCommonType>;
export declare const LaySider: React.FC<LayoutCommonType>;
export declare const LayContent: React.FC<LayoutCommonType>;
export declare const LayContainer: React.FC<LayMainType>;
