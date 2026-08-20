/**
 * Client plugin for the browser-only GitHub panel.
 *
 * Declares a hard dependency on the `slots` and `locale` client services and
 * registers a `conversation.view` tab (id `github`, order 20) behind the
 * chat (order 0) and trajectory (order 10) tabs.
 */
export declare const inject: string[];

/** The GitHub conversation view tab component factory. */
export declare function apply(ctx: unknown): void;
