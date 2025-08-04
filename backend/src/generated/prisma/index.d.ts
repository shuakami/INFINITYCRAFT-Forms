
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Form
 * 
 */
export type Form = $Result.DefaultSelection<Prisma.$FormPayload>
/**
 * Model FormVersion
 * 
 */
export type FormVersion = $Result.DefaultSelection<Prisma.$FormVersionPayload>
/**
 * Model EmailNotification
 * 
 */
export type EmailNotification = $Result.DefaultSelection<Prisma.$EmailNotificationPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AIAnalysisStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type AIAnalysisStatus = (typeof AIAnalysisStatus)[keyof typeof AIAnalysisStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AIAnalysisStatus = $Enums.AIAnalysisStatus

export const AIAnalysisStatus: typeof $Enums.AIAnalysisStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formVersion`: Exposes CRUD operations for the **FormVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormVersions
    * const formVersions = await prisma.formVersion.findMany()
    * ```
    */
  get formVersion(): Prisma.FormVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailNotification`: Exposes CRUD operations for the **EmailNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailNotifications
    * const emailNotifications = await prisma.emailNotification.findMany()
    * ```
    */
  get emailNotification(): Prisma.EmailNotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Form: 'Form',
    FormVersion: 'FormVersion',
    EmailNotification: 'EmailNotification',
    Submission: 'Submission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "form" | "formVersion" | "emailNotification" | "submission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Form: {
        payload: Prisma.$FormPayload<ExtArgs>
        fields: Prisma.FormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findFirst: {
            args: Prisma.FormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findMany: {
            args: Prisma.FormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          create: {
            args: Prisma.FormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          createMany: {
            args: Prisma.FormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          delete: {
            args: Prisma.FormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          update: {
            args: Prisma.FormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          deleteMany: {
            args: Prisma.FormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          upsert: {
            args: Prisma.FormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          aggregate: {
            args: Prisma.FormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForm>
          }
          groupBy: {
            args: Prisma.FormGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormCountArgs<ExtArgs>
            result: $Utils.Optional<FormCountAggregateOutputType> | number
          }
        }
      }
      FormVersion: {
        payload: Prisma.$FormVersionPayload<ExtArgs>
        fields: Prisma.FormVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormVersionPayload>
          }
          findFirst: {
            args: Prisma.FormVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormVersionPayload>
          }
          findMany: {
            args: Prisma.FormVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormVersionPayload>[]
          }
          create: {
            args: Prisma.FormVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormVersionPayload>
          }
          createMany: {
            args: Prisma.FormVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormVersionPayload>[]
          }
          delete: {
            args: Prisma.FormVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormVersionPayload>
          }
          update: {
            args: Prisma.FormVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormVersionPayload>
          }
          deleteMany: {
            args: Prisma.FormVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormVersionPayload>[]
          }
          upsert: {
            args: Prisma.FormVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormVersionPayload>
          }
          aggregate: {
            args: Prisma.FormVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormVersion>
          }
          groupBy: {
            args: Prisma.FormVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormVersionCountArgs<ExtArgs>
            result: $Utils.Optional<FormVersionCountAggregateOutputType> | number
          }
        }
      }
      EmailNotification: {
        payload: Prisma.$EmailNotificationPayload<ExtArgs>
        fields: Prisma.EmailNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          findFirst: {
            args: Prisma.EmailNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          findMany: {
            args: Prisma.EmailNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          create: {
            args: Prisma.EmailNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          createMany: {
            args: Prisma.EmailNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          delete: {
            args: Prisma.EmailNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          update: {
            args: Prisma.EmailNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          deleteMany: {
            args: Prisma.EmailNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          upsert: {
            args: Prisma.EmailNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          aggregate: {
            args: Prisma.EmailNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailNotification>
          }
          groupBy: {
            args: Prisma.EmailNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<EmailNotificationCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    form?: FormOmit
    formVersion?: FormVersionOmit
    emailNotification?: EmailNotificationOmit
    submission?: SubmissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    forms: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forms?: boolean | UserCountOutputTypeCountFormsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
  }


  /**
   * Count Type FormCountOutputType
   */

  export type FormCountOutputType = {
    versions: number
    submissions: number
  }

  export type FormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | FormCountOutputTypeCountVersionsArgs
    submissions?: boolean | FormCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormCountOutputType
     */
    select?: FormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormVersionWhereInput
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type FormVersionCountOutputType
   */

  export type FormVersionCountOutputType = {
    submissions: number
  }

  export type FormVersionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | FormVersionCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * FormVersionCountOutputType without action
   */
  export type FormVersionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersionCountOutputType
     */
    select?: FormVersionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormVersionCountOutputType without action
   */
  export type FormVersionCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    forms?: boolean | User$formsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forms?: boolean | User$formsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      forms: Prisma.$FormPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    forms<T extends User$formsArgs<ExtArgs> = {}>(args?: Subset<T, User$formsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.forms
   */
  export type User$formsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    where?: FormWhereInput
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    cursor?: FormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Form
   */

  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormAvgAggregateOutputType = {
    latestVersion: number | null
  }

  export type FormSumAggregateOutputType = {
    latestVersion: number | null
  }

  export type FormMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    latestVersion: number | null
    customUrl: string | null
  }

  export type FormMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    latestVersion: number | null
    customUrl: string | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    authorId: number
    latestVersion: number
    customUrl: number
    _all: number
  }


  export type FormAvgAggregateInputType = {
    latestVersion?: true
  }

  export type FormSumAggregateInputType = {
    latestVersion?: true
  }

  export type FormMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    latestVersion?: true
    customUrl?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    latestVersion?: true
    customUrl?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    latestVersion?: true
    customUrl?: true
    _all?: true
  }

  export type FormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Form to aggregate.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
    orderBy?: FormOrderByWithAggregationInput | FormOrderByWithAggregationInput[]
    by: FormScalarFieldEnum[] | FormScalarFieldEnum
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _avg?: FormAvgAggregateInputType
    _sum?: FormSumAggregateInputType
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }

  export type FormGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    authorId: string
    latestVersion: number
    customUrl: string | null
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    latestVersion?: boolean
    customUrl?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    versions?: boolean | Form$versionsArgs<ExtArgs>
    submissions?: boolean | Form$submissionsArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    latestVersion?: boolean
    customUrl?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    latestVersion?: boolean
    customUrl?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    latestVersion?: boolean
    customUrl?: boolean
  }

  export type FormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "authorId" | "latestVersion" | "customUrl", ExtArgs["result"]["form"]>
  export type FormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    versions?: boolean | Form$versionsArgs<ExtArgs>
    submissions?: boolean | Form$submissionsArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Form"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      versions: Prisma.$FormVersionPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      authorId: string
      latestVersion: number
      customUrl: string | null
    }, ExtArgs["result"]["form"]>
    composites: {}
  }

  type FormGetPayload<S extends boolean | null | undefined | FormDefaultArgs> = $Result.GetResult<Prisma.$FormPayload, S>

  type FormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface FormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Form'], meta: { name: 'Form' } }
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormFindUniqueArgs>(args: SelectSubset<T, FormFindUniqueArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Form that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs>(args: SelectSubset<T, FormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormFindFirstArgs>(args?: SelectSubset<T, FormFindFirstArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs>(args?: SelectSubset<T, FormFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormFindManyArgs>(args?: SelectSubset<T, FormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
     */
    create<T extends FormCreateArgs>(args: SelectSubset<T, FormCreateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forms.
     * @param {FormCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormCreateManyArgs>(args?: SelectSubset<T, FormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forms and returns the data saved in the database.
     * @param {FormCreateManyAndReturnArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormCreateManyAndReturnArgs>(args?: SelectSubset<T, FormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
     */
    delete<T extends FormDeleteArgs>(args: SelectSubset<T, FormDeleteArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormUpdateArgs>(args: SelectSubset<T, FormUpdateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormDeleteManyArgs>(args?: SelectSubset<T, FormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormUpdateManyArgs>(args: SelectSubset<T, FormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms and returns the data updated in the database.
     * @param {FormUpdateManyAndReturnArgs} args - Arguments to update many Forms.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormUpdateManyAndReturnArgs>(args: SelectSubset<T, FormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
     */
    upsert<T extends FormUpsertArgs>(args: SelectSubset<T, FormUpsertArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): Prisma.PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Form model
   */
  readonly fields: FormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    versions<T extends Form$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Form$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Form$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Form$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Form model
   */
  interface FormFieldRefs {
    readonly id: FieldRef<"Form", 'String'>
    readonly createdAt: FieldRef<"Form", 'DateTime'>
    readonly updatedAt: FieldRef<"Form", 'DateTime'>
    readonly authorId: FieldRef<"Form", 'String'>
    readonly latestVersion: FieldRef<"Form", 'Int'>
    readonly customUrl: FieldRef<"Form", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Form findUnique
   */
  export type FormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findFirst
   */
  export type FormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findMany
   */
  export type FormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form create
   */
  export type FormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to create a Form.
     */
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }

  /**
   * Form createMany
   */
  export type FormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Form createManyAndReturn
   */
  export type FormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Form update
   */
  export type FormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to update a Form.
     */
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Form updateManyAndReturn
   */
  export type FormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Form upsert
   */
  export type FormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The filter to search for the Form to update in case it exists.
     */
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     */
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }

  /**
   * Form delete
   */
  export type FormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter which Form to delete.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to delete.
     */
    limit?: number
  }

  /**
   * Form.versions
   */
  export type Form$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionInclude<ExtArgs> | null
    where?: FormVersionWhereInput
    orderBy?: FormVersionOrderByWithRelationInput | FormVersionOrderByWithRelationInput[]
    cursor?: FormVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormVersionScalarFieldEnum | FormVersionScalarFieldEnum[]
  }

  /**
   * Form.submissions
   */
  export type Form$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Form without action
   */
  export type FormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
  }


  /**
   * Model FormVersion
   */

  export type AggregateFormVersion = {
    _count: FormVersionCountAggregateOutputType | null
    _avg: FormVersionAvgAggregateOutputType | null
    _sum: FormVersionSumAggregateOutputType | null
    _min: FormVersionMinAggregateOutputType | null
    _max: FormVersionMaxAggregateOutputType | null
  }

  export type FormVersionAvgAggregateOutputType = {
    version: number | null
    submissionsPerIp: number | null
  }

  export type FormVersionSumAggregateOutputType = {
    version: number | null
    submissionsPerIp: number | null
  }

  export type FormVersionMinAggregateOutputType = {
    id: string | null
    version: number | null
    formId: string | null
    createdAt: Date | null
    title: string | null
    description: string | null
    published: boolean | null
    submissionsPerIp: number | null
    aiEnabled: boolean | null
    aiPrompt: string | null
    aiLanguage: string | null
  }

  export type FormVersionMaxAggregateOutputType = {
    id: string | null
    version: number | null
    formId: string | null
    createdAt: Date | null
    title: string | null
    description: string | null
    published: boolean | null
    submissionsPerIp: number | null
    aiEnabled: boolean | null
    aiPrompt: string | null
    aiLanguage: string | null
  }

  export type FormVersionCountAggregateOutputType = {
    id: number
    version: number
    formId: number
    createdAt: number
    title: number
    description: number
    blocks: number
    published: number
    submissionsPerIp: number
    aiEnabled: number
    aiPrompt: number
    aiResponseSchema: number
    aiLanguage: number
    _all: number
  }


  export type FormVersionAvgAggregateInputType = {
    version?: true
    submissionsPerIp?: true
  }

  export type FormVersionSumAggregateInputType = {
    version?: true
    submissionsPerIp?: true
  }

  export type FormVersionMinAggregateInputType = {
    id?: true
    version?: true
    formId?: true
    createdAt?: true
    title?: true
    description?: true
    published?: true
    submissionsPerIp?: true
    aiEnabled?: true
    aiPrompt?: true
    aiLanguage?: true
  }

  export type FormVersionMaxAggregateInputType = {
    id?: true
    version?: true
    formId?: true
    createdAt?: true
    title?: true
    description?: true
    published?: true
    submissionsPerIp?: true
    aiEnabled?: true
    aiPrompt?: true
    aiLanguage?: true
  }

  export type FormVersionCountAggregateInputType = {
    id?: true
    version?: true
    formId?: true
    createdAt?: true
    title?: true
    description?: true
    blocks?: true
    published?: true
    submissionsPerIp?: true
    aiEnabled?: true
    aiPrompt?: true
    aiResponseSchema?: true
    aiLanguage?: true
    _all?: true
  }

  export type FormVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormVersion to aggregate.
     */
    where?: FormVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormVersions to fetch.
     */
    orderBy?: FormVersionOrderByWithRelationInput | FormVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormVersions
    **/
    _count?: true | FormVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormVersionMaxAggregateInputType
  }

  export type GetFormVersionAggregateType<T extends FormVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateFormVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormVersion[P]>
      : GetScalarType<T[P], AggregateFormVersion[P]>
  }




  export type FormVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormVersionWhereInput
    orderBy?: FormVersionOrderByWithAggregationInput | FormVersionOrderByWithAggregationInput[]
    by: FormVersionScalarFieldEnum[] | FormVersionScalarFieldEnum
    having?: FormVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormVersionCountAggregateInputType | true
    _avg?: FormVersionAvgAggregateInputType
    _sum?: FormVersionSumAggregateInputType
    _min?: FormVersionMinAggregateInputType
    _max?: FormVersionMaxAggregateInputType
  }

  export type FormVersionGroupByOutputType = {
    id: string
    version: number
    formId: string
    createdAt: Date
    title: string
    description: string | null
    blocks: JsonValue
    published: boolean
    submissionsPerIp: number | null
    aiEnabled: boolean
    aiPrompt: string | null
    aiResponseSchema: JsonValue | null
    aiLanguage: string | null
    _count: FormVersionCountAggregateOutputType | null
    _avg: FormVersionAvgAggregateOutputType | null
    _sum: FormVersionSumAggregateOutputType | null
    _min: FormVersionMinAggregateOutputType | null
    _max: FormVersionMaxAggregateOutputType | null
  }

  type GetFormVersionGroupByPayload<T extends FormVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormVersionGroupByOutputType[P]>
            : GetScalarType<T[P], FormVersionGroupByOutputType[P]>
        }
      >
    >


  export type FormVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    formId?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    blocks?: boolean
    published?: boolean
    submissionsPerIp?: boolean
    aiEnabled?: boolean
    aiPrompt?: boolean
    aiResponseSchema?: boolean
    aiLanguage?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
    emailNotification?: boolean | FormVersion$emailNotificationArgs<ExtArgs>
    submissions?: boolean | FormVersion$submissionsArgs<ExtArgs>
    _count?: boolean | FormVersionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formVersion"]>

  export type FormVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    formId?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    blocks?: boolean
    published?: boolean
    submissionsPerIp?: boolean
    aiEnabled?: boolean
    aiPrompt?: boolean
    aiResponseSchema?: boolean
    aiLanguage?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formVersion"]>

  export type FormVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    formId?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    blocks?: boolean
    published?: boolean
    submissionsPerIp?: boolean
    aiEnabled?: boolean
    aiPrompt?: boolean
    aiResponseSchema?: boolean
    aiLanguage?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formVersion"]>

  export type FormVersionSelectScalar = {
    id?: boolean
    version?: boolean
    formId?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    blocks?: boolean
    published?: boolean
    submissionsPerIp?: boolean
    aiEnabled?: boolean
    aiPrompt?: boolean
    aiResponseSchema?: boolean
    aiLanguage?: boolean
  }

  export type FormVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "version" | "formId" | "createdAt" | "title" | "description" | "blocks" | "published" | "submissionsPerIp" | "aiEnabled" | "aiPrompt" | "aiResponseSchema" | "aiLanguage", ExtArgs["result"]["formVersion"]>
  export type FormVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
    emailNotification?: boolean | FormVersion$emailNotificationArgs<ExtArgs>
    submissions?: boolean | FormVersion$submissionsArgs<ExtArgs>
    _count?: boolean | FormVersionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
  }
  export type FormVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
  }

  export type $FormVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormVersion"
    objects: {
      form: Prisma.$FormPayload<ExtArgs>
      emailNotification: Prisma.$EmailNotificationPayload<ExtArgs> | null
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      version: number
      formId: string
      createdAt: Date
      title: string
      description: string | null
      blocks: Prisma.JsonValue
      published: boolean
      submissionsPerIp: number | null
      aiEnabled: boolean
      aiPrompt: string | null
      aiResponseSchema: Prisma.JsonValue | null
      aiLanguage: string | null
    }, ExtArgs["result"]["formVersion"]>
    composites: {}
  }

  type FormVersionGetPayload<S extends boolean | null | undefined | FormVersionDefaultArgs> = $Result.GetResult<Prisma.$FormVersionPayload, S>

  type FormVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormVersionCountAggregateInputType | true
    }

  export interface FormVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormVersion'], meta: { name: 'FormVersion' } }
    /**
     * Find zero or one FormVersion that matches the filter.
     * @param {FormVersionFindUniqueArgs} args - Arguments to find a FormVersion
     * @example
     * // Get one FormVersion
     * const formVersion = await prisma.formVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormVersionFindUniqueArgs>(args: SelectSubset<T, FormVersionFindUniqueArgs<ExtArgs>>): Prisma__FormVersionClient<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormVersionFindUniqueOrThrowArgs} args - Arguments to find a FormVersion
     * @example
     * // Get one FormVersion
     * const formVersion = await prisma.formVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, FormVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormVersionClient<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormVersionFindFirstArgs} args - Arguments to find a FormVersion
     * @example
     * // Get one FormVersion
     * const formVersion = await prisma.formVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormVersionFindFirstArgs>(args?: SelectSubset<T, FormVersionFindFirstArgs<ExtArgs>>): Prisma__FormVersionClient<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormVersionFindFirstOrThrowArgs} args - Arguments to find a FormVersion
     * @example
     * // Get one FormVersion
     * const formVersion = await prisma.formVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, FormVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormVersionClient<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormVersions
     * const formVersions = await prisma.formVersion.findMany()
     * 
     * // Get first 10 FormVersions
     * const formVersions = await prisma.formVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formVersionWithIdOnly = await prisma.formVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormVersionFindManyArgs>(args?: SelectSubset<T, FormVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormVersion.
     * @param {FormVersionCreateArgs} args - Arguments to create a FormVersion.
     * @example
     * // Create one FormVersion
     * const FormVersion = await prisma.formVersion.create({
     *   data: {
     *     // ... data to create a FormVersion
     *   }
     * })
     * 
     */
    create<T extends FormVersionCreateArgs>(args: SelectSubset<T, FormVersionCreateArgs<ExtArgs>>): Prisma__FormVersionClient<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormVersions.
     * @param {FormVersionCreateManyArgs} args - Arguments to create many FormVersions.
     * @example
     * // Create many FormVersions
     * const formVersion = await prisma.formVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormVersionCreateManyArgs>(args?: SelectSubset<T, FormVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormVersions and returns the data saved in the database.
     * @param {FormVersionCreateManyAndReturnArgs} args - Arguments to create many FormVersions.
     * @example
     * // Create many FormVersions
     * const formVersion = await prisma.formVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormVersions and only return the `id`
     * const formVersionWithIdOnly = await prisma.formVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, FormVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormVersion.
     * @param {FormVersionDeleteArgs} args - Arguments to delete one FormVersion.
     * @example
     * // Delete one FormVersion
     * const FormVersion = await prisma.formVersion.delete({
     *   where: {
     *     // ... filter to delete one FormVersion
     *   }
     * })
     * 
     */
    delete<T extends FormVersionDeleteArgs>(args: SelectSubset<T, FormVersionDeleteArgs<ExtArgs>>): Prisma__FormVersionClient<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormVersion.
     * @param {FormVersionUpdateArgs} args - Arguments to update one FormVersion.
     * @example
     * // Update one FormVersion
     * const formVersion = await prisma.formVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormVersionUpdateArgs>(args: SelectSubset<T, FormVersionUpdateArgs<ExtArgs>>): Prisma__FormVersionClient<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormVersions.
     * @param {FormVersionDeleteManyArgs} args - Arguments to filter FormVersions to delete.
     * @example
     * // Delete a few FormVersions
     * const { count } = await prisma.formVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormVersionDeleteManyArgs>(args?: SelectSubset<T, FormVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormVersions
     * const formVersion = await prisma.formVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormVersionUpdateManyArgs>(args: SelectSubset<T, FormVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormVersions and returns the data updated in the database.
     * @param {FormVersionUpdateManyAndReturnArgs} args - Arguments to update many FormVersions.
     * @example
     * // Update many FormVersions
     * const formVersion = await prisma.formVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormVersions and only return the `id`
     * const formVersionWithIdOnly = await prisma.formVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, FormVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormVersion.
     * @param {FormVersionUpsertArgs} args - Arguments to update or create a FormVersion.
     * @example
     * // Update or create a FormVersion
     * const formVersion = await prisma.formVersion.upsert({
     *   create: {
     *     // ... data to create a FormVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormVersion we want to update
     *   }
     * })
     */
    upsert<T extends FormVersionUpsertArgs>(args: SelectSubset<T, FormVersionUpsertArgs<ExtArgs>>): Prisma__FormVersionClient<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormVersionCountArgs} args - Arguments to filter FormVersions to count.
     * @example
     * // Count the number of FormVersions
     * const count = await prisma.formVersion.count({
     *   where: {
     *     // ... the filter for the FormVersions we want to count
     *   }
     * })
    **/
    count<T extends FormVersionCountArgs>(
      args?: Subset<T, FormVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormVersionAggregateArgs>(args: Subset<T, FormVersionAggregateArgs>): Prisma.PrismaPromise<GetFormVersionAggregateType<T>>

    /**
     * Group by FormVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormVersionGroupByArgs['orderBy'] }
        : { orderBy?: FormVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormVersion model
   */
  readonly fields: FormVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emailNotification<T extends FormVersion$emailNotificationArgs<ExtArgs> = {}>(args?: Subset<T, FormVersion$emailNotificationArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    submissions<T extends FormVersion$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, FormVersion$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormVersion model
   */
  interface FormVersionFieldRefs {
    readonly id: FieldRef<"FormVersion", 'String'>
    readonly version: FieldRef<"FormVersion", 'Int'>
    readonly formId: FieldRef<"FormVersion", 'String'>
    readonly createdAt: FieldRef<"FormVersion", 'DateTime'>
    readonly title: FieldRef<"FormVersion", 'String'>
    readonly description: FieldRef<"FormVersion", 'String'>
    readonly blocks: FieldRef<"FormVersion", 'Json'>
    readonly published: FieldRef<"FormVersion", 'Boolean'>
    readonly submissionsPerIp: FieldRef<"FormVersion", 'Int'>
    readonly aiEnabled: FieldRef<"FormVersion", 'Boolean'>
    readonly aiPrompt: FieldRef<"FormVersion", 'String'>
    readonly aiResponseSchema: FieldRef<"FormVersion", 'Json'>
    readonly aiLanguage: FieldRef<"FormVersion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FormVersion findUnique
   */
  export type FormVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionInclude<ExtArgs> | null
    /**
     * Filter, which FormVersion to fetch.
     */
    where: FormVersionWhereUniqueInput
  }

  /**
   * FormVersion findUniqueOrThrow
   */
  export type FormVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionInclude<ExtArgs> | null
    /**
     * Filter, which FormVersion to fetch.
     */
    where: FormVersionWhereUniqueInput
  }

  /**
   * FormVersion findFirst
   */
  export type FormVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionInclude<ExtArgs> | null
    /**
     * Filter, which FormVersion to fetch.
     */
    where?: FormVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormVersions to fetch.
     */
    orderBy?: FormVersionOrderByWithRelationInput | FormVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormVersions.
     */
    cursor?: FormVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormVersions.
     */
    distinct?: FormVersionScalarFieldEnum | FormVersionScalarFieldEnum[]
  }

  /**
   * FormVersion findFirstOrThrow
   */
  export type FormVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionInclude<ExtArgs> | null
    /**
     * Filter, which FormVersion to fetch.
     */
    where?: FormVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormVersions to fetch.
     */
    orderBy?: FormVersionOrderByWithRelationInput | FormVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormVersions.
     */
    cursor?: FormVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormVersions.
     */
    distinct?: FormVersionScalarFieldEnum | FormVersionScalarFieldEnum[]
  }

  /**
   * FormVersion findMany
   */
  export type FormVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionInclude<ExtArgs> | null
    /**
     * Filter, which FormVersions to fetch.
     */
    where?: FormVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormVersions to fetch.
     */
    orderBy?: FormVersionOrderByWithRelationInput | FormVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormVersions.
     */
    cursor?: FormVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormVersions.
     */
    skip?: number
    distinct?: FormVersionScalarFieldEnum | FormVersionScalarFieldEnum[]
  }

  /**
   * FormVersion create
   */
  export type FormVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a FormVersion.
     */
    data: XOR<FormVersionCreateInput, FormVersionUncheckedCreateInput>
  }

  /**
   * FormVersion createMany
   */
  export type FormVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormVersions.
     */
    data: FormVersionCreateManyInput | FormVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormVersion createManyAndReturn
   */
  export type FormVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * The data used to create many FormVersions.
     */
    data: FormVersionCreateManyInput | FormVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormVersion update
   */
  export type FormVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a FormVersion.
     */
    data: XOR<FormVersionUpdateInput, FormVersionUncheckedUpdateInput>
    /**
     * Choose, which FormVersion to update.
     */
    where: FormVersionWhereUniqueInput
  }

  /**
   * FormVersion updateMany
   */
  export type FormVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormVersions.
     */
    data: XOR<FormVersionUpdateManyMutationInput, FormVersionUncheckedUpdateManyInput>
    /**
     * Filter which FormVersions to update
     */
    where?: FormVersionWhereInput
    /**
     * Limit how many FormVersions to update.
     */
    limit?: number
  }

  /**
   * FormVersion updateManyAndReturn
   */
  export type FormVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * The data used to update FormVersions.
     */
    data: XOR<FormVersionUpdateManyMutationInput, FormVersionUncheckedUpdateManyInput>
    /**
     * Filter which FormVersions to update
     */
    where?: FormVersionWhereInput
    /**
     * Limit how many FormVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormVersion upsert
   */
  export type FormVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the FormVersion to update in case it exists.
     */
    where: FormVersionWhereUniqueInput
    /**
     * In case the FormVersion found by the `where` argument doesn't exist, create a new FormVersion with this data.
     */
    create: XOR<FormVersionCreateInput, FormVersionUncheckedCreateInput>
    /**
     * In case the FormVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormVersionUpdateInput, FormVersionUncheckedUpdateInput>
  }

  /**
   * FormVersion delete
   */
  export type FormVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionInclude<ExtArgs> | null
    /**
     * Filter which FormVersion to delete.
     */
    where: FormVersionWhereUniqueInput
  }

  /**
   * FormVersion deleteMany
   */
  export type FormVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormVersions to delete
     */
    where?: FormVersionWhereInput
    /**
     * Limit how many FormVersions to delete.
     */
    limit?: number
  }

  /**
   * FormVersion.emailNotification
   */
  export type FormVersion$emailNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    where?: EmailNotificationWhereInput
  }

  /**
   * FormVersion.submissions
   */
  export type FormVersion$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * FormVersion without action
   */
  export type FormVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormVersion
     */
    select?: FormVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormVersion
     */
    omit?: FormVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormVersionInclude<ExtArgs> | null
  }


  /**
   * Model EmailNotification
   */

  export type AggregateEmailNotification = {
    _count: EmailNotificationCountAggregateOutputType | null
    _min: EmailNotificationMinAggregateOutputType | null
    _max: EmailNotificationMaxAggregateOutputType | null
  }

  export type EmailNotificationMinAggregateOutputType = {
    id: string | null
    formVersionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    prompt: string | null
    conditionPrompt: string | null
    conditionExpectedValue: string | null
  }

  export type EmailNotificationMaxAggregateOutputType = {
    id: string | null
    formVersionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    prompt: string | null
    conditionPrompt: string | null
    conditionExpectedValue: string | null
  }

  export type EmailNotificationCountAggregateOutputType = {
    id: number
    formVersionId: number
    createdAt: number
    updatedAt: number
    recipients: number
    prompt: number
    conditionPrompt: number
    conditionExpectedValue: number
    _all: number
  }


  export type EmailNotificationMinAggregateInputType = {
    id?: true
    formVersionId?: true
    createdAt?: true
    updatedAt?: true
    prompt?: true
    conditionPrompt?: true
    conditionExpectedValue?: true
  }

  export type EmailNotificationMaxAggregateInputType = {
    id?: true
    formVersionId?: true
    createdAt?: true
    updatedAt?: true
    prompt?: true
    conditionPrompt?: true
    conditionExpectedValue?: true
  }

  export type EmailNotificationCountAggregateInputType = {
    id?: true
    formVersionId?: true
    createdAt?: true
    updatedAt?: true
    recipients?: true
    prompt?: true
    conditionPrompt?: true
    conditionExpectedValue?: true
    _all?: true
  }

  export type EmailNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailNotification to aggregate.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailNotifications
    **/
    _count?: true | EmailNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailNotificationMaxAggregateInputType
  }

  export type GetEmailNotificationAggregateType<T extends EmailNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailNotification[P]>
      : GetScalarType<T[P], AggregateEmailNotification[P]>
  }




  export type EmailNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailNotificationWhereInput
    orderBy?: EmailNotificationOrderByWithAggregationInput | EmailNotificationOrderByWithAggregationInput[]
    by: EmailNotificationScalarFieldEnum[] | EmailNotificationScalarFieldEnum
    having?: EmailNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailNotificationCountAggregateInputType | true
    _min?: EmailNotificationMinAggregateInputType
    _max?: EmailNotificationMaxAggregateInputType
  }

  export type EmailNotificationGroupByOutputType = {
    id: string
    formVersionId: string
    createdAt: Date
    updatedAt: Date
    recipients: string[]
    prompt: string | null
    conditionPrompt: string | null
    conditionExpectedValue: string | null
    _count: EmailNotificationCountAggregateOutputType | null
    _min: EmailNotificationMinAggregateOutputType | null
    _max: EmailNotificationMaxAggregateOutputType | null
  }

  type GetEmailNotificationGroupByPayload<T extends EmailNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], EmailNotificationGroupByOutputType[P]>
        }
      >
    >


  export type EmailNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formVersionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipients?: boolean
    prompt?: boolean
    conditionPrompt?: boolean
    conditionExpectedValue?: boolean
    formVersion?: boolean | FormVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formVersionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipients?: boolean
    prompt?: boolean
    conditionPrompt?: boolean
    conditionExpectedValue?: boolean
    formVersion?: boolean | FormVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formVersionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipients?: boolean
    prompt?: boolean
    conditionPrompt?: boolean
    conditionExpectedValue?: boolean
    formVersion?: boolean | FormVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectScalar = {
    id?: boolean
    formVersionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipients?: boolean
    prompt?: boolean
    conditionPrompt?: boolean
    conditionExpectedValue?: boolean
  }

  export type EmailNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formVersionId" | "createdAt" | "updatedAt" | "recipients" | "prompt" | "conditionPrompt" | "conditionExpectedValue", ExtArgs["result"]["emailNotification"]>
  export type EmailNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formVersion?: boolean | FormVersionDefaultArgs<ExtArgs>
  }
  export type EmailNotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formVersion?: boolean | FormVersionDefaultArgs<ExtArgs>
  }
  export type EmailNotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formVersion?: boolean | FormVersionDefaultArgs<ExtArgs>
  }

  export type $EmailNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailNotification"
    objects: {
      formVersion: Prisma.$FormVersionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formVersionId: string
      createdAt: Date
      updatedAt: Date
      recipients: string[]
      prompt: string | null
      conditionPrompt: string | null
      conditionExpectedValue: string | null
    }, ExtArgs["result"]["emailNotification"]>
    composites: {}
  }

  type EmailNotificationGetPayload<S extends boolean | null | undefined | EmailNotificationDefaultArgs> = $Result.GetResult<Prisma.$EmailNotificationPayload, S>

  type EmailNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailNotificationCountAggregateInputType | true
    }

  export interface EmailNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailNotification'], meta: { name: 'EmailNotification' } }
    /**
     * Find zero or one EmailNotification that matches the filter.
     * @param {EmailNotificationFindUniqueArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailNotificationFindUniqueArgs>(args: SelectSubset<T, EmailNotificationFindUniqueArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailNotificationFindUniqueOrThrowArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindFirstArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailNotificationFindFirstArgs>(args?: SelectSubset<T, EmailNotificationFindFirstArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindFirstOrThrowArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailNotifications
     * const emailNotifications = await prisma.emailNotification.findMany()
     * 
     * // Get first 10 EmailNotifications
     * const emailNotifications = await prisma.emailNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailNotificationFindManyArgs>(args?: SelectSubset<T, EmailNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailNotification.
     * @param {EmailNotificationCreateArgs} args - Arguments to create a EmailNotification.
     * @example
     * // Create one EmailNotification
     * const EmailNotification = await prisma.emailNotification.create({
     *   data: {
     *     // ... data to create a EmailNotification
     *   }
     * })
     * 
     */
    create<T extends EmailNotificationCreateArgs>(args: SelectSubset<T, EmailNotificationCreateArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailNotifications.
     * @param {EmailNotificationCreateManyArgs} args - Arguments to create many EmailNotifications.
     * @example
     * // Create many EmailNotifications
     * const emailNotification = await prisma.emailNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailNotificationCreateManyArgs>(args?: SelectSubset<T, EmailNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailNotifications and returns the data saved in the database.
     * @param {EmailNotificationCreateManyAndReturnArgs} args - Arguments to create many EmailNotifications.
     * @example
     * // Create many EmailNotifications
     * const emailNotification = await prisma.emailNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailNotifications and only return the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailNotification.
     * @param {EmailNotificationDeleteArgs} args - Arguments to delete one EmailNotification.
     * @example
     * // Delete one EmailNotification
     * const EmailNotification = await prisma.emailNotification.delete({
     *   where: {
     *     // ... filter to delete one EmailNotification
     *   }
     * })
     * 
     */
    delete<T extends EmailNotificationDeleteArgs>(args: SelectSubset<T, EmailNotificationDeleteArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailNotification.
     * @param {EmailNotificationUpdateArgs} args - Arguments to update one EmailNotification.
     * @example
     * // Update one EmailNotification
     * const emailNotification = await prisma.emailNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailNotificationUpdateArgs>(args: SelectSubset<T, EmailNotificationUpdateArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailNotifications.
     * @param {EmailNotificationDeleteManyArgs} args - Arguments to filter EmailNotifications to delete.
     * @example
     * // Delete a few EmailNotifications
     * const { count } = await prisma.emailNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailNotificationDeleteManyArgs>(args?: SelectSubset<T, EmailNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailNotifications
     * const emailNotification = await prisma.emailNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailNotificationUpdateManyArgs>(args: SelectSubset<T, EmailNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailNotifications and returns the data updated in the database.
     * @param {EmailNotificationUpdateManyAndReturnArgs} args - Arguments to update many EmailNotifications.
     * @example
     * // Update many EmailNotifications
     * const emailNotification = await prisma.emailNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailNotifications and only return the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailNotification.
     * @param {EmailNotificationUpsertArgs} args - Arguments to update or create a EmailNotification.
     * @example
     * // Update or create a EmailNotification
     * const emailNotification = await prisma.emailNotification.upsert({
     *   create: {
     *     // ... data to create a EmailNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailNotification we want to update
     *   }
     * })
     */
    upsert<T extends EmailNotificationUpsertArgs>(args: SelectSubset<T, EmailNotificationUpsertArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationCountArgs} args - Arguments to filter EmailNotifications to count.
     * @example
     * // Count the number of EmailNotifications
     * const count = await prisma.emailNotification.count({
     *   where: {
     *     // ... the filter for the EmailNotifications we want to count
     *   }
     * })
    **/
    count<T extends EmailNotificationCountArgs>(
      args?: Subset<T, EmailNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailNotificationAggregateArgs>(args: Subset<T, EmailNotificationAggregateArgs>): Prisma.PrismaPromise<GetEmailNotificationAggregateType<T>>

    /**
     * Group by EmailNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailNotificationGroupByArgs['orderBy'] }
        : { orderBy?: EmailNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailNotification model
   */
  readonly fields: EmailNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formVersion<T extends FormVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormVersionDefaultArgs<ExtArgs>>): Prisma__FormVersionClient<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailNotification model
   */
  interface EmailNotificationFieldRefs {
    readonly id: FieldRef<"EmailNotification", 'String'>
    readonly formVersionId: FieldRef<"EmailNotification", 'String'>
    readonly createdAt: FieldRef<"EmailNotification", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailNotification", 'DateTime'>
    readonly recipients: FieldRef<"EmailNotification", 'String[]'>
    readonly prompt: FieldRef<"EmailNotification", 'String'>
    readonly conditionPrompt: FieldRef<"EmailNotification", 'String'>
    readonly conditionExpectedValue: FieldRef<"EmailNotification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailNotification findUnique
   */
  export type EmailNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification findUniqueOrThrow
   */
  export type EmailNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification findFirst
   */
  export type EmailNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailNotifications.
     */
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification findFirstOrThrow
   */
  export type EmailNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailNotifications.
     */
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification findMany
   */
  export type EmailNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotifications to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification create
   */
  export type EmailNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailNotification.
     */
    data: XOR<EmailNotificationCreateInput, EmailNotificationUncheckedCreateInput>
  }

  /**
   * EmailNotification createMany
   */
  export type EmailNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailNotifications.
     */
    data: EmailNotificationCreateManyInput | EmailNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailNotification createManyAndReturn
   */
  export type EmailNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many EmailNotifications.
     */
    data: EmailNotificationCreateManyInput | EmailNotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailNotification update
   */
  export type EmailNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailNotification.
     */
    data: XOR<EmailNotificationUpdateInput, EmailNotificationUncheckedUpdateInput>
    /**
     * Choose, which EmailNotification to update.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification updateMany
   */
  export type EmailNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailNotifications.
     */
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailNotifications to update
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to update.
     */
    limit?: number
  }

  /**
   * EmailNotification updateManyAndReturn
   */
  export type EmailNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data used to update EmailNotifications.
     */
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailNotifications to update
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailNotification upsert
   */
  export type EmailNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailNotification to update in case it exists.
     */
    where: EmailNotificationWhereUniqueInput
    /**
     * In case the EmailNotification found by the `where` argument doesn't exist, create a new EmailNotification with this data.
     */
    create: XOR<EmailNotificationCreateInput, EmailNotificationUncheckedCreateInput>
    /**
     * In case the EmailNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailNotificationUpdateInput, EmailNotificationUncheckedUpdateInput>
  }

  /**
   * EmailNotification delete
   */
  export type EmailNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter which EmailNotification to delete.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification deleteMany
   */
  export type EmailNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailNotifications to delete
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to delete.
     */
    limit?: number
  }

  /**
   * EmailNotification without action
   */
  export type EmailNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    formId: string | null
    formVersionId: string | null
    ipAddress: string | null
    aiAnalysisStatus: $Enums.AIAnalysisStatus | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    formId: string | null
    formVersionId: string | null
    ipAddress: string | null
    aiAnalysisStatus: $Enums.AIAnalysisStatus | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    createdAt: number
    formId: number
    formVersionId: number
    data: number
    ipAddress: number
    aiAnalysis: number
    aiAnalysisStatus: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    createdAt?: true
    formId?: true
    formVersionId?: true
    ipAddress?: true
    aiAnalysisStatus?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    formId?: true
    formVersionId?: true
    ipAddress?: true
    aiAnalysisStatus?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    createdAt?: true
    formId?: true
    formVersionId?: true
    data?: true
    ipAddress?: true
    aiAnalysis?: true
    aiAnalysisStatus?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    createdAt: Date
    formId: string
    formVersionId: string
    data: JsonValue
    ipAddress: string | null
    aiAnalysis: JsonValue | null
    aiAnalysisStatus: $Enums.AIAnalysisStatus | null
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    formId?: boolean
    formVersionId?: boolean
    data?: boolean
    ipAddress?: boolean
    aiAnalysis?: boolean
    aiAnalysisStatus?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
    formVersion?: boolean | FormVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    formId?: boolean
    formVersionId?: boolean
    data?: boolean
    ipAddress?: boolean
    aiAnalysis?: boolean
    aiAnalysisStatus?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
    formVersion?: boolean | FormVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    formId?: boolean
    formVersionId?: boolean
    data?: boolean
    ipAddress?: boolean
    aiAnalysis?: boolean
    aiAnalysisStatus?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
    formVersion?: boolean | FormVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    formId?: boolean
    formVersionId?: boolean
    data?: boolean
    ipAddress?: boolean
    aiAnalysis?: boolean
    aiAnalysisStatus?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "formId" | "formVersionId" | "data" | "ipAddress" | "aiAnalysis" | "aiAnalysisStatus", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
    formVersion?: boolean | FormVersionDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
    formVersion?: boolean | FormVersionDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
    formVersion?: boolean | FormVersionDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      form: Prisma.$FormPayload<ExtArgs>
      formVersion: Prisma.$FormVersionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      formId: string
      formVersionId: string
      data: Prisma.JsonValue
      ipAddress: string | null
      aiAnalysis: Prisma.JsonValue | null
      aiAnalysisStatus: $Enums.AIAnalysisStatus | null
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formVersion<T extends FormVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormVersionDefaultArgs<ExtArgs>>): Prisma__FormVersionClient<$Result.GetResult<Prisma.$FormVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly formId: FieldRef<"Submission", 'String'>
    readonly formVersionId: FieldRef<"Submission", 'String'>
    readonly data: FieldRef<"Submission", 'Json'>
    readonly ipAddress: FieldRef<"Submission", 'String'>
    readonly aiAnalysis: FieldRef<"Submission", 'Json'>
    readonly aiAnalysisStatus: FieldRef<"Submission", 'AIAnalysisStatus'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FormScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId',
    latestVersion: 'latestVersion',
    customUrl: 'customUrl'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const FormVersionScalarFieldEnum: {
    id: 'id',
    version: 'version',
    formId: 'formId',
    createdAt: 'createdAt',
    title: 'title',
    description: 'description',
    blocks: 'blocks',
    published: 'published',
    submissionsPerIp: 'submissionsPerIp',
    aiEnabled: 'aiEnabled',
    aiPrompt: 'aiPrompt',
    aiResponseSchema: 'aiResponseSchema',
    aiLanguage: 'aiLanguage'
  };

  export type FormVersionScalarFieldEnum = (typeof FormVersionScalarFieldEnum)[keyof typeof FormVersionScalarFieldEnum]


  export const EmailNotificationScalarFieldEnum: {
    id: 'id',
    formVersionId: 'formVersionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    recipients: 'recipients',
    prompt: 'prompt',
    conditionPrompt: 'conditionPrompt',
    conditionExpectedValue: 'conditionExpectedValue'
  };

  export type EmailNotificationScalarFieldEnum = (typeof EmailNotificationScalarFieldEnum)[keyof typeof EmailNotificationScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    formId: 'formId',
    formVersionId: 'formVersionId',
    data: 'data',
    ipAddress: 'ipAddress',
    aiAnalysis: 'aiAnalysis',
    aiAnalysisStatus: 'aiAnalysisStatus'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AIAnalysisStatus'
   */
  export type EnumAIAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIAnalysisStatus'>
    


  /**
   * Reference to a field of type 'AIAnalysisStatus[]'
   */
  export type ListEnumAIAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIAnalysisStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    forms?: FormListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    forms?: FormOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    forms?: FormListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FormWhereInput = {
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    id?: StringFilter<"Form"> | string
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    authorId?: StringFilter<"Form"> | string
    latestVersion?: IntFilter<"Form"> | number
    customUrl?: StringNullableFilter<"Form"> | string | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    versions?: FormVersionListRelationFilter
    submissions?: SubmissionListRelationFilter
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    latestVersion?: SortOrder
    customUrl?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    versions?: FormVersionOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type FormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    customUrl?: string
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    authorId?: StringFilter<"Form"> | string
    latestVersion?: IntFilter<"Form"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    versions?: FormVersionListRelationFilter
    submissions?: SubmissionListRelationFilter
  }, "id" | "customUrl">

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    latestVersion?: SortOrder
    customUrl?: SortOrderInput | SortOrder
    _count?: FormCountOrderByAggregateInput
    _avg?: FormAvgOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
    _sum?: FormSumOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    OR?: FormScalarWhereWithAggregatesInput[]
    NOT?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Form"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
    authorId?: StringWithAggregatesFilter<"Form"> | string
    latestVersion?: IntWithAggregatesFilter<"Form"> | number
    customUrl?: StringNullableWithAggregatesFilter<"Form"> | string | null
  }

  export type FormVersionWhereInput = {
    AND?: FormVersionWhereInput | FormVersionWhereInput[]
    OR?: FormVersionWhereInput[]
    NOT?: FormVersionWhereInput | FormVersionWhereInput[]
    id?: StringFilter<"FormVersion"> | string
    version?: IntFilter<"FormVersion"> | number
    formId?: StringFilter<"FormVersion"> | string
    createdAt?: DateTimeFilter<"FormVersion"> | Date | string
    title?: StringFilter<"FormVersion"> | string
    description?: StringNullableFilter<"FormVersion"> | string | null
    blocks?: JsonFilter<"FormVersion">
    published?: BoolFilter<"FormVersion"> | boolean
    submissionsPerIp?: IntNullableFilter<"FormVersion"> | number | null
    aiEnabled?: BoolFilter<"FormVersion"> | boolean
    aiPrompt?: StringNullableFilter<"FormVersion"> | string | null
    aiResponseSchema?: JsonNullableFilter<"FormVersion">
    aiLanguage?: StringNullableFilter<"FormVersion"> | string | null
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
    emailNotification?: XOR<EmailNotificationNullableScalarRelationFilter, EmailNotificationWhereInput> | null
    submissions?: SubmissionListRelationFilter
  }

  export type FormVersionOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    blocks?: SortOrder
    published?: SortOrder
    submissionsPerIp?: SortOrderInput | SortOrder
    aiEnabled?: SortOrder
    aiPrompt?: SortOrderInput | SortOrder
    aiResponseSchema?: SortOrderInput | SortOrder
    aiLanguage?: SortOrderInput | SortOrder
    form?: FormOrderByWithRelationInput
    emailNotification?: EmailNotificationOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type FormVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    formId_version?: FormVersionFormIdVersionCompoundUniqueInput
    AND?: FormVersionWhereInput | FormVersionWhereInput[]
    OR?: FormVersionWhereInput[]
    NOT?: FormVersionWhereInput | FormVersionWhereInput[]
    version?: IntFilter<"FormVersion"> | number
    formId?: StringFilter<"FormVersion"> | string
    createdAt?: DateTimeFilter<"FormVersion"> | Date | string
    title?: StringFilter<"FormVersion"> | string
    description?: StringNullableFilter<"FormVersion"> | string | null
    blocks?: JsonFilter<"FormVersion">
    published?: BoolFilter<"FormVersion"> | boolean
    submissionsPerIp?: IntNullableFilter<"FormVersion"> | number | null
    aiEnabled?: BoolFilter<"FormVersion"> | boolean
    aiPrompt?: StringNullableFilter<"FormVersion"> | string | null
    aiResponseSchema?: JsonNullableFilter<"FormVersion">
    aiLanguage?: StringNullableFilter<"FormVersion"> | string | null
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
    emailNotification?: XOR<EmailNotificationNullableScalarRelationFilter, EmailNotificationWhereInput> | null
    submissions?: SubmissionListRelationFilter
  }, "id" | "formId_version">

  export type FormVersionOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    blocks?: SortOrder
    published?: SortOrder
    submissionsPerIp?: SortOrderInput | SortOrder
    aiEnabled?: SortOrder
    aiPrompt?: SortOrderInput | SortOrder
    aiResponseSchema?: SortOrderInput | SortOrder
    aiLanguage?: SortOrderInput | SortOrder
    _count?: FormVersionCountOrderByAggregateInput
    _avg?: FormVersionAvgOrderByAggregateInput
    _max?: FormVersionMaxOrderByAggregateInput
    _min?: FormVersionMinOrderByAggregateInput
    _sum?: FormVersionSumOrderByAggregateInput
  }

  export type FormVersionScalarWhereWithAggregatesInput = {
    AND?: FormVersionScalarWhereWithAggregatesInput | FormVersionScalarWhereWithAggregatesInput[]
    OR?: FormVersionScalarWhereWithAggregatesInput[]
    NOT?: FormVersionScalarWhereWithAggregatesInput | FormVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormVersion"> | string
    version?: IntWithAggregatesFilter<"FormVersion"> | number
    formId?: StringWithAggregatesFilter<"FormVersion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FormVersion"> | Date | string
    title?: StringWithAggregatesFilter<"FormVersion"> | string
    description?: StringNullableWithAggregatesFilter<"FormVersion"> | string | null
    blocks?: JsonWithAggregatesFilter<"FormVersion">
    published?: BoolWithAggregatesFilter<"FormVersion"> | boolean
    submissionsPerIp?: IntNullableWithAggregatesFilter<"FormVersion"> | number | null
    aiEnabled?: BoolWithAggregatesFilter<"FormVersion"> | boolean
    aiPrompt?: StringNullableWithAggregatesFilter<"FormVersion"> | string | null
    aiResponseSchema?: JsonNullableWithAggregatesFilter<"FormVersion">
    aiLanguage?: StringNullableWithAggregatesFilter<"FormVersion"> | string | null
  }

  export type EmailNotificationWhereInput = {
    AND?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    OR?: EmailNotificationWhereInput[]
    NOT?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    id?: StringFilter<"EmailNotification"> | string
    formVersionId?: StringFilter<"EmailNotification"> | string
    createdAt?: DateTimeFilter<"EmailNotification"> | Date | string
    updatedAt?: DateTimeFilter<"EmailNotification"> | Date | string
    recipients?: StringNullableListFilter<"EmailNotification">
    prompt?: StringNullableFilter<"EmailNotification"> | string | null
    conditionPrompt?: StringNullableFilter<"EmailNotification"> | string | null
    conditionExpectedValue?: StringNullableFilter<"EmailNotification"> | string | null
    formVersion?: XOR<FormVersionScalarRelationFilter, FormVersionWhereInput>
  }

  export type EmailNotificationOrderByWithRelationInput = {
    id?: SortOrder
    formVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipients?: SortOrder
    prompt?: SortOrderInput | SortOrder
    conditionPrompt?: SortOrderInput | SortOrder
    conditionExpectedValue?: SortOrderInput | SortOrder
    formVersion?: FormVersionOrderByWithRelationInput
  }

  export type EmailNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    formVersionId?: string
    AND?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    OR?: EmailNotificationWhereInput[]
    NOT?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    createdAt?: DateTimeFilter<"EmailNotification"> | Date | string
    updatedAt?: DateTimeFilter<"EmailNotification"> | Date | string
    recipients?: StringNullableListFilter<"EmailNotification">
    prompt?: StringNullableFilter<"EmailNotification"> | string | null
    conditionPrompt?: StringNullableFilter<"EmailNotification"> | string | null
    conditionExpectedValue?: StringNullableFilter<"EmailNotification"> | string | null
    formVersion?: XOR<FormVersionScalarRelationFilter, FormVersionWhereInput>
  }, "id" | "formVersionId">

  export type EmailNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    formVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipients?: SortOrder
    prompt?: SortOrderInput | SortOrder
    conditionPrompt?: SortOrderInput | SortOrder
    conditionExpectedValue?: SortOrderInput | SortOrder
    _count?: EmailNotificationCountOrderByAggregateInput
    _max?: EmailNotificationMaxOrderByAggregateInput
    _min?: EmailNotificationMinOrderByAggregateInput
  }

  export type EmailNotificationScalarWhereWithAggregatesInput = {
    AND?: EmailNotificationScalarWhereWithAggregatesInput | EmailNotificationScalarWhereWithAggregatesInput[]
    OR?: EmailNotificationScalarWhereWithAggregatesInput[]
    NOT?: EmailNotificationScalarWhereWithAggregatesInput | EmailNotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailNotification"> | string
    formVersionId?: StringWithAggregatesFilter<"EmailNotification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailNotification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailNotification"> | Date | string
    recipients?: StringNullableListFilter<"EmailNotification">
    prompt?: StringNullableWithAggregatesFilter<"EmailNotification"> | string | null
    conditionPrompt?: StringNullableWithAggregatesFilter<"EmailNotification"> | string | null
    conditionExpectedValue?: StringNullableWithAggregatesFilter<"EmailNotification"> | string | null
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    formId?: StringFilter<"Submission"> | string
    formVersionId?: StringFilter<"Submission"> | string
    data?: JsonFilter<"Submission">
    ipAddress?: StringNullableFilter<"Submission"> | string | null
    aiAnalysis?: JsonNullableFilter<"Submission">
    aiAnalysisStatus?: EnumAIAnalysisStatusNullableFilter<"Submission"> | $Enums.AIAnalysisStatus | null
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
    formVersion?: XOR<FormVersionScalarRelationFilter, FormVersionWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    formId?: SortOrder
    formVersionId?: SortOrder
    data?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    aiAnalysis?: SortOrderInput | SortOrder
    aiAnalysisStatus?: SortOrderInput | SortOrder
    form?: FormOrderByWithRelationInput
    formVersion?: FormVersionOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    formId?: StringFilter<"Submission"> | string
    formVersionId?: StringFilter<"Submission"> | string
    data?: JsonFilter<"Submission">
    ipAddress?: StringNullableFilter<"Submission"> | string | null
    aiAnalysis?: JsonNullableFilter<"Submission">
    aiAnalysisStatus?: EnumAIAnalysisStatusNullableFilter<"Submission"> | $Enums.AIAnalysisStatus | null
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
    formVersion?: XOR<FormVersionScalarRelationFilter, FormVersionWhereInput>
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    formId?: SortOrder
    formVersionId?: SortOrder
    data?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    aiAnalysis?: SortOrderInput | SortOrder
    aiAnalysisStatus?: SortOrderInput | SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    formId?: StringWithAggregatesFilter<"Submission"> | string
    formVersionId?: StringWithAggregatesFilter<"Submission"> | string
    data?: JsonWithAggregatesFilter<"Submission">
    ipAddress?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    aiAnalysis?: JsonNullableWithAggregatesFilter<"Submission">
    aiAnalysisStatus?: EnumAIAnalysisStatusNullableWithAggregatesFilter<"Submission"> | $Enums.AIAnalysisStatus | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    forms?: FormCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    forms?: FormUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forms?: FormUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forms?: FormUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latestVersion?: number
    customUrl?: string | null
    author: UserCreateNestedOneWithoutFormsInput
    versions?: FormVersionCreateNestedManyWithoutFormInput
    submissions?: SubmissionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    latestVersion?: number
    customUrl?: string | null
    versions?: FormVersionUncheckedCreateNestedManyWithoutFormInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestVersion?: IntFieldUpdateOperationsInput | number
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutFormsNestedInput
    versions?: FormVersionUpdateManyWithoutFormNestedInput
    submissions?: SubmissionUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    latestVersion?: IntFieldUpdateOperationsInput | number
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: FormVersionUncheckedUpdateManyWithoutFormNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    latestVersion?: number
    customUrl?: string | null
  }

  export type FormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestVersion?: IntFieldUpdateOperationsInput | number
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    latestVersion?: IntFieldUpdateOperationsInput | number
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormVersionCreateInput = {
    id?: string
    version: number
    createdAt?: Date | string
    title: string
    description?: string | null
    blocks: JsonNullValueInput | InputJsonValue
    published?: boolean
    submissionsPerIp?: number | null
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: string | null
    form: FormCreateNestedOneWithoutVersionsInput
    emailNotification?: EmailNotificationCreateNestedOneWithoutFormVersionInput
    submissions?: SubmissionCreateNestedManyWithoutFormVersionInput
  }

  export type FormVersionUncheckedCreateInput = {
    id?: string
    version: number
    formId: string
    createdAt?: Date | string
    title: string
    description?: string | null
    blocks: JsonNullValueInput | InputJsonValue
    published?: boolean
    submissionsPerIp?: number | null
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: string | null
    emailNotification?: EmailNotificationUncheckedCreateNestedOneWithoutFormVersionInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutFormVersionInput
  }

  export type FormVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    submissionsPerIp?: NullableIntFieldUpdateOperationsInput | number | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUpdateOneRequiredWithoutVersionsNestedInput
    emailNotification?: EmailNotificationUpdateOneWithoutFormVersionNestedInput
    submissions?: SubmissionUpdateManyWithoutFormVersionNestedInput
  }

  export type FormVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    formId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    submissionsPerIp?: NullableIntFieldUpdateOperationsInput | number | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: EmailNotificationUncheckedUpdateOneWithoutFormVersionNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutFormVersionNestedInput
  }

  export type FormVersionCreateManyInput = {
    id?: string
    version: number
    formId: string
    createdAt?: Date | string
    title: string
    description?: string | null
    blocks: JsonNullValueInput | InputJsonValue
    published?: boolean
    submissionsPerIp?: number | null
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: string | null
  }

  export type FormVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    submissionsPerIp?: NullableIntFieldUpdateOperationsInput | number | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    formId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    submissionsPerIp?: NullableIntFieldUpdateOperationsInput | number | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailNotificationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: EmailNotificationCreaterecipientsInput | string[]
    prompt?: string | null
    conditionPrompt?: string | null
    conditionExpectedValue?: string | null
    formVersion: FormVersionCreateNestedOneWithoutEmailNotificationInput
  }

  export type EmailNotificationUncheckedCreateInput = {
    id?: string
    formVersionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: EmailNotificationCreaterecipientsInput | string[]
    prompt?: string | null
    conditionPrompt?: string | null
    conditionExpectedValue?: string | null
  }

  export type EmailNotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: EmailNotificationUpdaterecipientsInput | string[]
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    conditionPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    conditionExpectedValue?: NullableStringFieldUpdateOperationsInput | string | null
    formVersion?: FormVersionUpdateOneRequiredWithoutEmailNotificationNestedInput
  }

  export type EmailNotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formVersionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: EmailNotificationUpdaterecipientsInput | string[]
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    conditionPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    conditionExpectedValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailNotificationCreateManyInput = {
    id?: string
    formVersionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: EmailNotificationCreaterecipientsInput | string[]
    prompt?: string | null
    conditionPrompt?: string | null
    conditionExpectedValue?: string | null
  }

  export type EmailNotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: EmailNotificationUpdaterecipientsInput | string[]
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    conditionPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    conditionExpectedValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailNotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formVersionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: EmailNotificationUpdaterecipientsInput | string[]
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    conditionPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    conditionExpectedValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionCreateInput = {
    id?: string
    createdAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: $Enums.AIAnalysisStatus | null
    form: FormCreateNestedOneWithoutSubmissionsInput
    formVersion: FormVersionCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    formId: string
    formVersionId: string
    data: JsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: $Enums.AIAnalysisStatus | null
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: NullableEnumAIAnalysisStatusFieldUpdateOperationsInput | $Enums.AIAnalysisStatus | null
    form?: FormUpdateOneRequiredWithoutSubmissionsNestedInput
    formVersion?: FormVersionUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formId?: StringFieldUpdateOperationsInput | string
    formVersionId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: NullableEnumAIAnalysisStatusFieldUpdateOperationsInput | $Enums.AIAnalysisStatus | null
  }

  export type SubmissionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    formId: string
    formVersionId: string
    data: JsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: $Enums.AIAnalysisStatus | null
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: NullableEnumAIAnalysisStatusFieldUpdateOperationsInput | $Enums.AIAnalysisStatus | null
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formId?: StringFieldUpdateOperationsInput | string
    formVersionId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: NullableEnumAIAnalysisStatusFieldUpdateOperationsInput | $Enums.AIAnalysisStatus | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FormListRelationFilter = {
    every?: FormWhereInput
    some?: FormWhereInput
    none?: FormWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FormVersionListRelationFilter = {
    every?: FormVersionWhereInput
    some?: FormVersionWhereInput
    none?: FormVersionWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type FormVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    latestVersion?: SortOrder
    customUrl?: SortOrder
  }

  export type FormAvgOrderByAggregateInput = {
    latestVersion?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    latestVersion?: SortOrder
    customUrl?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    latestVersion?: SortOrder
    customUrl?: SortOrder
  }

  export type FormSumOrderByAggregateInput = {
    latestVersion?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FormScalarRelationFilter = {
    is?: FormWhereInput
    isNot?: FormWhereInput
  }

  export type EmailNotificationNullableScalarRelationFilter = {
    is?: EmailNotificationWhereInput | null
    isNot?: EmailNotificationWhereInput | null
  }

  export type FormVersionFormIdVersionCompoundUniqueInput = {
    formId: string
    version: number
  }

  export type FormVersionCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    blocks?: SortOrder
    published?: SortOrder
    submissionsPerIp?: SortOrder
    aiEnabled?: SortOrder
    aiPrompt?: SortOrder
    aiResponseSchema?: SortOrder
    aiLanguage?: SortOrder
  }

  export type FormVersionAvgOrderByAggregateInput = {
    version?: SortOrder
    submissionsPerIp?: SortOrder
  }

  export type FormVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    published?: SortOrder
    submissionsPerIp?: SortOrder
    aiEnabled?: SortOrder
    aiPrompt?: SortOrder
    aiLanguage?: SortOrder
  }

  export type FormVersionMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    published?: SortOrder
    submissionsPerIp?: SortOrder
    aiEnabled?: SortOrder
    aiPrompt?: SortOrder
    aiLanguage?: SortOrder
  }

  export type FormVersionSumOrderByAggregateInput = {
    version?: SortOrder
    submissionsPerIp?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FormVersionScalarRelationFilter = {
    is?: FormVersionWhereInput
    isNot?: FormVersionWhereInput
  }

  export type EmailNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    formVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipients?: SortOrder
    prompt?: SortOrder
    conditionPrompt?: SortOrder
    conditionExpectedValue?: SortOrder
  }

  export type EmailNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    formVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prompt?: SortOrder
    conditionPrompt?: SortOrder
    conditionExpectedValue?: SortOrder
  }

  export type EmailNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    formVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prompt?: SortOrder
    conditionPrompt?: SortOrder
    conditionExpectedValue?: SortOrder
  }

  export type EnumAIAnalysisStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AIAnalysisStatus | EnumAIAnalysisStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIAnalysisStatus[] | ListEnumAIAnalysisStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AIAnalysisStatus[] | ListEnumAIAnalysisStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAIAnalysisStatusNullableFilter<$PrismaModel> | $Enums.AIAnalysisStatus | null
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    formId?: SortOrder
    formVersionId?: SortOrder
    data?: SortOrder
    ipAddress?: SortOrder
    aiAnalysis?: SortOrder
    aiAnalysisStatus?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    formId?: SortOrder
    formVersionId?: SortOrder
    ipAddress?: SortOrder
    aiAnalysisStatus?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    formId?: SortOrder
    formVersionId?: SortOrder
    ipAddress?: SortOrder
    aiAnalysisStatus?: SortOrder
  }

  export type EnumAIAnalysisStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIAnalysisStatus | EnumAIAnalysisStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIAnalysisStatus[] | ListEnumAIAnalysisStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AIAnalysisStatus[] | ListEnumAIAnalysisStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAIAnalysisStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.AIAnalysisStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAIAnalysisStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumAIAnalysisStatusNullableFilter<$PrismaModel>
  }

  export type FormCreateNestedManyWithoutAuthorInput = {
    create?: XOR<FormCreateWithoutAuthorInput, FormUncheckedCreateWithoutAuthorInput> | FormCreateWithoutAuthorInput[] | FormUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: FormCreateOrConnectWithoutAuthorInput | FormCreateOrConnectWithoutAuthorInput[]
    createMany?: FormCreateManyAuthorInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type FormUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<FormCreateWithoutAuthorInput, FormUncheckedCreateWithoutAuthorInput> | FormCreateWithoutAuthorInput[] | FormUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: FormCreateOrConnectWithoutAuthorInput | FormCreateOrConnectWithoutAuthorInput[]
    createMany?: FormCreateManyAuthorInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FormUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<FormCreateWithoutAuthorInput, FormUncheckedCreateWithoutAuthorInput> | FormCreateWithoutAuthorInput[] | FormUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: FormCreateOrConnectWithoutAuthorInput | FormCreateOrConnectWithoutAuthorInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutAuthorInput | FormUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: FormCreateManyAuthorInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutAuthorInput | FormUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: FormUpdateManyWithWhereWithoutAuthorInput | FormUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type FormUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<FormCreateWithoutAuthorInput, FormUncheckedCreateWithoutAuthorInput> | FormCreateWithoutAuthorInput[] | FormUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: FormCreateOrConnectWithoutAuthorInput | FormCreateOrConnectWithoutAuthorInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutAuthorInput | FormUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: FormCreateManyAuthorInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutAuthorInput | FormUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: FormUpdateManyWithWhereWithoutAuthorInput | FormUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFormsInput = {
    create?: XOR<UserCreateWithoutFormsInput, UserUncheckedCreateWithoutFormsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormsInput
    connect?: UserWhereUniqueInput
  }

  export type FormVersionCreateNestedManyWithoutFormInput = {
    create?: XOR<FormVersionCreateWithoutFormInput, FormVersionUncheckedCreateWithoutFormInput> | FormVersionCreateWithoutFormInput[] | FormVersionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormVersionCreateOrConnectWithoutFormInput | FormVersionCreateOrConnectWithoutFormInput[]
    createMany?: FormVersionCreateManyFormInputEnvelope
    connect?: FormVersionWhereUniqueInput | FormVersionWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutFormInput = {
    create?: XOR<SubmissionCreateWithoutFormInput, SubmissionUncheckedCreateWithoutFormInput> | SubmissionCreateWithoutFormInput[] | SubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutFormInput | SubmissionCreateOrConnectWithoutFormInput[]
    createMany?: SubmissionCreateManyFormInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type FormVersionUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<FormVersionCreateWithoutFormInput, FormVersionUncheckedCreateWithoutFormInput> | FormVersionCreateWithoutFormInput[] | FormVersionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormVersionCreateOrConnectWithoutFormInput | FormVersionCreateOrConnectWithoutFormInput[]
    createMany?: FormVersionCreateManyFormInputEnvelope
    connect?: FormVersionWhereUniqueInput | FormVersionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<SubmissionCreateWithoutFormInput, SubmissionUncheckedCreateWithoutFormInput> | SubmissionCreateWithoutFormInput[] | SubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutFormInput | SubmissionCreateOrConnectWithoutFormInput[]
    createMany?: SubmissionCreateManyFormInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutFormsNestedInput = {
    create?: XOR<UserCreateWithoutFormsInput, UserUncheckedCreateWithoutFormsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormsInput
    upsert?: UserUpsertWithoutFormsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFormsInput, UserUpdateWithoutFormsInput>, UserUncheckedUpdateWithoutFormsInput>
  }

  export type FormVersionUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormVersionCreateWithoutFormInput, FormVersionUncheckedCreateWithoutFormInput> | FormVersionCreateWithoutFormInput[] | FormVersionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormVersionCreateOrConnectWithoutFormInput | FormVersionCreateOrConnectWithoutFormInput[]
    upsert?: FormVersionUpsertWithWhereUniqueWithoutFormInput | FormVersionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormVersionCreateManyFormInputEnvelope
    set?: FormVersionWhereUniqueInput | FormVersionWhereUniqueInput[]
    disconnect?: FormVersionWhereUniqueInput | FormVersionWhereUniqueInput[]
    delete?: FormVersionWhereUniqueInput | FormVersionWhereUniqueInput[]
    connect?: FormVersionWhereUniqueInput | FormVersionWhereUniqueInput[]
    update?: FormVersionUpdateWithWhereUniqueWithoutFormInput | FormVersionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormVersionUpdateManyWithWhereWithoutFormInput | FormVersionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormVersionScalarWhereInput | FormVersionScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutFormNestedInput = {
    create?: XOR<SubmissionCreateWithoutFormInput, SubmissionUncheckedCreateWithoutFormInput> | SubmissionCreateWithoutFormInput[] | SubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutFormInput | SubmissionCreateOrConnectWithoutFormInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutFormInput | SubmissionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: SubmissionCreateManyFormInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutFormInput | SubmissionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutFormInput | SubmissionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type FormVersionUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormVersionCreateWithoutFormInput, FormVersionUncheckedCreateWithoutFormInput> | FormVersionCreateWithoutFormInput[] | FormVersionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormVersionCreateOrConnectWithoutFormInput | FormVersionCreateOrConnectWithoutFormInput[]
    upsert?: FormVersionUpsertWithWhereUniqueWithoutFormInput | FormVersionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormVersionCreateManyFormInputEnvelope
    set?: FormVersionWhereUniqueInput | FormVersionWhereUniqueInput[]
    disconnect?: FormVersionWhereUniqueInput | FormVersionWhereUniqueInput[]
    delete?: FormVersionWhereUniqueInput | FormVersionWhereUniqueInput[]
    connect?: FormVersionWhereUniqueInput | FormVersionWhereUniqueInput[]
    update?: FormVersionUpdateWithWhereUniqueWithoutFormInput | FormVersionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormVersionUpdateManyWithWhereWithoutFormInput | FormVersionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormVersionScalarWhereInput | FormVersionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<SubmissionCreateWithoutFormInput, SubmissionUncheckedCreateWithoutFormInput> | SubmissionCreateWithoutFormInput[] | SubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutFormInput | SubmissionCreateOrConnectWithoutFormInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutFormInput | SubmissionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: SubmissionCreateManyFormInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutFormInput | SubmissionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutFormInput | SubmissionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type FormCreateNestedOneWithoutVersionsInput = {
    create?: XOR<FormCreateWithoutVersionsInput, FormUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutVersionsInput
    connect?: FormWhereUniqueInput
  }

  export type EmailNotificationCreateNestedOneWithoutFormVersionInput = {
    create?: XOR<EmailNotificationCreateWithoutFormVersionInput, EmailNotificationUncheckedCreateWithoutFormVersionInput>
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutFormVersionInput
    connect?: EmailNotificationWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutFormVersionInput = {
    create?: XOR<SubmissionCreateWithoutFormVersionInput, SubmissionUncheckedCreateWithoutFormVersionInput> | SubmissionCreateWithoutFormVersionInput[] | SubmissionUncheckedCreateWithoutFormVersionInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutFormVersionInput | SubmissionCreateOrConnectWithoutFormVersionInput[]
    createMany?: SubmissionCreateManyFormVersionInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type EmailNotificationUncheckedCreateNestedOneWithoutFormVersionInput = {
    create?: XOR<EmailNotificationCreateWithoutFormVersionInput, EmailNotificationUncheckedCreateWithoutFormVersionInput>
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutFormVersionInput
    connect?: EmailNotificationWhereUniqueInput
  }

  export type SubmissionUncheckedCreateNestedManyWithoutFormVersionInput = {
    create?: XOR<SubmissionCreateWithoutFormVersionInput, SubmissionUncheckedCreateWithoutFormVersionInput> | SubmissionCreateWithoutFormVersionInput[] | SubmissionUncheckedCreateWithoutFormVersionInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutFormVersionInput | SubmissionCreateOrConnectWithoutFormVersionInput[]
    createMany?: SubmissionCreateManyFormVersionInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FormUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<FormCreateWithoutVersionsInput, FormUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutVersionsInput
    upsert?: FormUpsertWithoutVersionsInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutVersionsInput, FormUpdateWithoutVersionsInput>, FormUncheckedUpdateWithoutVersionsInput>
  }

  export type EmailNotificationUpdateOneWithoutFormVersionNestedInput = {
    create?: XOR<EmailNotificationCreateWithoutFormVersionInput, EmailNotificationUncheckedCreateWithoutFormVersionInput>
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutFormVersionInput
    upsert?: EmailNotificationUpsertWithoutFormVersionInput
    disconnect?: EmailNotificationWhereInput | boolean
    delete?: EmailNotificationWhereInput | boolean
    connect?: EmailNotificationWhereUniqueInput
    update?: XOR<XOR<EmailNotificationUpdateToOneWithWhereWithoutFormVersionInput, EmailNotificationUpdateWithoutFormVersionInput>, EmailNotificationUncheckedUpdateWithoutFormVersionInput>
  }

  export type SubmissionUpdateManyWithoutFormVersionNestedInput = {
    create?: XOR<SubmissionCreateWithoutFormVersionInput, SubmissionUncheckedCreateWithoutFormVersionInput> | SubmissionCreateWithoutFormVersionInput[] | SubmissionUncheckedCreateWithoutFormVersionInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutFormVersionInput | SubmissionCreateOrConnectWithoutFormVersionInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutFormVersionInput | SubmissionUpsertWithWhereUniqueWithoutFormVersionInput[]
    createMany?: SubmissionCreateManyFormVersionInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutFormVersionInput | SubmissionUpdateWithWhereUniqueWithoutFormVersionInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutFormVersionInput | SubmissionUpdateManyWithWhereWithoutFormVersionInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type EmailNotificationUncheckedUpdateOneWithoutFormVersionNestedInput = {
    create?: XOR<EmailNotificationCreateWithoutFormVersionInput, EmailNotificationUncheckedCreateWithoutFormVersionInput>
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutFormVersionInput
    upsert?: EmailNotificationUpsertWithoutFormVersionInput
    disconnect?: EmailNotificationWhereInput | boolean
    delete?: EmailNotificationWhereInput | boolean
    connect?: EmailNotificationWhereUniqueInput
    update?: XOR<XOR<EmailNotificationUpdateToOneWithWhereWithoutFormVersionInput, EmailNotificationUpdateWithoutFormVersionInput>, EmailNotificationUncheckedUpdateWithoutFormVersionInput>
  }

  export type SubmissionUncheckedUpdateManyWithoutFormVersionNestedInput = {
    create?: XOR<SubmissionCreateWithoutFormVersionInput, SubmissionUncheckedCreateWithoutFormVersionInput> | SubmissionCreateWithoutFormVersionInput[] | SubmissionUncheckedCreateWithoutFormVersionInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutFormVersionInput | SubmissionCreateOrConnectWithoutFormVersionInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutFormVersionInput | SubmissionUpsertWithWhereUniqueWithoutFormVersionInput[]
    createMany?: SubmissionCreateManyFormVersionInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutFormVersionInput | SubmissionUpdateWithWhereUniqueWithoutFormVersionInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutFormVersionInput | SubmissionUpdateManyWithWhereWithoutFormVersionInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type EmailNotificationCreaterecipientsInput = {
    set: string[]
  }

  export type FormVersionCreateNestedOneWithoutEmailNotificationInput = {
    create?: XOR<FormVersionCreateWithoutEmailNotificationInput, FormVersionUncheckedCreateWithoutEmailNotificationInput>
    connectOrCreate?: FormVersionCreateOrConnectWithoutEmailNotificationInput
    connect?: FormVersionWhereUniqueInput
  }

  export type EmailNotificationUpdaterecipientsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FormVersionUpdateOneRequiredWithoutEmailNotificationNestedInput = {
    create?: XOR<FormVersionCreateWithoutEmailNotificationInput, FormVersionUncheckedCreateWithoutEmailNotificationInput>
    connectOrCreate?: FormVersionCreateOrConnectWithoutEmailNotificationInput
    upsert?: FormVersionUpsertWithoutEmailNotificationInput
    connect?: FormVersionWhereUniqueInput
    update?: XOR<XOR<FormVersionUpdateToOneWithWhereWithoutEmailNotificationInput, FormVersionUpdateWithoutEmailNotificationInput>, FormVersionUncheckedUpdateWithoutEmailNotificationInput>
  }

  export type FormCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<FormCreateWithoutSubmissionsInput, FormUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutSubmissionsInput
    connect?: FormWhereUniqueInput
  }

  export type FormVersionCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<FormVersionCreateWithoutSubmissionsInput, FormVersionUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: FormVersionCreateOrConnectWithoutSubmissionsInput
    connect?: FormVersionWhereUniqueInput
  }

  export type NullableEnumAIAnalysisStatusFieldUpdateOperationsInput = {
    set?: $Enums.AIAnalysisStatus | null
  }

  export type FormUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<FormCreateWithoutSubmissionsInput, FormUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutSubmissionsInput
    upsert?: FormUpsertWithoutSubmissionsInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutSubmissionsInput, FormUpdateWithoutSubmissionsInput>, FormUncheckedUpdateWithoutSubmissionsInput>
  }

  export type FormVersionUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<FormVersionCreateWithoutSubmissionsInput, FormVersionUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: FormVersionCreateOrConnectWithoutSubmissionsInput
    upsert?: FormVersionUpsertWithoutSubmissionsInput
    connect?: FormVersionWhereUniqueInput
    update?: XOR<XOR<FormVersionUpdateToOneWithWhereWithoutSubmissionsInput, FormVersionUpdateWithoutSubmissionsInput>, FormVersionUncheckedUpdateWithoutSubmissionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAIAnalysisStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AIAnalysisStatus | EnumAIAnalysisStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIAnalysisStatus[] | ListEnumAIAnalysisStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AIAnalysisStatus[] | ListEnumAIAnalysisStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAIAnalysisStatusNullableFilter<$PrismaModel> | $Enums.AIAnalysisStatus | null
  }

  export type NestedEnumAIAnalysisStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIAnalysisStatus | EnumAIAnalysisStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIAnalysisStatus[] | ListEnumAIAnalysisStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AIAnalysisStatus[] | ListEnumAIAnalysisStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAIAnalysisStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.AIAnalysisStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAIAnalysisStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumAIAnalysisStatusNullableFilter<$PrismaModel>
  }

  export type FormCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latestVersion?: number
    customUrl?: string | null
    versions?: FormVersionCreateNestedManyWithoutFormInput
    submissions?: SubmissionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latestVersion?: number
    customUrl?: string | null
    versions?: FormVersionUncheckedCreateNestedManyWithoutFormInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutAuthorInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutAuthorInput, FormUncheckedCreateWithoutAuthorInput>
  }

  export type FormCreateManyAuthorInputEnvelope = {
    data: FormCreateManyAuthorInput | FormCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type FormUpsertWithWhereUniqueWithoutAuthorInput = {
    where: FormWhereUniqueInput
    update: XOR<FormUpdateWithoutAuthorInput, FormUncheckedUpdateWithoutAuthorInput>
    create: XOR<FormCreateWithoutAuthorInput, FormUncheckedCreateWithoutAuthorInput>
  }

  export type FormUpdateWithWhereUniqueWithoutAuthorInput = {
    where: FormWhereUniqueInput
    data: XOR<FormUpdateWithoutAuthorInput, FormUncheckedUpdateWithoutAuthorInput>
  }

  export type FormUpdateManyWithWhereWithoutAuthorInput = {
    where: FormScalarWhereInput
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyWithoutAuthorInput>
  }

  export type FormScalarWhereInput = {
    AND?: FormScalarWhereInput | FormScalarWhereInput[]
    OR?: FormScalarWhereInput[]
    NOT?: FormScalarWhereInput | FormScalarWhereInput[]
    id?: StringFilter<"Form"> | string
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    authorId?: StringFilter<"Form"> | string
    latestVersion?: IntFilter<"Form"> | number
    customUrl?: StringNullableFilter<"Form"> | string | null
  }

  export type UserCreateWithoutFormsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutFormsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutFormsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFormsInput, UserUncheckedCreateWithoutFormsInput>
  }

  export type FormVersionCreateWithoutFormInput = {
    id?: string
    version: number
    createdAt?: Date | string
    title: string
    description?: string | null
    blocks: JsonNullValueInput | InputJsonValue
    published?: boolean
    submissionsPerIp?: number | null
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: string | null
    emailNotification?: EmailNotificationCreateNestedOneWithoutFormVersionInput
    submissions?: SubmissionCreateNestedManyWithoutFormVersionInput
  }

  export type FormVersionUncheckedCreateWithoutFormInput = {
    id?: string
    version: number
    createdAt?: Date | string
    title: string
    description?: string | null
    blocks: JsonNullValueInput | InputJsonValue
    published?: boolean
    submissionsPerIp?: number | null
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: string | null
    emailNotification?: EmailNotificationUncheckedCreateNestedOneWithoutFormVersionInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutFormVersionInput
  }

  export type FormVersionCreateOrConnectWithoutFormInput = {
    where: FormVersionWhereUniqueInput
    create: XOR<FormVersionCreateWithoutFormInput, FormVersionUncheckedCreateWithoutFormInput>
  }

  export type FormVersionCreateManyFormInputEnvelope = {
    data: FormVersionCreateManyFormInput | FormVersionCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutFormInput = {
    id?: string
    createdAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: $Enums.AIAnalysisStatus | null
    formVersion: FormVersionCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutFormInput = {
    id?: string
    createdAt?: Date | string
    formVersionId: string
    data: JsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: $Enums.AIAnalysisStatus | null
  }

  export type SubmissionCreateOrConnectWithoutFormInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutFormInput, SubmissionUncheckedCreateWithoutFormInput>
  }

  export type SubmissionCreateManyFormInputEnvelope = {
    data: SubmissionCreateManyFormInput | SubmissionCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFormsInput = {
    update: XOR<UserUpdateWithoutFormsInput, UserUncheckedUpdateWithoutFormsInput>
    create: XOR<UserCreateWithoutFormsInput, UserUncheckedCreateWithoutFormsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFormsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFormsInput, UserUncheckedUpdateWithoutFormsInput>
  }

  export type UserUpdateWithoutFormsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutFormsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormVersionUpsertWithWhereUniqueWithoutFormInput = {
    where: FormVersionWhereUniqueInput
    update: XOR<FormVersionUpdateWithoutFormInput, FormVersionUncheckedUpdateWithoutFormInput>
    create: XOR<FormVersionCreateWithoutFormInput, FormVersionUncheckedCreateWithoutFormInput>
  }

  export type FormVersionUpdateWithWhereUniqueWithoutFormInput = {
    where: FormVersionWhereUniqueInput
    data: XOR<FormVersionUpdateWithoutFormInput, FormVersionUncheckedUpdateWithoutFormInput>
  }

  export type FormVersionUpdateManyWithWhereWithoutFormInput = {
    where: FormVersionScalarWhereInput
    data: XOR<FormVersionUpdateManyMutationInput, FormVersionUncheckedUpdateManyWithoutFormInput>
  }

  export type FormVersionScalarWhereInput = {
    AND?: FormVersionScalarWhereInput | FormVersionScalarWhereInput[]
    OR?: FormVersionScalarWhereInput[]
    NOT?: FormVersionScalarWhereInput | FormVersionScalarWhereInput[]
    id?: StringFilter<"FormVersion"> | string
    version?: IntFilter<"FormVersion"> | number
    formId?: StringFilter<"FormVersion"> | string
    createdAt?: DateTimeFilter<"FormVersion"> | Date | string
    title?: StringFilter<"FormVersion"> | string
    description?: StringNullableFilter<"FormVersion"> | string | null
    blocks?: JsonFilter<"FormVersion">
    published?: BoolFilter<"FormVersion"> | boolean
    submissionsPerIp?: IntNullableFilter<"FormVersion"> | number | null
    aiEnabled?: BoolFilter<"FormVersion"> | boolean
    aiPrompt?: StringNullableFilter<"FormVersion"> | string | null
    aiResponseSchema?: JsonNullableFilter<"FormVersion">
    aiLanguage?: StringNullableFilter<"FormVersion"> | string | null
  }

  export type SubmissionUpsertWithWhereUniqueWithoutFormInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutFormInput, SubmissionUncheckedUpdateWithoutFormInput>
    create: XOR<SubmissionCreateWithoutFormInput, SubmissionUncheckedCreateWithoutFormInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutFormInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutFormInput, SubmissionUncheckedUpdateWithoutFormInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutFormInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutFormInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    formId?: StringFilter<"Submission"> | string
    formVersionId?: StringFilter<"Submission"> | string
    data?: JsonFilter<"Submission">
    ipAddress?: StringNullableFilter<"Submission"> | string | null
    aiAnalysis?: JsonNullableFilter<"Submission">
    aiAnalysisStatus?: EnumAIAnalysisStatusNullableFilter<"Submission"> | $Enums.AIAnalysisStatus | null
  }

  export type FormCreateWithoutVersionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latestVersion?: number
    customUrl?: string | null
    author: UserCreateNestedOneWithoutFormsInput
    submissions?: SubmissionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutVersionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    latestVersion?: number
    customUrl?: string | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutVersionsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutVersionsInput, FormUncheckedCreateWithoutVersionsInput>
  }

  export type EmailNotificationCreateWithoutFormVersionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: EmailNotificationCreaterecipientsInput | string[]
    prompt?: string | null
    conditionPrompt?: string | null
    conditionExpectedValue?: string | null
  }

  export type EmailNotificationUncheckedCreateWithoutFormVersionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: EmailNotificationCreaterecipientsInput | string[]
    prompt?: string | null
    conditionPrompt?: string | null
    conditionExpectedValue?: string | null
  }

  export type EmailNotificationCreateOrConnectWithoutFormVersionInput = {
    where: EmailNotificationWhereUniqueInput
    create: XOR<EmailNotificationCreateWithoutFormVersionInput, EmailNotificationUncheckedCreateWithoutFormVersionInput>
  }

  export type SubmissionCreateWithoutFormVersionInput = {
    id?: string
    createdAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: $Enums.AIAnalysisStatus | null
    form: FormCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutFormVersionInput = {
    id?: string
    createdAt?: Date | string
    formId: string
    data: JsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: $Enums.AIAnalysisStatus | null
  }

  export type SubmissionCreateOrConnectWithoutFormVersionInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutFormVersionInput, SubmissionUncheckedCreateWithoutFormVersionInput>
  }

  export type SubmissionCreateManyFormVersionInputEnvelope = {
    data: SubmissionCreateManyFormVersionInput | SubmissionCreateManyFormVersionInput[]
    skipDuplicates?: boolean
  }

  export type FormUpsertWithoutVersionsInput = {
    update: XOR<FormUpdateWithoutVersionsInput, FormUncheckedUpdateWithoutVersionsInput>
    create: XOR<FormCreateWithoutVersionsInput, FormUncheckedCreateWithoutVersionsInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutVersionsInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutVersionsInput, FormUncheckedUpdateWithoutVersionsInput>
  }

  export type FormUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestVersion?: IntFieldUpdateOperationsInput | number
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutFormsNestedInput
    submissions?: SubmissionUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    latestVersion?: IntFieldUpdateOperationsInput | number
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type EmailNotificationUpsertWithoutFormVersionInput = {
    update: XOR<EmailNotificationUpdateWithoutFormVersionInput, EmailNotificationUncheckedUpdateWithoutFormVersionInput>
    create: XOR<EmailNotificationCreateWithoutFormVersionInput, EmailNotificationUncheckedCreateWithoutFormVersionInput>
    where?: EmailNotificationWhereInput
  }

  export type EmailNotificationUpdateToOneWithWhereWithoutFormVersionInput = {
    where?: EmailNotificationWhereInput
    data: XOR<EmailNotificationUpdateWithoutFormVersionInput, EmailNotificationUncheckedUpdateWithoutFormVersionInput>
  }

  export type EmailNotificationUpdateWithoutFormVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: EmailNotificationUpdaterecipientsInput | string[]
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    conditionPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    conditionExpectedValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailNotificationUncheckedUpdateWithoutFormVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: EmailNotificationUpdaterecipientsInput | string[]
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    conditionPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    conditionExpectedValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionUpsertWithWhereUniqueWithoutFormVersionInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutFormVersionInput, SubmissionUncheckedUpdateWithoutFormVersionInput>
    create: XOR<SubmissionCreateWithoutFormVersionInput, SubmissionUncheckedCreateWithoutFormVersionInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutFormVersionInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutFormVersionInput, SubmissionUncheckedUpdateWithoutFormVersionInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutFormVersionInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutFormVersionInput>
  }

  export type FormVersionCreateWithoutEmailNotificationInput = {
    id?: string
    version: number
    createdAt?: Date | string
    title: string
    description?: string | null
    blocks: JsonNullValueInput | InputJsonValue
    published?: boolean
    submissionsPerIp?: number | null
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: string | null
    form: FormCreateNestedOneWithoutVersionsInput
    submissions?: SubmissionCreateNestedManyWithoutFormVersionInput
  }

  export type FormVersionUncheckedCreateWithoutEmailNotificationInput = {
    id?: string
    version: number
    formId: string
    createdAt?: Date | string
    title: string
    description?: string | null
    blocks: JsonNullValueInput | InputJsonValue
    published?: boolean
    submissionsPerIp?: number | null
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: string | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutFormVersionInput
  }

  export type FormVersionCreateOrConnectWithoutEmailNotificationInput = {
    where: FormVersionWhereUniqueInput
    create: XOR<FormVersionCreateWithoutEmailNotificationInput, FormVersionUncheckedCreateWithoutEmailNotificationInput>
  }

  export type FormVersionUpsertWithoutEmailNotificationInput = {
    update: XOR<FormVersionUpdateWithoutEmailNotificationInput, FormVersionUncheckedUpdateWithoutEmailNotificationInput>
    create: XOR<FormVersionCreateWithoutEmailNotificationInput, FormVersionUncheckedCreateWithoutEmailNotificationInput>
    where?: FormVersionWhereInput
  }

  export type FormVersionUpdateToOneWithWhereWithoutEmailNotificationInput = {
    where?: FormVersionWhereInput
    data: XOR<FormVersionUpdateWithoutEmailNotificationInput, FormVersionUncheckedUpdateWithoutEmailNotificationInput>
  }

  export type FormVersionUpdateWithoutEmailNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    submissionsPerIp?: NullableIntFieldUpdateOperationsInput | number | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUpdateOneRequiredWithoutVersionsNestedInput
    submissions?: SubmissionUpdateManyWithoutFormVersionNestedInput
  }

  export type FormVersionUncheckedUpdateWithoutEmailNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    formId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    submissionsPerIp?: NullableIntFieldUpdateOperationsInput | number | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUncheckedUpdateManyWithoutFormVersionNestedInput
  }

  export type FormCreateWithoutSubmissionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latestVersion?: number
    customUrl?: string | null
    author: UserCreateNestedOneWithoutFormsInput
    versions?: FormVersionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    latestVersion?: number
    customUrl?: string | null
    versions?: FormVersionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutSubmissionsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutSubmissionsInput, FormUncheckedCreateWithoutSubmissionsInput>
  }

  export type FormVersionCreateWithoutSubmissionsInput = {
    id?: string
    version: number
    createdAt?: Date | string
    title: string
    description?: string | null
    blocks: JsonNullValueInput | InputJsonValue
    published?: boolean
    submissionsPerIp?: number | null
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: string | null
    form: FormCreateNestedOneWithoutVersionsInput
    emailNotification?: EmailNotificationCreateNestedOneWithoutFormVersionInput
  }

  export type FormVersionUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    version: number
    formId: string
    createdAt?: Date | string
    title: string
    description?: string | null
    blocks: JsonNullValueInput | InputJsonValue
    published?: boolean
    submissionsPerIp?: number | null
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: string | null
    emailNotification?: EmailNotificationUncheckedCreateNestedOneWithoutFormVersionInput
  }

  export type FormVersionCreateOrConnectWithoutSubmissionsInput = {
    where: FormVersionWhereUniqueInput
    create: XOR<FormVersionCreateWithoutSubmissionsInput, FormVersionUncheckedCreateWithoutSubmissionsInput>
  }

  export type FormUpsertWithoutSubmissionsInput = {
    update: XOR<FormUpdateWithoutSubmissionsInput, FormUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<FormCreateWithoutSubmissionsInput, FormUncheckedCreateWithoutSubmissionsInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutSubmissionsInput, FormUncheckedUpdateWithoutSubmissionsInput>
  }

  export type FormUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestVersion?: IntFieldUpdateOperationsInput | number
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutFormsNestedInput
    versions?: FormVersionUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    latestVersion?: IntFieldUpdateOperationsInput | number
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: FormVersionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormVersionUpsertWithoutSubmissionsInput = {
    update: XOR<FormVersionUpdateWithoutSubmissionsInput, FormVersionUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<FormVersionCreateWithoutSubmissionsInput, FormVersionUncheckedCreateWithoutSubmissionsInput>
    where?: FormVersionWhereInput
  }

  export type FormVersionUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: FormVersionWhereInput
    data: XOR<FormVersionUpdateWithoutSubmissionsInput, FormVersionUncheckedUpdateWithoutSubmissionsInput>
  }

  export type FormVersionUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    submissionsPerIp?: NullableIntFieldUpdateOperationsInput | number | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUpdateOneRequiredWithoutVersionsNestedInput
    emailNotification?: EmailNotificationUpdateOneWithoutFormVersionNestedInput
  }

  export type FormVersionUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    formId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    submissionsPerIp?: NullableIntFieldUpdateOperationsInput | number | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: EmailNotificationUncheckedUpdateOneWithoutFormVersionNestedInput
  }

  export type FormCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latestVersion?: number
    customUrl?: string | null
  }

  export type FormUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestVersion?: IntFieldUpdateOperationsInput | number
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: FormVersionUpdateManyWithoutFormNestedInput
    submissions?: SubmissionUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestVersion?: IntFieldUpdateOperationsInput | number
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: FormVersionUncheckedUpdateManyWithoutFormNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestVersion?: IntFieldUpdateOperationsInput | number
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormVersionCreateManyFormInput = {
    id?: string
    version: number
    createdAt?: Date | string
    title: string
    description?: string | null
    blocks: JsonNullValueInput | InputJsonValue
    published?: boolean
    submissionsPerIp?: number | null
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: string | null
  }

  export type SubmissionCreateManyFormInput = {
    id?: string
    createdAt?: Date | string
    formVersionId: string
    data: JsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: $Enums.AIAnalysisStatus | null
  }

  export type FormVersionUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    submissionsPerIp?: NullableIntFieldUpdateOperationsInput | number | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: EmailNotificationUpdateOneWithoutFormVersionNestedInput
    submissions?: SubmissionUpdateManyWithoutFormVersionNestedInput
  }

  export type FormVersionUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    submissionsPerIp?: NullableIntFieldUpdateOperationsInput | number | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: EmailNotificationUncheckedUpdateOneWithoutFormVersionNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutFormVersionNestedInput
  }

  export type FormVersionUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blocks?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    submissionsPerIp?: NullableIntFieldUpdateOperationsInput | number | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseSchema?: NullableJsonNullValueInput | InputJsonValue
    aiLanguage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: NullableEnumAIAnalysisStatusFieldUpdateOperationsInput | $Enums.AIAnalysisStatus | null
    formVersion?: FormVersionUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formVersionId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: NullableEnumAIAnalysisStatusFieldUpdateOperationsInput | $Enums.AIAnalysisStatus | null
  }

  export type SubmissionUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formVersionId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: NullableEnumAIAnalysisStatusFieldUpdateOperationsInput | $Enums.AIAnalysisStatus | null
  }

  export type SubmissionCreateManyFormVersionInput = {
    id?: string
    createdAt?: Date | string
    formId: string
    data: JsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: $Enums.AIAnalysisStatus | null
  }

  export type SubmissionUpdateWithoutFormVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: NullableEnumAIAnalysisStatusFieldUpdateOperationsInput | $Enums.AIAnalysisStatus | null
    form?: FormUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutFormVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: NullableEnumAIAnalysisStatusFieldUpdateOperationsInput | $Enums.AIAnalysisStatus | null
  }

  export type SubmissionUncheckedUpdateManyWithoutFormVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysis?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysisStatus?: NullableEnumAIAnalysisStatusFieldUpdateOperationsInput | $Enums.AIAnalysisStatus | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}