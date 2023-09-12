import {
  AccountsMongoDbAggregateBody,
  AccountsMongoDbBody,
  AccountsMongoDbFindBody,
} from '../types'

export function isFindRequest(
  body: AccountsMongoDbBody
): body is AccountsMongoDbFindBody {
  return (body as AccountsMongoDbFindBody).query != null
}

export function isAggregateRequest(
  body: AccountsMongoDbBody
): body is AccountsMongoDbAggregateBody {
  return (body as AccountsMongoDbAggregateBody).pipeline != null
}
