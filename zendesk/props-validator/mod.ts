import { isObject, isString } from "https://deno.land/x/documentaly/utilities/mod.ts";

type MarkdownProps = {
  dist: string;
  subdomain: string;
  articleId: string;
  title: string;
  locale: string;
};

// TODO: hasPropOrUndefined
function hasPropOrError<T extends keyof MarkdownProps>(propName: T, target: unknown): MarkdownProps[T] {
  if (!isObject(target) || !(propName in target)) {
    throw new Error(`Props need ${propName}`)
  }
  // FIXME: any
  return (target as any)[propName] ;
}

function validateZendeskMarkdownProps(input: unknown): MarkdownProps {
  if (!isObject(input)) {
    throw new Error('invalid markdown props');
  }
  if (isString(input.dist) && input.dist.toLowerCase() !== 'zendesk') {
    throw new Error('invalid zendesk markdown props');
  }
  return {
    dist: 'zendesk',
    subdomain: hasPropOrError('subdomain', input),
    articleId: hasPropOrError('articleId', input),
    locale: hasPropOrError('locale', input),
    title: hasPropOrError('title', input),
  }
}

export {validateZendeskMarkdownProps}
