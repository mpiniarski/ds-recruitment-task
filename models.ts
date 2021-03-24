export type ProfileData = {
  readonly firstName : string
  readonly lastName : string
  readonly email : string
  readonly phone : string
  readonly birthday : Date
  readonly about ?: string
  readonly avatarUrl : string
}