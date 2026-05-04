
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model penjualanBulanan
 * 
 */
export type penjualanBulanan = $Result.DefaultSelection<Prisma.$penjualanBulananPayload>
/**
 * Model penjualanHarian
 * 
 */
export type penjualanHarian = $Result.DefaultSelection<Prisma.$penjualanHarianPayload>
/**
 * Model hasilPrediksi
 * 
 */
export type hasilPrediksi = $Result.DefaultSelection<Prisma.$hasilPrediksiPayload>
/**
 * Model authentications
 * 
 */
export type authentications = $Result.DefaultSelection<Prisma.$authenticationsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penjualanBulanan`: Exposes CRUD operations for the **penjualanBulanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PenjualanBulanans
    * const penjualanBulanans = await prisma.penjualanBulanan.findMany()
    * ```
    */
  get penjualanBulanan(): Prisma.penjualanBulananDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penjualanHarian`: Exposes CRUD operations for the **penjualanHarian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PenjualanHarians
    * const penjualanHarians = await prisma.penjualanHarian.findMany()
    * ```
    */
  get penjualanHarian(): Prisma.penjualanHarianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hasilPrediksi`: Exposes CRUD operations for the **hasilPrediksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HasilPrediksis
    * const hasilPrediksis = await prisma.hasilPrediksi.findMany()
    * ```
    */
  get hasilPrediksi(): Prisma.hasilPrediksiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authentications`: Exposes CRUD operations for the **authentications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authentications
    * const authentications = await prisma.authentications.findMany()
    * ```
    */
  get authentications(): Prisma.authenticationsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    users: 'users',
    penjualanBulanan: 'penjualanBulanan',
    penjualanHarian: 'penjualanHarian',
    hasilPrediksi: 'hasilPrediksi',
    authentications: 'authentications'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "penjualanBulanan" | "penjualanHarian" | "hasilPrediksi" | "authentications"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      penjualanBulanan: {
        payload: Prisma.$penjualanBulananPayload<ExtArgs>
        fields: Prisma.penjualanBulananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.penjualanBulananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanBulananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.penjualanBulananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanBulananPayload>
          }
          findFirst: {
            args: Prisma.penjualanBulananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanBulananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.penjualanBulananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanBulananPayload>
          }
          findMany: {
            args: Prisma.penjualanBulananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanBulananPayload>[]
          }
          create: {
            args: Prisma.penjualanBulananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanBulananPayload>
          }
          createMany: {
            args: Prisma.penjualanBulananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.penjualanBulananCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanBulananPayload>[]
          }
          delete: {
            args: Prisma.penjualanBulananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanBulananPayload>
          }
          update: {
            args: Prisma.penjualanBulananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanBulananPayload>
          }
          deleteMany: {
            args: Prisma.penjualanBulananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.penjualanBulananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.penjualanBulananUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanBulananPayload>[]
          }
          upsert: {
            args: Prisma.penjualanBulananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanBulananPayload>
          }
          aggregate: {
            args: Prisma.PenjualanBulananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenjualanBulanan>
          }
          groupBy: {
            args: Prisma.penjualanBulananGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenjualanBulananGroupByOutputType>[]
          }
          count: {
            args: Prisma.penjualanBulananCountArgs<ExtArgs>
            result: $Utils.Optional<PenjualanBulananCountAggregateOutputType> | number
          }
        }
      }
      penjualanHarian: {
        payload: Prisma.$penjualanHarianPayload<ExtArgs>
        fields: Prisma.penjualanHarianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.penjualanHarianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanHarianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.penjualanHarianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanHarianPayload>
          }
          findFirst: {
            args: Prisma.penjualanHarianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanHarianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.penjualanHarianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanHarianPayload>
          }
          findMany: {
            args: Prisma.penjualanHarianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanHarianPayload>[]
          }
          create: {
            args: Prisma.penjualanHarianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanHarianPayload>
          }
          createMany: {
            args: Prisma.penjualanHarianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.penjualanHarianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanHarianPayload>[]
          }
          delete: {
            args: Prisma.penjualanHarianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanHarianPayload>
          }
          update: {
            args: Prisma.penjualanHarianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanHarianPayload>
          }
          deleteMany: {
            args: Prisma.penjualanHarianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.penjualanHarianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.penjualanHarianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanHarianPayload>[]
          }
          upsert: {
            args: Prisma.penjualanHarianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanHarianPayload>
          }
          aggregate: {
            args: Prisma.PenjualanHarianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenjualanHarian>
          }
          groupBy: {
            args: Prisma.penjualanHarianGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenjualanHarianGroupByOutputType>[]
          }
          count: {
            args: Prisma.penjualanHarianCountArgs<ExtArgs>
            result: $Utils.Optional<PenjualanHarianCountAggregateOutputType> | number
          }
        }
      }
      hasilPrediksi: {
        payload: Prisma.$hasilPrediksiPayload<ExtArgs>
        fields: Prisma.hasilPrediksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hasilPrediksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hasilPrediksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hasilPrediksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hasilPrediksiPayload>
          }
          findFirst: {
            args: Prisma.hasilPrediksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hasilPrediksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hasilPrediksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hasilPrediksiPayload>
          }
          findMany: {
            args: Prisma.hasilPrediksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hasilPrediksiPayload>[]
          }
          create: {
            args: Prisma.hasilPrediksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hasilPrediksiPayload>
          }
          createMany: {
            args: Prisma.hasilPrediksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hasilPrediksiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hasilPrediksiPayload>[]
          }
          delete: {
            args: Prisma.hasilPrediksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hasilPrediksiPayload>
          }
          update: {
            args: Prisma.hasilPrediksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hasilPrediksiPayload>
          }
          deleteMany: {
            args: Prisma.hasilPrediksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hasilPrediksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hasilPrediksiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hasilPrediksiPayload>[]
          }
          upsert: {
            args: Prisma.hasilPrediksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hasilPrediksiPayload>
          }
          aggregate: {
            args: Prisma.HasilPrediksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHasilPrediksi>
          }
          groupBy: {
            args: Prisma.hasilPrediksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<HasilPrediksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.hasilPrediksiCountArgs<ExtArgs>
            result: $Utils.Optional<HasilPrediksiCountAggregateOutputType> | number
          }
        }
      }
      authentications: {
        payload: Prisma.$authenticationsPayload<ExtArgs>
        fields: Prisma.authenticationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authenticationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authenticationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationsPayload>
          }
          findFirst: {
            args: Prisma.authenticationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authenticationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationsPayload>
          }
          findMany: {
            args: Prisma.authenticationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationsPayload>[]
          }
          create: {
            args: Prisma.authenticationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationsPayload>
          }
          createMany: {
            args: Prisma.authenticationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authenticationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationsPayload>[]
          }
          delete: {
            args: Prisma.authenticationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationsPayload>
          }
          update: {
            args: Prisma.authenticationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationsPayload>
          }
          deleteMany: {
            args: Prisma.authenticationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authenticationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authenticationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationsPayload>[]
          }
          upsert: {
            args: Prisma.authenticationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationsPayload>
          }
          aggregate: {
            args: Prisma.AuthenticationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthentications>
          }
          groupBy: {
            args: Prisma.authenticationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthenticationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.authenticationsCountArgs<ExtArgs>
            result: $Utils.Optional<AuthenticationsCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    penjualanBulanan?: penjualanBulananOmit
    penjualanHarian?: penjualanHarianOmit
    hasilPrediksi?: hasilPrediksiOmit
    authentications?: authenticationsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    penjualanBulanan: number
    penjualanHarian: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualanBulanan?: boolean | UsersCountOutputTypeCountPenjualanBulananArgs
    penjualanHarian?: boolean | UsersCountOutputTypeCountPenjualanHarianArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPenjualanBulananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penjualanBulananWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPenjualanHarianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penjualanHarianWhereInput
  }


  /**
   * Count Type PenjualanBulananCountOutputType
   */

  export type PenjualanBulananCountOutputType = {
    hasilPrediksi: number
  }

  export type PenjualanBulananCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hasilPrediksi?: boolean | PenjualanBulananCountOutputTypeCountHasilPrediksiArgs
  }

  // Custom InputTypes
  /**
   * PenjualanBulananCountOutputType without action
   */
  export type PenjualanBulananCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanBulananCountOutputType
     */
    select?: PenjualanBulananCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenjualanBulananCountOutputType without action
   */
  export type PenjualanBulananCountOutputTypeCountHasilPrediksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hasilPrediksiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id_users: number | null
  }

  export type UsersSumAggregateOutputType = {
    id_users: number | null
  }

  export type UsersMinAggregateOutputType = {
    id_users: number | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id_users: number | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UsersCountAggregateOutputType = {
    id_users: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id_users?: true
  }

  export type UsersSumAggregateInputType = {
    id_users?: true
  }

  export type UsersMinAggregateInputType = {
    id_users?: true
    username?: true
    password?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id_users?: true
    username?: true
    password?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id_users?: true
    username?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id_users: number
    username: string
    password: string
    role: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_users?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    penjualanBulanan?: boolean | users$penjualanBulananArgs<ExtArgs>
    penjualanHarian?: boolean | users$penjualanHarianArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_users?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_users?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id_users?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_users" | "username" | "password" | "role", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualanBulanan?: boolean | users$penjualanBulananArgs<ExtArgs>
    penjualanHarian?: boolean | users$penjualanHarianArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      penjualanBulanan: Prisma.$penjualanBulananPayload<ExtArgs>[]
      penjualanHarian: Prisma.$penjualanHarianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_users: number
      username: string
      password: string
      role: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id_users`
     * const usersWithId_usersOnly = await prisma.users.findMany({ select: { id_users: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id_users`
     * const usersWithId_usersOnly = await prisma.users.createManyAndReturn({
     *   select: { id_users: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id_users`
     * const usersWithId_usersOnly = await prisma.users.updateManyAndReturn({
     *   select: { id_users: true },
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penjualanBulanan<T extends users$penjualanBulananArgs<ExtArgs> = {}>(args?: Subset<T, users$penjualanBulananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    penjualanHarian<T extends users$penjualanHarianArgs<ExtArgs> = {}>(args?: Subset<T, users$penjualanHarianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanHarianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id_users: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.penjualanBulanan
   */
  export type users$penjualanBulananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananInclude<ExtArgs> | null
    where?: penjualanBulananWhereInput
    orderBy?: penjualanBulananOrderByWithRelationInput | penjualanBulananOrderByWithRelationInput[]
    cursor?: penjualanBulananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjualanBulananScalarFieldEnum | PenjualanBulananScalarFieldEnum[]
  }

  /**
   * users.penjualanHarian
   */
  export type users$penjualanHarianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianInclude<ExtArgs> | null
    where?: penjualanHarianWhereInput
    orderBy?: penjualanHarianOrderByWithRelationInput | penjualanHarianOrderByWithRelationInput[]
    cursor?: penjualanHarianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjualanHarianScalarFieldEnum | PenjualanHarianScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model penjualanBulanan
   */

  export type AggregatePenjualanBulanan = {
    _count: PenjualanBulananCountAggregateOutputType | null
    _avg: PenjualanBulananAvgAggregateOutputType | null
    _sum: PenjualanBulananSumAggregateOutputType | null
    _min: PenjualanBulananMinAggregateOutputType | null
    _max: PenjualanBulananMaxAggregateOutputType | null
  }

  export type PenjualanBulananAvgAggregateOutputType = {
    id_penjualan_bulanan: number | null
    id_users: number | null
    bulan: number | null
    tahun: number | null
    total: number | null
  }

  export type PenjualanBulananSumAggregateOutputType = {
    id_penjualan_bulanan: number | null
    id_users: number | null
    bulan: number | null
    tahun: number | null
    total: number | null
  }

  export type PenjualanBulananMinAggregateOutputType = {
    id_penjualan_bulanan: number | null
    id_users: number | null
    bulan: number | null
    tahun: number | null
    total: number | null
  }

  export type PenjualanBulananMaxAggregateOutputType = {
    id_penjualan_bulanan: number | null
    id_users: number | null
    bulan: number | null
    tahun: number | null
    total: number | null
  }

  export type PenjualanBulananCountAggregateOutputType = {
    id_penjualan_bulanan: number
    id_users: number
    bulan: number
    tahun: number
    total: number
    _all: number
  }


  export type PenjualanBulananAvgAggregateInputType = {
    id_penjualan_bulanan?: true
    id_users?: true
    bulan?: true
    tahun?: true
    total?: true
  }

  export type PenjualanBulananSumAggregateInputType = {
    id_penjualan_bulanan?: true
    id_users?: true
    bulan?: true
    tahun?: true
    total?: true
  }

  export type PenjualanBulananMinAggregateInputType = {
    id_penjualan_bulanan?: true
    id_users?: true
    bulan?: true
    tahun?: true
    total?: true
  }

  export type PenjualanBulananMaxAggregateInputType = {
    id_penjualan_bulanan?: true
    id_users?: true
    bulan?: true
    tahun?: true
    total?: true
  }

  export type PenjualanBulananCountAggregateInputType = {
    id_penjualan_bulanan?: true
    id_users?: true
    bulan?: true
    tahun?: true
    total?: true
    _all?: true
  }

  export type PenjualanBulananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penjualanBulanan to aggregate.
     */
    where?: penjualanBulananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualanBulanans to fetch.
     */
    orderBy?: penjualanBulananOrderByWithRelationInput | penjualanBulananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: penjualanBulananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualanBulanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualanBulanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned penjualanBulanans
    **/
    _count?: true | PenjualanBulananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenjualanBulananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenjualanBulananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenjualanBulananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenjualanBulananMaxAggregateInputType
  }

  export type GetPenjualanBulananAggregateType<T extends PenjualanBulananAggregateArgs> = {
        [P in keyof T & keyof AggregatePenjualanBulanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenjualanBulanan[P]>
      : GetScalarType<T[P], AggregatePenjualanBulanan[P]>
  }




  export type penjualanBulananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penjualanBulananWhereInput
    orderBy?: penjualanBulananOrderByWithAggregationInput | penjualanBulananOrderByWithAggregationInput[]
    by: PenjualanBulananScalarFieldEnum[] | PenjualanBulananScalarFieldEnum
    having?: penjualanBulananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenjualanBulananCountAggregateInputType | true
    _avg?: PenjualanBulananAvgAggregateInputType
    _sum?: PenjualanBulananSumAggregateInputType
    _min?: PenjualanBulananMinAggregateInputType
    _max?: PenjualanBulananMaxAggregateInputType
  }

  export type PenjualanBulananGroupByOutputType = {
    id_penjualan_bulanan: number
    id_users: number
    bulan: number
    tahun: number
    total: number
    _count: PenjualanBulananCountAggregateOutputType | null
    _avg: PenjualanBulananAvgAggregateOutputType | null
    _sum: PenjualanBulananSumAggregateOutputType | null
    _min: PenjualanBulananMinAggregateOutputType | null
    _max: PenjualanBulananMaxAggregateOutputType | null
  }

  type GetPenjualanBulananGroupByPayload<T extends penjualanBulananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenjualanBulananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenjualanBulananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenjualanBulananGroupByOutputType[P]>
            : GetScalarType<T[P], PenjualanBulananGroupByOutputType[P]>
        }
      >
    >


  export type penjualanBulananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_penjualan_bulanan?: boolean
    id_users?: boolean
    bulan?: boolean
    tahun?: boolean
    total?: boolean
    hasilPrediksi?: boolean | penjualanBulanan$hasilPrediksiArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | PenjualanBulananCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualanBulanan"]>

  export type penjualanBulananSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_penjualan_bulanan?: boolean
    id_users?: boolean
    bulan?: boolean
    tahun?: boolean
    total?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualanBulanan"]>

  export type penjualanBulananSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_penjualan_bulanan?: boolean
    id_users?: boolean
    bulan?: boolean
    tahun?: boolean
    total?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualanBulanan"]>

  export type penjualanBulananSelectScalar = {
    id_penjualan_bulanan?: boolean
    id_users?: boolean
    bulan?: boolean
    tahun?: boolean
    total?: boolean
  }

  export type penjualanBulananOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_penjualan_bulanan" | "id_users" | "bulan" | "tahun" | "total", ExtArgs["result"]["penjualanBulanan"]>
  export type penjualanBulananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hasilPrediksi?: boolean | penjualanBulanan$hasilPrediksiArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | PenjualanBulananCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type penjualanBulananIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type penjualanBulananIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $penjualanBulananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "penjualanBulanan"
    objects: {
      hasilPrediksi: Prisma.$hasilPrediksiPayload<ExtArgs>[]
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_penjualan_bulanan: number
      id_users: number
      bulan: number
      tahun: number
      total: number
    }, ExtArgs["result"]["penjualanBulanan"]>
    composites: {}
  }

  type penjualanBulananGetPayload<S extends boolean | null | undefined | penjualanBulananDefaultArgs> = $Result.GetResult<Prisma.$penjualanBulananPayload, S>

  type penjualanBulananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<penjualanBulananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenjualanBulananCountAggregateInputType | true
    }

  export interface penjualanBulananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['penjualanBulanan'], meta: { name: 'penjualanBulanan' } }
    /**
     * Find zero or one PenjualanBulanan that matches the filter.
     * @param {penjualanBulananFindUniqueArgs} args - Arguments to find a PenjualanBulanan
     * @example
     * // Get one PenjualanBulanan
     * const penjualanBulanan = await prisma.penjualanBulanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends penjualanBulananFindUniqueArgs>(args: SelectSubset<T, penjualanBulananFindUniqueArgs<ExtArgs>>): Prisma__penjualanBulananClient<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PenjualanBulanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {penjualanBulananFindUniqueOrThrowArgs} args - Arguments to find a PenjualanBulanan
     * @example
     * // Get one PenjualanBulanan
     * const penjualanBulanan = await prisma.penjualanBulanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends penjualanBulananFindUniqueOrThrowArgs>(args: SelectSubset<T, penjualanBulananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__penjualanBulananClient<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PenjualanBulanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanBulananFindFirstArgs} args - Arguments to find a PenjualanBulanan
     * @example
     * // Get one PenjualanBulanan
     * const penjualanBulanan = await prisma.penjualanBulanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends penjualanBulananFindFirstArgs>(args?: SelectSubset<T, penjualanBulananFindFirstArgs<ExtArgs>>): Prisma__penjualanBulananClient<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PenjualanBulanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanBulananFindFirstOrThrowArgs} args - Arguments to find a PenjualanBulanan
     * @example
     * // Get one PenjualanBulanan
     * const penjualanBulanan = await prisma.penjualanBulanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends penjualanBulananFindFirstOrThrowArgs>(args?: SelectSubset<T, penjualanBulananFindFirstOrThrowArgs<ExtArgs>>): Prisma__penjualanBulananClient<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PenjualanBulanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanBulananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PenjualanBulanans
     * const penjualanBulanans = await prisma.penjualanBulanan.findMany()
     * 
     * // Get first 10 PenjualanBulanans
     * const penjualanBulanans = await prisma.penjualanBulanan.findMany({ take: 10 })
     * 
     * // Only select the `id_penjualan_bulanan`
     * const penjualanBulananWithId_penjualan_bulananOnly = await prisma.penjualanBulanan.findMany({ select: { id_penjualan_bulanan: true } })
     * 
     */
    findMany<T extends penjualanBulananFindManyArgs>(args?: SelectSubset<T, penjualanBulananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PenjualanBulanan.
     * @param {penjualanBulananCreateArgs} args - Arguments to create a PenjualanBulanan.
     * @example
     * // Create one PenjualanBulanan
     * const PenjualanBulanan = await prisma.penjualanBulanan.create({
     *   data: {
     *     // ... data to create a PenjualanBulanan
     *   }
     * })
     * 
     */
    create<T extends penjualanBulananCreateArgs>(args: SelectSubset<T, penjualanBulananCreateArgs<ExtArgs>>): Prisma__penjualanBulananClient<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PenjualanBulanans.
     * @param {penjualanBulananCreateManyArgs} args - Arguments to create many PenjualanBulanans.
     * @example
     * // Create many PenjualanBulanans
     * const penjualanBulanan = await prisma.penjualanBulanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends penjualanBulananCreateManyArgs>(args?: SelectSubset<T, penjualanBulananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PenjualanBulanans and returns the data saved in the database.
     * @param {penjualanBulananCreateManyAndReturnArgs} args - Arguments to create many PenjualanBulanans.
     * @example
     * // Create many PenjualanBulanans
     * const penjualanBulanan = await prisma.penjualanBulanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PenjualanBulanans and only return the `id_penjualan_bulanan`
     * const penjualanBulananWithId_penjualan_bulananOnly = await prisma.penjualanBulanan.createManyAndReturn({
     *   select: { id_penjualan_bulanan: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends penjualanBulananCreateManyAndReturnArgs>(args?: SelectSubset<T, penjualanBulananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PenjualanBulanan.
     * @param {penjualanBulananDeleteArgs} args - Arguments to delete one PenjualanBulanan.
     * @example
     * // Delete one PenjualanBulanan
     * const PenjualanBulanan = await prisma.penjualanBulanan.delete({
     *   where: {
     *     // ... filter to delete one PenjualanBulanan
     *   }
     * })
     * 
     */
    delete<T extends penjualanBulananDeleteArgs>(args: SelectSubset<T, penjualanBulananDeleteArgs<ExtArgs>>): Prisma__penjualanBulananClient<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PenjualanBulanan.
     * @param {penjualanBulananUpdateArgs} args - Arguments to update one PenjualanBulanan.
     * @example
     * // Update one PenjualanBulanan
     * const penjualanBulanan = await prisma.penjualanBulanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends penjualanBulananUpdateArgs>(args: SelectSubset<T, penjualanBulananUpdateArgs<ExtArgs>>): Prisma__penjualanBulananClient<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PenjualanBulanans.
     * @param {penjualanBulananDeleteManyArgs} args - Arguments to filter PenjualanBulanans to delete.
     * @example
     * // Delete a few PenjualanBulanans
     * const { count } = await prisma.penjualanBulanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends penjualanBulananDeleteManyArgs>(args?: SelectSubset<T, penjualanBulananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PenjualanBulanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanBulananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PenjualanBulanans
     * const penjualanBulanan = await prisma.penjualanBulanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends penjualanBulananUpdateManyArgs>(args: SelectSubset<T, penjualanBulananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PenjualanBulanans and returns the data updated in the database.
     * @param {penjualanBulananUpdateManyAndReturnArgs} args - Arguments to update many PenjualanBulanans.
     * @example
     * // Update many PenjualanBulanans
     * const penjualanBulanan = await prisma.penjualanBulanan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PenjualanBulanans and only return the `id_penjualan_bulanan`
     * const penjualanBulananWithId_penjualan_bulananOnly = await prisma.penjualanBulanan.updateManyAndReturn({
     *   select: { id_penjualan_bulanan: true },
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
    updateManyAndReturn<T extends penjualanBulananUpdateManyAndReturnArgs>(args: SelectSubset<T, penjualanBulananUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PenjualanBulanan.
     * @param {penjualanBulananUpsertArgs} args - Arguments to update or create a PenjualanBulanan.
     * @example
     * // Update or create a PenjualanBulanan
     * const penjualanBulanan = await prisma.penjualanBulanan.upsert({
     *   create: {
     *     // ... data to create a PenjualanBulanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PenjualanBulanan we want to update
     *   }
     * })
     */
    upsert<T extends penjualanBulananUpsertArgs>(args: SelectSubset<T, penjualanBulananUpsertArgs<ExtArgs>>): Prisma__penjualanBulananClient<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PenjualanBulanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanBulananCountArgs} args - Arguments to filter PenjualanBulanans to count.
     * @example
     * // Count the number of PenjualanBulanans
     * const count = await prisma.penjualanBulanan.count({
     *   where: {
     *     // ... the filter for the PenjualanBulanans we want to count
     *   }
     * })
    **/
    count<T extends penjualanBulananCountArgs>(
      args?: Subset<T, penjualanBulananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenjualanBulananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PenjualanBulanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanBulananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenjualanBulananAggregateArgs>(args: Subset<T, PenjualanBulananAggregateArgs>): Prisma.PrismaPromise<GetPenjualanBulananAggregateType<T>>

    /**
     * Group by PenjualanBulanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanBulananGroupByArgs} args - Group by arguments.
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
      T extends penjualanBulananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: penjualanBulananGroupByArgs['orderBy'] }
        : { orderBy?: penjualanBulananGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, penjualanBulananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenjualanBulananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the penjualanBulanan model
   */
  readonly fields: penjualanBulananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for penjualanBulanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__penjualanBulananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hasilPrediksi<T extends penjualanBulanan$hasilPrediksiArgs<ExtArgs> = {}>(args?: Subset<T, penjualanBulanan$hasilPrediksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hasilPrediksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the penjualanBulanan model
   */
  interface penjualanBulananFieldRefs {
    readonly id_penjualan_bulanan: FieldRef<"penjualanBulanan", 'Int'>
    readonly id_users: FieldRef<"penjualanBulanan", 'Int'>
    readonly bulan: FieldRef<"penjualanBulanan", 'Int'>
    readonly tahun: FieldRef<"penjualanBulanan", 'Int'>
    readonly total: FieldRef<"penjualanBulanan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * penjualanBulanan findUnique
   */
  export type penjualanBulananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananInclude<ExtArgs> | null
    /**
     * Filter, which penjualanBulanan to fetch.
     */
    where: penjualanBulananWhereUniqueInput
  }

  /**
   * penjualanBulanan findUniqueOrThrow
   */
  export type penjualanBulananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananInclude<ExtArgs> | null
    /**
     * Filter, which penjualanBulanan to fetch.
     */
    where: penjualanBulananWhereUniqueInput
  }

  /**
   * penjualanBulanan findFirst
   */
  export type penjualanBulananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananInclude<ExtArgs> | null
    /**
     * Filter, which penjualanBulanan to fetch.
     */
    where?: penjualanBulananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualanBulanans to fetch.
     */
    orderBy?: penjualanBulananOrderByWithRelationInput | penjualanBulananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penjualanBulanans.
     */
    cursor?: penjualanBulananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualanBulanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualanBulanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penjualanBulanans.
     */
    distinct?: PenjualanBulananScalarFieldEnum | PenjualanBulananScalarFieldEnum[]
  }

  /**
   * penjualanBulanan findFirstOrThrow
   */
  export type penjualanBulananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananInclude<ExtArgs> | null
    /**
     * Filter, which penjualanBulanan to fetch.
     */
    where?: penjualanBulananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualanBulanans to fetch.
     */
    orderBy?: penjualanBulananOrderByWithRelationInput | penjualanBulananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penjualanBulanans.
     */
    cursor?: penjualanBulananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualanBulanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualanBulanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penjualanBulanans.
     */
    distinct?: PenjualanBulananScalarFieldEnum | PenjualanBulananScalarFieldEnum[]
  }

  /**
   * penjualanBulanan findMany
   */
  export type penjualanBulananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananInclude<ExtArgs> | null
    /**
     * Filter, which penjualanBulanans to fetch.
     */
    where?: penjualanBulananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualanBulanans to fetch.
     */
    orderBy?: penjualanBulananOrderByWithRelationInput | penjualanBulananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing penjualanBulanans.
     */
    cursor?: penjualanBulananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualanBulanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualanBulanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penjualanBulanans.
     */
    distinct?: PenjualanBulananScalarFieldEnum | PenjualanBulananScalarFieldEnum[]
  }

  /**
   * penjualanBulanan create
   */
  export type penjualanBulananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananInclude<ExtArgs> | null
    /**
     * The data needed to create a penjualanBulanan.
     */
    data: XOR<penjualanBulananCreateInput, penjualanBulananUncheckedCreateInput>
  }

  /**
   * penjualanBulanan createMany
   */
  export type penjualanBulananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many penjualanBulanans.
     */
    data: penjualanBulananCreateManyInput | penjualanBulananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * penjualanBulanan createManyAndReturn
   */
  export type penjualanBulananCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * The data used to create many penjualanBulanans.
     */
    data: penjualanBulananCreateManyInput | penjualanBulananCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * penjualanBulanan update
   */
  export type penjualanBulananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananInclude<ExtArgs> | null
    /**
     * The data needed to update a penjualanBulanan.
     */
    data: XOR<penjualanBulananUpdateInput, penjualanBulananUncheckedUpdateInput>
    /**
     * Choose, which penjualanBulanan to update.
     */
    where: penjualanBulananWhereUniqueInput
  }

  /**
   * penjualanBulanan updateMany
   */
  export type penjualanBulananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update penjualanBulanans.
     */
    data: XOR<penjualanBulananUpdateManyMutationInput, penjualanBulananUncheckedUpdateManyInput>
    /**
     * Filter which penjualanBulanans to update
     */
    where?: penjualanBulananWhereInput
    /**
     * Limit how many penjualanBulanans to update.
     */
    limit?: number
  }

  /**
   * penjualanBulanan updateManyAndReturn
   */
  export type penjualanBulananUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * The data used to update penjualanBulanans.
     */
    data: XOR<penjualanBulananUpdateManyMutationInput, penjualanBulananUncheckedUpdateManyInput>
    /**
     * Filter which penjualanBulanans to update
     */
    where?: penjualanBulananWhereInput
    /**
     * Limit how many penjualanBulanans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * penjualanBulanan upsert
   */
  export type penjualanBulananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananInclude<ExtArgs> | null
    /**
     * The filter to search for the penjualanBulanan to update in case it exists.
     */
    where: penjualanBulananWhereUniqueInput
    /**
     * In case the penjualanBulanan found by the `where` argument doesn't exist, create a new penjualanBulanan with this data.
     */
    create: XOR<penjualanBulananCreateInput, penjualanBulananUncheckedCreateInput>
    /**
     * In case the penjualanBulanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<penjualanBulananUpdateInput, penjualanBulananUncheckedUpdateInput>
  }

  /**
   * penjualanBulanan delete
   */
  export type penjualanBulananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananInclude<ExtArgs> | null
    /**
     * Filter which penjualanBulanan to delete.
     */
    where: penjualanBulananWhereUniqueInput
  }

  /**
   * penjualanBulanan deleteMany
   */
  export type penjualanBulananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penjualanBulanans to delete
     */
    where?: penjualanBulananWhereInput
    /**
     * Limit how many penjualanBulanans to delete.
     */
    limit?: number
  }

  /**
   * penjualanBulanan.hasilPrediksi
   */
  export type penjualanBulanan$hasilPrediksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiInclude<ExtArgs> | null
    where?: hasilPrediksiWhereInput
    orderBy?: hasilPrediksiOrderByWithRelationInput | hasilPrediksiOrderByWithRelationInput[]
    cursor?: hasilPrediksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HasilPrediksiScalarFieldEnum | HasilPrediksiScalarFieldEnum[]
  }

  /**
   * penjualanBulanan without action
   */
  export type penjualanBulananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanBulanan
     */
    select?: penjualanBulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanBulanan
     */
    omit?: penjualanBulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanBulananInclude<ExtArgs> | null
  }


  /**
   * Model penjualanHarian
   */

  export type AggregatePenjualanHarian = {
    _count: PenjualanHarianCountAggregateOutputType | null
    _avg: PenjualanHarianAvgAggregateOutputType | null
    _sum: PenjualanHarianSumAggregateOutputType | null
    _min: PenjualanHarianMinAggregateOutputType | null
    _max: PenjualanHarianMaxAggregateOutputType | null
  }

  export type PenjualanHarianAvgAggregateOutputType = {
    id_penjualan_harian: number | null
    id_users: number | null
    terjual: number | null
  }

  export type PenjualanHarianSumAggregateOutputType = {
    id_penjualan_harian: number | null
    id_users: number | null
    terjual: number | null
  }

  export type PenjualanHarianMinAggregateOutputType = {
    id_penjualan_harian: number | null
    id_users: number | null
    tanggal: Date | null
    terjual: number | null
  }

  export type PenjualanHarianMaxAggregateOutputType = {
    id_penjualan_harian: number | null
    id_users: number | null
    tanggal: Date | null
    terjual: number | null
  }

  export type PenjualanHarianCountAggregateOutputType = {
    id_penjualan_harian: number
    id_users: number
    tanggal: number
    terjual: number
    _all: number
  }


  export type PenjualanHarianAvgAggregateInputType = {
    id_penjualan_harian?: true
    id_users?: true
    terjual?: true
  }

  export type PenjualanHarianSumAggregateInputType = {
    id_penjualan_harian?: true
    id_users?: true
    terjual?: true
  }

  export type PenjualanHarianMinAggregateInputType = {
    id_penjualan_harian?: true
    id_users?: true
    tanggal?: true
    terjual?: true
  }

  export type PenjualanHarianMaxAggregateInputType = {
    id_penjualan_harian?: true
    id_users?: true
    tanggal?: true
    terjual?: true
  }

  export type PenjualanHarianCountAggregateInputType = {
    id_penjualan_harian?: true
    id_users?: true
    tanggal?: true
    terjual?: true
    _all?: true
  }

  export type PenjualanHarianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penjualanHarian to aggregate.
     */
    where?: penjualanHarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualanHarians to fetch.
     */
    orderBy?: penjualanHarianOrderByWithRelationInput | penjualanHarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: penjualanHarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualanHarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualanHarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned penjualanHarians
    **/
    _count?: true | PenjualanHarianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenjualanHarianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenjualanHarianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenjualanHarianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenjualanHarianMaxAggregateInputType
  }

  export type GetPenjualanHarianAggregateType<T extends PenjualanHarianAggregateArgs> = {
        [P in keyof T & keyof AggregatePenjualanHarian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenjualanHarian[P]>
      : GetScalarType<T[P], AggregatePenjualanHarian[P]>
  }




  export type penjualanHarianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penjualanHarianWhereInput
    orderBy?: penjualanHarianOrderByWithAggregationInput | penjualanHarianOrderByWithAggregationInput[]
    by: PenjualanHarianScalarFieldEnum[] | PenjualanHarianScalarFieldEnum
    having?: penjualanHarianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenjualanHarianCountAggregateInputType | true
    _avg?: PenjualanHarianAvgAggregateInputType
    _sum?: PenjualanHarianSumAggregateInputType
    _min?: PenjualanHarianMinAggregateInputType
    _max?: PenjualanHarianMaxAggregateInputType
  }

  export type PenjualanHarianGroupByOutputType = {
    id_penjualan_harian: number
    id_users: number
    tanggal: Date
    terjual: number
    _count: PenjualanHarianCountAggregateOutputType | null
    _avg: PenjualanHarianAvgAggregateOutputType | null
    _sum: PenjualanHarianSumAggregateOutputType | null
    _min: PenjualanHarianMinAggregateOutputType | null
    _max: PenjualanHarianMaxAggregateOutputType | null
  }

  type GetPenjualanHarianGroupByPayload<T extends penjualanHarianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenjualanHarianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenjualanHarianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenjualanHarianGroupByOutputType[P]>
            : GetScalarType<T[P], PenjualanHarianGroupByOutputType[P]>
        }
      >
    >


  export type penjualanHarianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_penjualan_harian?: boolean
    id_users?: boolean
    tanggal?: boolean
    terjual?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualanHarian"]>

  export type penjualanHarianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_penjualan_harian?: boolean
    id_users?: boolean
    tanggal?: boolean
    terjual?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualanHarian"]>

  export type penjualanHarianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_penjualan_harian?: boolean
    id_users?: boolean
    tanggal?: boolean
    terjual?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualanHarian"]>

  export type penjualanHarianSelectScalar = {
    id_penjualan_harian?: boolean
    id_users?: boolean
    tanggal?: boolean
    terjual?: boolean
  }

  export type penjualanHarianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_penjualan_harian" | "id_users" | "tanggal" | "terjual", ExtArgs["result"]["penjualanHarian"]>
  export type penjualanHarianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type penjualanHarianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type penjualanHarianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $penjualanHarianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "penjualanHarian"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_penjualan_harian: number
      id_users: number
      tanggal: Date
      terjual: number
    }, ExtArgs["result"]["penjualanHarian"]>
    composites: {}
  }

  type penjualanHarianGetPayload<S extends boolean | null | undefined | penjualanHarianDefaultArgs> = $Result.GetResult<Prisma.$penjualanHarianPayload, S>

  type penjualanHarianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<penjualanHarianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenjualanHarianCountAggregateInputType | true
    }

  export interface penjualanHarianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['penjualanHarian'], meta: { name: 'penjualanHarian' } }
    /**
     * Find zero or one PenjualanHarian that matches the filter.
     * @param {penjualanHarianFindUniqueArgs} args - Arguments to find a PenjualanHarian
     * @example
     * // Get one PenjualanHarian
     * const penjualanHarian = await prisma.penjualanHarian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends penjualanHarianFindUniqueArgs>(args: SelectSubset<T, penjualanHarianFindUniqueArgs<ExtArgs>>): Prisma__penjualanHarianClient<$Result.GetResult<Prisma.$penjualanHarianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PenjualanHarian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {penjualanHarianFindUniqueOrThrowArgs} args - Arguments to find a PenjualanHarian
     * @example
     * // Get one PenjualanHarian
     * const penjualanHarian = await prisma.penjualanHarian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends penjualanHarianFindUniqueOrThrowArgs>(args: SelectSubset<T, penjualanHarianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__penjualanHarianClient<$Result.GetResult<Prisma.$penjualanHarianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PenjualanHarian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanHarianFindFirstArgs} args - Arguments to find a PenjualanHarian
     * @example
     * // Get one PenjualanHarian
     * const penjualanHarian = await prisma.penjualanHarian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends penjualanHarianFindFirstArgs>(args?: SelectSubset<T, penjualanHarianFindFirstArgs<ExtArgs>>): Prisma__penjualanHarianClient<$Result.GetResult<Prisma.$penjualanHarianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PenjualanHarian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanHarianFindFirstOrThrowArgs} args - Arguments to find a PenjualanHarian
     * @example
     * // Get one PenjualanHarian
     * const penjualanHarian = await prisma.penjualanHarian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends penjualanHarianFindFirstOrThrowArgs>(args?: SelectSubset<T, penjualanHarianFindFirstOrThrowArgs<ExtArgs>>): Prisma__penjualanHarianClient<$Result.GetResult<Prisma.$penjualanHarianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PenjualanHarians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanHarianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PenjualanHarians
     * const penjualanHarians = await prisma.penjualanHarian.findMany()
     * 
     * // Get first 10 PenjualanHarians
     * const penjualanHarians = await prisma.penjualanHarian.findMany({ take: 10 })
     * 
     * // Only select the `id_penjualan_harian`
     * const penjualanHarianWithId_penjualan_harianOnly = await prisma.penjualanHarian.findMany({ select: { id_penjualan_harian: true } })
     * 
     */
    findMany<T extends penjualanHarianFindManyArgs>(args?: SelectSubset<T, penjualanHarianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanHarianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PenjualanHarian.
     * @param {penjualanHarianCreateArgs} args - Arguments to create a PenjualanHarian.
     * @example
     * // Create one PenjualanHarian
     * const PenjualanHarian = await prisma.penjualanHarian.create({
     *   data: {
     *     // ... data to create a PenjualanHarian
     *   }
     * })
     * 
     */
    create<T extends penjualanHarianCreateArgs>(args: SelectSubset<T, penjualanHarianCreateArgs<ExtArgs>>): Prisma__penjualanHarianClient<$Result.GetResult<Prisma.$penjualanHarianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PenjualanHarians.
     * @param {penjualanHarianCreateManyArgs} args - Arguments to create many PenjualanHarians.
     * @example
     * // Create many PenjualanHarians
     * const penjualanHarian = await prisma.penjualanHarian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends penjualanHarianCreateManyArgs>(args?: SelectSubset<T, penjualanHarianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PenjualanHarians and returns the data saved in the database.
     * @param {penjualanHarianCreateManyAndReturnArgs} args - Arguments to create many PenjualanHarians.
     * @example
     * // Create many PenjualanHarians
     * const penjualanHarian = await prisma.penjualanHarian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PenjualanHarians and only return the `id_penjualan_harian`
     * const penjualanHarianWithId_penjualan_harianOnly = await prisma.penjualanHarian.createManyAndReturn({
     *   select: { id_penjualan_harian: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends penjualanHarianCreateManyAndReturnArgs>(args?: SelectSubset<T, penjualanHarianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanHarianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PenjualanHarian.
     * @param {penjualanHarianDeleteArgs} args - Arguments to delete one PenjualanHarian.
     * @example
     * // Delete one PenjualanHarian
     * const PenjualanHarian = await prisma.penjualanHarian.delete({
     *   where: {
     *     // ... filter to delete one PenjualanHarian
     *   }
     * })
     * 
     */
    delete<T extends penjualanHarianDeleteArgs>(args: SelectSubset<T, penjualanHarianDeleteArgs<ExtArgs>>): Prisma__penjualanHarianClient<$Result.GetResult<Prisma.$penjualanHarianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PenjualanHarian.
     * @param {penjualanHarianUpdateArgs} args - Arguments to update one PenjualanHarian.
     * @example
     * // Update one PenjualanHarian
     * const penjualanHarian = await prisma.penjualanHarian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends penjualanHarianUpdateArgs>(args: SelectSubset<T, penjualanHarianUpdateArgs<ExtArgs>>): Prisma__penjualanHarianClient<$Result.GetResult<Prisma.$penjualanHarianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PenjualanHarians.
     * @param {penjualanHarianDeleteManyArgs} args - Arguments to filter PenjualanHarians to delete.
     * @example
     * // Delete a few PenjualanHarians
     * const { count } = await prisma.penjualanHarian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends penjualanHarianDeleteManyArgs>(args?: SelectSubset<T, penjualanHarianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PenjualanHarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanHarianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PenjualanHarians
     * const penjualanHarian = await prisma.penjualanHarian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends penjualanHarianUpdateManyArgs>(args: SelectSubset<T, penjualanHarianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PenjualanHarians and returns the data updated in the database.
     * @param {penjualanHarianUpdateManyAndReturnArgs} args - Arguments to update many PenjualanHarians.
     * @example
     * // Update many PenjualanHarians
     * const penjualanHarian = await prisma.penjualanHarian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PenjualanHarians and only return the `id_penjualan_harian`
     * const penjualanHarianWithId_penjualan_harianOnly = await prisma.penjualanHarian.updateManyAndReturn({
     *   select: { id_penjualan_harian: true },
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
    updateManyAndReturn<T extends penjualanHarianUpdateManyAndReturnArgs>(args: SelectSubset<T, penjualanHarianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanHarianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PenjualanHarian.
     * @param {penjualanHarianUpsertArgs} args - Arguments to update or create a PenjualanHarian.
     * @example
     * // Update or create a PenjualanHarian
     * const penjualanHarian = await prisma.penjualanHarian.upsert({
     *   create: {
     *     // ... data to create a PenjualanHarian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PenjualanHarian we want to update
     *   }
     * })
     */
    upsert<T extends penjualanHarianUpsertArgs>(args: SelectSubset<T, penjualanHarianUpsertArgs<ExtArgs>>): Prisma__penjualanHarianClient<$Result.GetResult<Prisma.$penjualanHarianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PenjualanHarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanHarianCountArgs} args - Arguments to filter PenjualanHarians to count.
     * @example
     * // Count the number of PenjualanHarians
     * const count = await prisma.penjualanHarian.count({
     *   where: {
     *     // ... the filter for the PenjualanHarians we want to count
     *   }
     * })
    **/
    count<T extends penjualanHarianCountArgs>(
      args?: Subset<T, penjualanHarianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenjualanHarianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PenjualanHarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanHarianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenjualanHarianAggregateArgs>(args: Subset<T, PenjualanHarianAggregateArgs>): Prisma.PrismaPromise<GetPenjualanHarianAggregateType<T>>

    /**
     * Group by PenjualanHarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanHarianGroupByArgs} args - Group by arguments.
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
      T extends penjualanHarianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: penjualanHarianGroupByArgs['orderBy'] }
        : { orderBy?: penjualanHarianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, penjualanHarianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenjualanHarianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the penjualanHarian model
   */
  readonly fields: penjualanHarianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for penjualanHarian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__penjualanHarianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the penjualanHarian model
   */
  interface penjualanHarianFieldRefs {
    readonly id_penjualan_harian: FieldRef<"penjualanHarian", 'Int'>
    readonly id_users: FieldRef<"penjualanHarian", 'Int'>
    readonly tanggal: FieldRef<"penjualanHarian", 'DateTime'>
    readonly terjual: FieldRef<"penjualanHarian", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * penjualanHarian findUnique
   */
  export type penjualanHarianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianInclude<ExtArgs> | null
    /**
     * Filter, which penjualanHarian to fetch.
     */
    where: penjualanHarianWhereUniqueInput
  }

  /**
   * penjualanHarian findUniqueOrThrow
   */
  export type penjualanHarianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianInclude<ExtArgs> | null
    /**
     * Filter, which penjualanHarian to fetch.
     */
    where: penjualanHarianWhereUniqueInput
  }

  /**
   * penjualanHarian findFirst
   */
  export type penjualanHarianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianInclude<ExtArgs> | null
    /**
     * Filter, which penjualanHarian to fetch.
     */
    where?: penjualanHarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualanHarians to fetch.
     */
    orderBy?: penjualanHarianOrderByWithRelationInput | penjualanHarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penjualanHarians.
     */
    cursor?: penjualanHarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualanHarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualanHarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penjualanHarians.
     */
    distinct?: PenjualanHarianScalarFieldEnum | PenjualanHarianScalarFieldEnum[]
  }

  /**
   * penjualanHarian findFirstOrThrow
   */
  export type penjualanHarianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianInclude<ExtArgs> | null
    /**
     * Filter, which penjualanHarian to fetch.
     */
    where?: penjualanHarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualanHarians to fetch.
     */
    orderBy?: penjualanHarianOrderByWithRelationInput | penjualanHarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penjualanHarians.
     */
    cursor?: penjualanHarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualanHarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualanHarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penjualanHarians.
     */
    distinct?: PenjualanHarianScalarFieldEnum | PenjualanHarianScalarFieldEnum[]
  }

  /**
   * penjualanHarian findMany
   */
  export type penjualanHarianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianInclude<ExtArgs> | null
    /**
     * Filter, which penjualanHarians to fetch.
     */
    where?: penjualanHarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualanHarians to fetch.
     */
    orderBy?: penjualanHarianOrderByWithRelationInput | penjualanHarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing penjualanHarians.
     */
    cursor?: penjualanHarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualanHarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualanHarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penjualanHarians.
     */
    distinct?: PenjualanHarianScalarFieldEnum | PenjualanHarianScalarFieldEnum[]
  }

  /**
   * penjualanHarian create
   */
  export type penjualanHarianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianInclude<ExtArgs> | null
    /**
     * The data needed to create a penjualanHarian.
     */
    data: XOR<penjualanHarianCreateInput, penjualanHarianUncheckedCreateInput>
  }

  /**
   * penjualanHarian createMany
   */
  export type penjualanHarianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many penjualanHarians.
     */
    data: penjualanHarianCreateManyInput | penjualanHarianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * penjualanHarian createManyAndReturn
   */
  export type penjualanHarianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * The data used to create many penjualanHarians.
     */
    data: penjualanHarianCreateManyInput | penjualanHarianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * penjualanHarian update
   */
  export type penjualanHarianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianInclude<ExtArgs> | null
    /**
     * The data needed to update a penjualanHarian.
     */
    data: XOR<penjualanHarianUpdateInput, penjualanHarianUncheckedUpdateInput>
    /**
     * Choose, which penjualanHarian to update.
     */
    where: penjualanHarianWhereUniqueInput
  }

  /**
   * penjualanHarian updateMany
   */
  export type penjualanHarianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update penjualanHarians.
     */
    data: XOR<penjualanHarianUpdateManyMutationInput, penjualanHarianUncheckedUpdateManyInput>
    /**
     * Filter which penjualanHarians to update
     */
    where?: penjualanHarianWhereInput
    /**
     * Limit how many penjualanHarians to update.
     */
    limit?: number
  }

  /**
   * penjualanHarian updateManyAndReturn
   */
  export type penjualanHarianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * The data used to update penjualanHarians.
     */
    data: XOR<penjualanHarianUpdateManyMutationInput, penjualanHarianUncheckedUpdateManyInput>
    /**
     * Filter which penjualanHarians to update
     */
    where?: penjualanHarianWhereInput
    /**
     * Limit how many penjualanHarians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * penjualanHarian upsert
   */
  export type penjualanHarianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianInclude<ExtArgs> | null
    /**
     * The filter to search for the penjualanHarian to update in case it exists.
     */
    where: penjualanHarianWhereUniqueInput
    /**
     * In case the penjualanHarian found by the `where` argument doesn't exist, create a new penjualanHarian with this data.
     */
    create: XOR<penjualanHarianCreateInput, penjualanHarianUncheckedCreateInput>
    /**
     * In case the penjualanHarian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<penjualanHarianUpdateInput, penjualanHarianUncheckedUpdateInput>
  }

  /**
   * penjualanHarian delete
   */
  export type penjualanHarianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianInclude<ExtArgs> | null
    /**
     * Filter which penjualanHarian to delete.
     */
    where: penjualanHarianWhereUniqueInput
  }

  /**
   * penjualanHarian deleteMany
   */
  export type penjualanHarianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penjualanHarians to delete
     */
    where?: penjualanHarianWhereInput
    /**
     * Limit how many penjualanHarians to delete.
     */
    limit?: number
  }

  /**
   * penjualanHarian without action
   */
  export type penjualanHarianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualanHarian
     */
    select?: penjualanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualanHarian
     */
    omit?: penjualanHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanHarianInclude<ExtArgs> | null
  }


  /**
   * Model hasilPrediksi
   */

  export type AggregateHasilPrediksi = {
    _count: HasilPrediksiCountAggregateOutputType | null
    _avg: HasilPrediksiAvgAggregateOutputType | null
    _sum: HasilPrediksiSumAggregateOutputType | null
    _min: HasilPrediksiMinAggregateOutputType | null
    _max: HasilPrediksiMaxAggregateOutputType | null
  }

  export type HasilPrediksiAvgAggregateOutputType = {
    id_prediksi: number | null
    id_penjualan_bulanan: number | null
    hasil_prediksi: Decimal | null
    error: Decimal | null
  }

  export type HasilPrediksiSumAggregateOutputType = {
    id_prediksi: number | null
    id_penjualan_bulanan: number | null
    hasil_prediksi: Decimal | null
    error: Decimal | null
  }

  export type HasilPrediksiMinAggregateOutputType = {
    id_prediksi: number | null
    id_penjualan_bulanan: number | null
    hasil_prediksi: Decimal | null
    error: Decimal | null
  }

  export type HasilPrediksiMaxAggregateOutputType = {
    id_prediksi: number | null
    id_penjualan_bulanan: number | null
    hasil_prediksi: Decimal | null
    error: Decimal | null
  }

  export type HasilPrediksiCountAggregateOutputType = {
    id_prediksi: number
    id_penjualan_bulanan: number
    hasil_prediksi: number
    error: number
    _all: number
  }


  export type HasilPrediksiAvgAggregateInputType = {
    id_prediksi?: true
    id_penjualan_bulanan?: true
    hasil_prediksi?: true
    error?: true
  }

  export type HasilPrediksiSumAggregateInputType = {
    id_prediksi?: true
    id_penjualan_bulanan?: true
    hasil_prediksi?: true
    error?: true
  }

  export type HasilPrediksiMinAggregateInputType = {
    id_prediksi?: true
    id_penjualan_bulanan?: true
    hasil_prediksi?: true
    error?: true
  }

  export type HasilPrediksiMaxAggregateInputType = {
    id_prediksi?: true
    id_penjualan_bulanan?: true
    hasil_prediksi?: true
    error?: true
  }

  export type HasilPrediksiCountAggregateInputType = {
    id_prediksi?: true
    id_penjualan_bulanan?: true
    hasil_prediksi?: true
    error?: true
    _all?: true
  }

  export type HasilPrediksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hasilPrediksi to aggregate.
     */
    where?: hasilPrediksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hasilPrediksis to fetch.
     */
    orderBy?: hasilPrediksiOrderByWithRelationInput | hasilPrediksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hasilPrediksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hasilPrediksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hasilPrediksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hasilPrediksis
    **/
    _count?: true | HasilPrediksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HasilPrediksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HasilPrediksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HasilPrediksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HasilPrediksiMaxAggregateInputType
  }

  export type GetHasilPrediksiAggregateType<T extends HasilPrediksiAggregateArgs> = {
        [P in keyof T & keyof AggregateHasilPrediksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHasilPrediksi[P]>
      : GetScalarType<T[P], AggregateHasilPrediksi[P]>
  }




  export type hasilPrediksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hasilPrediksiWhereInput
    orderBy?: hasilPrediksiOrderByWithAggregationInput | hasilPrediksiOrderByWithAggregationInput[]
    by: HasilPrediksiScalarFieldEnum[] | HasilPrediksiScalarFieldEnum
    having?: hasilPrediksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HasilPrediksiCountAggregateInputType | true
    _avg?: HasilPrediksiAvgAggregateInputType
    _sum?: HasilPrediksiSumAggregateInputType
    _min?: HasilPrediksiMinAggregateInputType
    _max?: HasilPrediksiMaxAggregateInputType
  }

  export type HasilPrediksiGroupByOutputType = {
    id_prediksi: number
    id_penjualan_bulanan: number
    hasil_prediksi: Decimal
    error: Decimal
    _count: HasilPrediksiCountAggregateOutputType | null
    _avg: HasilPrediksiAvgAggregateOutputType | null
    _sum: HasilPrediksiSumAggregateOutputType | null
    _min: HasilPrediksiMinAggregateOutputType | null
    _max: HasilPrediksiMaxAggregateOutputType | null
  }

  type GetHasilPrediksiGroupByPayload<T extends hasilPrediksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HasilPrediksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HasilPrediksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HasilPrediksiGroupByOutputType[P]>
            : GetScalarType<T[P], HasilPrediksiGroupByOutputType[P]>
        }
      >
    >


  export type hasilPrediksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prediksi?: boolean
    id_penjualan_bulanan?: boolean
    hasil_prediksi?: boolean
    error?: boolean
    penjualanBulanan?: boolean | penjualanBulananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasilPrediksi"]>

  export type hasilPrediksiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prediksi?: boolean
    id_penjualan_bulanan?: boolean
    hasil_prediksi?: boolean
    error?: boolean
    penjualanBulanan?: boolean | penjualanBulananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasilPrediksi"]>

  export type hasilPrediksiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prediksi?: boolean
    id_penjualan_bulanan?: boolean
    hasil_prediksi?: boolean
    error?: boolean
    penjualanBulanan?: boolean | penjualanBulananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasilPrediksi"]>

  export type hasilPrediksiSelectScalar = {
    id_prediksi?: boolean
    id_penjualan_bulanan?: boolean
    hasil_prediksi?: boolean
    error?: boolean
  }

  export type hasilPrediksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prediksi" | "id_penjualan_bulanan" | "hasil_prediksi" | "error", ExtArgs["result"]["hasilPrediksi"]>
  export type hasilPrediksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualanBulanan?: boolean | penjualanBulananDefaultArgs<ExtArgs>
  }
  export type hasilPrediksiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualanBulanan?: boolean | penjualanBulananDefaultArgs<ExtArgs>
  }
  export type hasilPrediksiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualanBulanan?: boolean | penjualanBulananDefaultArgs<ExtArgs>
  }

  export type $hasilPrediksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hasilPrediksi"
    objects: {
      penjualanBulanan: Prisma.$penjualanBulananPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prediksi: number
      id_penjualan_bulanan: number
      hasil_prediksi: Prisma.Decimal
      error: Prisma.Decimal
    }, ExtArgs["result"]["hasilPrediksi"]>
    composites: {}
  }

  type hasilPrediksiGetPayload<S extends boolean | null | undefined | hasilPrediksiDefaultArgs> = $Result.GetResult<Prisma.$hasilPrediksiPayload, S>

  type hasilPrediksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hasilPrediksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HasilPrediksiCountAggregateInputType | true
    }

  export interface hasilPrediksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hasilPrediksi'], meta: { name: 'hasilPrediksi' } }
    /**
     * Find zero or one HasilPrediksi that matches the filter.
     * @param {hasilPrediksiFindUniqueArgs} args - Arguments to find a HasilPrediksi
     * @example
     * // Get one HasilPrediksi
     * const hasilPrediksi = await prisma.hasilPrediksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hasilPrediksiFindUniqueArgs>(args: SelectSubset<T, hasilPrediksiFindUniqueArgs<ExtArgs>>): Prisma__hasilPrediksiClient<$Result.GetResult<Prisma.$hasilPrediksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HasilPrediksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hasilPrediksiFindUniqueOrThrowArgs} args - Arguments to find a HasilPrediksi
     * @example
     * // Get one HasilPrediksi
     * const hasilPrediksi = await prisma.hasilPrediksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hasilPrediksiFindUniqueOrThrowArgs>(args: SelectSubset<T, hasilPrediksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hasilPrediksiClient<$Result.GetResult<Prisma.$hasilPrediksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HasilPrediksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hasilPrediksiFindFirstArgs} args - Arguments to find a HasilPrediksi
     * @example
     * // Get one HasilPrediksi
     * const hasilPrediksi = await prisma.hasilPrediksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hasilPrediksiFindFirstArgs>(args?: SelectSubset<T, hasilPrediksiFindFirstArgs<ExtArgs>>): Prisma__hasilPrediksiClient<$Result.GetResult<Prisma.$hasilPrediksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HasilPrediksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hasilPrediksiFindFirstOrThrowArgs} args - Arguments to find a HasilPrediksi
     * @example
     * // Get one HasilPrediksi
     * const hasilPrediksi = await prisma.hasilPrediksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hasilPrediksiFindFirstOrThrowArgs>(args?: SelectSubset<T, hasilPrediksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__hasilPrediksiClient<$Result.GetResult<Prisma.$hasilPrediksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HasilPrediksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hasilPrediksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HasilPrediksis
     * const hasilPrediksis = await prisma.hasilPrediksi.findMany()
     * 
     * // Get first 10 HasilPrediksis
     * const hasilPrediksis = await prisma.hasilPrediksi.findMany({ take: 10 })
     * 
     * // Only select the `id_prediksi`
     * const hasilPrediksiWithId_prediksiOnly = await prisma.hasilPrediksi.findMany({ select: { id_prediksi: true } })
     * 
     */
    findMany<T extends hasilPrediksiFindManyArgs>(args?: SelectSubset<T, hasilPrediksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hasilPrediksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HasilPrediksi.
     * @param {hasilPrediksiCreateArgs} args - Arguments to create a HasilPrediksi.
     * @example
     * // Create one HasilPrediksi
     * const HasilPrediksi = await prisma.hasilPrediksi.create({
     *   data: {
     *     // ... data to create a HasilPrediksi
     *   }
     * })
     * 
     */
    create<T extends hasilPrediksiCreateArgs>(args: SelectSubset<T, hasilPrediksiCreateArgs<ExtArgs>>): Prisma__hasilPrediksiClient<$Result.GetResult<Prisma.$hasilPrediksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HasilPrediksis.
     * @param {hasilPrediksiCreateManyArgs} args - Arguments to create many HasilPrediksis.
     * @example
     * // Create many HasilPrediksis
     * const hasilPrediksi = await prisma.hasilPrediksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hasilPrediksiCreateManyArgs>(args?: SelectSubset<T, hasilPrediksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HasilPrediksis and returns the data saved in the database.
     * @param {hasilPrediksiCreateManyAndReturnArgs} args - Arguments to create many HasilPrediksis.
     * @example
     * // Create many HasilPrediksis
     * const hasilPrediksi = await prisma.hasilPrediksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HasilPrediksis and only return the `id_prediksi`
     * const hasilPrediksiWithId_prediksiOnly = await prisma.hasilPrediksi.createManyAndReturn({
     *   select: { id_prediksi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hasilPrediksiCreateManyAndReturnArgs>(args?: SelectSubset<T, hasilPrediksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hasilPrediksiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HasilPrediksi.
     * @param {hasilPrediksiDeleteArgs} args - Arguments to delete one HasilPrediksi.
     * @example
     * // Delete one HasilPrediksi
     * const HasilPrediksi = await prisma.hasilPrediksi.delete({
     *   where: {
     *     // ... filter to delete one HasilPrediksi
     *   }
     * })
     * 
     */
    delete<T extends hasilPrediksiDeleteArgs>(args: SelectSubset<T, hasilPrediksiDeleteArgs<ExtArgs>>): Prisma__hasilPrediksiClient<$Result.GetResult<Prisma.$hasilPrediksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HasilPrediksi.
     * @param {hasilPrediksiUpdateArgs} args - Arguments to update one HasilPrediksi.
     * @example
     * // Update one HasilPrediksi
     * const hasilPrediksi = await prisma.hasilPrediksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hasilPrediksiUpdateArgs>(args: SelectSubset<T, hasilPrediksiUpdateArgs<ExtArgs>>): Prisma__hasilPrediksiClient<$Result.GetResult<Prisma.$hasilPrediksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HasilPrediksis.
     * @param {hasilPrediksiDeleteManyArgs} args - Arguments to filter HasilPrediksis to delete.
     * @example
     * // Delete a few HasilPrediksis
     * const { count } = await prisma.hasilPrediksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hasilPrediksiDeleteManyArgs>(args?: SelectSubset<T, hasilPrediksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HasilPrediksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hasilPrediksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HasilPrediksis
     * const hasilPrediksi = await prisma.hasilPrediksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hasilPrediksiUpdateManyArgs>(args: SelectSubset<T, hasilPrediksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HasilPrediksis and returns the data updated in the database.
     * @param {hasilPrediksiUpdateManyAndReturnArgs} args - Arguments to update many HasilPrediksis.
     * @example
     * // Update many HasilPrediksis
     * const hasilPrediksi = await prisma.hasilPrediksi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HasilPrediksis and only return the `id_prediksi`
     * const hasilPrediksiWithId_prediksiOnly = await prisma.hasilPrediksi.updateManyAndReturn({
     *   select: { id_prediksi: true },
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
    updateManyAndReturn<T extends hasilPrediksiUpdateManyAndReturnArgs>(args: SelectSubset<T, hasilPrediksiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hasilPrediksiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HasilPrediksi.
     * @param {hasilPrediksiUpsertArgs} args - Arguments to update or create a HasilPrediksi.
     * @example
     * // Update or create a HasilPrediksi
     * const hasilPrediksi = await prisma.hasilPrediksi.upsert({
     *   create: {
     *     // ... data to create a HasilPrediksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HasilPrediksi we want to update
     *   }
     * })
     */
    upsert<T extends hasilPrediksiUpsertArgs>(args: SelectSubset<T, hasilPrediksiUpsertArgs<ExtArgs>>): Prisma__hasilPrediksiClient<$Result.GetResult<Prisma.$hasilPrediksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HasilPrediksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hasilPrediksiCountArgs} args - Arguments to filter HasilPrediksis to count.
     * @example
     * // Count the number of HasilPrediksis
     * const count = await prisma.hasilPrediksi.count({
     *   where: {
     *     // ... the filter for the HasilPrediksis we want to count
     *   }
     * })
    **/
    count<T extends hasilPrediksiCountArgs>(
      args?: Subset<T, hasilPrediksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HasilPrediksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HasilPrediksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilPrediksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HasilPrediksiAggregateArgs>(args: Subset<T, HasilPrediksiAggregateArgs>): Prisma.PrismaPromise<GetHasilPrediksiAggregateType<T>>

    /**
     * Group by HasilPrediksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hasilPrediksiGroupByArgs} args - Group by arguments.
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
      T extends hasilPrediksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hasilPrediksiGroupByArgs['orderBy'] }
        : { orderBy?: hasilPrediksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hasilPrediksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHasilPrediksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hasilPrediksi model
   */
  readonly fields: hasilPrediksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hasilPrediksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hasilPrediksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penjualanBulanan<T extends penjualanBulananDefaultArgs<ExtArgs> = {}>(args?: Subset<T, penjualanBulananDefaultArgs<ExtArgs>>): Prisma__penjualanBulananClient<$Result.GetResult<Prisma.$penjualanBulananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the hasilPrediksi model
   */
  interface hasilPrediksiFieldRefs {
    readonly id_prediksi: FieldRef<"hasilPrediksi", 'Int'>
    readonly id_penjualan_bulanan: FieldRef<"hasilPrediksi", 'Int'>
    readonly hasil_prediksi: FieldRef<"hasilPrediksi", 'Decimal'>
    readonly error: FieldRef<"hasilPrediksi", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * hasilPrediksi findUnique
   */
  export type hasilPrediksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiInclude<ExtArgs> | null
    /**
     * Filter, which hasilPrediksi to fetch.
     */
    where: hasilPrediksiWhereUniqueInput
  }

  /**
   * hasilPrediksi findUniqueOrThrow
   */
  export type hasilPrediksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiInclude<ExtArgs> | null
    /**
     * Filter, which hasilPrediksi to fetch.
     */
    where: hasilPrediksiWhereUniqueInput
  }

  /**
   * hasilPrediksi findFirst
   */
  export type hasilPrediksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiInclude<ExtArgs> | null
    /**
     * Filter, which hasilPrediksi to fetch.
     */
    where?: hasilPrediksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hasilPrediksis to fetch.
     */
    orderBy?: hasilPrediksiOrderByWithRelationInput | hasilPrediksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hasilPrediksis.
     */
    cursor?: hasilPrediksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hasilPrediksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hasilPrediksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hasilPrediksis.
     */
    distinct?: HasilPrediksiScalarFieldEnum | HasilPrediksiScalarFieldEnum[]
  }

  /**
   * hasilPrediksi findFirstOrThrow
   */
  export type hasilPrediksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiInclude<ExtArgs> | null
    /**
     * Filter, which hasilPrediksi to fetch.
     */
    where?: hasilPrediksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hasilPrediksis to fetch.
     */
    orderBy?: hasilPrediksiOrderByWithRelationInput | hasilPrediksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hasilPrediksis.
     */
    cursor?: hasilPrediksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hasilPrediksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hasilPrediksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hasilPrediksis.
     */
    distinct?: HasilPrediksiScalarFieldEnum | HasilPrediksiScalarFieldEnum[]
  }

  /**
   * hasilPrediksi findMany
   */
  export type hasilPrediksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiInclude<ExtArgs> | null
    /**
     * Filter, which hasilPrediksis to fetch.
     */
    where?: hasilPrediksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hasilPrediksis to fetch.
     */
    orderBy?: hasilPrediksiOrderByWithRelationInput | hasilPrediksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hasilPrediksis.
     */
    cursor?: hasilPrediksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hasilPrediksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hasilPrediksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hasilPrediksis.
     */
    distinct?: HasilPrediksiScalarFieldEnum | HasilPrediksiScalarFieldEnum[]
  }

  /**
   * hasilPrediksi create
   */
  export type hasilPrediksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiInclude<ExtArgs> | null
    /**
     * The data needed to create a hasilPrediksi.
     */
    data: XOR<hasilPrediksiCreateInput, hasilPrediksiUncheckedCreateInput>
  }

  /**
   * hasilPrediksi createMany
   */
  export type hasilPrediksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hasilPrediksis.
     */
    data: hasilPrediksiCreateManyInput | hasilPrediksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hasilPrediksi createManyAndReturn
   */
  export type hasilPrediksiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * The data used to create many hasilPrediksis.
     */
    data: hasilPrediksiCreateManyInput | hasilPrediksiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hasilPrediksi update
   */
  export type hasilPrediksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiInclude<ExtArgs> | null
    /**
     * The data needed to update a hasilPrediksi.
     */
    data: XOR<hasilPrediksiUpdateInput, hasilPrediksiUncheckedUpdateInput>
    /**
     * Choose, which hasilPrediksi to update.
     */
    where: hasilPrediksiWhereUniqueInput
  }

  /**
   * hasilPrediksi updateMany
   */
  export type hasilPrediksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hasilPrediksis.
     */
    data: XOR<hasilPrediksiUpdateManyMutationInput, hasilPrediksiUncheckedUpdateManyInput>
    /**
     * Filter which hasilPrediksis to update
     */
    where?: hasilPrediksiWhereInput
    /**
     * Limit how many hasilPrediksis to update.
     */
    limit?: number
  }

  /**
   * hasilPrediksi updateManyAndReturn
   */
  export type hasilPrediksiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * The data used to update hasilPrediksis.
     */
    data: XOR<hasilPrediksiUpdateManyMutationInput, hasilPrediksiUncheckedUpdateManyInput>
    /**
     * Filter which hasilPrediksis to update
     */
    where?: hasilPrediksiWhereInput
    /**
     * Limit how many hasilPrediksis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hasilPrediksi upsert
   */
  export type hasilPrediksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiInclude<ExtArgs> | null
    /**
     * The filter to search for the hasilPrediksi to update in case it exists.
     */
    where: hasilPrediksiWhereUniqueInput
    /**
     * In case the hasilPrediksi found by the `where` argument doesn't exist, create a new hasilPrediksi with this data.
     */
    create: XOR<hasilPrediksiCreateInput, hasilPrediksiUncheckedCreateInput>
    /**
     * In case the hasilPrediksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hasilPrediksiUpdateInput, hasilPrediksiUncheckedUpdateInput>
  }

  /**
   * hasilPrediksi delete
   */
  export type hasilPrediksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiInclude<ExtArgs> | null
    /**
     * Filter which hasilPrediksi to delete.
     */
    where: hasilPrediksiWhereUniqueInput
  }

  /**
   * hasilPrediksi deleteMany
   */
  export type hasilPrediksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hasilPrediksis to delete
     */
    where?: hasilPrediksiWhereInput
    /**
     * Limit how many hasilPrediksis to delete.
     */
    limit?: number
  }

  /**
   * hasilPrediksi without action
   */
  export type hasilPrediksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hasilPrediksi
     */
    select?: hasilPrediksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hasilPrediksi
     */
    omit?: hasilPrediksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hasilPrediksiInclude<ExtArgs> | null
  }


  /**
   * Model authentications
   */

  export type AggregateAuthentications = {
    _count: AuthenticationsCountAggregateOutputType | null
    _avg: AuthenticationsAvgAggregateOutputType | null
    _sum: AuthenticationsSumAggregateOutputType | null
    _min: AuthenticationsMinAggregateOutputType | null
    _max: AuthenticationsMaxAggregateOutputType | null
  }

  export type AuthenticationsAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthenticationsSumAggregateOutputType = {
    id: number | null
  }

  export type AuthenticationsMinAggregateOutputType = {
    id: number | null
    token: string | null
  }

  export type AuthenticationsMaxAggregateOutputType = {
    id: number | null
    token: string | null
  }

  export type AuthenticationsCountAggregateOutputType = {
    id: number
    token: number
    _all: number
  }


  export type AuthenticationsAvgAggregateInputType = {
    id?: true
  }

  export type AuthenticationsSumAggregateInputType = {
    id?: true
  }

  export type AuthenticationsMinAggregateInputType = {
    id?: true
    token?: true
  }

  export type AuthenticationsMaxAggregateInputType = {
    id?: true
    token?: true
  }

  export type AuthenticationsCountAggregateInputType = {
    id?: true
    token?: true
    _all?: true
  }

  export type AuthenticationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authentications to aggregate.
     */
    where?: authenticationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentications to fetch.
     */
    orderBy?: authenticationsOrderByWithRelationInput | authenticationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authenticationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authentications
    **/
    _count?: true | AuthenticationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthenticationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthenticationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticationsMaxAggregateInputType
  }

  export type GetAuthenticationsAggregateType<T extends AuthenticationsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthentications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthentications[P]>
      : GetScalarType<T[P], AggregateAuthentications[P]>
  }




  export type authenticationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authenticationsWhereInput
    orderBy?: authenticationsOrderByWithAggregationInput | authenticationsOrderByWithAggregationInput[]
    by: AuthenticationsScalarFieldEnum[] | AuthenticationsScalarFieldEnum
    having?: authenticationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticationsCountAggregateInputType | true
    _avg?: AuthenticationsAvgAggregateInputType
    _sum?: AuthenticationsSumAggregateInputType
    _min?: AuthenticationsMinAggregateInputType
    _max?: AuthenticationsMaxAggregateInputType
  }

  export type AuthenticationsGroupByOutputType = {
    id: number
    token: string
    _count: AuthenticationsCountAggregateOutputType | null
    _avg: AuthenticationsAvgAggregateOutputType | null
    _sum: AuthenticationsSumAggregateOutputType | null
    _min: AuthenticationsMinAggregateOutputType | null
    _max: AuthenticationsMaxAggregateOutputType | null
  }

  type GetAuthenticationsGroupByPayload<T extends authenticationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticationsGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticationsGroupByOutputType[P]>
        }
      >
    >


  export type authenticationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
  }, ExtArgs["result"]["authentications"]>

  export type authenticationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
  }, ExtArgs["result"]["authentications"]>

  export type authenticationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
  }, ExtArgs["result"]["authentications"]>

  export type authenticationsSelectScalar = {
    id?: boolean
    token?: boolean
  }

  export type authenticationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token", ExtArgs["result"]["authentications"]>

  export type $authenticationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authentications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
    }, ExtArgs["result"]["authentications"]>
    composites: {}
  }

  type authenticationsGetPayload<S extends boolean | null | undefined | authenticationsDefaultArgs> = $Result.GetResult<Prisma.$authenticationsPayload, S>

  type authenticationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authenticationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthenticationsCountAggregateInputType | true
    }

  export interface authenticationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authentications'], meta: { name: 'authentications' } }
    /**
     * Find zero or one Authentications that matches the filter.
     * @param {authenticationsFindUniqueArgs} args - Arguments to find a Authentications
     * @example
     * // Get one Authentications
     * const authentications = await prisma.authentications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authenticationsFindUniqueArgs>(args: SelectSubset<T, authenticationsFindUniqueArgs<ExtArgs>>): Prisma__authenticationsClient<$Result.GetResult<Prisma.$authenticationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authentications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authenticationsFindUniqueOrThrowArgs} args - Arguments to find a Authentications
     * @example
     * // Get one Authentications
     * const authentications = await prisma.authentications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authenticationsFindUniqueOrThrowArgs>(args: SelectSubset<T, authenticationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authenticationsClient<$Result.GetResult<Prisma.$authenticationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authentications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationsFindFirstArgs} args - Arguments to find a Authentications
     * @example
     * // Get one Authentications
     * const authentications = await prisma.authentications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authenticationsFindFirstArgs>(args?: SelectSubset<T, authenticationsFindFirstArgs<ExtArgs>>): Prisma__authenticationsClient<$Result.GetResult<Prisma.$authenticationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authentications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationsFindFirstOrThrowArgs} args - Arguments to find a Authentications
     * @example
     * // Get one Authentications
     * const authentications = await prisma.authentications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authenticationsFindFirstOrThrowArgs>(args?: SelectSubset<T, authenticationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__authenticationsClient<$Result.GetResult<Prisma.$authenticationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authentications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authentications
     * const authentications = await prisma.authentications.findMany()
     * 
     * // Get first 10 Authentications
     * const authentications = await prisma.authentications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authenticationsWithIdOnly = await prisma.authentications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authenticationsFindManyArgs>(args?: SelectSubset<T, authenticationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authenticationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authentications.
     * @param {authenticationsCreateArgs} args - Arguments to create a Authentications.
     * @example
     * // Create one Authentications
     * const Authentications = await prisma.authentications.create({
     *   data: {
     *     // ... data to create a Authentications
     *   }
     * })
     * 
     */
    create<T extends authenticationsCreateArgs>(args: SelectSubset<T, authenticationsCreateArgs<ExtArgs>>): Prisma__authenticationsClient<$Result.GetResult<Prisma.$authenticationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authentications.
     * @param {authenticationsCreateManyArgs} args - Arguments to create many Authentications.
     * @example
     * // Create many Authentications
     * const authentications = await prisma.authentications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authenticationsCreateManyArgs>(args?: SelectSubset<T, authenticationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authentications and returns the data saved in the database.
     * @param {authenticationsCreateManyAndReturnArgs} args - Arguments to create many Authentications.
     * @example
     * // Create many Authentications
     * const authentications = await prisma.authentications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authentications and only return the `id`
     * const authenticationsWithIdOnly = await prisma.authentications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authenticationsCreateManyAndReturnArgs>(args?: SelectSubset<T, authenticationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authenticationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authentications.
     * @param {authenticationsDeleteArgs} args - Arguments to delete one Authentications.
     * @example
     * // Delete one Authentications
     * const Authentications = await prisma.authentications.delete({
     *   where: {
     *     // ... filter to delete one Authentications
     *   }
     * })
     * 
     */
    delete<T extends authenticationsDeleteArgs>(args: SelectSubset<T, authenticationsDeleteArgs<ExtArgs>>): Prisma__authenticationsClient<$Result.GetResult<Prisma.$authenticationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authentications.
     * @param {authenticationsUpdateArgs} args - Arguments to update one Authentications.
     * @example
     * // Update one Authentications
     * const authentications = await prisma.authentications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authenticationsUpdateArgs>(args: SelectSubset<T, authenticationsUpdateArgs<ExtArgs>>): Prisma__authenticationsClient<$Result.GetResult<Prisma.$authenticationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authentications.
     * @param {authenticationsDeleteManyArgs} args - Arguments to filter Authentications to delete.
     * @example
     * // Delete a few Authentications
     * const { count } = await prisma.authentications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authenticationsDeleteManyArgs>(args?: SelectSubset<T, authenticationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authentications
     * const authentications = await prisma.authentications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authenticationsUpdateManyArgs>(args: SelectSubset<T, authenticationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentications and returns the data updated in the database.
     * @param {authenticationsUpdateManyAndReturnArgs} args - Arguments to update many Authentications.
     * @example
     * // Update many Authentications
     * const authentications = await prisma.authentications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authentications and only return the `id`
     * const authenticationsWithIdOnly = await prisma.authentications.updateManyAndReturn({
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
    updateManyAndReturn<T extends authenticationsUpdateManyAndReturnArgs>(args: SelectSubset<T, authenticationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authenticationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authentications.
     * @param {authenticationsUpsertArgs} args - Arguments to update or create a Authentications.
     * @example
     * // Update or create a Authentications
     * const authentications = await prisma.authentications.upsert({
     *   create: {
     *     // ... data to create a Authentications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authentications we want to update
     *   }
     * })
     */
    upsert<T extends authenticationsUpsertArgs>(args: SelectSubset<T, authenticationsUpsertArgs<ExtArgs>>): Prisma__authenticationsClient<$Result.GetResult<Prisma.$authenticationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationsCountArgs} args - Arguments to filter Authentications to count.
     * @example
     * // Count the number of Authentications
     * const count = await prisma.authentications.count({
     *   where: {
     *     // ... the filter for the Authentications we want to count
     *   }
     * })
    **/
    count<T extends authenticationsCountArgs>(
      args?: Subset<T, authenticationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthenticationsAggregateArgs>(args: Subset<T, AuthenticationsAggregateArgs>): Prisma.PrismaPromise<GetAuthenticationsAggregateType<T>>

    /**
     * Group by Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationsGroupByArgs} args - Group by arguments.
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
      T extends authenticationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authenticationsGroupByArgs['orderBy'] }
        : { orderBy?: authenticationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, authenticationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authentications model
   */
  readonly fields: authenticationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authentications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authenticationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the authentications model
   */
  interface authenticationsFieldRefs {
    readonly id: FieldRef<"authentications", 'Int'>
    readonly token: FieldRef<"authentications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * authentications findUnique
   */
  export type authenticationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentications
     */
    select?: authenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentications
     */
    omit?: authenticationsOmit<ExtArgs> | null
    /**
     * Filter, which authentications to fetch.
     */
    where: authenticationsWhereUniqueInput
  }

  /**
   * authentications findUniqueOrThrow
   */
  export type authenticationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentications
     */
    select?: authenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentications
     */
    omit?: authenticationsOmit<ExtArgs> | null
    /**
     * Filter, which authentications to fetch.
     */
    where: authenticationsWhereUniqueInput
  }

  /**
   * authentications findFirst
   */
  export type authenticationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentications
     */
    select?: authenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentications
     */
    omit?: authenticationsOmit<ExtArgs> | null
    /**
     * Filter, which authentications to fetch.
     */
    where?: authenticationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentications to fetch.
     */
    orderBy?: authenticationsOrderByWithRelationInput | authenticationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authentications.
     */
    cursor?: authenticationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentications.
     */
    distinct?: AuthenticationsScalarFieldEnum | AuthenticationsScalarFieldEnum[]
  }

  /**
   * authentications findFirstOrThrow
   */
  export type authenticationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentications
     */
    select?: authenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentications
     */
    omit?: authenticationsOmit<ExtArgs> | null
    /**
     * Filter, which authentications to fetch.
     */
    where?: authenticationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentications to fetch.
     */
    orderBy?: authenticationsOrderByWithRelationInput | authenticationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authentications.
     */
    cursor?: authenticationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentications.
     */
    distinct?: AuthenticationsScalarFieldEnum | AuthenticationsScalarFieldEnum[]
  }

  /**
   * authentications findMany
   */
  export type authenticationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentications
     */
    select?: authenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentications
     */
    omit?: authenticationsOmit<ExtArgs> | null
    /**
     * Filter, which authentications to fetch.
     */
    where?: authenticationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentications to fetch.
     */
    orderBy?: authenticationsOrderByWithRelationInput | authenticationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authentications.
     */
    cursor?: authenticationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentications.
     */
    distinct?: AuthenticationsScalarFieldEnum | AuthenticationsScalarFieldEnum[]
  }

  /**
   * authentications create
   */
  export type authenticationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentications
     */
    select?: authenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentications
     */
    omit?: authenticationsOmit<ExtArgs> | null
    /**
     * The data needed to create a authentications.
     */
    data: XOR<authenticationsCreateInput, authenticationsUncheckedCreateInput>
  }

  /**
   * authentications createMany
   */
  export type authenticationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authentications.
     */
    data: authenticationsCreateManyInput | authenticationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authentications createManyAndReturn
   */
  export type authenticationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentications
     */
    select?: authenticationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authentications
     */
    omit?: authenticationsOmit<ExtArgs> | null
    /**
     * The data used to create many authentications.
     */
    data: authenticationsCreateManyInput | authenticationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authentications update
   */
  export type authenticationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentications
     */
    select?: authenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentications
     */
    omit?: authenticationsOmit<ExtArgs> | null
    /**
     * The data needed to update a authentications.
     */
    data: XOR<authenticationsUpdateInput, authenticationsUncheckedUpdateInput>
    /**
     * Choose, which authentications to update.
     */
    where: authenticationsWhereUniqueInput
  }

  /**
   * authentications updateMany
   */
  export type authenticationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authentications.
     */
    data: XOR<authenticationsUpdateManyMutationInput, authenticationsUncheckedUpdateManyInput>
    /**
     * Filter which authentications to update
     */
    where?: authenticationsWhereInput
    /**
     * Limit how many authentications to update.
     */
    limit?: number
  }

  /**
   * authentications updateManyAndReturn
   */
  export type authenticationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentications
     */
    select?: authenticationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authentications
     */
    omit?: authenticationsOmit<ExtArgs> | null
    /**
     * The data used to update authentications.
     */
    data: XOR<authenticationsUpdateManyMutationInput, authenticationsUncheckedUpdateManyInput>
    /**
     * Filter which authentications to update
     */
    where?: authenticationsWhereInput
    /**
     * Limit how many authentications to update.
     */
    limit?: number
  }

  /**
   * authentications upsert
   */
  export type authenticationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentications
     */
    select?: authenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentications
     */
    omit?: authenticationsOmit<ExtArgs> | null
    /**
     * The filter to search for the authentications to update in case it exists.
     */
    where: authenticationsWhereUniqueInput
    /**
     * In case the authentications found by the `where` argument doesn't exist, create a new authentications with this data.
     */
    create: XOR<authenticationsCreateInput, authenticationsUncheckedCreateInput>
    /**
     * In case the authentications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authenticationsUpdateInput, authenticationsUncheckedUpdateInput>
  }

  /**
   * authentications delete
   */
  export type authenticationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentications
     */
    select?: authenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentications
     */
    omit?: authenticationsOmit<ExtArgs> | null
    /**
     * Filter which authentications to delete.
     */
    where: authenticationsWhereUniqueInput
  }

  /**
   * authentications deleteMany
   */
  export type authenticationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authentications to delete
     */
    where?: authenticationsWhereInput
    /**
     * Limit how many authentications to delete.
     */
    limit?: number
  }

  /**
   * authentications without action
   */
  export type authenticationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentications
     */
    select?: authenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentications
     */
    omit?: authenticationsOmit<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id_users: 'id_users',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PenjualanBulananScalarFieldEnum: {
    id_penjualan_bulanan: 'id_penjualan_bulanan',
    id_users: 'id_users',
    bulan: 'bulan',
    tahun: 'tahun',
    total: 'total'
  };

  export type PenjualanBulananScalarFieldEnum = (typeof PenjualanBulananScalarFieldEnum)[keyof typeof PenjualanBulananScalarFieldEnum]


  export const PenjualanHarianScalarFieldEnum: {
    id_penjualan_harian: 'id_penjualan_harian',
    id_users: 'id_users',
    tanggal: 'tanggal',
    terjual: 'terjual'
  };

  export type PenjualanHarianScalarFieldEnum = (typeof PenjualanHarianScalarFieldEnum)[keyof typeof PenjualanHarianScalarFieldEnum]


  export const HasilPrediksiScalarFieldEnum: {
    id_prediksi: 'id_prediksi',
    id_penjualan_bulanan: 'id_penjualan_bulanan',
    hasil_prediksi: 'hasil_prediksi',
    error: 'error'
  };

  export type HasilPrediksiScalarFieldEnum = (typeof HasilPrediksiScalarFieldEnum)[keyof typeof HasilPrediksiScalarFieldEnum]


  export const AuthenticationsScalarFieldEnum: {
    id: 'id',
    token: 'token'
  };

  export type AuthenticationsScalarFieldEnum = (typeof AuthenticationsScalarFieldEnum)[keyof typeof AuthenticationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id_users?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    penjualanBulanan?: PenjualanBulananListRelationFilter
    penjualanHarian?: PenjualanHarianListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id_users?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    penjualanBulanan?: penjualanBulananOrderByRelationAggregateInput
    penjualanHarian?: penjualanHarianOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id_users?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    penjualanBulanan?: PenjualanBulananListRelationFilter
    penjualanHarian?: PenjualanHarianListRelationFilter
  }, "id_users" | "username">

  export type usersOrderByWithAggregationInput = {
    id_users?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id_users?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
  }

  export type penjualanBulananWhereInput = {
    AND?: penjualanBulananWhereInput | penjualanBulananWhereInput[]
    OR?: penjualanBulananWhereInput[]
    NOT?: penjualanBulananWhereInput | penjualanBulananWhereInput[]
    id_penjualan_bulanan?: IntFilter<"penjualanBulanan"> | number
    id_users?: IntFilter<"penjualanBulanan"> | number
    bulan?: IntFilter<"penjualanBulanan"> | number
    tahun?: IntFilter<"penjualanBulanan"> | number
    total?: IntFilter<"penjualanBulanan"> | number
    hasilPrediksi?: HasilPrediksiListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type penjualanBulananOrderByWithRelationInput = {
    id_penjualan_bulanan?: SortOrder
    id_users?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    total?: SortOrder
    hasilPrediksi?: hasilPrediksiOrderByRelationAggregateInput
    user?: usersOrderByWithRelationInput
  }

  export type penjualanBulananWhereUniqueInput = Prisma.AtLeast<{
    id_penjualan_bulanan?: number
    AND?: penjualanBulananWhereInput | penjualanBulananWhereInput[]
    OR?: penjualanBulananWhereInput[]
    NOT?: penjualanBulananWhereInput | penjualanBulananWhereInput[]
    id_users?: IntFilter<"penjualanBulanan"> | number
    bulan?: IntFilter<"penjualanBulanan"> | number
    tahun?: IntFilter<"penjualanBulanan"> | number
    total?: IntFilter<"penjualanBulanan"> | number
    hasilPrediksi?: HasilPrediksiListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id_penjualan_bulanan">

  export type penjualanBulananOrderByWithAggregationInput = {
    id_penjualan_bulanan?: SortOrder
    id_users?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    total?: SortOrder
    _count?: penjualanBulananCountOrderByAggregateInput
    _avg?: penjualanBulananAvgOrderByAggregateInput
    _max?: penjualanBulananMaxOrderByAggregateInput
    _min?: penjualanBulananMinOrderByAggregateInput
    _sum?: penjualanBulananSumOrderByAggregateInput
  }

  export type penjualanBulananScalarWhereWithAggregatesInput = {
    AND?: penjualanBulananScalarWhereWithAggregatesInput | penjualanBulananScalarWhereWithAggregatesInput[]
    OR?: penjualanBulananScalarWhereWithAggregatesInput[]
    NOT?: penjualanBulananScalarWhereWithAggregatesInput | penjualanBulananScalarWhereWithAggregatesInput[]
    id_penjualan_bulanan?: IntWithAggregatesFilter<"penjualanBulanan"> | number
    id_users?: IntWithAggregatesFilter<"penjualanBulanan"> | number
    bulan?: IntWithAggregatesFilter<"penjualanBulanan"> | number
    tahun?: IntWithAggregatesFilter<"penjualanBulanan"> | number
    total?: IntWithAggregatesFilter<"penjualanBulanan"> | number
  }

  export type penjualanHarianWhereInput = {
    AND?: penjualanHarianWhereInput | penjualanHarianWhereInput[]
    OR?: penjualanHarianWhereInput[]
    NOT?: penjualanHarianWhereInput | penjualanHarianWhereInput[]
    id_penjualan_harian?: IntFilter<"penjualanHarian"> | number
    id_users?: IntFilter<"penjualanHarian"> | number
    tanggal?: DateTimeFilter<"penjualanHarian"> | Date | string
    terjual?: IntFilter<"penjualanHarian"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type penjualanHarianOrderByWithRelationInput = {
    id_penjualan_harian?: SortOrder
    id_users?: SortOrder
    tanggal?: SortOrder
    terjual?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type penjualanHarianWhereUniqueInput = Prisma.AtLeast<{
    id_penjualan_harian?: number
    AND?: penjualanHarianWhereInput | penjualanHarianWhereInput[]
    OR?: penjualanHarianWhereInput[]
    NOT?: penjualanHarianWhereInput | penjualanHarianWhereInput[]
    id_users?: IntFilter<"penjualanHarian"> | number
    tanggal?: DateTimeFilter<"penjualanHarian"> | Date | string
    terjual?: IntFilter<"penjualanHarian"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id_penjualan_harian">

  export type penjualanHarianOrderByWithAggregationInput = {
    id_penjualan_harian?: SortOrder
    id_users?: SortOrder
    tanggal?: SortOrder
    terjual?: SortOrder
    _count?: penjualanHarianCountOrderByAggregateInput
    _avg?: penjualanHarianAvgOrderByAggregateInput
    _max?: penjualanHarianMaxOrderByAggregateInput
    _min?: penjualanHarianMinOrderByAggregateInput
    _sum?: penjualanHarianSumOrderByAggregateInput
  }

  export type penjualanHarianScalarWhereWithAggregatesInput = {
    AND?: penjualanHarianScalarWhereWithAggregatesInput | penjualanHarianScalarWhereWithAggregatesInput[]
    OR?: penjualanHarianScalarWhereWithAggregatesInput[]
    NOT?: penjualanHarianScalarWhereWithAggregatesInput | penjualanHarianScalarWhereWithAggregatesInput[]
    id_penjualan_harian?: IntWithAggregatesFilter<"penjualanHarian"> | number
    id_users?: IntWithAggregatesFilter<"penjualanHarian"> | number
    tanggal?: DateTimeWithAggregatesFilter<"penjualanHarian"> | Date | string
    terjual?: IntWithAggregatesFilter<"penjualanHarian"> | number
  }

  export type hasilPrediksiWhereInput = {
    AND?: hasilPrediksiWhereInput | hasilPrediksiWhereInput[]
    OR?: hasilPrediksiWhereInput[]
    NOT?: hasilPrediksiWhereInput | hasilPrediksiWhereInput[]
    id_prediksi?: IntFilter<"hasilPrediksi"> | number
    id_penjualan_bulanan?: IntFilter<"hasilPrediksi"> | number
    hasil_prediksi?: DecimalFilter<"hasilPrediksi"> | Decimal | DecimalJsLike | number | string
    error?: DecimalFilter<"hasilPrediksi"> | Decimal | DecimalJsLike | number | string
    penjualanBulanan?: XOR<PenjualanBulananScalarRelationFilter, penjualanBulananWhereInput>
  }

  export type hasilPrediksiOrderByWithRelationInput = {
    id_prediksi?: SortOrder
    id_penjualan_bulanan?: SortOrder
    hasil_prediksi?: SortOrder
    error?: SortOrder
    penjualanBulanan?: penjualanBulananOrderByWithRelationInput
  }

  export type hasilPrediksiWhereUniqueInput = Prisma.AtLeast<{
    id_prediksi?: number
    AND?: hasilPrediksiWhereInput | hasilPrediksiWhereInput[]
    OR?: hasilPrediksiWhereInput[]
    NOT?: hasilPrediksiWhereInput | hasilPrediksiWhereInput[]
    id_penjualan_bulanan?: IntFilter<"hasilPrediksi"> | number
    hasil_prediksi?: DecimalFilter<"hasilPrediksi"> | Decimal | DecimalJsLike | number | string
    error?: DecimalFilter<"hasilPrediksi"> | Decimal | DecimalJsLike | number | string
    penjualanBulanan?: XOR<PenjualanBulananScalarRelationFilter, penjualanBulananWhereInput>
  }, "id_prediksi">

  export type hasilPrediksiOrderByWithAggregationInput = {
    id_prediksi?: SortOrder
    id_penjualan_bulanan?: SortOrder
    hasil_prediksi?: SortOrder
    error?: SortOrder
    _count?: hasilPrediksiCountOrderByAggregateInput
    _avg?: hasilPrediksiAvgOrderByAggregateInput
    _max?: hasilPrediksiMaxOrderByAggregateInput
    _min?: hasilPrediksiMinOrderByAggregateInput
    _sum?: hasilPrediksiSumOrderByAggregateInput
  }

  export type hasilPrediksiScalarWhereWithAggregatesInput = {
    AND?: hasilPrediksiScalarWhereWithAggregatesInput | hasilPrediksiScalarWhereWithAggregatesInput[]
    OR?: hasilPrediksiScalarWhereWithAggregatesInput[]
    NOT?: hasilPrediksiScalarWhereWithAggregatesInput | hasilPrediksiScalarWhereWithAggregatesInput[]
    id_prediksi?: IntWithAggregatesFilter<"hasilPrediksi"> | number
    id_penjualan_bulanan?: IntWithAggregatesFilter<"hasilPrediksi"> | number
    hasil_prediksi?: DecimalWithAggregatesFilter<"hasilPrediksi"> | Decimal | DecimalJsLike | number | string
    error?: DecimalWithAggregatesFilter<"hasilPrediksi"> | Decimal | DecimalJsLike | number | string
  }

  export type authenticationsWhereInput = {
    AND?: authenticationsWhereInput | authenticationsWhereInput[]
    OR?: authenticationsWhereInput[]
    NOT?: authenticationsWhereInput | authenticationsWhereInput[]
    id?: IntFilter<"authentications"> | number
    token?: StringFilter<"authentications"> | string
  }

  export type authenticationsOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
  }

  export type authenticationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: authenticationsWhereInput | authenticationsWhereInput[]
    OR?: authenticationsWhereInput[]
    NOT?: authenticationsWhereInput | authenticationsWhereInput[]
  }, "id" | "token">

  export type authenticationsOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    _count?: authenticationsCountOrderByAggregateInput
    _avg?: authenticationsAvgOrderByAggregateInput
    _max?: authenticationsMaxOrderByAggregateInput
    _min?: authenticationsMinOrderByAggregateInput
    _sum?: authenticationsSumOrderByAggregateInput
  }

  export type authenticationsScalarWhereWithAggregatesInput = {
    AND?: authenticationsScalarWhereWithAggregatesInput | authenticationsScalarWhereWithAggregatesInput[]
    OR?: authenticationsScalarWhereWithAggregatesInput[]
    NOT?: authenticationsScalarWhereWithAggregatesInput | authenticationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"authentications"> | number
    token?: StringWithAggregatesFilter<"authentications"> | string
  }

  export type usersCreateInput = {
    username: string
    password: string
    role: string
    penjualanBulanan?: penjualanBulananCreateNestedManyWithoutUserInput
    penjualanHarian?: penjualanHarianCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id_users?: number
    username: string
    password: string
    role: string
    penjualanBulanan?: penjualanBulananUncheckedCreateNestedManyWithoutUserInput
    penjualanHarian?: penjualanHarianUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    penjualanBulanan?: penjualanBulananUpdateManyWithoutUserNestedInput
    penjualanHarian?: penjualanHarianUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id_users?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    penjualanBulanan?: penjualanBulananUncheckedUpdateManyWithoutUserNestedInput
    penjualanHarian?: penjualanHarianUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id_users?: number
    username: string
    password: string
    role: string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id_users?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type penjualanBulananCreateInput = {
    bulan: number
    tahun: number
    total: number
    hasilPrediksi?: hasilPrediksiCreateNestedManyWithoutPenjualanBulananInput
    user: usersCreateNestedOneWithoutPenjualanBulananInput
  }

  export type penjualanBulananUncheckedCreateInput = {
    id_penjualan_bulanan?: number
    id_users: number
    bulan: number
    tahun: number
    total: number
    hasilPrediksi?: hasilPrediksiUncheckedCreateNestedManyWithoutPenjualanBulananInput
  }

  export type penjualanBulananUpdateInput = {
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    hasilPrediksi?: hasilPrediksiUpdateManyWithoutPenjualanBulananNestedInput
    user?: usersUpdateOneRequiredWithoutPenjualanBulananNestedInput
  }

  export type penjualanBulananUncheckedUpdateInput = {
    id_penjualan_bulanan?: IntFieldUpdateOperationsInput | number
    id_users?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    hasilPrediksi?: hasilPrediksiUncheckedUpdateManyWithoutPenjualanBulananNestedInput
  }

  export type penjualanBulananCreateManyInput = {
    id_penjualan_bulanan?: number
    id_users: number
    bulan: number
    tahun: number
    total: number
  }

  export type penjualanBulananUpdateManyMutationInput = {
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type penjualanBulananUncheckedUpdateManyInput = {
    id_penjualan_bulanan?: IntFieldUpdateOperationsInput | number
    id_users?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type penjualanHarianCreateInput = {
    tanggal: Date | string
    terjual: number
    user: usersCreateNestedOneWithoutPenjualanHarianInput
  }

  export type penjualanHarianUncheckedCreateInput = {
    id_penjualan_harian?: number
    id_users: number
    tanggal: Date | string
    terjual: number
  }

  export type penjualanHarianUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    terjual?: IntFieldUpdateOperationsInput | number
    user?: usersUpdateOneRequiredWithoutPenjualanHarianNestedInput
  }

  export type penjualanHarianUncheckedUpdateInput = {
    id_penjualan_harian?: IntFieldUpdateOperationsInput | number
    id_users?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    terjual?: IntFieldUpdateOperationsInput | number
  }

  export type penjualanHarianCreateManyInput = {
    id_penjualan_harian?: number
    id_users: number
    tanggal: Date | string
    terjual: number
  }

  export type penjualanHarianUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    terjual?: IntFieldUpdateOperationsInput | number
  }

  export type penjualanHarianUncheckedUpdateManyInput = {
    id_penjualan_harian?: IntFieldUpdateOperationsInput | number
    id_users?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    terjual?: IntFieldUpdateOperationsInput | number
  }

  export type hasilPrediksiCreateInput = {
    hasil_prediksi: Decimal | DecimalJsLike | number | string
    error: Decimal | DecimalJsLike | number | string
    penjualanBulanan: penjualanBulananCreateNestedOneWithoutHasilPrediksiInput
  }

  export type hasilPrediksiUncheckedCreateInput = {
    id_prediksi?: number
    id_penjualan_bulanan: number
    hasil_prediksi: Decimal | DecimalJsLike | number | string
    error: Decimal | DecimalJsLike | number | string
  }

  export type hasilPrediksiUpdateInput = {
    hasil_prediksi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    error?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penjualanBulanan?: penjualanBulananUpdateOneRequiredWithoutHasilPrediksiNestedInput
  }

  export type hasilPrediksiUncheckedUpdateInput = {
    id_prediksi?: IntFieldUpdateOperationsInput | number
    id_penjualan_bulanan?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    error?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type hasilPrediksiCreateManyInput = {
    id_prediksi?: number
    id_penjualan_bulanan: number
    hasil_prediksi: Decimal | DecimalJsLike | number | string
    error: Decimal | DecimalJsLike | number | string
  }

  export type hasilPrediksiUpdateManyMutationInput = {
    hasil_prediksi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    error?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type hasilPrediksiUncheckedUpdateManyInput = {
    id_prediksi?: IntFieldUpdateOperationsInput | number
    id_penjualan_bulanan?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    error?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type authenticationsCreateInput = {
    token: string
  }

  export type authenticationsUncheckedCreateInput = {
    id?: number
    token: string
  }

  export type authenticationsUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type authenticationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type authenticationsCreateManyInput = {
    id?: number
    token: string
  }

  export type authenticationsUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type authenticationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
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

  export type PenjualanBulananListRelationFilter = {
    every?: penjualanBulananWhereInput
    some?: penjualanBulananWhereInput
    none?: penjualanBulananWhereInput
  }

  export type PenjualanHarianListRelationFilter = {
    every?: penjualanHarianWhereInput
    some?: penjualanHarianWhereInput
    none?: penjualanHarianWhereInput
  }

  export type penjualanBulananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type penjualanHarianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id_users?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id_users?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id_users?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id_users?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id_users?: SortOrder
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

  export type HasilPrediksiListRelationFilter = {
    every?: hasilPrediksiWhereInput
    some?: hasilPrediksiWhereInput
    none?: hasilPrediksiWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type hasilPrediksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type penjualanBulananCountOrderByAggregateInput = {
    id_penjualan_bulanan?: SortOrder
    id_users?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    total?: SortOrder
  }

  export type penjualanBulananAvgOrderByAggregateInput = {
    id_penjualan_bulanan?: SortOrder
    id_users?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    total?: SortOrder
  }

  export type penjualanBulananMaxOrderByAggregateInput = {
    id_penjualan_bulanan?: SortOrder
    id_users?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    total?: SortOrder
  }

  export type penjualanBulananMinOrderByAggregateInput = {
    id_penjualan_bulanan?: SortOrder
    id_users?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    total?: SortOrder
  }

  export type penjualanBulananSumOrderByAggregateInput = {
    id_penjualan_bulanan?: SortOrder
    id_users?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    total?: SortOrder
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

  export type penjualanHarianCountOrderByAggregateInput = {
    id_penjualan_harian?: SortOrder
    id_users?: SortOrder
    tanggal?: SortOrder
    terjual?: SortOrder
  }

  export type penjualanHarianAvgOrderByAggregateInput = {
    id_penjualan_harian?: SortOrder
    id_users?: SortOrder
    terjual?: SortOrder
  }

  export type penjualanHarianMaxOrderByAggregateInput = {
    id_penjualan_harian?: SortOrder
    id_users?: SortOrder
    tanggal?: SortOrder
    terjual?: SortOrder
  }

  export type penjualanHarianMinOrderByAggregateInput = {
    id_penjualan_harian?: SortOrder
    id_users?: SortOrder
    tanggal?: SortOrder
    terjual?: SortOrder
  }

  export type penjualanHarianSumOrderByAggregateInput = {
    id_penjualan_harian?: SortOrder
    id_users?: SortOrder
    terjual?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PenjualanBulananScalarRelationFilter = {
    is?: penjualanBulananWhereInput
    isNot?: penjualanBulananWhereInput
  }

  export type hasilPrediksiCountOrderByAggregateInput = {
    id_prediksi?: SortOrder
    id_penjualan_bulanan?: SortOrder
    hasil_prediksi?: SortOrder
    error?: SortOrder
  }

  export type hasilPrediksiAvgOrderByAggregateInput = {
    id_prediksi?: SortOrder
    id_penjualan_bulanan?: SortOrder
    hasil_prediksi?: SortOrder
    error?: SortOrder
  }

  export type hasilPrediksiMaxOrderByAggregateInput = {
    id_prediksi?: SortOrder
    id_penjualan_bulanan?: SortOrder
    hasil_prediksi?: SortOrder
    error?: SortOrder
  }

  export type hasilPrediksiMinOrderByAggregateInput = {
    id_prediksi?: SortOrder
    id_penjualan_bulanan?: SortOrder
    hasil_prediksi?: SortOrder
    error?: SortOrder
  }

  export type hasilPrediksiSumOrderByAggregateInput = {
    id_prediksi?: SortOrder
    id_penjualan_bulanan?: SortOrder
    hasil_prediksi?: SortOrder
    error?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type authenticationsCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
  }

  export type authenticationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type authenticationsMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
  }

  export type authenticationsMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
  }

  export type authenticationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type penjualanBulananCreateNestedManyWithoutUserInput = {
    create?: XOR<penjualanBulananCreateWithoutUserInput, penjualanBulananUncheckedCreateWithoutUserInput> | penjualanBulananCreateWithoutUserInput[] | penjualanBulananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: penjualanBulananCreateOrConnectWithoutUserInput | penjualanBulananCreateOrConnectWithoutUserInput[]
    createMany?: penjualanBulananCreateManyUserInputEnvelope
    connect?: penjualanBulananWhereUniqueInput | penjualanBulananWhereUniqueInput[]
  }

  export type penjualanHarianCreateNestedManyWithoutUserInput = {
    create?: XOR<penjualanHarianCreateWithoutUserInput, penjualanHarianUncheckedCreateWithoutUserInput> | penjualanHarianCreateWithoutUserInput[] | penjualanHarianUncheckedCreateWithoutUserInput[]
    connectOrCreate?: penjualanHarianCreateOrConnectWithoutUserInput | penjualanHarianCreateOrConnectWithoutUserInput[]
    createMany?: penjualanHarianCreateManyUserInputEnvelope
    connect?: penjualanHarianWhereUniqueInput | penjualanHarianWhereUniqueInput[]
  }

  export type penjualanBulananUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<penjualanBulananCreateWithoutUserInput, penjualanBulananUncheckedCreateWithoutUserInput> | penjualanBulananCreateWithoutUserInput[] | penjualanBulananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: penjualanBulananCreateOrConnectWithoutUserInput | penjualanBulananCreateOrConnectWithoutUserInput[]
    createMany?: penjualanBulananCreateManyUserInputEnvelope
    connect?: penjualanBulananWhereUniqueInput | penjualanBulananWhereUniqueInput[]
  }

  export type penjualanHarianUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<penjualanHarianCreateWithoutUserInput, penjualanHarianUncheckedCreateWithoutUserInput> | penjualanHarianCreateWithoutUserInput[] | penjualanHarianUncheckedCreateWithoutUserInput[]
    connectOrCreate?: penjualanHarianCreateOrConnectWithoutUserInput | penjualanHarianCreateOrConnectWithoutUserInput[]
    createMany?: penjualanHarianCreateManyUserInputEnvelope
    connect?: penjualanHarianWhereUniqueInput | penjualanHarianWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type penjualanBulananUpdateManyWithoutUserNestedInput = {
    create?: XOR<penjualanBulananCreateWithoutUserInput, penjualanBulananUncheckedCreateWithoutUserInput> | penjualanBulananCreateWithoutUserInput[] | penjualanBulananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: penjualanBulananCreateOrConnectWithoutUserInput | penjualanBulananCreateOrConnectWithoutUserInput[]
    upsert?: penjualanBulananUpsertWithWhereUniqueWithoutUserInput | penjualanBulananUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: penjualanBulananCreateManyUserInputEnvelope
    set?: penjualanBulananWhereUniqueInput | penjualanBulananWhereUniqueInput[]
    disconnect?: penjualanBulananWhereUniqueInput | penjualanBulananWhereUniqueInput[]
    delete?: penjualanBulananWhereUniqueInput | penjualanBulananWhereUniqueInput[]
    connect?: penjualanBulananWhereUniqueInput | penjualanBulananWhereUniqueInput[]
    update?: penjualanBulananUpdateWithWhereUniqueWithoutUserInput | penjualanBulananUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: penjualanBulananUpdateManyWithWhereWithoutUserInput | penjualanBulananUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: penjualanBulananScalarWhereInput | penjualanBulananScalarWhereInput[]
  }

  export type penjualanHarianUpdateManyWithoutUserNestedInput = {
    create?: XOR<penjualanHarianCreateWithoutUserInput, penjualanHarianUncheckedCreateWithoutUserInput> | penjualanHarianCreateWithoutUserInput[] | penjualanHarianUncheckedCreateWithoutUserInput[]
    connectOrCreate?: penjualanHarianCreateOrConnectWithoutUserInput | penjualanHarianCreateOrConnectWithoutUserInput[]
    upsert?: penjualanHarianUpsertWithWhereUniqueWithoutUserInput | penjualanHarianUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: penjualanHarianCreateManyUserInputEnvelope
    set?: penjualanHarianWhereUniqueInput | penjualanHarianWhereUniqueInput[]
    disconnect?: penjualanHarianWhereUniqueInput | penjualanHarianWhereUniqueInput[]
    delete?: penjualanHarianWhereUniqueInput | penjualanHarianWhereUniqueInput[]
    connect?: penjualanHarianWhereUniqueInput | penjualanHarianWhereUniqueInput[]
    update?: penjualanHarianUpdateWithWhereUniqueWithoutUserInput | penjualanHarianUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: penjualanHarianUpdateManyWithWhereWithoutUserInput | penjualanHarianUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: penjualanHarianScalarWhereInput | penjualanHarianScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type penjualanBulananUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<penjualanBulananCreateWithoutUserInput, penjualanBulananUncheckedCreateWithoutUserInput> | penjualanBulananCreateWithoutUserInput[] | penjualanBulananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: penjualanBulananCreateOrConnectWithoutUserInput | penjualanBulananCreateOrConnectWithoutUserInput[]
    upsert?: penjualanBulananUpsertWithWhereUniqueWithoutUserInput | penjualanBulananUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: penjualanBulananCreateManyUserInputEnvelope
    set?: penjualanBulananWhereUniqueInput | penjualanBulananWhereUniqueInput[]
    disconnect?: penjualanBulananWhereUniqueInput | penjualanBulananWhereUniqueInput[]
    delete?: penjualanBulananWhereUniqueInput | penjualanBulananWhereUniqueInput[]
    connect?: penjualanBulananWhereUniqueInput | penjualanBulananWhereUniqueInput[]
    update?: penjualanBulananUpdateWithWhereUniqueWithoutUserInput | penjualanBulananUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: penjualanBulananUpdateManyWithWhereWithoutUserInput | penjualanBulananUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: penjualanBulananScalarWhereInput | penjualanBulananScalarWhereInput[]
  }

  export type penjualanHarianUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<penjualanHarianCreateWithoutUserInput, penjualanHarianUncheckedCreateWithoutUserInput> | penjualanHarianCreateWithoutUserInput[] | penjualanHarianUncheckedCreateWithoutUserInput[]
    connectOrCreate?: penjualanHarianCreateOrConnectWithoutUserInput | penjualanHarianCreateOrConnectWithoutUserInput[]
    upsert?: penjualanHarianUpsertWithWhereUniqueWithoutUserInput | penjualanHarianUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: penjualanHarianCreateManyUserInputEnvelope
    set?: penjualanHarianWhereUniqueInput | penjualanHarianWhereUniqueInput[]
    disconnect?: penjualanHarianWhereUniqueInput | penjualanHarianWhereUniqueInput[]
    delete?: penjualanHarianWhereUniqueInput | penjualanHarianWhereUniqueInput[]
    connect?: penjualanHarianWhereUniqueInput | penjualanHarianWhereUniqueInput[]
    update?: penjualanHarianUpdateWithWhereUniqueWithoutUserInput | penjualanHarianUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: penjualanHarianUpdateManyWithWhereWithoutUserInput | penjualanHarianUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: penjualanHarianScalarWhereInput | penjualanHarianScalarWhereInput[]
  }

  export type hasilPrediksiCreateNestedManyWithoutPenjualanBulananInput = {
    create?: XOR<hasilPrediksiCreateWithoutPenjualanBulananInput, hasilPrediksiUncheckedCreateWithoutPenjualanBulananInput> | hasilPrediksiCreateWithoutPenjualanBulananInput[] | hasilPrediksiUncheckedCreateWithoutPenjualanBulananInput[]
    connectOrCreate?: hasilPrediksiCreateOrConnectWithoutPenjualanBulananInput | hasilPrediksiCreateOrConnectWithoutPenjualanBulananInput[]
    createMany?: hasilPrediksiCreateManyPenjualanBulananInputEnvelope
    connect?: hasilPrediksiWhereUniqueInput | hasilPrediksiWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutPenjualanBulananInput = {
    create?: XOR<usersCreateWithoutPenjualanBulananInput, usersUncheckedCreateWithoutPenjualanBulananInput>
    connectOrCreate?: usersCreateOrConnectWithoutPenjualanBulananInput
    connect?: usersWhereUniqueInput
  }

  export type hasilPrediksiUncheckedCreateNestedManyWithoutPenjualanBulananInput = {
    create?: XOR<hasilPrediksiCreateWithoutPenjualanBulananInput, hasilPrediksiUncheckedCreateWithoutPenjualanBulananInput> | hasilPrediksiCreateWithoutPenjualanBulananInput[] | hasilPrediksiUncheckedCreateWithoutPenjualanBulananInput[]
    connectOrCreate?: hasilPrediksiCreateOrConnectWithoutPenjualanBulananInput | hasilPrediksiCreateOrConnectWithoutPenjualanBulananInput[]
    createMany?: hasilPrediksiCreateManyPenjualanBulananInputEnvelope
    connect?: hasilPrediksiWhereUniqueInput | hasilPrediksiWhereUniqueInput[]
  }

  export type hasilPrediksiUpdateManyWithoutPenjualanBulananNestedInput = {
    create?: XOR<hasilPrediksiCreateWithoutPenjualanBulananInput, hasilPrediksiUncheckedCreateWithoutPenjualanBulananInput> | hasilPrediksiCreateWithoutPenjualanBulananInput[] | hasilPrediksiUncheckedCreateWithoutPenjualanBulananInput[]
    connectOrCreate?: hasilPrediksiCreateOrConnectWithoutPenjualanBulananInput | hasilPrediksiCreateOrConnectWithoutPenjualanBulananInput[]
    upsert?: hasilPrediksiUpsertWithWhereUniqueWithoutPenjualanBulananInput | hasilPrediksiUpsertWithWhereUniqueWithoutPenjualanBulananInput[]
    createMany?: hasilPrediksiCreateManyPenjualanBulananInputEnvelope
    set?: hasilPrediksiWhereUniqueInput | hasilPrediksiWhereUniqueInput[]
    disconnect?: hasilPrediksiWhereUniqueInput | hasilPrediksiWhereUniqueInput[]
    delete?: hasilPrediksiWhereUniqueInput | hasilPrediksiWhereUniqueInput[]
    connect?: hasilPrediksiWhereUniqueInput | hasilPrediksiWhereUniqueInput[]
    update?: hasilPrediksiUpdateWithWhereUniqueWithoutPenjualanBulananInput | hasilPrediksiUpdateWithWhereUniqueWithoutPenjualanBulananInput[]
    updateMany?: hasilPrediksiUpdateManyWithWhereWithoutPenjualanBulananInput | hasilPrediksiUpdateManyWithWhereWithoutPenjualanBulananInput[]
    deleteMany?: hasilPrediksiScalarWhereInput | hasilPrediksiScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutPenjualanBulananNestedInput = {
    create?: XOR<usersCreateWithoutPenjualanBulananInput, usersUncheckedCreateWithoutPenjualanBulananInput>
    connectOrCreate?: usersCreateOrConnectWithoutPenjualanBulananInput
    upsert?: usersUpsertWithoutPenjualanBulananInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPenjualanBulananInput, usersUpdateWithoutPenjualanBulananInput>, usersUncheckedUpdateWithoutPenjualanBulananInput>
  }

  export type hasilPrediksiUncheckedUpdateManyWithoutPenjualanBulananNestedInput = {
    create?: XOR<hasilPrediksiCreateWithoutPenjualanBulananInput, hasilPrediksiUncheckedCreateWithoutPenjualanBulananInput> | hasilPrediksiCreateWithoutPenjualanBulananInput[] | hasilPrediksiUncheckedCreateWithoutPenjualanBulananInput[]
    connectOrCreate?: hasilPrediksiCreateOrConnectWithoutPenjualanBulananInput | hasilPrediksiCreateOrConnectWithoutPenjualanBulananInput[]
    upsert?: hasilPrediksiUpsertWithWhereUniqueWithoutPenjualanBulananInput | hasilPrediksiUpsertWithWhereUniqueWithoutPenjualanBulananInput[]
    createMany?: hasilPrediksiCreateManyPenjualanBulananInputEnvelope
    set?: hasilPrediksiWhereUniqueInput | hasilPrediksiWhereUniqueInput[]
    disconnect?: hasilPrediksiWhereUniqueInput | hasilPrediksiWhereUniqueInput[]
    delete?: hasilPrediksiWhereUniqueInput | hasilPrediksiWhereUniqueInput[]
    connect?: hasilPrediksiWhereUniqueInput | hasilPrediksiWhereUniqueInput[]
    update?: hasilPrediksiUpdateWithWhereUniqueWithoutPenjualanBulananInput | hasilPrediksiUpdateWithWhereUniqueWithoutPenjualanBulananInput[]
    updateMany?: hasilPrediksiUpdateManyWithWhereWithoutPenjualanBulananInput | hasilPrediksiUpdateManyWithWhereWithoutPenjualanBulananInput[]
    deleteMany?: hasilPrediksiScalarWhereInput | hasilPrediksiScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutPenjualanHarianInput = {
    create?: XOR<usersCreateWithoutPenjualanHarianInput, usersUncheckedCreateWithoutPenjualanHarianInput>
    connectOrCreate?: usersCreateOrConnectWithoutPenjualanHarianInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutPenjualanHarianNestedInput = {
    create?: XOR<usersCreateWithoutPenjualanHarianInput, usersUncheckedCreateWithoutPenjualanHarianInput>
    connectOrCreate?: usersCreateOrConnectWithoutPenjualanHarianInput
    upsert?: usersUpsertWithoutPenjualanHarianInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPenjualanHarianInput, usersUpdateWithoutPenjualanHarianInput>, usersUncheckedUpdateWithoutPenjualanHarianInput>
  }

  export type penjualanBulananCreateNestedOneWithoutHasilPrediksiInput = {
    create?: XOR<penjualanBulananCreateWithoutHasilPrediksiInput, penjualanBulananUncheckedCreateWithoutHasilPrediksiInput>
    connectOrCreate?: penjualanBulananCreateOrConnectWithoutHasilPrediksiInput
    connect?: penjualanBulananWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type penjualanBulananUpdateOneRequiredWithoutHasilPrediksiNestedInput = {
    create?: XOR<penjualanBulananCreateWithoutHasilPrediksiInput, penjualanBulananUncheckedCreateWithoutHasilPrediksiInput>
    connectOrCreate?: penjualanBulananCreateOrConnectWithoutHasilPrediksiInput
    upsert?: penjualanBulananUpsertWithoutHasilPrediksiInput
    connect?: penjualanBulananWhereUniqueInput
    update?: XOR<XOR<penjualanBulananUpdateToOneWithWhereWithoutHasilPrediksiInput, penjualanBulananUpdateWithoutHasilPrediksiInput>, penjualanBulananUncheckedUpdateWithoutHasilPrediksiInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type penjualanBulananCreateWithoutUserInput = {
    bulan: number
    tahun: number
    total: number
    hasilPrediksi?: hasilPrediksiCreateNestedManyWithoutPenjualanBulananInput
  }

  export type penjualanBulananUncheckedCreateWithoutUserInput = {
    id_penjualan_bulanan?: number
    bulan: number
    tahun: number
    total: number
    hasilPrediksi?: hasilPrediksiUncheckedCreateNestedManyWithoutPenjualanBulananInput
  }

  export type penjualanBulananCreateOrConnectWithoutUserInput = {
    where: penjualanBulananWhereUniqueInput
    create: XOR<penjualanBulananCreateWithoutUserInput, penjualanBulananUncheckedCreateWithoutUserInput>
  }

  export type penjualanBulananCreateManyUserInputEnvelope = {
    data: penjualanBulananCreateManyUserInput | penjualanBulananCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type penjualanHarianCreateWithoutUserInput = {
    tanggal: Date | string
    terjual: number
  }

  export type penjualanHarianUncheckedCreateWithoutUserInput = {
    id_penjualan_harian?: number
    tanggal: Date | string
    terjual: number
  }

  export type penjualanHarianCreateOrConnectWithoutUserInput = {
    where: penjualanHarianWhereUniqueInput
    create: XOR<penjualanHarianCreateWithoutUserInput, penjualanHarianUncheckedCreateWithoutUserInput>
  }

  export type penjualanHarianCreateManyUserInputEnvelope = {
    data: penjualanHarianCreateManyUserInput | penjualanHarianCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type penjualanBulananUpsertWithWhereUniqueWithoutUserInput = {
    where: penjualanBulananWhereUniqueInput
    update: XOR<penjualanBulananUpdateWithoutUserInput, penjualanBulananUncheckedUpdateWithoutUserInput>
    create: XOR<penjualanBulananCreateWithoutUserInput, penjualanBulananUncheckedCreateWithoutUserInput>
  }

  export type penjualanBulananUpdateWithWhereUniqueWithoutUserInput = {
    where: penjualanBulananWhereUniqueInput
    data: XOR<penjualanBulananUpdateWithoutUserInput, penjualanBulananUncheckedUpdateWithoutUserInput>
  }

  export type penjualanBulananUpdateManyWithWhereWithoutUserInput = {
    where: penjualanBulananScalarWhereInput
    data: XOR<penjualanBulananUpdateManyMutationInput, penjualanBulananUncheckedUpdateManyWithoutUserInput>
  }

  export type penjualanBulananScalarWhereInput = {
    AND?: penjualanBulananScalarWhereInput | penjualanBulananScalarWhereInput[]
    OR?: penjualanBulananScalarWhereInput[]
    NOT?: penjualanBulananScalarWhereInput | penjualanBulananScalarWhereInput[]
    id_penjualan_bulanan?: IntFilter<"penjualanBulanan"> | number
    id_users?: IntFilter<"penjualanBulanan"> | number
    bulan?: IntFilter<"penjualanBulanan"> | number
    tahun?: IntFilter<"penjualanBulanan"> | number
    total?: IntFilter<"penjualanBulanan"> | number
  }

  export type penjualanHarianUpsertWithWhereUniqueWithoutUserInput = {
    where: penjualanHarianWhereUniqueInput
    update: XOR<penjualanHarianUpdateWithoutUserInput, penjualanHarianUncheckedUpdateWithoutUserInput>
    create: XOR<penjualanHarianCreateWithoutUserInput, penjualanHarianUncheckedCreateWithoutUserInput>
  }

  export type penjualanHarianUpdateWithWhereUniqueWithoutUserInput = {
    where: penjualanHarianWhereUniqueInput
    data: XOR<penjualanHarianUpdateWithoutUserInput, penjualanHarianUncheckedUpdateWithoutUserInput>
  }

  export type penjualanHarianUpdateManyWithWhereWithoutUserInput = {
    where: penjualanHarianScalarWhereInput
    data: XOR<penjualanHarianUpdateManyMutationInput, penjualanHarianUncheckedUpdateManyWithoutUserInput>
  }

  export type penjualanHarianScalarWhereInput = {
    AND?: penjualanHarianScalarWhereInput | penjualanHarianScalarWhereInput[]
    OR?: penjualanHarianScalarWhereInput[]
    NOT?: penjualanHarianScalarWhereInput | penjualanHarianScalarWhereInput[]
    id_penjualan_harian?: IntFilter<"penjualanHarian"> | number
    id_users?: IntFilter<"penjualanHarian"> | number
    tanggal?: DateTimeFilter<"penjualanHarian"> | Date | string
    terjual?: IntFilter<"penjualanHarian"> | number
  }

  export type hasilPrediksiCreateWithoutPenjualanBulananInput = {
    hasil_prediksi: Decimal | DecimalJsLike | number | string
    error: Decimal | DecimalJsLike | number | string
  }

  export type hasilPrediksiUncheckedCreateWithoutPenjualanBulananInput = {
    id_prediksi?: number
    hasil_prediksi: Decimal | DecimalJsLike | number | string
    error: Decimal | DecimalJsLike | number | string
  }

  export type hasilPrediksiCreateOrConnectWithoutPenjualanBulananInput = {
    where: hasilPrediksiWhereUniqueInput
    create: XOR<hasilPrediksiCreateWithoutPenjualanBulananInput, hasilPrediksiUncheckedCreateWithoutPenjualanBulananInput>
  }

  export type hasilPrediksiCreateManyPenjualanBulananInputEnvelope = {
    data: hasilPrediksiCreateManyPenjualanBulananInput | hasilPrediksiCreateManyPenjualanBulananInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPenjualanBulananInput = {
    username: string
    password: string
    role: string
    penjualanHarian?: penjualanHarianCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPenjualanBulananInput = {
    id_users?: number
    username: string
    password: string
    role: string
    penjualanHarian?: penjualanHarianUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPenjualanBulananInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPenjualanBulananInput, usersUncheckedCreateWithoutPenjualanBulananInput>
  }

  export type hasilPrediksiUpsertWithWhereUniqueWithoutPenjualanBulananInput = {
    where: hasilPrediksiWhereUniqueInput
    update: XOR<hasilPrediksiUpdateWithoutPenjualanBulananInput, hasilPrediksiUncheckedUpdateWithoutPenjualanBulananInput>
    create: XOR<hasilPrediksiCreateWithoutPenjualanBulananInput, hasilPrediksiUncheckedCreateWithoutPenjualanBulananInput>
  }

  export type hasilPrediksiUpdateWithWhereUniqueWithoutPenjualanBulananInput = {
    where: hasilPrediksiWhereUniqueInput
    data: XOR<hasilPrediksiUpdateWithoutPenjualanBulananInput, hasilPrediksiUncheckedUpdateWithoutPenjualanBulananInput>
  }

  export type hasilPrediksiUpdateManyWithWhereWithoutPenjualanBulananInput = {
    where: hasilPrediksiScalarWhereInput
    data: XOR<hasilPrediksiUpdateManyMutationInput, hasilPrediksiUncheckedUpdateManyWithoutPenjualanBulananInput>
  }

  export type hasilPrediksiScalarWhereInput = {
    AND?: hasilPrediksiScalarWhereInput | hasilPrediksiScalarWhereInput[]
    OR?: hasilPrediksiScalarWhereInput[]
    NOT?: hasilPrediksiScalarWhereInput | hasilPrediksiScalarWhereInput[]
    id_prediksi?: IntFilter<"hasilPrediksi"> | number
    id_penjualan_bulanan?: IntFilter<"hasilPrediksi"> | number
    hasil_prediksi?: DecimalFilter<"hasilPrediksi"> | Decimal | DecimalJsLike | number | string
    error?: DecimalFilter<"hasilPrediksi"> | Decimal | DecimalJsLike | number | string
  }

  export type usersUpsertWithoutPenjualanBulananInput = {
    update: XOR<usersUpdateWithoutPenjualanBulananInput, usersUncheckedUpdateWithoutPenjualanBulananInput>
    create: XOR<usersCreateWithoutPenjualanBulananInput, usersUncheckedCreateWithoutPenjualanBulananInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPenjualanBulananInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPenjualanBulananInput, usersUncheckedUpdateWithoutPenjualanBulananInput>
  }

  export type usersUpdateWithoutPenjualanBulananInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    penjualanHarian?: penjualanHarianUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPenjualanBulananInput = {
    id_users?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    penjualanHarian?: penjualanHarianUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutPenjualanHarianInput = {
    username: string
    password: string
    role: string
    penjualanBulanan?: penjualanBulananCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPenjualanHarianInput = {
    id_users?: number
    username: string
    password: string
    role: string
    penjualanBulanan?: penjualanBulananUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPenjualanHarianInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPenjualanHarianInput, usersUncheckedCreateWithoutPenjualanHarianInput>
  }

  export type usersUpsertWithoutPenjualanHarianInput = {
    update: XOR<usersUpdateWithoutPenjualanHarianInput, usersUncheckedUpdateWithoutPenjualanHarianInput>
    create: XOR<usersCreateWithoutPenjualanHarianInput, usersUncheckedCreateWithoutPenjualanHarianInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPenjualanHarianInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPenjualanHarianInput, usersUncheckedUpdateWithoutPenjualanHarianInput>
  }

  export type usersUpdateWithoutPenjualanHarianInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    penjualanBulanan?: penjualanBulananUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPenjualanHarianInput = {
    id_users?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    penjualanBulanan?: penjualanBulananUncheckedUpdateManyWithoutUserNestedInput
  }

  export type penjualanBulananCreateWithoutHasilPrediksiInput = {
    bulan: number
    tahun: number
    total: number
    user: usersCreateNestedOneWithoutPenjualanBulananInput
  }

  export type penjualanBulananUncheckedCreateWithoutHasilPrediksiInput = {
    id_penjualan_bulanan?: number
    id_users: number
    bulan: number
    tahun: number
    total: number
  }

  export type penjualanBulananCreateOrConnectWithoutHasilPrediksiInput = {
    where: penjualanBulananWhereUniqueInput
    create: XOR<penjualanBulananCreateWithoutHasilPrediksiInput, penjualanBulananUncheckedCreateWithoutHasilPrediksiInput>
  }

  export type penjualanBulananUpsertWithoutHasilPrediksiInput = {
    update: XOR<penjualanBulananUpdateWithoutHasilPrediksiInput, penjualanBulananUncheckedUpdateWithoutHasilPrediksiInput>
    create: XOR<penjualanBulananCreateWithoutHasilPrediksiInput, penjualanBulananUncheckedCreateWithoutHasilPrediksiInput>
    where?: penjualanBulananWhereInput
  }

  export type penjualanBulananUpdateToOneWithWhereWithoutHasilPrediksiInput = {
    where?: penjualanBulananWhereInput
    data: XOR<penjualanBulananUpdateWithoutHasilPrediksiInput, penjualanBulananUncheckedUpdateWithoutHasilPrediksiInput>
  }

  export type penjualanBulananUpdateWithoutHasilPrediksiInput = {
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    user?: usersUpdateOneRequiredWithoutPenjualanBulananNestedInput
  }

  export type penjualanBulananUncheckedUpdateWithoutHasilPrediksiInput = {
    id_penjualan_bulanan?: IntFieldUpdateOperationsInput | number
    id_users?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type penjualanBulananCreateManyUserInput = {
    id_penjualan_bulanan?: number
    bulan: number
    tahun: number
    total: number
  }

  export type penjualanHarianCreateManyUserInput = {
    id_penjualan_harian?: number
    tanggal: Date | string
    terjual: number
  }

  export type penjualanBulananUpdateWithoutUserInput = {
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    hasilPrediksi?: hasilPrediksiUpdateManyWithoutPenjualanBulananNestedInput
  }

  export type penjualanBulananUncheckedUpdateWithoutUserInput = {
    id_penjualan_bulanan?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    hasilPrediksi?: hasilPrediksiUncheckedUpdateManyWithoutPenjualanBulananNestedInput
  }

  export type penjualanBulananUncheckedUpdateManyWithoutUserInput = {
    id_penjualan_bulanan?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type penjualanHarianUpdateWithoutUserInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    terjual?: IntFieldUpdateOperationsInput | number
  }

  export type penjualanHarianUncheckedUpdateWithoutUserInput = {
    id_penjualan_harian?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    terjual?: IntFieldUpdateOperationsInput | number
  }

  export type penjualanHarianUncheckedUpdateManyWithoutUserInput = {
    id_penjualan_harian?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    terjual?: IntFieldUpdateOperationsInput | number
  }

  export type hasilPrediksiCreateManyPenjualanBulananInput = {
    id_prediksi?: number
    hasil_prediksi: Decimal | DecimalJsLike | number | string
    error: Decimal | DecimalJsLike | number | string
  }

  export type hasilPrediksiUpdateWithoutPenjualanBulananInput = {
    hasil_prediksi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    error?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type hasilPrediksiUncheckedUpdateWithoutPenjualanBulananInput = {
    id_prediksi?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    error?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type hasilPrediksiUncheckedUpdateManyWithoutPenjualanBulananInput = {
    id_prediksi?: IntFieldUpdateOperationsInput | number
    hasil_prediksi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    error?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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