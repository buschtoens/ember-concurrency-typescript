// Types for compiled templates
declare module 'ember-concurrency-typescript/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
