import { headers } from "next/headers"
import {Configuration,PlaidApi,PlaidEnvironments} from "plaid"

const configuration=new Configuration({
 basePath:PlaidEnvironments.sandbox,
 baseOptions:{
    headers:{
   "PLADID-CLIENT-ID":process.env.PLAID_CLIENT_ID,
   "PLADID-SCREET":process.env.PLAID_SECRET,
    }
 }
})

export const plaidClient =new PlaidApi(configuration);