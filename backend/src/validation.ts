import Ajv, { AnySchema, ErrorObject } from 'ajv'
import yaml from 'js-yaml'
import { readFileSync } from 'fs'
import path from 'path'

const ajv = new Ajv({ strict: false })

export type Validation = { isValid: boolean, errors: ErrorObject[] }

export const validate = (object: any, $ref: string): Validation => {
    const schema = ajv.schemas['myDoc']
    if (!schema) {
        const doc = yaml.load(readFileSync(path.resolve(__dirname, '../../shared/openapi/openapi.yml'), 'utf8')) as AnySchema
        ajv.addSchema(doc, 'myDoc')
    }

    const isValid = ajv.validate({ $ref }, object)
    return { isValid, errors: ajv.errors as ErrorObject[] ?? [] }
}