export interface PluginContext {
  [key: string]: any;
  requestType?: 'complete' | 'chatComplete';
  provider?: string;
}

export interface PluginParameters {
  [key: string]: any;
  credentials?: { [key: string]: string };
}

export interface PluginHandlerResponse {
  error: any;
  verdict?: boolean;
  // The data object can be any JSON object or null.
  data?: any | null;
}

export type HookEventType = 'beforeRequestHook' | 'afterRequestHook';

export type PluginHandler = (
  context: PluginContext,
  parameters: PluginParameters,
  eventType: HookEventType,
  options?: {
    env: Record<string, any>;
  }
) => Promise<PluginHandlerResponse>;
