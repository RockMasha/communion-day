import { HTTPError } from 'ky'
import type { AppError } from '@/types'
import { errorMessages } from '../consts/errorMessages'
import { getErrorMessage } from './getErrorMessage'

export async function handelAppError(error: unknown) {
  if (error instanceof HTTPError) {
    const errorData = await error.response.json()
    return { message: getErrorMessage(errorData.message) }
  }

  const errorWithMessage = error as Partial<AppError>
  if (errorWithMessage?.message) {
    return { message: getErrorMessage(errorWithMessage.message) }
  }

  return { message: errorMessages.unexpected }
}