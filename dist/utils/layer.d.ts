import * as lambda from '@aws-cdk/aws-lambda';
/**
 * check props cases:
 * 1. props is a string with start with 'arn:aws:lambda'
 * 2. props is a string without start with 'arn:aws:lambda'
 * 3. props is a object
 */
export declare const buildLayer: (stack: any, id: string, props: any) => lambda.ILayerVersion;
export declare const loadLayerFiles: (stack: any) => Promise<any>;
