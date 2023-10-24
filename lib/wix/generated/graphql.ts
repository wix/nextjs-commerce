/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** Represents NULL values */
  Void: { input: any; output: any; }
};

export type AdvancedSeoSeoSchema = {
  __typename?: 'AdvancedSeoSeoSchema';
  /** SEO general settings. */
  settings?: Maybe<AdvancedSeoSeoSchemaSettings>;
  /** SEO tag information. */
  tags?: Maybe<Array<Maybe<AdvancedSeoSeoSchemaTag>>>;
};

export type AdvancedSeoSeoSchemaInput = {
  /** SEO general settings. */
  settings?: InputMaybe<AdvancedSeoSeoSchemaSettingsInput>;
  /** SEO tag information. */
  tags?: InputMaybe<Array<InputMaybe<AdvancedSeoSeoSchemaTagInput>>>;
};

export type AdvancedSeoSeoSchemaKeyword = {
  __typename?: 'AdvancedSeoSeoSchemaKeyword';
  /** Whether the keyword is the main focus keyword. */
  isMain?: Maybe<Scalars['Boolean']['output']>;
  /** Keyword value. */
  term?: Maybe<Scalars['String']['output']>;
};

export type AdvancedSeoSeoSchemaKeywordInput = {
  /** Whether the keyword is the main focus keyword. */
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  /** Keyword value. */
  term?: InputMaybe<Scalars['String']['input']>;
};

export type AdvancedSeoSeoSchemaSettings = {
  __typename?: 'AdvancedSeoSeoSchemaSettings';
  /** User-selected keyword terms for a specific page. */
  keywords?: Maybe<Array<Maybe<AdvancedSeoSeoSchemaKeyword>>>;
  /**
   * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
   *
   *
   * Default: `false` (Auto Redirect is enabled.)
   */
  preventAutoRedirect?: Maybe<Scalars['Boolean']['output']>;
};

export type AdvancedSeoSeoSchemaSettingsInput = {
  /** User-selected keyword terms for a specific page. */
  keywords?: InputMaybe<Array<InputMaybe<AdvancedSeoSeoSchemaKeywordInput>>>;
  /**
   * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
   *
   *
   * Default: `false` (Auto Redirect is enabled.)
   */
  preventAutoRedirect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AdvancedSeoSeoSchemaTag = {
  __typename?: 'AdvancedSeoSeoSchemaTag';
  /** SEO tag inner content. For example, `<title> inner content </title>`. */
  children?: Maybe<Scalars['String']['output']>;
  /** Whether the tag is a custom tag. */
  custom?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the tag is disabled. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** SEO tag meta data. For example, `{height: 300, width: 240}`. */
  meta?: Maybe<Scalars['JSON']['output']>;
  /**
   * A `{'key':'value'}` pair object where each SEO tag property (`'name'`, `'content'`, `'rel'`, `'href'`) contains a value.
   * For example: `{'name': 'description', 'content': 'the description itself'}`.
   */
  props?: Maybe<Scalars['JSON']['output']>;
  /**
   * SEO tag type.
   *
   *
   * Supported values: `title`, `meta`, `script`, `link`.
   */
  type?: Maybe<Scalars['String']['output']>;
};

export type AdvancedSeoSeoSchemaTagInput = {
  /** SEO tag inner content. For example, `<title> inner content </title>`. */
  children?: InputMaybe<Scalars['String']['input']>;
  /** Whether the tag is a custom tag. */
  custom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the tag is disabled. */
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** SEO tag meta data. For example, `{height: 300, width: 240}`. */
  meta?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * A `{'key':'value'}` pair object where each SEO tag property (`'name'`, `'content'`, `'rel'`, `'href'`) contains a value.
   * For example: `{'name': 'description', 'content': 'the description itself'}`.
   */
  props?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * SEO tag type.
   *
   *
   * Supported values: `title`, `meta`, `script`, `link`.
   */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ApiApplicationError = {
  __typename?: 'ApiApplicationError';
  /** Error code. */
  code?: Maybe<Scalars['String']['output']>;
  /** Data related to the error. */
  data?: Maybe<Scalars['JSON']['output']>;
  /** Description of the error. */
  description?: Maybe<Scalars['String']['output']>;
};

export type ApiApplicationErrorInput = {
  /** Error code. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Data related to the error. */
  data?: InputMaybe<Scalars['JSON']['input']>;
  /** Description of the error. */
  description?: InputMaybe<Scalars['String']['input']>;
};

export type ApiDetails = {
  __typename?: 'ApiDetails';
  applicationError?: Maybe<ApiApplicationError>;
  /** deprecated in API's - to enable migration from rendering arbitrary tracing to rest response */
  tracing?: Maybe<Scalars['JSON']['output']>;
  validationError?: Maybe<ApiValidationError>;
};

export type ApiDetailsInput = {
  applicationError?: InputMaybe<ApiApplicationErrorInput>;
  /** deprecated in API's - to enable migration from rendering arbitrary tracing to rest response */
  tracing?: InputMaybe<Scalars['JSON']['input']>;
  validationError?: InputMaybe<ApiValidationErrorInput>;
};

export type ApiValidationError = {
  __typename?: 'ApiValidationError';
  fieldViolations?: Maybe<Array<Maybe<ValidationErrorFieldViolation>>>;
};

export type ApiValidationErrorInput = {
  fieldViolations?: InputMaybe<Array<InputMaybe<ValidationErrorFieldViolationInput>>>;
};

export type BookingsAttendanceV2Attendance = {
  __typename?: 'BookingsAttendanceV2Attendance';
  /** Corresponding booking ID. */
  bookingId?: Maybe<Scalars['String']['output']>;
  /** ID of the `Attendance` object. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Total number of participants that attended the session. By default, the number
   * of attendees is set to `1`, but you can set a number to greater than `1` if multiple
   * participants attended.
   *
   * Do not set to `0` to indicate that no one attended the session. Instead, set the `status` field to `NOT_ATTENDED`.
   *
   * Default: 1
   */
  numberOfAttendees?: Maybe<Scalars['Int']['output']>;
  /** Corresponding session ID. */
  sessionId?: Maybe<Scalars['String']['output']>;
  /**
   * Status indicating if any particpants attended the session:
   *
   * + `NOT_SET`: There is no available attendance information.
   * + `ATTENDED`: At least a single participant attended the session.
   * + `NOT_ATTENDED`: No participants attended the session.
   */
  status?: Maybe<BookingsAttendanceV2AttendanceAttendanceStatus>;
};

export enum BookingsAttendanceV2AttendanceAttendanceStatus {
  Attended = 'ATTENDED',
  NotAttended = 'NOT_ATTENDED',
  NotSet = 'NOT_SET'
}

export type BookingsAttendanceV2AttendanceInput = {
  /** Corresponding booking ID. */
  bookingId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the `Attendance` object. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * Total number of participants that attended the session. By default, the number
   * of attendees is set to `1`, but you can set a number to greater than `1` if multiple
   * participants attended.
   *
   * Do not set to `0` to indicate that no one attended the session. Instead, set the `status` field to `NOT_ATTENDED`.
   *
   * Default: 1
   */
  numberOfAttendees?: InputMaybe<Scalars['Int']['input']>;
  /** Corresponding session ID. */
  sessionId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Status indicating if any particpants attended the session:
   *
   * + `NOT_SET`: There is no available attendance information.
   * + `ATTENDED`: At least a single participant attended the session.
   * + `NOT_ATTENDED`: No participants attended the session.
   */
  status?: InputMaybe<BookingsAttendanceV2AttendanceAttendanceStatus>;
};

export type BookingsAttendanceV2QueryAttendanceRequestInput = {
  /** Query options. */
  query?: InputMaybe<BookingsAttendanceV2UpstreamCommonQueryV2Input>;
};

export type BookingsAttendanceV2QueryAttendanceResponse = {
  __typename?: 'BookingsAttendanceV2QueryAttendanceResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<BookingsAttendanceV2Attendance>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type BookingsAttendanceV2SetAttendanceRequestInput = {
  /** The attendance information for a booked session that you want to create or update. */
  attendance?: InputMaybe<BookingsAttendanceV2AttendanceInput>;
};

export type BookingsAttendanceV2SetAttendanceResponse = {
  __typename?: 'BookingsAttendanceV2SetAttendanceResponse';
  /** The created or updated attendance information for the booked session. */
  attendance?: Maybe<BookingsAttendanceV2Attendance>;
};

export type BookingsAttendanceV2UpstreamCommonCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   *
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   *
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Number of `Attendance` objects to return.
   *
   * Default: `50`
   * Maximum: `1000`
   */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingsAttendanceV2UpstreamCommonQueryV2Input = {
  /** Cursors to navigate through the result pages using `next` and `prev`. */
  cursorPaging?: InputMaybe<BookingsAttendanceV2UpstreamCommonCursorPagingInput>;
  /**
   * Filter object. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more information.
   *
   * For a detailed list of supported fields and operators, see [Supported Filters and Sorting](https://dev.wix.com/api/rest/wix-bookings/attendance/supported-filters).
   *
   * Max: 1 filter
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Sort object in the following format:
   * `[ {"fieldName":"sortField1","order":"ASC"}, {"fieldName":"sortField2","order":"DESC"} ]`
   *
   * For details about sorting, see [Supported Filters and Sorting](https://dev.wix.com/api/rest/wix-bookings/attendance/supported-filters).
   */
  sort?: InputMaybe<Array<InputMaybe<BookingsAttendanceV2UpstreamCommonSortingInput>>>;
};

export enum BookingsAttendanceV2UpstreamCommonSortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type BookingsAttendanceV2UpstreamCommonSortingInput = {
  /** Name of the field to sort by. */
  fieldName?: InputMaybe<Scalars['String']['input']>;
  /** Sort order. */
  order?: InputMaybe<BookingsAttendanceV2UpstreamCommonSortOrder>;
};

export type BookingsAvailabilityBookingPolicyViolationsInput = {
  /** Bookings policy violation. Online booking is disabled for this slot. */
  bookOnlineDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Bookings policy violation. Too early to book this slot. */
  tooEarlyToBook?: InputMaybe<Scalars['Boolean']['input']>;
  /** Bookings policy violation. Too late to book this slot. */
  tooLateToBook?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingsAvailabilityLocationInput = {
  /** The full address of this location. */
  formattedAddress?: InputMaybe<Scalars['String']['input']>;
  /**
   * Business location ID. Available only for locations that are business locations,
   * meaning the `location_type` is `"OWNER_BUSINESS"`.
   */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * Location type.
   *
   * - `"OWNER_BUSINESS"`: The business address, as set in the site’s general settings.
   * - `"OWNER_CUSTOM"`: The address as set when creating the service.
   * - `"CUSTOM"`: The address as set for the individual session.
   */
  locationType?: InputMaybe<BookingsAvailabilityLocationType>;
  /** Location name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum BookingsAvailabilityLocationType {
  Custom = 'CUSTOM',
  OwnerBusiness = 'OWNER_BUSINESS',
  OwnerCustom = 'OWNER_CUSTOM',
  Undefined = 'UNDEFINED'
}

export type BookingsAvailabilitySlotAvailabilityInput = {
  /**
   * Whether the slot is bookable. Bookability is determined by checking a
   * session's open slots and booking policies. Locks are not taken into
   * account.
   */
  bookable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Booking policy violations for the slot. */
  bookingPolicyViolations?: InputMaybe<BookingsAvailabilityBookingPolicyViolationsInput>;
  isFromV2?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Indicates whether the slot is locked because a waitlist exists.
   * When a slot frees up, the slot is offered to the next customer on the waitlist. Read-only.
   */
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of open spots for this slot. */
  openSpots?: InputMaybe<Scalars['Int']['input']>;
  /**
   * The slot for the corresponding session, when the session is either a single session
   * or a specific session generated from a recurring session.
   */
  slot?: InputMaybe<BookingsAvailabilitySlotInput>;
  /**
   * Total number of spots for this slot.
   * For example, if a session has a total of 10 spots and 3 spots are booked,
   * `spotsTotal` is 10 and `openSpots` is 7.
   */
  totalSpots?: InputMaybe<Scalars['Int']['input']>;
  /** An object describing the slot's waitlist and its occupancy. */
  waitingList?: InputMaybe<BookingsAvailabilityWaitingListInput>;
};

export type BookingsAvailabilitySlotInput = {
  /**
   * The end time of this slot in
   * [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339) format.
   *
   * If `timezone` is specified,
   * dates are based on the local date/time. This means that the timezone offset
   * in the `end_date` is ignored.
   */
  endDate?: InputMaybe<Scalars['String']['input']>;
  /** Geographic location of the slot. */
  location?: InputMaybe<BookingsAvailabilityLocationInput>;
  /**
   * The resource required for this slot. Currently, the only supported resource
   * is the relevant staff member for the slot.
   */
  resource?: InputMaybe<BookingsAvailabilitySlotResourceInput>;
  /** Schedule ID. */
  scheduleId?: InputMaybe<Scalars['String']['input']>;
  /** Service ID. */
  serviceId?: InputMaybe<Scalars['String']['input']>;
  /**
   * ID for the slot's corresponding session, when the session is either a single session
   * or a specific session generated from a recurring session.
   */
  sessionId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The start time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
   * format.
   *
   * If `timezone` is specified,
   * dates are based on the local date/time. This means that the timezone offset
   * in the `start_date` is ignored.
   */
  startDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * The timezone for which slot availability is to be calculated.
   *
   * Learn more about [handling Daylight Savings Time (DST) for local time zones](https://dev.wix.com/api/rest/wix-bookings/availability-calendar/query-availability#wix-bookings_availability-calendar_query-availability_handling-daylight-savings-time-dst-for-local-time-zones)
   * when calculating availability.
   */
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsAvailabilitySlotResourceInput = {
  /** Resource ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Resource name. Read only. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsAvailabilityWaitingListInput = {
  /** Number of open spots for this waitlist. */
  openSpots?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Total number of spots and open spots for this waitlist.
   * For example, a Yoga class with 10 waitlist spots and 3 registered
   * on the waitlist has 10 `total_spots` and 7 `open_spots`.
   */
  totalSpots?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingsCalendarV2ListSessionsRequestInput = {
  /**
   * Predefined sets of fields to return.
   * - `NO_PI`: Returns session objects without personal information.
   * - `ALL_PI`: Returns complete session objects, including personal information. Requires the CALENDAR.SESSION_READ_PI permission scope.
   *
   * Default: `NO_PI`
   */
  fieldsets?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** IDs of the sessions to retrieve. */
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BookingsCalendarV2ListSessionsResponse = {
  __typename?: 'BookingsCalendarV2ListSessionsResponse';
  /** Retrieved sessions. */
  sessions?: Maybe<Array<Maybe<BookingsSchedulesV1Session>>>;
};

export type BookingsCalendarV2QuerySessionsRequestInput = {
  /**
   * Start of the time range for which sessions are returned, in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   *
   * Sessions that begin before the `fromDate` but end after it are included in the results. For recurring session definitions, this means the `start` value is before the `fromDate` and the `UNTIL` value in the `recurrence` property is after the `fromDate`.
   *
   * Required, unless `query.cursorPaging` is provided.
   */
  fromDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * Whether to include sessions imported from connected external calendars in the results.
   *
   * Default: `false`.
   */
  includeExternal?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Whether to return only single session instances and instances of recurring sessions.
   *
   * If `true`, only single session instances and instances of recurring sessions are returned.
   *
   * If `false`, only recurring session definitions are returned. **Note:** Cursor pagination is not supported for recurring session definition queries.
   *
   * Default: `true`.
   */
  instances?: InputMaybe<Scalars['Boolean']['input']>;
  /** Query options. */
  query?: InputMaybe<BookingsCalendarV2UpstreamCommonQueryV2Input>;
  /**
   * End of the time range for which sessions are returned, in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   *
   * Sessions that begin before the `toDate` but end after it are included in the results. For recurring session definitions, this means the `start` value is before the `toDate` and the `UNTIL` value in the `recurrence` property is after the `toDate`.
   *
   * Required, unless `query.cursorPaging` is provided.
   *
   * Max: 1 year after `fromDate` for session instance queries. This limit doesn't apply to recurring session definition queries.
   */
  toDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * Type of sessions to return.
   * + `EVENT`: Returns only sessions of type `EVENT`.
   * + `WORKING_HOURS`: Returns only sessions of type `WORKING_HOURS`.
   * + `ALL`: Returns sessions of all types.
   *
   * Default: `EVENT`.
   */
  type?: InputMaybe<BookingsCalendarV2QuerySessionsRequestSessionTypeFilter>;
};

export enum BookingsCalendarV2QuerySessionsRequestSessionTypeFilter {
  /** Return sessions of any type. */
  All = 'ALL',
  /** Filter sessions of type `EVENT`. This is the default. */
  Event = 'EVENT',
  UnknownSessionType = 'UNKNOWN_SESSION_TYPE',
  /** Filter sessions of type `WORKING_HOURS`. */
  WorkingHours = 'WORKING_HOURS'
}

export type BookingsCalendarV2QuerySessionsResponse = {
  __typename?: 'BookingsCalendarV2QuerySessionsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<BookingsSchedulesV1Session>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type BookingsCalendarV2UpstreamCommonCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   *
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Number of sessions to return.
   *
   * Default: `100`
   * Max: `1000`
   */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingsCalendarV2UpstreamCommonQueryV2Input = {
  /**
   * Cursor token pointing to a page of results.
   * Not used in the first request.
   * Following requests use the cursor token and not `filter`.
   */
  cursorPaging?: InputMaybe<BookingsCalendarV2UpstreamCommonCursorPagingInput>;
  /**
   * Predefined sets of fields to return.
   * - `NO_PI`: Returns session objects without personal information.
   * - `ALL_PI`: Returns complete session objects, including personal information. Requires the Read Bookings Calendar - Including Participants or the Manage Bookings Services and Settings or the Manage Business Calendar [permission scope](https://devforum.wix.com/kb/en/article/available-permissions).
   *
   * Default: `NO_PI`
   */
  fieldsets?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Filter object. For field support for filters, see
   * [Sessions: Supported Filters](./filtering).
   * See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more information about querying with filters.
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
};

export type BookingsCatalogV1CloneServiceOptionsAndVariantsRequestInput = {
  /** ID of the `serviceOptionsAndVariants` object to clone. */
  cloneFromId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the service that will be set for the cloned `serviceOptionsAndVariants` */
  targetServiceId?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsCatalogV1CloneServiceOptionsAndVariantsResponse = {
  __typename?: 'BookingsCatalogV1CloneServiceOptionsAndVariantsResponse';
  /** The cloned `serviceOptionsAndVariants` object. */
  serviceOptionsAndVariants?: Maybe<BookingsCatalogV1ServiceOptionsAndVariants>;
};

export type BookingsCatalogV1CreateServiceOptionsAndVariantsRequestInput = {
  /** Service options and variants to create. */
  serviceOptionsAndVariants?: InputMaybe<BookingsCatalogV1ServiceOptionsAndVariantsInput>;
};

export type BookingsCatalogV1CreateServiceOptionsAndVariantsResponse = {
  __typename?: 'BookingsCatalogV1CreateServiceOptionsAndVariantsResponse';
  /** Information about the created service options and variants. */
  serviceOptionsAndVariants?: Maybe<BookingsCatalogV1ServiceOptionsAndVariants>;
};

export type BookingsCatalogV1CustomServiceOption = {
  __typename?: 'BookingsCatalogV1CustomServiceOption';
  /**
   * Available choices for the service option. For example, `child`, `student`,
   * `adult`, and `senior` for a service option named `Age group`. Each value must
   * be unique. The value's case is ignored, meaning `Child` and `child` are
   * considered to be identical. Currently, only a single choice is supported
   * because a service can have only a single option.
   *
   * Max: 1 choice
   */
  choices?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Name of the service option. For example, `Age group`, `Location`, `Equipment`,
   * or `Time`.
   */
  name?: Maybe<Scalars['String']['output']>;
};

export type BookingsCatalogV1CustomServiceOptionInput = {
  /**
   * Available choices for the service option. For example, `child`, `student`,
   * `adult`, and `senior` for a service option named `Age group`. Each value must
   * be unique. The value's case is ignored, meaning `Child` and `child` are
   * considered to be identical. Currently, only a single choice is supported
   * because a service can have only a single option.
   *
   * Max: 1 choice
   */
  choices?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Name of the service option. For example, `Age group`, `Location`, `Equipment`,
   * or `Time`.
   */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsCatalogV1DeleteServiceOptionsAndVariantsRequestInput = {
  /** Revision of the `serviceOptionsAndVariants` object to delete. */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** ID of the `serviceOptionsAndVariants` object to delete. */
  serviceOptionsAndVariantsId?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsCatalogV1GetServiceOptionsAndVariantsByServiceIdRequestInput = {
  /** ID of the service to retrieve options and variants for. */
  serviceId?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsCatalogV1GetServiceOptionsAndVariantsByServiceIdResponse = {
  __typename?: 'BookingsCatalogV1GetServiceOptionsAndVariantsByServiceIdResponse';
  /** Retrieved `serviceOptionsAndVariants` object. */
  serviceVariants?: Maybe<BookingsCatalogV1ServiceOptionsAndVariants>;
};

export type BookingsCatalogV1QueryServiceOptionsAndVariantsRequestInput = {
  /** Information about filters, paging, and returned fields. */
  query?: InputMaybe<CommonQueryV2Input>;
};

export type BookingsCatalogV1QueryServiceOptionsAndVariantsResponse = {
  __typename?: 'BookingsCatalogV1QueryServiceOptionsAndVariantsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<BookingsCatalogV1ServiceOptionsAndVariants>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type BookingsCatalogV1ServiceChoice = {
  __typename?: 'BookingsCatalogV1ServiceChoice';
  /** Name of the custom choice. */
  custom?: Maybe<Scalars['String']['output']>;
  /** ID of the service option. */
  optionId?: Maybe<Scalars['String']['output']>;
  /**
   * ID of the staff member providing the service. This ID is the equivalent of the `resourceId`
   * of the staff member or the `scheduleOwnerId` of the relevant
   * [schedule's](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/schedule/schedule-object)
   * `availability.linkedSchedules`.
   */
  staffMemberId?: Maybe<Scalars['String']['output']>;
};

export type BookingsCatalogV1ServiceChoiceInput = {
  /** Name of the custom choice. */
  custom?: InputMaybe<Scalars['String']['input']>;
  /** ID of the service option. */
  optionId?: InputMaybe<Scalars['String']['input']>;
  /**
   * ID of the staff member providing the service. This ID is the equivalent of the `resourceId`
   * of the staff member or the `scheduleOwnerId` of the relevant
   * [schedule's](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/schedule/schedule-object)
   * `availability.linkedSchedules`.
   */
  staffMemberId?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsCatalogV1ServiceOption = {
  __typename?: 'BookingsCatalogV1ServiceOption';
  /** Details about the custom option. Available only for `CUSTOM` options. */
  customData?: Maybe<BookingsCatalogV1CustomServiceOption>;
  /** ID of the service option. */
  id?: Maybe<Scalars['String']['output']>;
  /** Type of the service option. */
  type?: Maybe<BookingsCatalogV1ServiceOptionTypeEnumServiceOptionType>;
};

export type BookingsCatalogV1ServiceOptionInput = {
  /** Details about the custom option. Available only for `CUSTOM` options. */
  customData?: InputMaybe<BookingsCatalogV1CustomServiceOptionInput>;
  /** ID of the service option. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Type of the service option. */
  type?: InputMaybe<BookingsCatalogV1ServiceOptionTypeEnumServiceOptionType>;
};

export enum BookingsCatalogV1ServiceOptionTypeEnumServiceOptionType {
  Custom = 'CUSTOM',
  StaffMember = 'STAFF_MEMBER',
  Unknown = 'UNKNOWN'
}

export type BookingsCatalogV1ServiceOptionsAndVariants = {
  __typename?: 'BookingsCatalogV1ServiceOptionsAndVariants';
  /** ID of the `serviceOptionsAndVariants` object. */
  id?: Maybe<Scalars['String']['output']>;
  /** Price of the most expensive service variant. */
  maxPrice?: Maybe<CommonMoney>;
  /** Price of the cheapest service variant. */
  minPrice?: Maybe<CommonMoney>;
  /** Service options. Note that currently only a single option is supported per service. */
  options?: Maybe<BookingsCatalogV1ServiceOptionsAndVariantsServiceOptions>;
  /**
   * Revision number, which increments by 1 each time the `serviceOptionsAndVariants` object is updated.
   * To prevent conflicting changes,
   * the current revision must be passed when updating and deleting the `serviceOptionsAndVariants` object.
   *
   * Ignored when creating a `serviceOptionsAndVariants` object.
   */
  revision?: Maybe<Scalars['Int']['output']>;
  /** ID of the service related to these options and variants. */
  serviceId?: Maybe<Scalars['String']['output']>;
  /** Information about the service's variants. */
  variants?: Maybe<BookingsCatalogV1ServiceOptionsAndVariantsServiceVariants>;
};

export type BookingsCatalogV1ServiceOptionsAndVariantsInput = {
  /** ID of the `serviceOptionsAndVariants` object. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Price of the most expensive service variant. */
  maxPrice?: InputMaybe<CommonMoneyInput>;
  /** Price of the cheapest service variant. */
  minPrice?: InputMaybe<CommonMoneyInput>;
  /** Service options. Note that currently only a single option is supported per service. */
  options?: InputMaybe<BookingsCatalogV1ServiceOptionsAndVariantsServiceOptionsInput>;
  /**
   * Revision number, which increments by 1 each time the `serviceOptionsAndVariants` object is updated.
   * To prevent conflicting changes,
   * the current revision must be passed when updating and deleting the `serviceOptionsAndVariants` object.
   *
   * Ignored when creating a `serviceOptionsAndVariants` object.
   */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** ID of the service related to these options and variants. */
  serviceId?: InputMaybe<Scalars['String']['input']>;
  /** Information about the service's variants. */
  variants?: InputMaybe<BookingsCatalogV1ServiceOptionsAndVariantsServiceVariantsInput>;
};

export type BookingsCatalogV1ServiceOptionsAndVariantsServiceOptions = {
  __typename?: 'BookingsCatalogV1ServiceOptionsAndVariantsServiceOptions';
  /**
   * Values of the service options.
   *
   * Max: 1 service option
   */
  values?: Maybe<Array<Maybe<BookingsCatalogV1ServiceOption>>>;
};

export type BookingsCatalogV1ServiceOptionsAndVariantsServiceOptionsInput = {
  /**
   * Values of the service options.
   *
   * Max: 1 service option
   */
  values?: InputMaybe<Array<InputMaybe<BookingsCatalogV1ServiceOptionInput>>>;
};

export type BookingsCatalogV1ServiceOptionsAndVariantsServiceVariants = {
  __typename?: 'BookingsCatalogV1ServiceOptionsAndVariantsServiceVariants';
  /** Values of the service variants. */
  values?: Maybe<Array<Maybe<BookingsCatalogV1ServiceVariant>>>;
};

export type BookingsCatalogV1ServiceOptionsAndVariantsServiceVariantsInput = {
  /** Values of the service variants. */
  values?: InputMaybe<Array<InputMaybe<BookingsCatalogV1ServiceVariantInput>>>;
};

export type BookingsCatalogV1ServiceVariant = {
  __typename?: 'BookingsCatalogV1ServiceVariant';
  /**
   * Choices for the service option. Currently, only a single choice is supported
   * because a service can have only a single option.
   *
   * Max: 1 choice
   */
  choices?: Maybe<Array<Maybe<BookingsCatalogV1ServiceChoice>>>;
  /** Information about the service variant's price. */
  price?: Maybe<CommonMoney>;
};

export type BookingsCatalogV1ServiceVariantInput = {
  /**
   * Choices for the service option. Currently, only a single choice is supported
   * because a service can have only a single option.
   *
   * Max: 1 choice
   */
  choices?: InputMaybe<Array<InputMaybe<BookingsCatalogV1ServiceChoiceInput>>>;
  /** Information about the service variant's price. */
  price?: InputMaybe<CommonMoneyInput>;
};

export type BookingsCatalogV1UpdateServiceOptionsAndVariantsRequestInput = {
  /** Field mask containing information about the fields to update. */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `ServiceOptionsAndVariants` object to update. */
  serviceOptionsAndVariants?: InputMaybe<BookingsCatalogV1ServiceOptionsAndVariantsInput>;
};

export type BookingsCatalogV1UpdateServiceOptionsAndVariantsResponse = {
  __typename?: 'BookingsCatalogV1UpdateServiceOptionsAndVariantsResponse';
  /** Updated `serviceOptionsAndVariants` object. */
  serviceOptionsAndVariants?: Maybe<BookingsCatalogV1ServiceOptionsAndVariants>;
};

export type BookingsCommonV1Location = {
  __typename?: 'BookingsCommonV1Location';
  /** Free text address used when locationType is `OWNER_CUSTOM`. */
  address?: Maybe<Scalars['String']['output']>;
  /** Custom address, used when locationType is `"OWNER_CUSTOM"`. Might be used when locationType is `"CUSTOM"` in case the owner sets a custom address for the session which is different from the default. */
  customAddress?: Maybe<BookingsUpstreamCommonAddress>;
  /**
   * Location type.
   * One of:
   * - `"OWNER_BUSINESS"` The business address as set in the site’s general settings.
   * - `"OWNER_CUSTOM"` The address as set when creating the service.
   * - `"CUSTOM"` The address set for the individual session.
   */
  locationType?: Maybe<BookingsCommonV1LocationLocationType>;
};

export type BookingsCommonV1LocationInput = {
  /** Free text address used when locationType is `OWNER_CUSTOM`. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Custom address, used when locationType is `"OWNER_CUSTOM"`. Might be used when locationType is `"CUSTOM"` in case the owner sets a custom address for the session which is different from the default. */
  customAddress?: InputMaybe<BookingsUpstreamCommonAddressInput>;
  /**
   * Location type.
   * One of:
   * - `"OWNER_BUSINESS"` The business address as set in the site’s general settings.
   * - `"OWNER_CUSTOM"` The address as set when creating the service.
   * - `"CUSTOM"` The address set for the individual session.
   */
  locationType?: InputMaybe<BookingsCommonV1LocationLocationType>;
};

export enum BookingsCommonV1LocationLocationType {
  Custom = 'CUSTOM',
  OwnerBusiness = 'OWNER_BUSINESS',
  OwnerCustom = 'OWNER_CUSTOM',
  Undefined = 'UNDEFINED'
}

export type BookingsCommonV1Price = {
  __typename?: 'BookingsCommonV1Price';
  /** Required payment amount. */
  amount?: Maybe<Scalars['String']['output']>;
  /** Currency in which the amount is quoted. */
  currency?: Maybe<Scalars['String']['output']>;
  /** Amount of a down payment or deposit as part of the transaction. */
  downPayAmount?: Maybe<Scalars['String']['output']>;
};

export type BookingsCommonV1PriceInput = {
  /** Required payment amount. */
  amount?: InputMaybe<Scalars['String']['input']>;
  /** Currency in which the amount is quoted. */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Amount of a down payment or deposit as part of the transaction. */
  downPayAmount?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsCommonV1Rate = {
  __typename?: 'BookingsCommonV1Rate';
  /**
   * Mapping between a named price option, for example, adult or child prices, and the price, currency, and down payment amount.
   * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
   */
  labeledPriceOptions?: Maybe<BookingsCommonV1Price>;
  /**
   * Textual price information used when **Price Per Session** is set to **Custom Price** in the app's service details page.
   * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
   */
  priceText?: Maybe<Scalars['String']['output']>;
};

export type BookingsCommonV1RateInput = {
  /**
   * Mapping between a named price option, for example, adult or child prices, and the price, currency, and down payment amount.
   * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
   */
  labeledPriceOptions?: InputMaybe<BookingsCommonV1PriceInput>;
  /**
   * Textual price information used when **Price Per Session** is set to **Custom Price** in the app's service details page.
   * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
   */
  priceText?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsSchedulesV1CalendarConference = {
  __typename?: 'BookingsSchedulesV1CalendarConference';
  /** ID of the account owner in the video conferencing service. */
  accountOwnerId?: Maybe<Scalars['String']['output']>;
  /**
   * Conference type.
   * <!--ONLY:VELO
   * One of:
   * - `"ONLINE_MEETING_PROVIDER"` API-generated online meeting.
   * - `"CUSTOM"` User-defined meeting.
   * <!--END:ONLY:VELO-->
   */
  conferenceType?: Maybe<BookingsSchedulesV1CalendarConferenceConferenceType>;
  /** Conference description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Conference meeting ID in the provider's conferencing system. */
  externalId?: Maybe<Scalars['String']['output']>;
  /** URL used by a guest to join the conference. */
  guestUrl?: Maybe<Scalars['String']['output']>;
  /** URL used by the host to start the conference. */
  hostUrl?: Maybe<Scalars['String']['output']>;
  /** Wix Calendar conference ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Password to join the conference. */
  password?: Maybe<Scalars['String']['output']>;
  /** Conference provider ID. */
  providerId?: Maybe<Scalars['String']['output']>;
};

export enum BookingsSchedulesV1CalendarConferenceConferenceType {
  /** User-defined meeting. */
  Custom = 'CUSTOM',
  /** API-generated online meeting. */
  OnlineMeetingProvider = 'ONLINE_MEETING_PROVIDER',
  Undefined = 'UNDEFINED'
}

export type BookingsSchedulesV1CalendarConferenceInput = {
  /** ID of the account owner in the video conferencing service. */
  accountOwnerId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Conference type.
   * <!--ONLY:VELO
   * One of:
   * - `"ONLINE_MEETING_PROVIDER"` API-generated online meeting.
   * - `"CUSTOM"` User-defined meeting.
   * <!--END:ONLY:VELO-->
   */
  conferenceType?: InputMaybe<BookingsSchedulesV1CalendarConferenceConferenceType>;
  /** Conference description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Conference meeting ID in the provider's conferencing system. */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** URL used by a guest to join the conference. */
  guestUrl?: InputMaybe<Scalars['String']['input']>;
  /** URL used by the host to start the conference. */
  hostUrl?: InputMaybe<Scalars['String']['input']>;
  /** Wix Calendar conference ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Password to join the conference. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Conference provider ID. */
  providerId?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsSchedulesV1CalendarDateTime = {
  __typename?: 'BookingsSchedulesV1CalendarDateTime';
  /** An object containing the local date and time for the business's time zone. */
  localDateTime?: Maybe<BookingsSchedulesV1LocalDateTime>;
  /**
   * The time zone. Optional. Derived from the schedule's time zone.
   * In case this field is associated with recurring session, this field is empty.
   */
  timeZone?: Maybe<Scalars['String']['output']>;
  /**
   * UTC date-time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. If a time zone offset is specified, the time is converted to UTC. For example, if you specify  `new Date('2021-01-06T16:00:00.000-07:00')`, the stored value will be `"2021-01-06T23:00:00.000Z"`.
   * Required if `localDateTime` is not specified.
   * If `localDateTime` is specified, `timestamp` is calculated as `localDateTime`, using the business's time zone.
   */
  timestamp?: Maybe<Scalars['String']['output']>;
};

export type BookingsSchedulesV1CalendarDateTimeInput = {
  /** An object containing the local date and time for the business's time zone. */
  localDateTime?: InputMaybe<BookingsSchedulesV1LocalDateTimeInput>;
  /**
   * The time zone. Optional. Derived from the schedule's time zone.
   * In case this field is associated with recurring session, this field is empty.
   */
  timeZone?: InputMaybe<Scalars['String']['input']>;
  /**
   * UTC date-time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. If a time zone offset is specified, the time is converted to UTC. For example, if you specify  `new Date('2021-01-06T16:00:00.000-07:00')`, the stored value will be `"2021-01-06T23:00:00.000Z"`.
   * Required if `localDateTime` is not specified.
   * If `localDateTime` is specified, `timestamp` is calculated as `localDateTime`, using the business's time zone.
   */
  timestamp?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsSchedulesV1ExternalCalendarOverrides = {
  __typename?: 'BookingsSchedulesV1ExternalCalendarOverrides';
  /** Synced description of the external calendar event. */
  description?: Maybe<Scalars['String']['output']>;
  /** Synced title of the external calendar event. */
  title?: Maybe<Scalars['String']['output']>;
};

export type BookingsSchedulesV1ExternalCalendarOverridesInput = {
  /** Synced description of the external calendar event. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Synced title of the external calendar event. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsSchedulesV1LinkedSchedule = {
  __typename?: 'BookingsSchedulesV1LinkedSchedule';
  /** Schedule ID. */
  scheduleId?: Maybe<Scalars['String']['output']>;
  /** Owner ID, of the linked schedule. */
  scheduleOwnerId?: Maybe<Scalars['String']['output']>;
  /**
   * Sets this schedule's availability for the duration of the linked schedule's sessions.  Default is `"BUSY"`.
   * <!--ONLY:REST-->
   * If set to `"BUSY"`, this schedule cannot have any available slots during the linked schedule's sessions.
   * If set to `"FREE"`, this schedule can have available slots during the linked schedule's sessions.
   * <!--END:ONLY:REST-->
   *
   * <!--ONLY:VELO
   * One of:
   * - `"FREE"` This schedule can have available slots during the linked schedule's sessions.
   * - `"BUSY"` This schedule cannot have any available slots during the linked schedule's sessions.
   * <!--END:ONLY:VELO-->
   */
  transparency?: Maybe<BookingsSchedulesV1LinkedScheduleTransparency>;
};

export type BookingsSchedulesV1LinkedScheduleInput = {
  /** Schedule ID. */
  scheduleId?: InputMaybe<Scalars['String']['input']>;
  /** Owner ID, of the linked schedule. */
  scheduleOwnerId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Sets this schedule's availability for the duration of the linked schedule's sessions.  Default is `"BUSY"`.
   * <!--ONLY:REST-->
   * If set to `"BUSY"`, this schedule cannot have any available slots during the linked schedule's sessions.
   * If set to `"FREE"`, this schedule can have available slots during the linked schedule's sessions.
   * <!--END:ONLY:REST-->
   *
   * <!--ONLY:VELO
   * One of:
   * - `"FREE"` This schedule can have available slots during the linked schedule's sessions.
   * - `"BUSY"` This schedule cannot have any available slots during the linked schedule's sessions.
   * <!--END:ONLY:VELO-->
   */
  transparency?: InputMaybe<BookingsSchedulesV1LinkedScheduleTransparency>;
};

export enum BookingsSchedulesV1LinkedScheduleTransparency {
  /** The schedule cannot have available slots during the session. Default value. */
  Busy = 'BUSY',
  /** The schedule can have available slots during the session. */
  Free = 'FREE',
  Undefined = 'UNDEFINED'
}

export type BookingsSchedulesV1LocalDateTime = {
  __typename?: 'BookingsSchedulesV1LocalDateTime';
  /** Day of the month, from 1-31. */
  dayOfMonth?: Maybe<Scalars['Int']['output']>;
  /** Hour of the day in 24-hour format, from 0-23. */
  hourOfDay?: Maybe<Scalars['Int']['output']>;
  /** Minute, from 0-59. */
  minutesOfHour?: Maybe<Scalars['Int']['output']>;
  /** Month number, from 1-12. */
  monthOfYear?: Maybe<Scalars['Int']['output']>;
  /** Year. 4-digit format. */
  year?: Maybe<Scalars['Int']['output']>;
};

export type BookingsSchedulesV1LocalDateTimeInput = {
  /** Day of the month, from 1-31. */
  dayOfMonth?: InputMaybe<Scalars['Int']['input']>;
  /** Hour of the day in 24-hour format, from 0-23. */
  hourOfDay?: InputMaybe<Scalars['Int']['input']>;
  /** Minute, from 0-59. */
  minutesOfHour?: InputMaybe<Scalars['Int']['input']>;
  /** Month number, from 1-12. */
  monthOfYear?: InputMaybe<Scalars['Int']['input']>;
  /** Year. 4-digit format. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingsSchedulesV1Participant = {
  __typename?: 'BookingsSchedulesV1Participant';
  /**
   * Approval status for the participant.
   * <!-- Commented out untill updateParticipant is exposed Generally the same status as the booking, unless updated using the `updateParticipant()` API. Defaults to `"UNDEFINED"`.-->
   * <!--ONLY:VELO
   * One of:
   * - `"PENDING"` Pending business approval.
   * - `"APPROVED"` Approved by the business.
   * - `"DECLINED"` Declined by the business.
   * <!--END:ONLY:VELO-->
   */
  approvalStatus?: Maybe<BookingsSchedulesV1ParticipantApprovalStatus>;
  /** Contact ID. */
  contactId?: Maybe<Scalars['String']['output']>;
  /** Participant's email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** Participant ID. Currently represents the booking.id. */
  id?: Maybe<Scalars['String']['output']>;
  /** Whether the participant was inherited from the schedule, as opposed to being booked directly to the session. */
  inherited?: Maybe<Scalars['Boolean']['output']>;
  /** Participant's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Group or party size. The number of people attending. Defaults to 0. Maximum is 250. */
  partySize?: Maybe<Scalars['Int']['output']>;
  /** Participant's phone number. */
  phone?: Maybe<Scalars['String']['output']>;
};

export enum BookingsSchedulesV1ParticipantApprovalStatus {
  /** Approved by the business. */
  Approved = 'APPROVED',
  /** Declined by the business. */
  Declined = 'DECLINED',
  /** Pending business approval. */
  Pending = 'PENDING',
  /** Default. */
  Undefined = 'UNDEFINED'
}

export type BookingsSchedulesV1ParticipantInput = {
  /**
   * Approval status for the participant.
   * <!-- Commented out untill updateParticipant is exposed Generally the same status as the booking, unless updated using the `updateParticipant()` API. Defaults to `"UNDEFINED"`.-->
   * <!--ONLY:VELO
   * One of:
   * - `"PENDING"` Pending business approval.
   * - `"APPROVED"` Approved by the business.
   * - `"DECLINED"` Declined by the business.
   * <!--END:ONLY:VELO-->
   */
  approvalStatus?: InputMaybe<BookingsSchedulesV1ParticipantApprovalStatus>;
  /** Contact ID. */
  contactId?: InputMaybe<Scalars['String']['input']>;
  /** Participant's email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Participant ID. Currently represents the booking.id. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Whether the participant was inherited from the schedule, as opposed to being booked directly to the session. */
  inherited?: InputMaybe<Scalars['Boolean']['input']>;
  /** Participant's name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Group or party size. The number of people attending. Defaults to 0. Maximum is 250. */
  partySize?: InputMaybe<Scalars['Int']['input']>;
  /** Participant's phone number. */
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsSchedulesV1ParticipantNotificationInput = {
  /** Custom message to send to the participants about the changes to the booking. */
  message?: InputMaybe<Scalars['String']['input']>;
  /**
   * Whether to send the message about the changes to the customer.
   *
   * Default: `false`
   */
  notifyParticipants?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingsSchedulesV1Session = {
  __typename?: 'BookingsSchedulesV1Session';
  /**
   * An object specifying a list of schedules and the way each schedule's availability is affected by the session. For example, the schedule of an instructor is affected by sessions of the class that they instruct.
   * The array is inherited from the schedule and can be overridden even if the session is a recurring session.
   */
  affectedSchedules?: Maybe<Array<Maybe<BookingsSchedulesV1LinkedSchedule>>>;
  /**
   * A conference created for the session according to the details set in the schedule's conference provider information.
   * If the session is a recurring session, this field is inherited from the schedule.
   * **Partially deprecated.** Only `hostUrl` and `guestUrl` are to be supported.
   */
  calendarConference?: Maybe<BookingsSchedulesV1CalendarConference>;
  /**
   * Maximum number of participants that can be added to the session. Defaults to the schedule capacity.
   * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
   */
  capacity?: Maybe<Scalars['Int']['output']>;
  /**
   * An object specifying the end date and time of the session. The `end` time must be after the `start` time and be same type as `start`.
   * If the session is a recurring session, `end` must contain a `localDateTime`.
   */
  end?: Maybe<BookingsSchedulesV1CalendarDateTime>;
  /** __Deprecated.__ */
  externalCalendarOverrides?: Maybe<BookingsSchedulesV1ExternalCalendarOverrides>;
  /** Session ID. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * A list of properties for which values were inherited from the schedule.
   * This does not include participants that were inherited from the schedule.
   */
  inheritedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * A string representing a recurrence rule (RRULE) if the session is an instance of a recurrence pattern.
   * Empty when the session is not an instance of a recurrence rule, or if the session defines a recurrence pattern, and `recurrence` is not empty.
   */
  instanceOfRecurrence?: Maybe<Scalars['String']['output']>;
  /**
   * An object describing the location where the session takes place.
   * Defaults to the schedule location.
   * For single sessions, `session.location.businessLocation` can only be provided for locations that are defined in the schedule using `schedule.location` or `schedule.availability.locations`.
   */
  location?: Maybe<BookingsCommonV1Location>;
  /**
   * Additional information about the session.
   * Notes are not supported for recurring sessions.
   */
  notes?: Maybe<Scalars['String']['output']>;
  /** Original start date and time of the session in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. */
  originalStart?: Maybe<Scalars['String']['output']>;
  /**
   * *Partial list** list of participants booked for the session.
   * The list includes participants who have registered for this specific session, and participants who have registered for a schedule that includes this session.
   * If the session is a recurring session, this field must be empty.
   * To retrieve the full list of session participants please use the [Query Extended Bookings API](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings).
   */
  participants?: Maybe<Array<Maybe<BookingsSchedulesV1Participant>>>;
  /** Deprecated. Please use the [Booking Services V2](https://dev.wix.com/api/rest/wix-bookings/services-v2) payment instead. */
  rate?: Maybe<BookingsCommonV1Rate>;
  /**
   * A string representing a recurrence rule (RRULE) for a recurring session, as defined in [iCalendar RFC 5545](https://icalendar.org/iCalendar-RFC-5545/3-3-10-recurrence-rule.html).
   * If the session is an instance of a recurrence pattern, the `instanceOfRecurrence` property will be contain the recurrence rule and this property will be empty.
   * The RRULE defines a rule for repeating a session.
   * Supported parameters are:
   *
   * |Keyword|Description|Supported values|
   * |--|--|---|
   * |`FREQ`|The frequency at which the session is recurs. Required.|`WEEKLY`|
   * |`INTERVAL`|How often, in terms of `FREQ`, the session recurs. Default is 1. Optional.|
   * |`UNTIL`|The UTC end date and time of the recurrence. Optional.|
   * |`BYDAY`|Day of the week when the event should recur. Required.|One of: `MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`|
   *
   *
   * For example, a session that repeats every second week on a Monday until January 7, 2022 at 8 AM:
   * `"FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20220107T080000Z"`
   *
   * <!--ORIGINAL COMMENTS:
   * `FREQ` — The frequency with which the session should be repeated (such as DAILY or WEEKLY).
   * Supported `WEEKLY` value is supported.
   * INTERVAL — Works together with FREQ to specify how often the session should be repeated. For example, FREQ=WEEKLY;INTERVAL=2 means once every two weeks. Optional. Default value is 1.
   * COUNT — The number of times this event should be repeated. Not yet supported.
   * UNTIL — The UTC date & time until which the session should be repeated. This parameter is optional. When it is not specified, the event repeats forever.
   * The format is a short ISO date, followed by 'T' and a short time with seconds and without milliseconds, terminated by the UTC designator 'Z'. For example, until Jan. 19th 2018 at 7:00 AM: 'UNTIL=20180119T070000Z'.
   * BYDAY - The days of the week when the event should be repeated. Currently, only a single day is supported. This parameter is mandatory.
   * Possible values are: MO, TU, WE, TH, FR, SA, SU
   * Note that DTSTART and DTEND lines are not allowed in this field; session start and end times are specified in the start and end fields.
   * **Example**: FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20200427T070000Z
   * ORIGINAL COMMENTS-->
   */
  recurrence?: Maybe<Scalars['String']['output']>;
  /**
   * Recurring interval ID. Defined when a session will be a recurring session. read-only. Optional.
   * For exmaple, when creating a class service  with recurring sessions, you add a recurrence rule to create recurring sessions.
   * This field is omitted for single sessions or instances of recurring sessions.
   * Specified when the session was originally generated from a schedule recurring interval.
   * Deprecated. Use `recurringSessionId`.
   */
  recurringIntervalId?: Maybe<Scalars['String']['output']>;
  /** The ID of the recurring session if this session is an instance of a recurrence. Use this ID to update the recurrence and all of the instances. */
  recurringSessionId?: Maybe<Scalars['String']['output']>;
  /** ID of the schedule that the session belongs to. */
  scheduleId?: Maybe<Scalars['String']['output']>;
  /** ID of the resource or service that the session's schedule belongs to. */
  scheduleOwnerId?: Maybe<Scalars['String']['output']>;
  /** An object specifying the start date and time of the session. If the session is a recurring session, `start` must contain a `localDateTime`. */
  start?: Maybe<BookingsSchedulesV1CalendarDateTime>;
  /**
   * Session status.
   * <!--ONLY:VELO
   * One of:
   * - `"CONFIRMED"` Default value.
   * - `"CANCELLED"` The session was deleted.
   * <!--END:ONLY:VELO-->
   */
  status?: Maybe<BookingsSchedulesV1SessionStatus>;
  /**
   * __Deprecated.__
   * Tags for the session.
   * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
   */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Time reserved after the session end time, derived from the schedule availability constraints and the time between slots. Read-only.
   * If the session is a recurring session, this field must be empty.
   */
  timeReservedAfter?: Maybe<Scalars['Int']['output']>;
  /**
   * Session title.
   * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
   */
  title?: Maybe<Scalars['String']['output']>;
  /**
   * The number of participants booked for the session. Read-only.
   * Calculated as the sum of the party sizes.
   */
  totalNumberOfParticipants?: Maybe<Scalars['Int']['output']>;
  /**
   * Session type.
   * <!--ONLY:VELO
   * One of:
   * - `"EVENT"` Reserved period of time on the schedule. For example, an appointment, class, course, or blocked time. Events are visible in the Dashboard in the Bookings app's [Booking Calendar](https://support.wix.com/en/article/wix-bookings-about-the-wix-bookings-calendar) page.
   * - `"WORKING_HOURS"` Placeholder for available time on a resource’s schedule.
   * <!--END:ONLY:VELO-->
   */
  type?: Maybe<BookingsSchedulesV1SessionType>;
  /**
   * The session version.
   * Composed by the schedule, session and participants versions.
   */
  version?: Maybe<BookingsSchedulesV1SessionVersion>;
};

export type BookingsSchedulesV1SessionInput = {
  /**
   * An object specifying a list of schedules and the way each schedule's availability is affected by the session. For example, the schedule of an instructor is affected by sessions of the class that they instruct.
   * The array is inherited from the schedule and can be overridden even if the session is a recurring session.
   */
  affectedSchedules?: InputMaybe<Array<InputMaybe<BookingsSchedulesV1LinkedScheduleInput>>>;
  /**
   * A conference created for the session according to the details set in the schedule's conference provider information.
   * If the session is a recurring session, this field is inherited from the schedule.
   * **Partially deprecated.** Only `hostUrl` and `guestUrl` are to be supported.
   */
  calendarConference?: InputMaybe<BookingsSchedulesV1CalendarConferenceInput>;
  /**
   * Maximum number of participants that can be added to the session. Defaults to the schedule capacity.
   * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
   */
  capacity?: InputMaybe<Scalars['Int']['input']>;
  /**
   * An object specifying the end date and time of the session. The `end` time must be after the `start` time and be same type as `start`.
   * If the session is a recurring session, `end` must contain a `localDateTime`.
   */
  end?: InputMaybe<BookingsSchedulesV1CalendarDateTimeInput>;
  /** __Deprecated.__ */
  externalCalendarOverrides?: InputMaybe<BookingsSchedulesV1ExternalCalendarOverridesInput>;
  /** Session ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * A list of properties for which values were inherited from the schedule.
   * This does not include participants that were inherited from the schedule.
   */
  inheritedFields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * A string representing a recurrence rule (RRULE) if the session is an instance of a recurrence pattern.
   * Empty when the session is not an instance of a recurrence rule, or if the session defines a recurrence pattern, and `recurrence` is not empty.
   */
  instanceOfRecurrence?: InputMaybe<Scalars['String']['input']>;
  /**
   * An object describing the location where the session takes place.
   * Defaults to the schedule location.
   * For single sessions, `session.location.businessLocation` can only be provided for locations that are defined in the schedule using `schedule.location` or `schedule.availability.locations`.
   */
  location?: InputMaybe<BookingsCommonV1LocationInput>;
  /**
   * Additional information about the session.
   * Notes are not supported for recurring sessions.
   */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** Original start date and time of the session in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. */
  originalStart?: InputMaybe<Scalars['String']['input']>;
  /**
   * *Partial list** list of participants booked for the session.
   * The list includes participants who have registered for this specific session, and participants who have registered for a schedule that includes this session.
   * If the session is a recurring session, this field must be empty.
   * To retrieve the full list of session participants please use the [Query Extended Bookings API](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings).
   */
  participants?: InputMaybe<Array<InputMaybe<BookingsSchedulesV1ParticipantInput>>>;
  /** Deprecated. Please use the [Booking Services V2](https://dev.wix.com/api/rest/wix-bookings/services-v2) payment instead. */
  rate?: InputMaybe<BookingsCommonV1RateInput>;
  /**
   * A string representing a recurrence rule (RRULE) for a recurring session, as defined in [iCalendar RFC 5545](https://icalendar.org/iCalendar-RFC-5545/3-3-10-recurrence-rule.html).
   * If the session is an instance of a recurrence pattern, the `instanceOfRecurrence` property will be contain the recurrence rule and this property will be empty.
   * The RRULE defines a rule for repeating a session.
   * Supported parameters are:
   *
   * |Keyword|Description|Supported values|
   * |--|--|---|
   * |`FREQ`|The frequency at which the session is recurs. Required.|`WEEKLY`|
   * |`INTERVAL`|How often, in terms of `FREQ`, the session recurs. Default is 1. Optional.|
   * |`UNTIL`|The UTC end date and time of the recurrence. Optional.|
   * |`BYDAY`|Day of the week when the event should recur. Required.|One of: `MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`|
   *
   *
   * For example, a session that repeats every second week on a Monday until January 7, 2022 at 8 AM:
   * `"FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20220107T080000Z"`
   *
   * <!--ORIGINAL COMMENTS:
   * `FREQ` — The frequency with which the session should be repeated (such as DAILY or WEEKLY).
   * Supported `WEEKLY` value is supported.
   * INTERVAL — Works together with FREQ to specify how often the session should be repeated. For example, FREQ=WEEKLY;INTERVAL=2 means once every two weeks. Optional. Default value is 1.
   * COUNT — The number of times this event should be repeated. Not yet supported.
   * UNTIL — The UTC date & time until which the session should be repeated. This parameter is optional. When it is not specified, the event repeats forever.
   * The format is a short ISO date, followed by 'T' and a short time with seconds and without milliseconds, terminated by the UTC designator 'Z'. For example, until Jan. 19th 2018 at 7:00 AM: 'UNTIL=20180119T070000Z'.
   * BYDAY - The days of the week when the event should be repeated. Currently, only a single day is supported. This parameter is mandatory.
   * Possible values are: MO, TU, WE, TH, FR, SA, SU
   * Note that DTSTART and DTEND lines are not allowed in this field; session start and end times are specified in the start and end fields.
   * **Example**: FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20200427T070000Z
   * ORIGINAL COMMENTS-->
   */
  recurrence?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recurring interval ID. Defined when a session will be a recurring session. read-only. Optional.
   * For exmaple, when creating a class service  with recurring sessions, you add a recurrence rule to create recurring sessions.
   * This field is omitted for single sessions or instances of recurring sessions.
   * Specified when the session was originally generated from a schedule recurring interval.
   * Deprecated. Use `recurringSessionId`.
   */
  recurringIntervalId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the recurring session if this session is an instance of a recurrence. Use this ID to update the recurrence and all of the instances. */
  recurringSessionId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the schedule that the session belongs to. */
  scheduleId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the resource or service that the session's schedule belongs to. */
  scheduleOwnerId?: InputMaybe<Scalars['String']['input']>;
  /** An object specifying the start date and time of the session. If the session is a recurring session, `start` must contain a `localDateTime`. */
  start?: InputMaybe<BookingsSchedulesV1CalendarDateTimeInput>;
  /**
   * Session status.
   * <!--ONLY:VELO
   * One of:
   * - `"CONFIRMED"` Default value.
   * - `"CANCELLED"` The session was deleted.
   * <!--END:ONLY:VELO-->
   */
  status?: InputMaybe<BookingsSchedulesV1SessionStatus>;
  /**
   * __Deprecated.__
   * Tags for the session.
   * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
   */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Time reserved after the session end time, derived from the schedule availability constraints and the time between slots. Read-only.
   * If the session is a recurring session, this field must be empty.
   */
  timeReservedAfter?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Session title.
   * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
   */
  title?: InputMaybe<Scalars['String']['input']>;
  /**
   * The number of participants booked for the session. Read-only.
   * Calculated as the sum of the party sizes.
   */
  totalNumberOfParticipants?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Session type.
   * <!--ONLY:VELO
   * One of:
   * - `"EVENT"` Reserved period of time on the schedule. For example, an appointment, class, course, or blocked time. Events are visible in the Dashboard in the Bookings app's [Booking Calendar](https://support.wix.com/en/article/wix-bookings-about-the-wix-bookings-calendar) page.
   * - `"WORKING_HOURS"` Placeholder for available time on a resource’s schedule.
   * <!--END:ONLY:VELO-->
   */
  type?: InputMaybe<BookingsSchedulesV1SessionType>;
  /**
   * The session version.
   * Composed by the schedule, session and participants versions.
   */
  version?: InputMaybe<BookingsSchedulesV1SessionVersionInput>;
};

export enum BookingsSchedulesV1SessionStatus {
  /**
   * The session is cancelled.
   * A cancelled session can be the cancellation of a recurring session that should no longer be displayed or a deleted single session.
   * The ListSessions returns cancelled sessions only if 'includeDelete' flag is set to true.
   */
  Cancelled = 'CANCELLED',
  /** The session is confirmed. Default status. */
  Confirmed = 'CONFIRMED',
  Undefined = 'UNDEFINED'
}

export enum BookingsSchedulesV1SessionType {
  /** Deprecated. The session represents a resource's available hours. please use WORKING_HOURS */
  Availability = 'AVAILABILITY',
  /**
   * The session creates an event on the calendar for the owner of the schedule that the session belongs to.
   * Default type.
   */
  Event = 'EVENT',
  /** Deprecated. please use WORKING_HOURS */
  TimeAvailability = 'TIME_AVAILABILITY',
  Undefined = 'UNDEFINED',
  /** The session represents a resource's available working hours. */
  WorkingHours = 'WORKING_HOURS'
}

export type BookingsSchedulesV1SessionVersion = {
  __typename?: 'BookingsSchedulesV1SessionVersion';
  /** Incremental version number, which is updated on each change to the session or on changes affecting the session. */
  number?: Maybe<Scalars['Int']['output']>;
};

export type BookingsSchedulesV1SessionVersionInput = {
  /** Incremental version number, which is updated on each change to the session or on changes affecting the session. */
  number?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingsSchedulesVeloV2CreateSessionRequestInput = {
  /** The session to create. */
  session?: InputMaybe<BookingsSchedulesV1SessionInput>;
};

export type BookingsSchedulesVeloV2CreateSessionResponse = {
  __typename?: 'BookingsSchedulesVeloV2CreateSessionResponse';
  /** The created session. */
  session?: Maybe<BookingsSchedulesV1Session>;
};

export type BookingsSchedulesVeloV2DeleteSessionRequestInput = {
  /** Whether to notify participants about the change, and an optional custom message. */
  participantNotification?: InputMaybe<BookingsSchedulesV1ParticipantNotificationInput>;
  /** The ID of the session to delete. */
  sessionId?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsSchedulesVeloV2UpdateSessionRequestInput = {
  /** Field mask of fields to update. */
  fieldmask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Whether to notify participants about the change, and an optional custom message. */
  participantNotification?: InputMaybe<BookingsSchedulesV1ParticipantNotificationInput>;
  /** The session to update. */
  session?: InputMaybe<BookingsSchedulesV1SessionInput>;
};

export type BookingsSchedulesVeloV2UpdateSessionResponse = {
  __typename?: 'BookingsSchedulesVeloV2UpdateSessionResponse';
  /** The updated session. */
  session?: Maybe<BookingsSchedulesV1Session>;
};

export type BookingsServicesV2AvailabilityConstraints = {
  __typename?: 'BookingsServicesV2AvailabilityConstraints';
  /**
   * A list of duration options for sessions, in minutes.
   *
   * The availability calculation generates slots for sessions with these durations, unless there is a conflict with existing sessions or other availability constraints exist.
   * Required for services of type `APPOINTMENT` to allow the customer to book a session of the service. Not relevant for other service types.
   *
   *
   * Min: 1 minute, Max: 30 days, 23 hours, and 59 minutes
   */
  sessionDurations?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /**
   * The number of minutes between the end of a session and the start of the next.
   *
   *
   * Min: 0 minutes
   * Max: 720 minutes
   */
  timeBetweenSessions?: Maybe<Scalars['Int']['output']>;
};

export type BookingsServicesV2AvailabilityConstraintsInput = {
  /**
   * A list of duration options for sessions, in minutes.
   *
   * The availability calculation generates slots for sessions with these durations, unless there is a conflict with existing sessions or other availability constraints exist.
   * Required for services of type `APPOINTMENT` to allow the customer to book a session of the service. Not relevant for other service types.
   *
   *
   * Min: 1 minute, Max: 30 days, 23 hours, and 59 minutes
   */
  sessionDurations?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /**
   * The number of minutes between the end of a session and the start of the next.
   *
   *
   * Min: 0 minutes
   * Max: 720 minutes
   */
  timeBetweenSessions?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingsServicesV2BusinessLocationOptions = {
  __typename?: 'BookingsServicesV2BusinessLocationOptions';
  /** Business location address. The address is derived from the business location and is read-only. */
  address?: Maybe<BookingsServicesV2UpstreamCommonAddress>;
  /** Whether this is the default location. There can only be 1 default location per site. The default location can't be archived. */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** Business location ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Business location name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type BookingsServicesV2BusinessLocationOptionsInput = {
  /** Business location address. The address is derived from the business location and is read-only. */
  address?: InputMaybe<BookingsServicesV2UpstreamCommonAddressInput>;
  /** Whether this is the default location. There can only be 1 default location per site. The default location can't be archived. */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Business location ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Business location name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsServicesV2Category = {
  __typename?: 'BookingsServicesV2Category';
  /** Category ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Category name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Order of a category within a category list. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
};

export type BookingsServicesV2CategoryInput = {
  /** Category ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Category name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Order of a category within a category list. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingsServicesV2Conferencing = {
  __typename?: 'BookingsServicesV2Conferencing';
  /** Whether a conference link is generated for the service's sessions. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

export type BookingsServicesV2ConferencingInput = {
  /** Whether a conference link is generated for the service's sessions. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingsServicesV2CreateServiceRequestInput = {
  /** Service to be created. */
  service?: InputMaybe<BookingsServicesV2ServiceInput>;
};

export type BookingsServicesV2CreateServiceResponse = {
  __typename?: 'BookingsServicesV2CreateServiceResponse';
  /** The created service. */
  service?: Maybe<BookingsServicesV2Service>;
};

export type BookingsServicesV2CustomLocationOptions = {
  __typename?: 'BookingsServicesV2CustomLocationOptions';
  /** A custom address for the location. */
  address?: Maybe<BookingsServicesV2UpstreamCommonAddress>;
};

export type BookingsServicesV2CustomLocationOptionsInput = {
  /** A custom address for the location. */
  address?: InputMaybe<BookingsServicesV2UpstreamCommonAddressInput>;
};

export type BookingsServicesV2CustomPayment = {
  __typename?: 'BookingsServicesV2CustomPayment';
  /** A custom description explaining to the customer how to pay for the service. */
  description?: Maybe<Scalars['String']['output']>;
};

export type BookingsServicesV2CustomPaymentInput = {
  /** A custom description explaining to the customer how to pay for the service. */
  description?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsServicesV2DeleteServiceRequestInput = {
  /** Whether to notify participants about the change and an optional custom message. */
  participantNotification?: InputMaybe<BookingsServicesV2ParticipantNotificationInput>;
  /** Whether to preserve future sessions with participants. Optional, default is false. */
  preserveFutureSessionsWithParticipants?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the service to delete. */
  serviceId?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsServicesV2DisablePricingPlansForServiceRequestInput = {
  /** ID of the pricing plans to disconnect from the service. */
  pricingPlanIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** ID of the service to disconnect the pricing plans from. */
  serviceId?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsServicesV2DisablePricingPlansForServiceResponse = {
  __typename?: 'BookingsServicesV2DisablePricingPlansForServiceResponse';
  /** The service after the pricing plans update */
  service?: Maybe<BookingsServicesV2Service>;
};

export type BookingsServicesV2EnablePricingPlansForServiceRequestInput = {
  /** IDs of the pricing plans to connect to the service. */
  pricingPlanIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** ID of the service to add the pricing plans to. */
  serviceId?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsServicesV2EnablePricingPlansForServiceResponse = {
  __typename?: 'BookingsServicesV2EnablePricingPlansForServiceResponse';
  /** IDs of the pricing plans connect to the service. */
  pricingPlanIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The service after the pricing plans update */
  service?: Maybe<BookingsServicesV2Service>;
};

export type BookingsServicesV2FixedPayment = {
  __typename?: 'BookingsServicesV2FixedPayment';
  /**
   * The deposit price required to book the service.
   *
   * Required when: `rateType` is `FIXED` and `paymentOptions.deposit` is `true`
   */
  deposit?: Maybe<CommonMoney>;
  /**
   * The fixed price required to book the service.
   *
   * Required when: `rateType` is `FIXED`
   */
  price?: Maybe<CommonMoney>;
};

export type BookingsServicesV2FixedPaymentInput = {
  /**
   * The deposit price required to book the service.
   *
   * Required when: `rateType` is `FIXED` and `paymentOptions.deposit` is `true`
   */
  deposit?: InputMaybe<CommonMoneyInput>;
  /**
   * The fixed price required to book the service.
   *
   * Required when: `rateType` is `FIXED`
   */
  price?: InputMaybe<CommonMoneyInput>;
};

export type BookingsServicesV2Form = {
  __typename?: 'BookingsServicesV2Form';
  /**
   * ID of the form associated with the service.
   * The form information that is submitted when booking includes contact details, participants, and other form fields set up for the service.
   * You can manage the service booking form fields using the [Bookings Forms API](https://dev.wix.com/api/rest/wix-bookings/services-v2/form/form-object).
   */
  id?: Maybe<Scalars['String']['output']>;
};

export type BookingsServicesV2FormInput = {
  /**
   * ID of the form associated with the service.
   * The form information that is submitted when booking includes contact details, participants, and other form fields set up for the service.
   * You can manage the service booking form fields using the [Bookings Forms API](https://dev.wix.com/api/rest/wix-bookings/services-v2/form/form-object).
   */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsServicesV2Location = {
  __typename?: 'BookingsServicesV2Location';
  /** The service is offered at the referenced business location, the location has to reference a location from the Business Info [Locations API](https://dev.wix.com/api/rest/business-info/locations). */
  business?: Maybe<BookingsServicesV2BusinessLocationOptions>;
  /** The location address, based on the location `type`. If `type` is `CUSTOMER`, this address is empty. */
  calculatedAddress?: Maybe<BookingsServicesV2UpstreamCommonAddress>;
  /** The service is offered at a custom location. */
  custom?: Maybe<BookingsServicesV2CustomLocationOptions>;
  /**
   * The type of location:
   * - `CUSTOM`: The location is specific to this service, and is not derived from the business location.
   * - `BUSINESS`: A business location, either the default business address, or locations defined for the business by the Business Info [Locations API](https://dev.wix.com/api/rest/business-info/locations).
   * - `CUSTOMER`: Will be determined by the customer. For appointments only.
   */
  type?: Maybe<BookingsServicesV2LocationTypeEnumLocationType>;
};

export type BookingsServicesV2LocationInput = {
  /** The service is offered at the referenced business location, the location has to reference a location from the Business Info [Locations API](https://dev.wix.com/api/rest/business-info/locations). */
  business?: InputMaybe<BookingsServicesV2BusinessLocationOptionsInput>;
  /** The location address, based on the location `type`. If `type` is `CUSTOMER`, this address is empty. */
  calculatedAddress?: InputMaybe<BookingsServicesV2UpstreamCommonAddressInput>;
  /** The service is offered at a custom location. */
  custom?: InputMaybe<BookingsServicesV2CustomLocationOptionsInput>;
  /**
   * The type of location:
   * - `CUSTOM`: The location is specific to this service, and is not derived from the business location.
   * - `BUSINESS`: A business location, either the default business address, or locations defined for the business by the Business Info [Locations API](https://dev.wix.com/api/rest/business-info/locations).
   * - `CUSTOMER`: Will be determined by the customer. For appointments only.
   */
  type?: InputMaybe<BookingsServicesV2LocationTypeEnumLocationType>;
};

export enum BookingsServicesV2LocationTypeEnumLocationType {
  /** The location is one of the business locations available using the Business Info [Locations API](https://dev.wix.com/api/rest/business-info/locations). */
  Business = 'BUSINESS',
  /** The location is unique to this service and isn't defined as one of the business locations. `CUSTOM` is the equivalent of the `OWNER_CUSTOM` location type in [Schedules & Sessions API](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions). */
  Custom = 'CUSTOM',
  /** The location can be determined by the customer and is not set up beforehand. This is applicable to services of type `APPOINTMENT` only. */
  Customer = 'CUSTOMER',
  UnknownLocationType = 'UNKNOWN_LOCATION_TYPE'
}

export type BookingsServicesV2Media = {
  __typename?: 'BookingsServicesV2Media';
  /** Cover media associated with the service. */
  coverMedia?: Maybe<BookingsServicesV2MediaItem>;
  /** Media items associated with the service. */
  items?: Maybe<Array<Maybe<BookingsServicesV2MediaItem>>>;
  /** Primary media associated with the service. */
  mainMedia?: Maybe<BookingsServicesV2MediaItem>;
};

export type BookingsServicesV2MediaInput = {
  /** Cover media associated with the service. */
  coverMedia?: InputMaybe<BookingsServicesV2MediaItemInput>;
  /** Media items associated with the service. */
  items?: InputMaybe<Array<InputMaybe<BookingsServicesV2MediaItemInput>>>;
  /** Primary media associated with the service. */
  mainMedia?: InputMaybe<BookingsServicesV2MediaItemInput>;
};

export type BookingsServicesV2MediaItem = {
  __typename?: 'BookingsServicesV2MediaItem';
  /** Details of the image associated with the service, such as URL and size. */
  image?: Maybe<BookingsServicesV2UpstreamCommonImage>;
};

export type BookingsServicesV2MediaItemInput = {
  /** Details of the image associated with the service, such as URL and size. */
  image?: InputMaybe<BookingsServicesV2UpstreamCommonImageInput>;
};

export type BookingsServicesV2OnlineBooking = {
  __typename?: 'BookingsServicesV2OnlineBooking';
  /** Multiple customers can request to book the same time slot. Relevant when `requireManualApproval` is `true`. */
  allowMultipleRequests?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Whether this service can be booked online.
   * When set to `true`, customers can book the service online. Configuring the payment options is done via `service.payment` property.
   * When set to `false`, customers cannot book the service online, and the service can only be paid for in person.
   */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Booking the service requires approval by the business owner. */
  requireManualApproval?: Maybe<Scalars['Boolean']['output']>;
};

export type BookingsServicesV2OnlineBookingInput = {
  /** Multiple customers can request to book the same time slot. Relevant when `requireManualApproval` is `true`. */
  allowMultipleRequests?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Whether this service can be booked online.
   * When set to `true`, customers can book the service online. Configuring the payment options is done via `service.payment` property.
   * When set to `false`, customers cannot book the service online, and the service can only be paid for in person.
   */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Booking the service requires approval by the business owner. */
  requireManualApproval?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingsServicesV2ParticipantNotificationInput = {
  /** Custom message to send to the participants about the changes to the booking. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Whether to send the message about the changes to the customer. `false` by default */
  notifyParticipants?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingsServicesV2Payment = {
  __typename?: 'BookingsServicesV2Payment';
  /**
   * The details for the custom price of the service.
   *
   * Required when: `rateType` is `CUSTOM`
   */
  custom?: Maybe<BookingsServicesV2CustomPayment>;
  /**
   * The details for the fixed price of the service.
   *
   * Required when: `rateType` is `FIXED`
   */
  fixed?: Maybe<BookingsServicesV2FixedPayment>;
  /** The payment options a customer can use to pay for the service. */
  options?: Maybe<BookingsServicesV2PaymentOptions>;
  /** IDs of pricing plans that can be used as payment for the service. */
  pricingPlanIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The rate the customer is expected to pay for the service.
   * Can be:
   * - `FIXED`: The service has a fixed price.
   * - `CUSTOM`: The service has a custom price, expressed as a price description.
   * - `VARIED`: This service is offered with a set of different prices based on different terms.
   * - `NO_FEE`: This service is offered free of charge.
   */
  rateType?: Maybe<BookingsServicesV2RateTypeEnumRateType>;
  /**
   * The details for the varied pricing of the service.
   * Read more about [varied price options](https://support.wix.com/en/article/wix-bookings-about-getting-paid-online#offering-varied-price-options).
   *
   * Required when: `rateType` is `VARIED`
   */
  varied?: Maybe<BookingsServicesV2VariedPayment>;
};

export type BookingsServicesV2PaymentInput = {
  /**
   * The details for the custom price of the service.
   *
   * Required when: `rateType` is `CUSTOM`
   */
  custom?: InputMaybe<BookingsServicesV2CustomPaymentInput>;
  /**
   * The details for the fixed price of the service.
   *
   * Required when: `rateType` is `FIXED`
   */
  fixed?: InputMaybe<BookingsServicesV2FixedPaymentInput>;
  /** The payment options a customer can use to pay for the service. */
  options?: InputMaybe<BookingsServicesV2PaymentOptionsInput>;
  /** IDs of pricing plans that can be used as payment for the service. */
  pricingPlanIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * The rate the customer is expected to pay for the service.
   * Can be:
   * - `FIXED`: The service has a fixed price.
   * - `CUSTOM`: The service has a custom price, expressed as a price description.
   * - `VARIED`: This service is offered with a set of different prices based on different terms.
   * - `NO_FEE`: This service is offered free of charge.
   */
  rateType?: InputMaybe<BookingsServicesV2RateTypeEnumRateType>;
  /**
   * The details for the varied pricing of the service.
   * Read more about [varied price options](https://support.wix.com/en/article/wix-bookings-about-getting-paid-online#offering-varied-price-options).
   *
   * Required when: `rateType` is `VARIED`
   */
  varied?: InputMaybe<BookingsServicesV2VariedPaymentInput>;
};

export type BookingsServicesV2PaymentOptions = {
  __typename?: 'BookingsServicesV2PaymentOptions';
  /**
   * This service requires a deposit to be made online in order to book it.
   * When `true`:
   * + `rateType` must be `VARIED` or `FIXED`.
   * + A `deposit` must be specified.
   */
  deposit?: Maybe<Scalars['Boolean']['output']>;
  /** Customers can pay for the service in person. */
  inPerson?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Customers can pay for the service online.
   * When `true`:
   * + `rateType` must be either `FIXED` or `VARIED`.
   * + `fixed.price` or `varied.default_price` must be specified respectively. Read more about [getting paid online](https://support.wix.com/en/article/wix-bookings-about-getting-paid-online).
   */
  online?: Maybe<Scalars['Boolean']['output']>;
  /** Customers can pay for the service using a pricing plan. */
  pricingPlan?: Maybe<Scalars['Boolean']['output']>;
};

export type BookingsServicesV2PaymentOptionsInput = {
  /**
   * This service requires a deposit to be made online in order to book it.
   * When `true`:
   * + `rateType` must be `VARIED` or `FIXED`.
   * + A `deposit` must be specified.
   */
  deposit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Customers can pay for the service in person. */
  inPerson?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Customers can pay for the service online.
   * When `true`:
   * + `rateType` must be either `FIXED` or `VARIED`.
   * + `fixed.price` or `varied.default_price` must be specified respectively. Read more about [getting paid online](https://support.wix.com/en/article/wix-bookings-about-getting-paid-online).
   */
  online?: InputMaybe<Scalars['Boolean']['input']>;
  /** Customers can pay for the service using a pricing plan. */
  pricingPlan?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingsServicesV2QueryServicesRequestInput = {
  /** WQL expression. */
  query?: InputMaybe<BookingsServicesV2UpstreamCommonQueryV2Input>;
};

export type BookingsServicesV2QueryServicesResponse = {
  __typename?: 'BookingsServicesV2QueryServicesResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<BookingsServicesV2Service>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export enum BookingsServicesV2RateTypeEnumRateType {
  /** The service has a custom price, expressed as a price description. */
  Custom = 'CUSTOM',
  /** The service has a fixed price. */
  Fixed = 'FIXED',
  /** This service is offered free of charge. */
  NoFee = 'NO_FEE',
  UnknownRateType = 'UNKNOWN_RATE_TYPE',
  /** This service is offered with a set of different prices based on different terms. */
  Varied = 'VARIED'
}

export type BookingsServicesV2Schedule = {
  __typename?: 'BookingsServicesV2Schedule';
  /** Limitations dictating the way session availability is calculated. For appointments only. */
  availabilityConstraints?: Maybe<BookingsServicesV2AvailabilityConstraints>;
  /** Schedule ID, used to manage the service's sessions. */
  id?: Maybe<Scalars['String']['output']>;
};

export type BookingsServicesV2ScheduleInput = {
  /** Limitations dictating the way session availability is calculated. For appointments only. */
  availabilityConstraints?: InputMaybe<BookingsServicesV2AvailabilityConstraintsInput>;
  /** Schedule ID, used to manage the service's sessions. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsServicesV2Service = {
  __typename?: 'BookingsServicesV2Service';
  /** Policy determining under what conditions this service can be booked. For example, whether the service can only be booked up to 30 minutes before it begins. */
  bookingPolicy?: Maybe<BookingsServicesV2UpstreamBookingsV1BookingPolicy>;
  /** The category the service is associated with. */
  category?: Maybe<BookingsServicesV2Category>;
  /** Conferencing options for this service. */
  conferencing?: Maybe<BookingsServicesV2Conferencing>;
  /** Date and time the service was created. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Default maximum number of customers that can book the service. The service cannot be booked beyond this capacity. */
  defaultCapacity?: Maybe<Scalars['Int']['output']>;
  /** Service description, such as `High-class hair styling, cuts, straightening and color.` */
  description?: Maybe<Scalars['String']['output']>;
  /** Extensions enabling users to save custom data related to the service. */
  extendedFields?: Maybe<CommonDataDataextensionsExtendedFields>;
  /** The form used when booking the service. */
  form?: Maybe<BookingsServicesV2Form>;
  /** Whether the service is hidden from the site. */
  hidden?: Maybe<Scalars['Boolean']['output']>;
  /** Service ID. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * The locations this service is offered at.
   * Only multiple locations of type `BUSINESS` are supported. multiple locations of type `CUSTOM` or `CUSTOMER` are not supported.
   * For courses only: Currently, only 1 location is supported, for all location types.
   * Use `setServiceLocations` method to update the locations this service is offered at.
   */
  locations?: Maybe<Array<Maybe<BookingsServicesV2Location>>>;
  /**
   * The main slug for the service. `mainSlug` is either taken from the current service name or is a custom slug set by the business owner.
   * `mainSlug` is used to construct the service's URLs.
   */
  mainSlug?: Maybe<BookingsServicesV2Slug>;
  /** Media associated with the service. */
  media?: Maybe<BookingsServicesV2Media>;
  /** Service name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Online booking settings. */
  onlineBooking?: Maybe<BookingsServicesV2OnlineBooking>;
  /** Payment options for booking the service. */
  payment?: Maybe<BookingsServicesV2Payment>;
  /** Revision number, which increments by 1 each time the service is updated. To prevent conflicting changes, the existing revision must be used when updating a service. */
  revision?: Maybe<Scalars['Int']['output']>;
  /** The service's schedule, which can be used to manage the service's sessions. */
  schedule?: Maybe<BookingsServicesV2Schedule>;
  /** Custom SEO data for the service. */
  seoData?: Maybe<AdvancedSeoSeoSchema>;
  /** Order of a service within a category. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** IDs of the staff members providing the service. For appointments only. */
  staffMemberIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * A slug is the last part of the URL address that serves as a unique identifier of the service.
   * The list of supported slugs includes past service names for backwards compatibility, and a custom slug if one was set by the business owner.
   */
  supportedSlugs?: Maybe<Array<Maybe<BookingsServicesV2Slug>>>;
  /** Short service description, such as `Hair styling.` */
  tagLine?: Maybe<Scalars['String']['output']>;
  /** Service type. */
  type?: Maybe<BookingsServicesV2ServiceTypeEnumServiceType>;
  /** Date and time the service was updated. */
  updatedDate?: Maybe<Scalars['String']['output']>;
  /** URLs to various service-related pages, such as the calendar page and the booking page. */
  urls?: Maybe<BookingsServicesV2UrLs>;
};

export type BookingsServicesV2ServiceInput = {
  /** Policy determining under what conditions this service can be booked. For example, whether the service can only be booked up to 30 minutes before it begins. */
  bookingPolicy?: InputMaybe<BookingsServicesV2UpstreamBookingsV1BookingPolicyInput>;
  /** The category the service is associated with. */
  category?: InputMaybe<BookingsServicesV2CategoryInput>;
  /** Conferencing options for this service. */
  conferencing?: InputMaybe<BookingsServicesV2ConferencingInput>;
  /** Date and time the service was created. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Default maximum number of customers that can book the service. The service cannot be booked beyond this capacity. */
  defaultCapacity?: InputMaybe<Scalars['Int']['input']>;
  /** Service description, such as `High-class hair styling, cuts, straightening and color.` */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Extensions enabling users to save custom data related to the service. */
  extendedFields?: InputMaybe<CommonDataDataextensionsExtendedFieldsInput>;
  /** The form used when booking the service. */
  form?: InputMaybe<BookingsServicesV2FormInput>;
  /** Whether the service is hidden from the site. */
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** Service ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * The locations this service is offered at.
   * Only multiple locations of type `BUSINESS` are supported. multiple locations of type `CUSTOM` or `CUSTOMER` are not supported.
   * For courses only: Currently, only 1 location is supported, for all location types.
   * Use `setServiceLocations` method to update the locations this service is offered at.
   */
  locations?: InputMaybe<Array<InputMaybe<BookingsServicesV2LocationInput>>>;
  /**
   * The main slug for the service. `mainSlug` is either taken from the current service name or is a custom slug set by the business owner.
   * `mainSlug` is used to construct the service's URLs.
   */
  mainSlug?: InputMaybe<BookingsServicesV2SlugInput>;
  /** Media associated with the service. */
  media?: InputMaybe<BookingsServicesV2MediaInput>;
  /** Service name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Online booking settings. */
  onlineBooking?: InputMaybe<BookingsServicesV2OnlineBookingInput>;
  /** Payment options for booking the service. */
  payment?: InputMaybe<BookingsServicesV2PaymentInput>;
  /** Revision number, which increments by 1 each time the service is updated. To prevent conflicting changes, the existing revision must be used when updating a service. */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** The service's schedule, which can be used to manage the service's sessions. */
  schedule?: InputMaybe<BookingsServicesV2ScheduleInput>;
  /** Custom SEO data for the service. */
  seoData?: InputMaybe<AdvancedSeoSeoSchemaInput>;
  /** Order of a service within a category. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  /** IDs of the staff members providing the service. For appointments only. */
  staffMemberIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * A slug is the last part of the URL address that serves as a unique identifier of the service.
   * The list of supported slugs includes past service names for backwards compatibility, and a custom slug if one was set by the business owner.
   */
  supportedSlugs?: InputMaybe<Array<InputMaybe<BookingsServicesV2SlugInput>>>;
  /** Short service description, such as `Hair styling.` */
  tagLine?: InputMaybe<Scalars['String']['input']>;
  /** Service type. */
  type?: InputMaybe<BookingsServicesV2ServiceTypeEnumServiceType>;
  /** Date and time the service was updated. */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
  /** URLs to various service-related pages, such as the calendar page and the booking page. */
  urls?: InputMaybe<BookingsServicesV2UrLsInput>;
};

export enum BookingsServicesV2ServiceTypeEnumServiceType {
  /** The service is an appointment. */
  Appointment = 'APPOINTMENT',
  /** The service is a class. */
  Class = 'CLASS',
  /** The service is a course. */
  Course = 'COURSE',
  UnknownServiceType = 'UNKNOWN_SERVICE_TYPE'
}

export type BookingsServicesV2Slug = {
  __typename?: 'BookingsServicesV2Slug';
  /** Date and time the slug was created. This is a system field. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Whether the slug was generated or customized. If `true`, the slug was customized manually by the business owner. Otherwise, the slug was automatically generated from the service name. */
  custom?: Maybe<Scalars['Boolean']['output']>;
  /** The unique part of service's URL that identifies the service's information page. For example, `service-1` in `https:/example.com/services/service-1`. */
  name?: Maybe<Scalars['String']['output']>;
};

export type BookingsServicesV2SlugInput = {
  /** Date and time the slug was created. This is a system field. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Whether the slug was generated or customized. If `true`, the slug was customized manually by the business owner. Otherwise, the slug was automatically generated from the service name. */
  custom?: InputMaybe<Scalars['Boolean']['input']>;
  /** The unique part of service's URL that identifies the service's information page. For example, `service-1` in `https:/example.com/services/service-1`. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsServicesV2UrLs = {
  __typename?: 'BookingsServicesV2URLs';
  /** The URL for the booking entry point. It can be either to the calendar or to the service page. */
  bookingPage?: Maybe<CommonPageUrlV2>;
  /** The URL for the calendar. Can be empty if no calendar exists. */
  calendarPage?: Maybe<CommonPageUrlV2>;
  /** The URL for the service page. */
  servicePage?: Maybe<CommonPageUrlV2>;
};

export type BookingsServicesV2UrLsInput = {
  /** The URL for the booking entry point. It can be either to the calendar or to the service page. */
  bookingPage?: InputMaybe<CommonPageUrlV2Input>;
  /** The URL for the calendar. Can be empty if no calendar exists. */
  calendarPage?: InputMaybe<CommonPageUrlV2Input>;
  /** The URL for the service page. */
  servicePage?: InputMaybe<CommonPageUrlV2Input>;
};

export type BookingsServicesV2UpdateServiceRequestInput = {
  /** Explicit list of fields to update. */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Service to update. [Partial updates](https://dev.wix.com/api/rest/wix-bookings/bookings/patch-endpoints-and-field-masks-in-update-requests) are supported. */
  service?: InputMaybe<BookingsServicesV2ServiceInput>;
};

export type BookingsServicesV2UpdateServiceResponse = {
  __typename?: 'BookingsServicesV2UpdateServiceResponse';
  /** The updated service. */
  service?: Maybe<BookingsServicesV2Service>;
};

export type BookingsServicesV2UpstreamBookingsV1BookAfterStartPolicy = {
  __typename?: 'BookingsServicesV2UpstreamBookingsV1BookAfterStartPolicy';
  /**
   * Whether booking is allowed after the start of the schedule. When `true`,
   * customers can book after the start of the schedule.
   *
   * Default: `false`
   */
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

export type BookingsServicesV2UpstreamBookingsV1BookAfterStartPolicyInput = {
  /**
   * Whether booking is allowed after the start of the schedule. When `true`,
   * customers can book after the start of the schedule.
   *
   * Default: `false`
   */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingsServicesV2UpstreamBookingsV1BookingPolicy = {
  __typename?: 'BookingsServicesV2UpstreamBookingsV1BookingPolicy';
  /** Policy on booking an entity after the start of the schedule. */
  bookAfterStartPolicy?: Maybe<BookingsServicesV2UpstreamBookingsV1BookAfterStartPolicy>;
  /** Policy for canceling a booked entity. */
  cancellationPolicy?: Maybe<BookingsServicesV2UpstreamBookingsV1CancellationPolicy>;
  /** Date and time the policy was created. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Custom description for the policy. This policy is displayed to the participant. */
  customPolicyDescription?: Maybe<BookingsServicesV2UpstreamBookingsV1PolicyDescription>;
  /** Whether the policy is the default for the meta site. */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** The ID to the policy for the booking. */
  id?: Maybe<Scalars['String']['output']>;
  /** Policy for limiting early bookings. */
  limitEarlyBookingPolicy?: Maybe<BookingsServicesV2UpstreamBookingsV1LimitEarlyBookingPolicy>;
  /** Policy for limiting late bookings. */
  limitLateBookingPolicy?: Maybe<BookingsServicesV2UpstreamBookingsV1LimitLateBookingPolicy>;
  /** Name of the policy. */
  name?: Maybe<Scalars['String']['output']>;
  /** Policy regarding the participants per booking. */
  participantsPolicy?: Maybe<BookingsServicesV2UpstreamBookingsV1ParticipantsPolicy>;
  /** Policy for rescheduling a booked entity. */
  reschedulePolicy?: Maybe<BookingsServicesV2UpstreamBookingsV1ReschedulePolicy>;
  /** Policy for allocating resources. */
  resourcesPolicy?: Maybe<BookingsServicesV2UpstreamBookingsV1ResourcesPolicy>;
  /** Revision number, which increments by 1 each time the policy is updated. To prevent conflicting changes, the existing revision must be used when updating a policy. */
  revision?: Maybe<Scalars['Int']['output']>;
  /** Date and time the policy was updated. */
  updatedDate?: Maybe<Scalars['String']['output']>;
  /** Waitlist policy for the service. */
  waitlistPolicy?: Maybe<BookingsServicesV2UpstreamBookingsV1WaitlistPolicy>;
};

export type BookingsServicesV2UpstreamBookingsV1BookingPolicyInput = {
  /** Policy on booking an entity after the start of the schedule. */
  bookAfterStartPolicy?: InputMaybe<BookingsServicesV2UpstreamBookingsV1BookAfterStartPolicyInput>;
  /** Policy for canceling a booked entity. */
  cancellationPolicy?: InputMaybe<BookingsServicesV2UpstreamBookingsV1CancellationPolicyInput>;
  /** Date and time the policy was created. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Custom description for the policy. This policy is displayed to the participant. */
  customPolicyDescription?: InputMaybe<BookingsServicesV2UpstreamBookingsV1PolicyDescriptionInput>;
  /** Whether the policy is the default for the meta site. */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID to the policy for the booking. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Policy for limiting early bookings. */
  limitEarlyBookingPolicy?: InputMaybe<BookingsServicesV2UpstreamBookingsV1LimitEarlyBookingPolicyInput>;
  /** Policy for limiting late bookings. */
  limitLateBookingPolicy?: InputMaybe<BookingsServicesV2UpstreamBookingsV1LimitLateBookingPolicyInput>;
  /** Name of the policy. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Policy regarding the participants per booking. */
  participantsPolicy?: InputMaybe<BookingsServicesV2UpstreamBookingsV1ParticipantsPolicyInput>;
  /** Policy for rescheduling a booked entity. */
  reschedulePolicy?: InputMaybe<BookingsServicesV2UpstreamBookingsV1ReschedulePolicyInput>;
  /** Policy for allocating resources. */
  resourcesPolicy?: InputMaybe<BookingsServicesV2UpstreamBookingsV1ResourcesPolicyInput>;
  /** Revision number, which increments by 1 each time the policy is updated. To prevent conflicting changes, the existing revision must be used when updating a policy. */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** Date and time the policy was updated. */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
  /** Waitlist policy for the service. */
  waitlistPolicy?: InputMaybe<BookingsServicesV2UpstreamBookingsV1WaitlistPolicyInput>;
};

export type BookingsServicesV2UpstreamBookingsV1CancellationPolicy = {
  __typename?: 'BookingsServicesV2UpstreamBookingsV1CancellationPolicy';
  /**
   * Whether canceling a booking is allowed. When `true`, customers
   * can cancel the booking.
   *
   * Default: `false`
   */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Minimum number of minutes before the start of the booked session that the booking can be canceled.
   *
   * Default: 1440 minutes (1 day)
   * Min: 1 minute
   */
  latestCancellationInMinutes?: Maybe<Scalars['Int']['output']>;
  /**
   * Whether there is a limit on the latest cancellation time. When `true`,
   * a time limit is enforced.
   *
   * Default: `false`
   */
  limitLatestCancellation?: Maybe<Scalars['Boolean']['output']>;
};

export type BookingsServicesV2UpstreamBookingsV1CancellationPolicyInput = {
  /**
   * Whether canceling a booking is allowed. When `true`, customers
   * can cancel the booking.
   *
   * Default: `false`
   */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Minimum number of minutes before the start of the booked session that the booking can be canceled.
   *
   * Default: 1440 minutes (1 day)
   * Min: 1 minute
   */
  latestCancellationInMinutes?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Whether there is a limit on the latest cancellation time. When `true`,
   * a time limit is enforced.
   *
   * Default: `false`
   */
  limitLatestCancellation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingsServicesV2UpstreamBookingsV1LimitEarlyBookingPolicy = {
  __typename?: 'BookingsServicesV2UpstreamBookingsV1LimitEarlyBookingPolicy';
  /**
   * Maximum number of minutes before the start of the session that a booking can be made. This value must be greater
   * than `latest_booking_in_minutes` in the `LimitLateBookingPolicy` policy.
   *
   * Default: 10080 minutes (7 days)
   * Min: 1 minute
   */
  earliestBookingInMinutes?: Maybe<Scalars['Int']['output']>;
  /**
   * Whether there is a limit on how early a customer
   * can book. When `false`, there is no limit on the earliest
   * booking time and customers can book in advance, as early as they like.
   *
   * Default: `false`
   */
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

export type BookingsServicesV2UpstreamBookingsV1LimitEarlyBookingPolicyInput = {
  /**
   * Maximum number of minutes before the start of the session that a booking can be made. This value must be greater
   * than `latest_booking_in_minutes` in the `LimitLateBookingPolicy` policy.
   *
   * Default: 10080 minutes (7 days)
   * Min: 1 minute
   */
  earliestBookingInMinutes?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Whether there is a limit on how early a customer
   * can book. When `false`, there is no limit on the earliest
   * booking time and customers can book in advance, as early as they like.
   *
   * Default: `false`
   */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingsServicesV2UpstreamBookingsV1LimitLateBookingPolicy = {
  __typename?: 'BookingsServicesV2UpstreamBookingsV1LimitLateBookingPolicy';
  /**
   * Whether there is a limit on how late a customer
   * can book. When `false`, there is no limit on the latest
   * booking time and customers can book up to the last minute.
   *
   * Default: `false`
   */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Minimum number of minutes before the start of the session that a booking can be made.
   * For a schedule, this is relative to the start time of the next booked session, excluding past-booked sessions.
   * This value must be less than `earliest_booking_in_minutes` in the `LimitEarlyBookingPolicy` policy.
   *
   * Default: 1440 minutes (1 day)
   * Min: 1 minute
   */
  latestBookingInMinutes?: Maybe<Scalars['Int']['output']>;
};

export type BookingsServicesV2UpstreamBookingsV1LimitLateBookingPolicyInput = {
  /**
   * Whether there is a limit on how late a customer
   * can book. When `false`, there is no limit on the latest
   * booking time and customers can book up to the last minute.
   *
   * Default: `false`
   */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Minimum number of minutes before the start of the session that a booking can be made.
   * For a schedule, this is relative to the start time of the next booked session, excluding past-booked sessions.
   * This value must be less than `earliest_booking_in_minutes` in the `LimitEarlyBookingPolicy` policy.
   *
   * Default: 1440 minutes (1 day)
   * Min: 1 minute
   */
  latestBookingInMinutes?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingsServicesV2UpstreamBookingsV1ParticipantsPolicy = {
  __typename?: 'BookingsServicesV2UpstreamBookingsV1ParticipantsPolicy';
  /**
   * Maximum number of participants allowed.
   *
   * Default: 1 participant
   * Min: 1 participant
   */
  maxParticipantsPerBooking?: Maybe<Scalars['Int']['output']>;
};

export type BookingsServicesV2UpstreamBookingsV1ParticipantsPolicyInput = {
  /**
   * Maximum number of participants allowed.
   *
   * Default: 1 participant
   * Min: 1 participant
   */
  maxParticipantsPerBooking?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingsServicesV2UpstreamBookingsV1PolicyDescription = {
  __typename?: 'BookingsServicesV2UpstreamBookingsV1PolicyDescription';
  /**
   * The description to display.
   *
   * Default: Empty
   * Max length: 1000 characters
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * Whether the description should be displayed. If `true`, the description is displayed.
   *
   * Default: `false`
   */
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

export type BookingsServicesV2UpstreamBookingsV1PolicyDescriptionInput = {
  /**
   * The description to display.
   *
   * Default: Empty
   * Max length: 1000 characters
   */
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Whether the description should be displayed. If `true`, the description is displayed.
   *
   * Default: `false`
   */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingsServicesV2UpstreamBookingsV1ReschedulePolicy = {
  __typename?: 'BookingsServicesV2UpstreamBookingsV1ReschedulePolicy';
  /**
   * Whether rescheduling a booking is allowed. When `true`, customers
   * can reschedule the booking.
   *
   * Default: `false`
   */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Minimum number of minutes before the start of the booked session that the booking can be rescheduled.
   *
   * Default: 1440 minutes (1 day)
   * Min: 1 minute
   */
  latestRescheduleInMinutes?: Maybe<Scalars['Int']['output']>;
  /**
   * Whether there is a limit on the latest reschedule time. When `true`,
   * a time limit is enforced.
   *
   * Default: `false`
   */
  limitLatestReschedule?: Maybe<Scalars['Boolean']['output']>;
};

export type BookingsServicesV2UpstreamBookingsV1ReschedulePolicyInput = {
  /**
   * Whether rescheduling a booking is allowed. When `true`, customers
   * can reschedule the booking.
   *
   * Default: `false`
   */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Minimum number of minutes before the start of the booked session that the booking can be rescheduled.
   *
   * Default: 1440 minutes (1 day)
   * Min: 1 minute
   */
  latestRescheduleInMinutes?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Whether there is a limit on the latest reschedule time. When `true`,
   * a time limit is enforced.
   *
   * Default: `false`
   */
  limitLatestReschedule?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingsServicesV2UpstreamBookingsV1ResourcesPolicy = {
  __typename?: 'BookingsServicesV2UpstreamBookingsV1ResourcesPolicy';
  /**
   * `true`, if it is allowed to automatically assign a resource when booking an appointment,
   * `false`, if the client must always select a resource.
   *
   * Default: `false`
   */
  autoAssignAllowed?: Maybe<Scalars['Boolean']['output']>;
  /**
   * `true` if this policy is enabled, `false` otherwise.
   * When `false` then the client must always select a resource when booking an appointment.
   */
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

export type BookingsServicesV2UpstreamBookingsV1ResourcesPolicyInput = {
  /**
   * `true`, if it is allowed to automatically assign a resource when booking an appointment,
   * `false`, if the client must always select a resource.
   *
   * Default: `false`
   */
  autoAssignAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * `true` if this policy is enabled, `false` otherwise.
   * When `false` then the client must always select a resource when booking an appointment.
   */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingsServicesV2UpstreamBookingsV1WaitlistPolicy = {
  __typename?: 'BookingsServicesV2UpstreamBookingsV1WaitlistPolicy';
  /**
   * Number of spots available in the waitlist.
   *
   * Default: 10 spots
   * Min: 1 spot
   */
  capacity?: Maybe<Scalars['Int']['output']>;
  /**
   * Whether the session has a waitlist. If `true`, there is a waitlist.
   *
   * Default: `false`
   */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Amount of time a participant is given to book, once notified that a spot is available.
   *
   * Default: 10 minutes
   * Min: 1 spot
   */
  reservationTimeInMinutes?: Maybe<Scalars['Int']['output']>;
};

export type BookingsServicesV2UpstreamBookingsV1WaitlistPolicyInput = {
  /**
   * Number of spots available in the waitlist.
   *
   * Default: 10 spots
   * Min: 1 spot
   */
  capacity?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Whether the session has a waitlist. If `true`, there is a waitlist.
   *
   * Default: `false`
   */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Amount of time a participant is given to book, once notified that a spot is available.
   *
   * Default: 10 minutes
   * Min: 1 spot
   */
  reservationTimeInMinutes?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingsServicesV2UpstreamCommonAddress = {
  __typename?: 'BookingsServicesV2UpstreamCommonAddress';
  /** Main address line, usually street and number as free text. */
  addressLine?: Maybe<Scalars['String']['output']>;
  /** City name. */
  city?: Maybe<Scalars['String']['output']>;
  /** 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
  country?: Maybe<Scalars['String']['output']>;
  /** Full address of the location. */
  formattedAddress?: Maybe<Scalars['String']['output']>;
  /** Postal or zip code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Street name and number. */
  streetAddress?: Maybe<BookingsServicesV2UpstreamCommonStreetAddress>;
  /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
  subdivision?: Maybe<Scalars['String']['output']>;
};

export type BookingsServicesV2UpstreamCommonAddressInput = {
  /** Main address line, usually street and number as free text. */
  addressLine?: InputMaybe<Scalars['String']['input']>;
  /** City name. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Full address of the location. */
  formattedAddress?: InputMaybe<Scalars['String']['input']>;
  /** Postal or zip code. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Street name and number. */
  streetAddress?: InputMaybe<BookingsServicesV2UpstreamCommonStreetAddressInput>;
  /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
  subdivision?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsServicesV2UpstreamCommonImage = {
  __typename?: 'BookingsServicesV2UpstreamCommonImage';
  /** Image alt text. */
  altText?: Maybe<Scalars['String']['output']>;
  /** Image file name. */
  filename?: Maybe<Scalars['String']['output']>;
  /** Original image height. */
  height?: Maybe<Scalars['Int']['output']>;
  /** WixMedia image ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Image URL. */
  url?: Maybe<Scalars['String']['output']>;
  /** Original image width. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type BookingsServicesV2UpstreamCommonImageInput = {
  /** Image alt text. */
  altText?: InputMaybe<Scalars['String']['input']>;
  /** Image file name. */
  filename?: InputMaybe<Scalars['String']['input']>;
  /** Original image height. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** WixMedia image ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Image URL. */
  url?: InputMaybe<Scalars['String']['input']>;
  /** Original image width. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingsServicesV2UpstreamCommonPagingInput = {
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to skip in the current sort order. */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingsServicesV2UpstreamCommonQueryV2Input = {
  /**
   * Filter object in the following format:
   *
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   *
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   *
   * Read more about [supported fields and operators](https://dev.wix.com/api/rest/wix-bookings/services-v2/filtering-and-sorting).
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Paging options to limit and skip the number of items. */
  paging?: InputMaybe<BookingsServicesV2UpstreamCommonPagingInput>;
  /**
   * Sort object in the following format:
   * `[ {"fieldName":"sortField1","order":"ASC"},
   * {"fieldName":"sortField2","order":"DESC"} ]`
   *
   * Read more about [sorting](https://dev.wix.com/api/rest/wix-bookings/services-v2/filtering-and-sorting#wix-bookings_services-v2_filtering-and-sorting_sorting).
   */
  sort?: InputMaybe<Array<InputMaybe<BookingsServicesV2UpstreamCommonSortingInput>>>;
};

export enum BookingsServicesV2UpstreamCommonSortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type BookingsServicesV2UpstreamCommonSortingInput = {
  /** Name of the field to sort by. */
  fieldName?: InputMaybe<Scalars['String']['input']>;
  /** Sort order. */
  order?: InputMaybe<BookingsServicesV2UpstreamCommonSortOrder>;
};

export type BookingsServicesV2UpstreamCommonStreetAddress = {
  __typename?: 'BookingsServicesV2UpstreamCommonStreetAddress';
  /** Apartment number. */
  apt?: Maybe<Scalars['String']['output']>;
  /** Street name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Street number. */
  number?: Maybe<Scalars['String']['output']>;
};

export type BookingsServicesV2UpstreamCommonStreetAddressInput = {
  /** Apartment number. */
  apt?: InputMaybe<Scalars['String']['input']>;
  /** Street name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Street number. */
  number?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsServicesV2VariedPayment = {
  __typename?: 'BookingsServicesV2VariedPayment';
  /** The default price for the service without any variants. It will also be used as the default price for any new variant. */
  defaultPrice?: Maybe<CommonMoney>;
  /**
   * The deposit price required to book the service.
   *
   * Required when: `rateType` is `VARIED` and `paymentOptions.deposit` is `true`
   */
  deposit?: Maybe<CommonMoney>;
  /** The maximum price a customer may pay for this service, based on its variants. */
  maxPrice?: Maybe<CommonMoney>;
  /** The minimal price a customer may pay for this service, based on its variants. */
  minPrice?: Maybe<CommonMoney>;
};

export type BookingsServicesV2VariedPaymentInput = {
  /** The default price for the service without any variants. It will also be used as the default price for any new variant. */
  defaultPrice?: InputMaybe<CommonMoneyInput>;
  /**
   * The deposit price required to book the service.
   *
   * Required when: `rateType` is `VARIED` and `paymentOptions.deposit` is `true`
   */
  deposit?: InputMaybe<CommonMoneyInput>;
  /** The maximum price a customer may pay for this service, based on its variants. */
  maxPrice?: InputMaybe<CommonMoneyInput>;
  /** The minimal price a customer may pay for this service, based on its variants. */
  minPrice?: InputMaybe<CommonMoneyInput>;
};

export type BookingsUpstreamCommonAddress = {
  __typename?: 'BookingsUpstreamCommonAddress';
  /** Main address line, usually street and number, as free text. */
  addressLine?: Maybe<Scalars['String']['output']>;
  /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** City name. */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code. */
  country?: Maybe<Scalars['String']['output']>;
  /** Country full name. */
  countryFullname?: Maybe<Scalars['String']['output']>;
  /** A string containing the full address of this location. */
  formattedAddress?: Maybe<Scalars['String']['output']>;
  /** Coordinates of the physical address. */
  geocode?: Maybe<BookingsUpstreamCommonAddressLocation>;
  /** Free text to help find the address. */
  hint?: Maybe<Scalars['String']['output']>;
  /** Zip/postal code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Street name, number and apartment number. */
  streetAddress?: Maybe<BookingsUpstreamCommonStreetAddress>;
  /** Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
  subdivision?: Maybe<Scalars['String']['output']>;
  /** Multi-level subdivisions from top to bottom. */
  subdivisions?: Maybe<Array<Maybe<BookingsUpstreamCommonSubdivision>>>;
};

export type BookingsUpstreamCommonAddressInput = {
  /** Main address line, usually street and number, as free text. */
  addressLine?: InputMaybe<Scalars['String']['input']>;
  /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /** City name. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Country code. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Country full name. */
  countryFullname?: InputMaybe<Scalars['String']['input']>;
  /** A string containing the full address of this location. */
  formattedAddress?: InputMaybe<Scalars['String']['input']>;
  /** Coordinates of the physical address. */
  geocode?: InputMaybe<BookingsUpstreamCommonAddressLocationInput>;
  /** Free text to help find the address. */
  hint?: InputMaybe<Scalars['String']['input']>;
  /** Zip/postal code. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Street name, number and apartment number. */
  streetAddress?: InputMaybe<BookingsUpstreamCommonStreetAddressInput>;
  /** Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
  subdivision?: InputMaybe<Scalars['String']['input']>;
  /** Multi-level subdivisions from top to bottom. */
  subdivisions?: InputMaybe<Array<InputMaybe<BookingsUpstreamCommonSubdivisionInput>>>;
};

export type BookingsUpstreamCommonAddressLocation = {
  __typename?: 'BookingsUpstreamCommonAddressLocation';
  /** Address latitude. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** Address longitude. */
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type BookingsUpstreamCommonAddressLocationInput = {
  /** Address latitude. */
  latitude?: InputMaybe<Scalars['Float']['input']>;
  /** Address longitude. */
  longitude?: InputMaybe<Scalars['Float']['input']>;
};

export type BookingsUpstreamCommonStreetAddress = {
  __typename?: 'BookingsUpstreamCommonStreetAddress';
  /** Apartment number. */
  apt?: Maybe<Scalars['String']['output']>;
  /** Street name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Street number. */
  number?: Maybe<Scalars['String']['output']>;
};

export type BookingsUpstreamCommonStreetAddressInput = {
  /** Apartment number. */
  apt?: InputMaybe<Scalars['String']['input']>;
  /** Street name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Street number. */
  number?: InputMaybe<Scalars['String']['input']>;
};

export type BookingsUpstreamCommonSubdivision = {
  __typename?: 'BookingsUpstreamCommonSubdivision';
  /** Subdivision code. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
  code?: Maybe<Scalars['String']['output']>;
  /** Subdivision full name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type BookingsUpstreamCommonSubdivisionInput = {
  /** Subdivision code. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Subdivision full name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1AddProductMediaRequestInput = {
  /** Product ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Sources of media items already uploaded to the Wix site. */
  media?: InputMaybe<Array<InputMaybe<CatalogV1MediaDataForWriteInput>>>;
};

export type CatalogV1AddProductMediaToChoicesRequestInput = {
  /** Product ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Product media items and the choices to add the media to. */
  media?: InputMaybe<Array<InputMaybe<CatalogV1MediaAssignmentToChoiceInput>>>;
};

export type CatalogV1AddProductsToCollectionRequestInput = {
  /** Collection ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** IDs of the products to add to the collection, separated by commas. */
  productIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CatalogV1AdditionalInfoSection = {
  __typename?: 'CatalogV1AdditionalInfoSection';
  /** Product info section description */
  description?: Maybe<Scalars['String']['output']>;
  /** Product info section title */
  title?: Maybe<Scalars['String']['output']>;
};

export type CatalogV1AdditionalInfoSectionInput = {
  /** Product info section description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Product info section title */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1AdjustValueInput = {
  /**
   * Adjust product cost of goods.
   * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
   * cost of goods will be adjusted per variant.
   */
  cost?: InputMaybe<CatalogV1PropertyAdjustmentDataInput>;
  /**
   * Adjust product price.
   * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
   * variants prices will be calculated according to the adjusted price.
   * If variant price is negative after the adjustment, the update will fail.
   */
  price?: InputMaybe<CatalogV1PropertyAdjustmentDataInput>;
  /**
   * Adjust product weight.
   * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
   * weight will be adjusted per variant.
   */
  weight?: InputMaybe<CatalogV1PropertyAdjustmentDataInput>;
};

export type CatalogV1BulkAdjustProductPropertiesRequestInput = {
  /** Numerical property to adjust. */
  adjust?: InputMaybe<CatalogV1AdjustValueInput>;
  /** Product IDs. */
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CatalogV1BulkAdjustProductPropertiesResponse = {
  __typename?: 'CatalogV1BulkAdjustProductPropertiesResponse';
  /** Bulk action metadata. */
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  /** Bulk action results. */
  results?: Maybe<Array<Maybe<CatalogV1BulkProductResult>>>;
};

export type CatalogV1BulkProductResult = {
  __typename?: 'CatalogV1BulkProductResult';
  /** Item metadata. */
  itemMetadata?: Maybe<CommonItemMetadata>;
};

export type CatalogV1BulkUpdateProductsRequestInput = {
  /** Product IDs. */
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Field to update. */
  set?: InputMaybe<CatalogV1SetValueInput>;
};

export type CatalogV1BulkUpdateProductsResponse = {
  __typename?: 'CatalogV1BulkUpdateProductsResponse';
  /** Bulk action metadata. */
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  /** Bulk action results. */
  results?: Maybe<Array<Maybe<CatalogV1BulkProductResult>>>;
};

export type CatalogV1Choice = {
  __typename?: 'CatalogV1Choice';
  /** Choice description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Based on the customer’s choices, which (if any) variants that include the selected choices are in stock */
  inStock?: Maybe<Scalars['Boolean']['output']>;
  /** Media items (images, videos) associated with this choice */
  media?: Maybe<CatalogV1Media>;
  /** Choice value. */
  value?: Maybe<Scalars['String']['output']>;
  /** Based on the customer’s choices, which (if any) variants that include the selected choices are visible */
  visible?: Maybe<Scalars['Boolean']['output']>;
};

export type CatalogV1ChoiceInput = {
  /** Choice description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Based on the customer’s choices, which (if any) variants that include the selected choices are in stock */
  inStock?: InputMaybe<Scalars['Boolean']['input']>;
  /** Media items (images, videos) associated with this choice */
  media?: InputMaybe<CatalogV1MediaInput>;
  /** Choice value. */
  value?: InputMaybe<Scalars['String']['input']>;
  /** Based on the customer’s choices, which (if any) variants that include the selected choices are visible */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CatalogV1Collection = {
  __typename?: 'CatalogV1Collection';
  /** Collection description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Collection ID (generated automatically by the catalog). */
  id?: Maybe<Scalars['String']['output']>;
  /** Media items (images, videos etc) associated with this collection. Read only. */
  media?: Maybe<CatalogV1Media>;
  /** Collection name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Number of products in the collection. Read only. */
  numberOfProducts?: Maybe<Scalars['Int']['output']>;
  productsVirtualReference?: Maybe<CatalogV1QueryProductsPlatformizedResponse>;
  /** Collection slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Collection visibility. Only impacts dynamic pages, no impact on static pages. Default: `true`. */
  visible?: Maybe<Scalars['Boolean']['output']>;
};


export type CatalogV1CollectionProductsVirtualReferenceArgs = {
  query?: InputMaybe<CatalogV1QueryProductsPlatformizedRequestInput>;
};

export type CatalogV1CollectionInput = {
  /** Collection description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Collection ID (generated automatically by the catalog). */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Media items (images, videos etc) associated with this collection. Read only. */
  media?: InputMaybe<CatalogV1MediaInput>;
  /** Collection name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Number of products in the collection. Read only. */
  numberOfProducts?: InputMaybe<Scalars['Int']['input']>;
  /** Collection slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Collection visibility. Only impacts dynamic pages, no impact on static pages. Default: `true`. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CatalogV1CostAndProfitData = {
  __typename?: 'CatalogV1CostAndProfitData';
  /** Item cost formatted with currency symbol. */
  formattedItemCost?: Maybe<Scalars['String']['output']>;
  /** Profit formatted with currency symbol. */
  formattedProfit?: Maybe<Scalars['String']['output']>;
  /** Item cost. */
  itemCost?: Maybe<Scalars['Float']['output']>;
  /** Profit. Calculated by reducing `cost` from `discounted_price`. */
  profit?: Maybe<Scalars['Float']['output']>;
  /**
   * Profit Margin. Calculated by dividing `profit` by `discounted_price`.
   * The result is rounded to 4 decimal places.
   */
  profitMargin?: Maybe<Scalars['Float']['output']>;
};

export type CatalogV1CostAndProfitDataInput = {
  /** Item cost formatted with currency symbol. */
  formattedItemCost?: InputMaybe<Scalars['String']['input']>;
  /** Profit formatted with currency symbol. */
  formattedProfit?: InputMaybe<Scalars['String']['input']>;
  /** Item cost. */
  itemCost?: InputMaybe<Scalars['Float']['input']>;
  /** Profit. Calculated by reducing `cost` from `discounted_price`. */
  profit?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Profit Margin. Calculated by dividing `profit` by `discounted_price`.
   * The result is rounded to 4 decimal places.
   */
  profitMargin?: InputMaybe<Scalars['Float']['input']>;
};

export type CatalogV1CreateCollectionRequestInput = {
  /** Collection info. */
  collection?: InputMaybe<CatalogV1CollectionInput>;
};

export type CatalogV1CreateCollectionResponse = {
  __typename?: 'CatalogV1CreateCollectionResponse';
  /** Collection. */
  collection?: Maybe<CatalogV1Collection>;
};

export type CatalogV1CreateProductPlatformizedRequestInput = {
  /** Product information. */
  product?: InputMaybe<CatalogV1ProductInput>;
};

export type CatalogV1CreateProductPlatformizedResponse = {
  __typename?: 'CatalogV1CreateProductPlatformizedResponse';
  product?: Maybe<CatalogV1Product>;
};

export type CatalogV1CreateProductRequestInput = {
  /** Product information. */
  product?: InputMaybe<CatalogV1ProductInput>;
};

export type CatalogV1CreateProductResponse = {
  __typename?: 'CatalogV1CreateProductResponse';
  product?: Maybe<CatalogV1Product>;
};

export type CatalogV1CustomTextField = {
  __typename?: 'CatalogV1CustomTextField';
  /** Whether this text box is mandatory */
  mandatory?: Maybe<Scalars['Boolean']['output']>;
  /** Text box input max length */
  maxLength?: Maybe<Scalars['Int']['output']>;
  /** Text box title */
  title?: Maybe<Scalars['String']['output']>;
};

export type CatalogV1CustomTextFieldInput = {
  /** Whether this text box is mandatory */
  mandatory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Text box input max length */
  maxLength?: InputMaybe<Scalars['Int']['input']>;
  /** Text box title */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1DeleteCollectionRequestInput = {
  /** ID of the collection to delete. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1DeleteProductOptionsRequestInput = {
  /** ID of the product with options to delete. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1DeleteProductPlatformizedRequestInput = {
  /** ID of the product to delete. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1DeleteProductRequestInput = {
  /** ID of the product to delete. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1Discount = {
  __typename?: 'CatalogV1Discount';
  /**
   * Discount type:
   * + `"AMOUNT"`
   * + `"PERCENT"`
   */
  type?: Maybe<CatalogV1DiscountDiscountType>;
  /** Discount value */
  value?: Maybe<Scalars['Float']['output']>;
};

export enum CatalogV1DiscountDiscountType {
  Amount = 'AMOUNT',
  /** No discount */
  None = 'NONE',
  Percent = 'PERCENT',
  Undefined = 'UNDEFINED'
}

export type CatalogV1DiscountInput = {
  /**
   * Discount type:
   * + `"AMOUNT"`
   * + `"PERCENT"`
   */
  type?: InputMaybe<CatalogV1DiscountDiscountType>;
  /** Discount value */
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type CatalogV1FormattedPrice = {
  __typename?: 'CatalogV1FormattedPrice';
  /** Discounted product price formatted with the currency (if no discounted price is set, the product formatted price is returned) */
  discountedPrice?: Maybe<Scalars['String']['output']>;
  /** Product price formatted with the currency */
  price?: Maybe<Scalars['String']['output']>;
  /** Price per unit */
  pricePerUnit?: Maybe<Scalars['String']['output']>;
};

export type CatalogV1FormattedPriceInput = {
  /** Discounted product price formatted with the currency (if no discounted price is set, the product formatted price is returned) */
  discountedPrice?: InputMaybe<Scalars['String']['input']>;
  /** Product price formatted with the currency */
  price?: InputMaybe<Scalars['String']['input']>;
  /** Price per unit */
  pricePerUnit?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1GetCollectionBySlugRequestInput = {
  /** Slug of the collection to retrieve. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1GetCollectionBySlugResponse = {
  __typename?: 'CatalogV1GetCollectionBySlugResponse';
  /** The requested collection. */
  collection?: Maybe<CatalogV1Collection>;
};

export type CatalogV1GetProductRequestInput = {
  /** Requested product ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Whether merchant specific data, such as cost and profit data, should be included in the response. Requires permissions to manage products. */
  includeMerchantSpecificData?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CatalogV1GetProductResponse = {
  __typename?: 'CatalogV1GetProductResponse';
  /** Requested product data. */
  product?: Maybe<CatalogV1Product>;
};

export type CatalogV1GetStoreVariantRequestInput = {
  /** Store variant ID. Comprised of the `productId` and the `variantId`, separated by a hyphen. For example, `{productId}-{variantId}`. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1GetStoreVariantResponse = {
  __typename?: 'CatalogV1GetStoreVariantResponse';
  /** The requested store variant. */
  variant?: Maybe<CatalogV1StoreVariant>;
};

export type CatalogV1Media = {
  __typename?: 'CatalogV1Media';
  /** Media (images, videos etc) associated with this product. */
  items?: Maybe<Array<Maybe<CatalogV1MediaItem>>>;
  /** Primary media (image, video etc) associated with this product. */
  mainMedia?: Maybe<CatalogV1MediaItem>;
};

export type CatalogV1MediaAssignmentToChoiceInput = {
  /** Choice name. */
  choice?: InputMaybe<Scalars['String']['input']>;
  /** Media IDs (available via the Query Product endpoint). */
  mediaIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Option name. */
  option?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1MediaDataForWriteInput = {
  /**
   * Assign this media item to a specific product choice.
   * Note that you may set media items for choices under only one option (e.g., if Colors blue, green, and red have media items, Sizes S, M, and L can't have media items assigned to them).
   * You may clear existing media from choices with the [Remove Product Media From Choices](/catalog/products/remove-product-media-from-choices).
   */
  choice?: InputMaybe<CatalogV1MediaDataForWriteOptionAndChoiceInput>;
  /** Media ID. For media items previously saved in Wix Media, the media ID is returned in the Query Product response. */
  mediaId?: InputMaybe<Scalars['String']['input']>;
  /** Media external URL (for new media items). */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1MediaDataForWriteOptionAndChoiceInput = {
  /** Choice to add the media to. */
  choice?: InputMaybe<Scalars['String']['input']>;
  /** Option to add the media to. */
  option?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1MediaInput = {
  /** Media (images, videos etc) associated with this product. */
  items?: InputMaybe<Array<InputMaybe<CatalogV1MediaItemInput>>>;
  /** Primary media (image, video etc) associated with this product. */
  mainMedia?: InputMaybe<CatalogV1MediaItemInput>;
};

export type CatalogV1MediaItem = {
  __typename?: 'CatalogV1MediaItem';
  /** Media ID (for example, `"nsplsh_306d666a123a4a74306459~mv2_d_4517_2992_s_4_2.jpg"`). */
  id?: Maybe<Scalars['String']['output']>;
  /** Image data (URL, size). */
  image?: Maybe<CatalogV1MediaItemUrlAndSize>;
  /** Media item type (image, video, etc.). */
  mediaType?: Maybe<CatalogV1MediaItemType>;
  /** Media item thumbnail details. */
  thumbnail?: Maybe<CatalogV1MediaItemUrlAndSize>;
  /** Media item title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Video data (URL, size). */
  video?: Maybe<CatalogV1MediaItemVideo>;
};

export type CatalogV1MediaItemInput = {
  /** Media ID (for example, `"nsplsh_306d666a123a4a74306459~mv2_d_4517_2992_s_4_2.jpg"`). */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Image data (URL, size). */
  image?: InputMaybe<CatalogV1MediaItemUrlAndSizeInput>;
  /** Media item type (image, video, etc.). */
  mediaType?: InputMaybe<CatalogV1MediaItemType>;
  /** Media item thumbnail details. */
  thumbnail?: InputMaybe<CatalogV1MediaItemUrlAndSizeInput>;
  /** Media item title. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Video data (URL, size). */
  video?: InputMaybe<CatalogV1MediaItemVideoInput>;
};

export enum CatalogV1MediaItemType {
  Audio = 'audio',
  Document = 'document',
  Image = 'image',
  UnspecifiedMediaItemType = 'unspecified_media_item_type',
  Video = 'video',
  Zip = 'zip'
}

export type CatalogV1MediaItemUrlAndSize = {
  __typename?: 'CatalogV1MediaItemUrlAndSize';
  /** Alt text. This text will be shown in case the image is not available. */
  altText?: Maybe<Scalars['String']['output']>;
  /** Media format (mp4, png, etc.). */
  format?: Maybe<Scalars['String']['output']>;
  /** Media item height. */
  height?: Maybe<Scalars['Int']['output']>;
  /** Media item URL. */
  url?: Maybe<Scalars['String']['output']>;
  /** Media item width. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type CatalogV1MediaItemUrlAndSizeInput = {
  /** Alt text. This text will be shown in case the image is not available. */
  altText?: InputMaybe<Scalars['String']['input']>;
  /** Media format (mp4, png, etc.). */
  format?: InputMaybe<Scalars['String']['input']>;
  /** Media item height. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** Media item URL. */
  url?: InputMaybe<Scalars['String']['input']>;
  /** Media item width. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CatalogV1MediaItemVideo = {
  __typename?: 'CatalogV1MediaItemVideo';
  /** Data (URL, size) about each resolution for which this video is available. */
  files?: Maybe<Array<Maybe<CatalogV1MediaItemUrlAndSize>>>;
  /** ID of an image taken from the video. Used primarily for Wix Search indexing. For example, `"nsplsh_306d666a123a4a74306459~mv2_d_4517_2992_s_4_2.jpg"`. */
  stillFrameMediaId?: Maybe<Scalars['String']['output']>;
};

export type CatalogV1MediaItemVideoInput = {
  /** Data (URL, size) about each resolution for which this video is available. */
  files?: InputMaybe<Array<InputMaybe<CatalogV1MediaItemUrlAndSizeInput>>>;
  /** ID of an image taken from the video. Used primarily for Wix Search indexing. For example, `"nsplsh_306d666a123a4a74306459~mv2_d_4517_2992_s_4_2.jpg"`. */
  stillFrameMediaId?: InputMaybe<Scalars['String']['input']>;
};

export enum CatalogV1OptionType {
  Color = 'color',
  DropDown = 'drop_down',
  UnspecifiedOptionType = 'unspecified_option_type'
}

export type CatalogV1PageUrl = {
  __typename?: 'CatalogV1PageUrl';
  /** Base URL. For premium sites, this is the domain. For free sites, this is the site URL (e.g mysite.wixsite.com/mysite). */
  base?: Maybe<Scalars['String']['output']>;
  /** Path to the product page - e.g /product-page/a-product. */
  path?: Maybe<Scalars['String']['output']>;
};

export type CatalogV1PageUrlInput = {
  /** Base URL. For premium sites, this is the domain. For free sites, this is the site URL (e.g mysite.wixsite.com/mysite). */
  base?: InputMaybe<Scalars['String']['input']>;
  /** Path to the product page - e.g /product-page/a-product. */
  path?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1PagingInput = {
  /** Amount of items to load per page */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to skip in the display (relevant for all pages after the first) */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type CatalogV1PagingMetadata = {
  __typename?: 'CatalogV1PagingMetadata';
  /** Amount of items to load per page */
  items?: Maybe<Scalars['Int']['output']>;
  /** Number of items to skip in the display (relevant for all pages after the first) */
  offset?: Maybe<Scalars['Int']['output']>;
};

export type CatalogV1PercentageDataInput = {
  /**
   * Percentage value, as a whole number (integer) between `-100` and `1000`.
   *
   * For example:
   * + Pass `100` to increase value by 100% (multiply original value by 2).
   * + Pass `1000` to increase value by 1000% (multiply original value by 10).
   * + Pass `-50` to decrease value by 50% (original value is halved).
   */
  rate?: InputMaybe<Scalars['Int']['input']>;
  /**
   * If `true`, result will be rounded to the nearest whole number.
   * If `false`, result will be rounded to 2 places after the decimal point.
   */
  roundToInt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CatalogV1PriceData = {
  __typename?: 'CatalogV1PriceData';
  /** Product price currency */
  currency?: Maybe<Scalars['String']['output']>;
  /** Discounted product price (if no discounted price is set, the product price is returned) */
  discountedPrice?: Maybe<Scalars['Float']['output']>;
  /** The product price and discounted price, formatted with the currency */
  formatted?: Maybe<CatalogV1FormattedPrice>;
  /** Product price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Price per unit */
  pricePerUnit?: Maybe<Scalars['Float']['output']>;
};

export type CatalogV1PriceDataInput = {
  /** Product price currency */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Discounted product price (if no discounted price is set, the product price is returned) */
  discountedPrice?: InputMaybe<Scalars['Float']['input']>;
  /** The product price and discounted price, formatted with the currency */
  formatted?: InputMaybe<CatalogV1FormattedPriceInput>;
  /** Product price */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Price per unit */
  pricePerUnit?: InputMaybe<Scalars['Float']['input']>;
};

export type CatalogV1PricePerUnitData = {
  __typename?: 'CatalogV1PricePerUnitData';
  /** Base measurement unit */
  baseMeasurementUnit?: Maybe<EcommerceCommonsMeasurementUnitEnumMeasurementUnit>;
  /** Base quantity */
  baseQuantity?: Maybe<Scalars['Float']['output']>;
  /** Total measurement unit */
  totalMeasurementUnit?: Maybe<EcommerceCommonsMeasurementUnitEnumMeasurementUnit>;
  /** Total quantity */
  totalQuantity?: Maybe<Scalars['Float']['output']>;
};

export type CatalogV1PricePerUnitDataInput = {
  /** Base measurement unit */
  baseMeasurementUnit?: InputMaybe<EcommerceCommonsMeasurementUnitEnumMeasurementUnit>;
  /** Base quantity */
  baseQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** Total measurement unit */
  totalMeasurementUnit?: InputMaybe<EcommerceCommonsMeasurementUnitEnumMeasurementUnit>;
  /** Total quantity */
  totalQuantity?: InputMaybe<Scalars['Float']['input']>;
};

export type CatalogV1Product = {
  __typename?: 'CatalogV1Product';
  /** Additional text that the store owner can assign to the product (e.g. shipping details, refund policy, etc.). */
  additionalInfoSections?: Maybe<Array<Maybe<CatalogV1AdditionalInfoSection>>>;
  /** Product brand. Including a brand name can help improve site and product [visibility on search engines](https://support.wix.com/en/article/adding-brand-names-to-boost-product-page-seo-in-wix-stores). */
  brand?: Maybe<Scalars['String']['output']>;
  /** A list of all collection IDs that this product is included in (writable via the Catalog > Collection APIs). */
  collectionIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of all collection IDs that this product is included in (writable via the Catalog > Collection APIs). */
  collections?: Maybe<CatalogV2QueryCollectionsResponse>;
  /** Price data, converted to the currency specified in request header. */
  convertedPriceData?: Maybe<CatalogV1PriceData>;
  /** Cost and profit data. */
  costAndProfitData?: Maybe<CatalogV1CostAndProfitData>;
  /** Product cost range. The minimum and maximum costs of all the variants. */
  costRange?: Maybe<EcommerceCatalogSpiV1NumericPropertyRange>;
  /** Date and time the product was created. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Text box for the customer to add a message to their order (e.g., customization request). Currently writable only from the UI. */
  customTextFields?: Maybe<Array<Maybe<CatalogV1CustomTextField>>>;
  /** Product description. Accepts [rich text](https://dev.wix.com/api/rest/wix-stores/rich-text). */
  description?: Maybe<Scalars['String']['output']>;
  /** Discount deducted from the product's original price. */
  discount?: Maybe<CatalogV1Discount>;
  /** Product ID (generated automatically by the catalog). */
  id?: Maybe<Scalars['String']['output']>;
  /** Inventory item ID - ID referencing the inventory system. */
  inventoryItemId?: Maybe<Scalars['String']['output']>;
  /** Date and time the product was last updated. */
  lastUpdated?: Maybe<Scalars['String']['output']>;
  /** Whether variants are being managed for this product - enables unique SKU, price and weight per variant. Also affects inventory data. */
  manageVariants?: Maybe<Scalars['Boolean']['output']>;
  /** Media items (images, videos etc) associated with this product (writable via [Add Product Media](https://dev.wix.com/api/rest/wix-stores/catalog/products/add-product-media) endpoint). */
  media?: Maybe<CatalogV1Media>;
  /**
   * Product name.
   *
   * Min: 1 character
   * Max: 80 characters
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Product’s unique numeric ID (assigned in ascending order).
   * Primarily used for sorting and filtering when crawling all products.
   */
  numericId?: Maybe<Scalars['Int']['output']>;
  /** Deprecated (use `priceData` instead). */
  price?: Maybe<CatalogV1PriceData>;
  /** Price data. */
  priceData?: Maybe<CatalogV1PriceData>;
  /** Price per unit data. */
  pricePerUnitData?: Maybe<CatalogV1PricePerUnitData>;
  /** Product price range. The minimum and maximum prices of all the variants. */
  priceRange?: Maybe<EcommerceCatalogSpiV1NumericPropertyRange>;
  /** Options for this product. */
  productOptions?: Maybe<Array<Maybe<CatalogV1ProductOption>>>;
  /** Product page URL for this product (generated automatically by the server). */
  productPageUrl?: Maybe<CatalogV1PageUrl>;
  /** Currently, only creating physical products ( `"productType": "physical"` ) is supported via the API. */
  productType?: Maybe<CatalogV1ProductType>;
  /** Product ribbon. Used to highlight relevant information about a product. For example, "Sale", "New Arrival", "Sold Out". */
  ribbon?: Maybe<Scalars['String']['output']>;
  /** Deprecated (use `ribbon` instead). */
  ribbons?: Maybe<Array<Maybe<CatalogV1Ribbon>>>;
  /** Custom SEO data for the product. */
  seoData?: Maybe<AdvancedSeoSeoSchema>;
  /** Stock keeping unit. If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, SKUs will be set per variant, and this field will be empty. */
  sku?: Maybe<Scalars['String']['output']>;
  /** A friendly URL name (generated automatically by the catalog when a product is created), can be updated. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Product inventory status (in future this will be writable via Inventory API). */
  stock?: Maybe<CatalogV1Stock>;
  /** Product variants, will be provided if the the request was sent with the includeVariants flag. */
  variants?: Maybe<Array<Maybe<CatalogV1Variant>>>;
  /** Whether the product is visible to site visitors. */
  visible?: Maybe<Scalars['Boolean']['output']>;
  /** Product weight. If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, weight will be set per variant, and this field will be empty. */
  weight?: Maybe<Scalars['Float']['output']>;
  /** Product weight range. The minimum and maximum weights of all the variants. */
  weightRange?: Maybe<EcommerceCatalogSpiV1NumericPropertyRange>;
};


export type CatalogV1ProductCollectionsArgs = {
  query?: InputMaybe<CatalogV2QueryCollectionsRequestInput>;
};

export type CatalogV1ProductInput = {
  /** Additional text that the store owner can assign to the product (e.g. shipping details, refund policy, etc.). */
  additionalInfoSections?: InputMaybe<Array<InputMaybe<CatalogV1AdditionalInfoSectionInput>>>;
  /** Product brand. Including a brand name can help improve site and product [visibility on search engines](https://support.wix.com/en/article/adding-brand-names-to-boost-product-page-seo-in-wix-stores). */
  brand?: InputMaybe<Scalars['String']['input']>;
  /** A list of all collection IDs that this product is included in (writable via the Catalog > Collection APIs). */
  collectionIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Price data, converted to the currency specified in request header. */
  convertedPriceData?: InputMaybe<CatalogV1PriceDataInput>;
  /** Cost and profit data. */
  costAndProfitData?: InputMaybe<CatalogV1CostAndProfitDataInput>;
  /** Product cost range. The minimum and maximum costs of all the variants. */
  costRange?: InputMaybe<EcommerceCatalogSpiV1NumericPropertyRangeInput>;
  /** Date and time the product was created. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Text box for the customer to add a message to their order (e.g., customization request). Currently writable only from the UI. */
  customTextFields?: InputMaybe<Array<InputMaybe<CatalogV1CustomTextFieldInput>>>;
  /** Product description. Accepts [rich text](https://dev.wix.com/api/rest/wix-stores/rich-text). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Discount deducted from the product's original price. */
  discount?: InputMaybe<CatalogV1DiscountInput>;
  /** Product ID (generated automatically by the catalog). */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Inventory item ID - ID referencing the inventory system. */
  inventoryItemId?: InputMaybe<Scalars['String']['input']>;
  /** Date and time the product was last updated. */
  lastUpdated?: InputMaybe<Scalars['String']['input']>;
  /** Whether variants are being managed for this product - enables unique SKU, price and weight per variant. Also affects inventory data. */
  manageVariants?: InputMaybe<Scalars['Boolean']['input']>;
  /** Media items (images, videos etc) associated with this product (writable via [Add Product Media](https://dev.wix.com/api/rest/wix-stores/catalog/products/add-product-media) endpoint). */
  media?: InputMaybe<CatalogV1MediaInput>;
  /**
   * Product name.
   *
   * Min: 1 character
   * Max: 80 characters
   */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Product’s unique numeric ID (assigned in ascending order).
   * Primarily used for sorting and filtering when crawling all products.
   */
  numericId?: InputMaybe<Scalars['Int']['input']>;
  /** Deprecated (use `priceData` instead). */
  price?: InputMaybe<CatalogV1PriceDataInput>;
  /** Price data. */
  priceData?: InputMaybe<CatalogV1PriceDataInput>;
  /** Price per unit data. */
  pricePerUnitData?: InputMaybe<CatalogV1PricePerUnitDataInput>;
  /** Product price range. The minimum and maximum prices of all the variants. */
  priceRange?: InputMaybe<EcommerceCatalogSpiV1NumericPropertyRangeInput>;
  /** Options for this product. */
  productOptions?: InputMaybe<Array<InputMaybe<CatalogV1ProductOptionInput>>>;
  /** Product page URL for this product (generated automatically by the server). */
  productPageUrl?: InputMaybe<CatalogV1PageUrlInput>;
  /** Currently, only creating physical products ( `"productType": "physical"` ) is supported via the API. */
  productType?: InputMaybe<CatalogV1ProductType>;
  /** Product ribbon. Used to highlight relevant information about a product. For example, "Sale", "New Arrival", "Sold Out". */
  ribbon?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated (use `ribbon` instead). */
  ribbons?: InputMaybe<Array<InputMaybe<CatalogV1RibbonInput>>>;
  /** Custom SEO data for the product. */
  seoData?: InputMaybe<AdvancedSeoSeoSchemaInput>;
  /** Stock keeping unit. If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, SKUs will be set per variant, and this field will be empty. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** A friendly URL name (generated automatically by the catalog when a product is created), can be updated. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Product inventory status (in future this will be writable via Inventory API). */
  stock?: InputMaybe<CatalogV1StockInput>;
  /** Product variants, will be provided if the the request was sent with the includeVariants flag. */
  variants?: InputMaybe<Array<InputMaybe<CatalogV1VariantInput>>>;
  /** Whether the product is visible to site visitors. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  /** Product weight. If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, weight will be set per variant, and this field will be empty. */
  weight?: InputMaybe<Scalars['Float']['input']>;
  /** Product weight range. The minimum and maximum weights of all the variants. */
  weightRange?: InputMaybe<EcommerceCatalogSpiV1NumericPropertyRangeInput>;
};

export type CatalogV1ProductOption = {
  __typename?: 'CatalogV1ProductOption';
  /** Choices available for this option. */
  choices?: Maybe<Array<Maybe<CatalogV1Choice>>>;
  /** Option name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Option type - color or other(drop down) */
  optionType?: Maybe<CatalogV1OptionType>;
};

export type CatalogV1ProductOptionInput = {
  /** Choices available for this option. */
  choices?: InputMaybe<Array<InputMaybe<CatalogV1ChoiceInput>>>;
  /** Option name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Option type - color or other(drop down) */
  optionType?: InputMaybe<CatalogV1OptionType>;
};

export type CatalogV1ProductOptionsAvailabilityRequestInput = {
  /** Requested product ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Array containing the selected options. For example, `["color": "Blue", "size": "Large"]`. */
  options?: InputMaybe<Scalars['JSON']['input']>;
};

export type CatalogV1ProductOptionsAvailabilityResponse = {
  __typename?: 'CatalogV1ProductOptionsAvailabilityResponse';
  /** Whether all the selected choices result in a visible, in-stock variant. */
  availableForPurchase?: Maybe<Scalars['Boolean']['output']>;
  /** Information about media items (images, videos, etc.) associated with this choice. */
  media?: Maybe<CatalogV1Media>;
  /** Options information (color, size, etc.) for this product, with the inventory and visibility fields updated based on the provided choices. */
  productOptions?: Maybe<Array<Maybe<CatalogV1ProductOption>>>;
  /** Variant information, given that all the choices were provided. */
  selectedVariant?: Maybe<CatalogV1VariantData>;
};

export enum CatalogV1ProductType {
  Digital = 'digital',
  Physical = 'physical',
  UnspecifiedProductType = 'unspecified_product_type'
}

export type CatalogV1PropertyAdjustmentDataInput = {
  /** Adjust by amount. */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Adjust by percentage. */
  percentage?: InputMaybe<CatalogV1PercentageDataInput>;
};

export type CatalogV1QueryProductVariantsRequestInput = {
  /**
   * The specific choices available or chosen from within a selection (e.g., choosing the red Selection triggers the red Choice).
   * You may specify all the relevant choices for a specific variant, or only some of the options, which will return all corresponding variants (not relevant when passing variant IDs).
   */
  choices?: InputMaybe<Scalars['JSON']['input']>;
  /** Requested product ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
  includeMerchantSpecificData?: InputMaybe<Scalars['Boolean']['input']>;
  paging?: InputMaybe<CatalogV1PagingInput>;
  /** List of variant IDs (not relevant when passing choices). */
  variantIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CatalogV1QueryProductVariantsResponse = {
  __typename?: 'CatalogV1QueryProductVariantsResponse';
  metadata?: Maybe<CatalogV1PagingMetadata>;
  totalResults?: Maybe<Scalars['Int']['output']>;
  /** List of variants based on the specified filters and sorting. */
  variants?: Maybe<Array<Maybe<CatalogV1Variant>>>;
};

export type CatalogV1QueryProductsPlatformizedRequestInput = {
  query?: InputMaybe<EcommerceCommonsPlatformQueryInput>;
};

export type CatalogV1QueryProductsPlatformizedResponse = {
  __typename?: 'CatalogV1QueryProductsPlatformizedResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<CatalogV1Product>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type CatalogV1QueryStoreVariantsRequestInput = {
  /** Query options. */
  query?: InputMaybe<EcommerceCommonsPlatformQueryInput>;
};

export type CatalogV1QueryStoreVariantsResponse = {
  __typename?: 'CatalogV1QueryStoreVariantsResponse';
  /** Details on the paged set of results returned. */
  metadata?: Maybe<EcommerceCommonsPlatformPagingMetadata>;
  /** List of variants based on the specified filters and sorting. */
  variants?: Maybe<Array<Maybe<CatalogV1StoreVariant>>>;
};

export type CatalogV1RemoveProductBrandRequestInput = {
  /** Product ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1RemoveProductMediaFromChoicesRequestInput = {
  /** Product ID from whose choices to remove media items. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Media to remove from choices. If an empty array is passed, all media will be removed from all choices for the given product. */
  media?: InputMaybe<Array<InputMaybe<CatalogV1MediaAssignmentToChoiceInput>>>;
};

export type CatalogV1RemoveProductMediaRequestInput = {
  /** Product ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** List of media IDs to remove. Pass an empty array to delete all media items for the product. */
  mediaIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CatalogV1RemoveProductRibbonRequestInput = {
  /** Product ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1RemoveProductsFromCollectionRequestInput = {
  /** Collection ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** IDs of the products to remove from the collection. */
  productIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CatalogV1ResetAllVariantDataRequestInput = {
  /** Product ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1Ribbon = {
  __typename?: 'CatalogV1Ribbon';
  /** Ribbon text */
  text?: Maybe<Scalars['String']['output']>;
};

export type CatalogV1RibbonInput = {
  /** Ribbon text */
  text?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV1SetValueInput = {
  /** Set product brand. Pass empty string to remove existing brand. */
  brand?: InputMaybe<Scalars['String']['input']>;
  /**
   * Set product cost of goods.
   * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
   * cost of goods will be set per variant.
   */
  cost?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Set product price.
   * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
   * variant prices will be calculated according to the set product price.
   * If variant price is negative after setting new price, the update will fail.
   */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Set product ribbon. Pass empty string to remove existing ribbon. */
  ribbon?: InputMaybe<Scalars['String']['input']>;
  /**
   * Set product weight.
   * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
   * weight will be set per variant.
   */
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type CatalogV1Stock = {
  __typename?: 'CatalogV1Stock';
  /**
   * Whether the product is currently in stock (relevant only when tracking manually)
   * Deprecated (use `inventoryStatus` instead)
   */
  inStock?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The current status of the inventory
   * + `IN_STOCK` - In stock
   * + `OUT_OF_STOCK` - Not in stock
   * + `PARTIALLY_OUT_OF_STOCK` - Some of the variants are not in stock
   */
  inventoryStatus?: Maybe<CatalogV1StockInventoryStatus>;
  /** Quantity currently left in inventory */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Whether inventory is being tracked */
  trackInventory?: Maybe<Scalars['Boolean']['output']>;
};

export type CatalogV1StockInput = {
  /**
   * Whether the product is currently in stock (relevant only when tracking manually)
   * Deprecated (use `inventoryStatus` instead)
   */
  inStock?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * The current status of the inventory
   * + `IN_STOCK` - In stock
   * + `OUT_OF_STOCK` - Not in stock
   * + `PARTIALLY_OUT_OF_STOCK` - Some of the variants are not in stock
   */
  inventoryStatus?: InputMaybe<CatalogV1StockInventoryStatus>;
  /** Quantity currently left in inventory */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** Whether inventory is being tracked */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum CatalogV1StockInventoryStatus {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK',
  PartiallyOutOfStock = 'PARTIALLY_OUT_OF_STOCK'
}

export type CatalogV1StoreVariant = {
  __typename?: 'CatalogV1StoreVariant';
  /** The selected options of this variant. For example, `{"Color": "Blue", "Size": "Large"}`. */
  choices?: Maybe<Scalars['JSON']['output']>;
  /** Collections that include this variant. */
  collectionIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Collections that include this variant. */
  collections?: Maybe<CatalogV2QueryCollectionsResponse>;
  /** Store variant ID. Comprised of the `productId` and the `variantId`, separated by a hyphen: {productId}.{variantId}. */
  id?: Maybe<Scalars['String']['output']>;
  /** Whether the variant is managed or represents a product. */
  managedVariant?: Maybe<Scalars['Boolean']['output']>;
  /** Media items (images, videos) associated with this variant. */
  media?: Maybe<EcommerceCommonsPlatformMedia>;
  /** Preorder information. */
  preorderInfo?: Maybe<InventoryV1PreorderInfo>;
  /** Product ID. */
  product?: Maybe<CatalogV1Product>;
  /** Product ID. */
  productId?: Maybe<Scalars['String']['output']>;
  /** Product name. */
  productName?: Maybe<Scalars['String']['output']>;
  /** Variant SKU (stock keeping unit). */
  sku?: Maybe<Scalars['String']['output']>;
  /** Variant inventory status. */
  stock?: Maybe<CatalogV1VariantStock>;
  /** Variant ID. */
  variantId?: Maybe<Scalars['String']['output']>;
  /** Variant name. */
  variantName?: Maybe<Scalars['String']['output']>;
};


export type CatalogV1StoreVariantCollectionsArgs = {
  query?: InputMaybe<CatalogV2QueryCollectionsRequestInput>;
};

export type CatalogV1UpdateCollectionRequestInput = {
  /** Collection info. */
  collection?: InputMaybe<CatalogV1CollectionInput>;
};

export type CatalogV1UpdateCollectionResponse = {
  __typename?: 'CatalogV1UpdateCollectionResponse';
  /** Updated collection. */
  collection?: Maybe<CatalogV1Collection>;
};

export type CatalogV1UpdateProductPlatformizedRequestInput = {
  product?: InputMaybe<CatalogV1ProductInput>;
};

export type CatalogV1UpdateProductPlatformizedResponse = {
  __typename?: 'CatalogV1UpdateProductPlatformizedResponse';
  product?: Maybe<CatalogV1Product>;
};

export type CatalogV1UpdateProductRequestInput = {
  product?: InputMaybe<CatalogV1ProductInput>;
};

export type CatalogV1UpdateProductResponse = {
  __typename?: 'CatalogV1UpdateProductResponse';
  product?: Maybe<CatalogV1Product>;
};

export type CatalogV1UpdateVariantsRequestInput = {
  /** ID of the product with managed variants. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Variant info to update. */
  variants?: InputMaybe<Array<InputMaybe<CatalogV1VariantOverrideInput>>>;
};

export type CatalogV1UpdateVariantsResponse = {
  __typename?: 'CatalogV1UpdateVariantsResponse';
  /** List of the product's variants. */
  variants?: Maybe<Array<Maybe<CatalogV1Variant>>>;
};

export type CatalogV1Variant = {
  __typename?: 'CatalogV1Variant';
  /** Specific choices within a selection, as option-choice key-value pairs */
  choices?: Maybe<Scalars['JSON']['output']>;
  /** Requested Variant ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Variant inventory status. */
  stock?: Maybe<CatalogV1VariantStock>;
  variant?: Maybe<CatalogV1VariantDataWithNoStock>;
};

export type CatalogV1VariantData = {
  __typename?: 'CatalogV1VariantData';
  /** Variant price data converted to currency provided in header. */
  convertedPriceData?: Maybe<CatalogV1PriceData>;
  /** Whether the product is currently in stock (relevant only when tracking manually). */
  inStock?: Maybe<Scalars['Boolean']['output']>;
  /** Variant price. */
  price?: Maybe<CatalogV1PriceData>;
  /** Quantity currently in inventory (relevant only when tracking by inventory). */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Variant SKU (stock keeping unit). */
  sku?: Maybe<Scalars['String']['output']>;
  /** Whether the variant is visible to customers. */
  visible?: Maybe<Scalars['Boolean']['output']>;
  /** Variant weight. */
  weight?: Maybe<Scalars['Float']['output']>;
};

export type CatalogV1VariantDataWithNoStock = {
  __typename?: 'CatalogV1VariantDataWithNoStock';
  /** Variant price data, converted to currency requested in header. */
  convertedPriceData?: Maybe<CatalogV1PriceData>;
  /** Cost and profit data. */
  costAndProfitData?: Maybe<CatalogV1CostAndProfitData>;
  /** Variant price. */
  priceData?: Maybe<CatalogV1PriceData>;
  /** Variant SKU (stock keeping unit). */
  sku?: Maybe<Scalars['String']['output']>;
  /** Whether the variant is visible to customers. */
  visible?: Maybe<Scalars['Boolean']['output']>;
  /** Variant weight. */
  weight?: Maybe<Scalars['Float']['output']>;
};

export type CatalogV1VariantDataWithNoStockInput = {
  /** Variant price data, converted to currency requested in header. */
  convertedPriceData?: InputMaybe<CatalogV1PriceDataInput>;
  /** Cost and profit data. */
  costAndProfitData?: InputMaybe<CatalogV1CostAndProfitDataInput>;
  /** Variant price. */
  priceData?: InputMaybe<CatalogV1PriceDataInput>;
  /** Variant SKU (stock keeping unit). */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Whether the variant is visible to customers. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  /** Variant weight. */
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type CatalogV1VariantInput = {
  /** Specific choices within a selection, as option-choice key-value pairs */
  choices?: InputMaybe<Scalars['JSON']['input']>;
  /** Requested Variant ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Variant inventory status. */
  stock?: InputMaybe<CatalogV1VariantStockInput>;
  variant?: InputMaybe<CatalogV1VariantDataWithNoStockInput>;
};

export type CatalogV1VariantOverrideInput = {
  /** The specific choices available or chosen from within a selection (e.g., choosing the red Selection triggers the red Choice). You may specify all the relevant choices for a specific variant, or only some of the options, which will return all corresponding variants (Not relevant when passing variant IDs) */
  choices?: InputMaybe<Scalars['JSON']['input']>;
  /** Variant cost of goods */
  cost?: InputMaybe<Scalars['Float']['input']>;
  /** Variant price */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Variant SKU (stock keeping unit) */
  sku?: InputMaybe<Scalars['String']['input']>;
  /**
   * List of variant IDs
   * (Not relevant when passing choices)
   */
  variantIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Whether the variant is visible to  customers */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  /** Variant weight */
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type CatalogV1VariantStock = {
  __typename?: 'CatalogV1VariantStock';
  /** Whether the product is currently in stock (relevant only when tracking manually). */
  inStock?: Maybe<Scalars['Boolean']['output']>;
  /** Quantity currently left in inventory. */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Whether inventory is being tracked. */
  trackQuantity?: Maybe<Scalars['Boolean']['output']>;
};

export type CatalogV1VariantStockInput = {
  /** Whether the product is currently in stock (relevant only when tracking manually). */
  inStock?: InputMaybe<Scalars['Boolean']['input']>;
  /** Quantity currently left in inventory. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** Whether inventory is being tracked. */
  trackQuantity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CatalogV2GetCollectionBySlugRequestInput = {
  /** Slug of the collection to retrieve. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogV2GetCollectionBySlugResponse = {
  __typename?: 'CatalogV2GetCollectionBySlugResponse';
  /** The requested collection. */
  collection?: Maybe<CatalogV1Collection>;
};

export type CatalogV2QueryCollectionsRequestInput = {
  query?: InputMaybe<EcommerceCommonsPlatformQueryInput>;
};

export type CatalogV2QueryCollectionsResponse = {
  __typename?: 'CatalogV2QueryCollectionsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<CatalogV1Collection>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type CatalogWriteProxyV1CreateProductPlatformizedRequestInput = {
  /** Product information. */
  product?: InputMaybe<CatalogV1ProductInput>;
};

export type CatalogWriteProxyV1CreateProductPlatformizedResponse = {
  __typename?: 'CatalogWriteProxyV1CreateProductPlatformizedResponse';
  product?: Maybe<CatalogV1Product>;
};

export type CatalogWriteProxyV1DeleteProductPlatformizedRequestInput = {
  /** ID of the product to delete. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogWriteProxyV1UpdateProductPlatformizedRequestInput = {
  product?: InputMaybe<CatalogV1ProductInput>;
};

export type CatalogWriteProxyV1UpdateProductPlatformizedResponse = {
  __typename?: 'CatalogWriteProxyV1UpdateProductPlatformizedResponse';
  product?: Maybe<CatalogV1Product>;
};

export type CloudDataDataAggregateDataItemsRequestAggregationInput = {
  /** Fields by which to group items for the aggregation. If empty, the aggregation is carried out on all items in the collection. */
  groupingFields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Operations to carry out on the data in each grouping. */
  operations?: InputMaybe<Array<InputMaybe<CloudDataDataAggregateDataItemsRequestAggregationOperationInput>>>;
};

export type CloudDataDataAggregateDataItemsRequestAggregationOperationAverageInput = {
  /** Name of the field for which to calculate the average value. */
  itemFieldName?: InputMaybe<Scalars['String']['input']>;
};

export type CloudDataDataAggregateDataItemsRequestAggregationOperationInput = {
  /** Calculate the average value of a specified field for all items in the grouping. */
  average?: InputMaybe<CloudDataDataAggregateDataItemsRequestAggregationOperationAverageInput>;
  /** Calculate the number of items in the grouping. */
  itemCount?: InputMaybe<Scalars['Void']['input']>;
  /** Calculate the maximum value of a specified field for all items in the grouping. */
  max?: InputMaybe<CloudDataDataAggregateDataItemsRequestAggregationOperationMaxInput>;
  /** Calculate the minimum value of a specified field for all items in the grouping. */
  min?: InputMaybe<CloudDataDataAggregateDataItemsRequestAggregationOperationMinInput>;
  /** Name of the field containing results of the operation. */
  resultFieldName?: InputMaybe<Scalars['String']['input']>;
  /** Calculate the sum of values of a specified field for all items in the grouping. */
  sum?: InputMaybe<CloudDataDataAggregateDataItemsRequestAggregationOperationSumInput>;
};

export type CloudDataDataAggregateDataItemsRequestAggregationOperationMaxInput = {
  /** Name of the field for which to calculate the maximum value. */
  itemFieldName?: InputMaybe<Scalars['String']['input']>;
};

export type CloudDataDataAggregateDataItemsRequestAggregationOperationMinInput = {
  /** Name of the field for which to calculate the minimum value. */
  itemFieldName?: InputMaybe<Scalars['String']['input']>;
};

export type CloudDataDataAggregateDataItemsRequestAggregationOperationSumInput = {
  /** Name of the field for which to calculate the sum. */
  itemFieldName?: InputMaybe<Scalars['String']['input']>;
};

export type CloudDataDataAggregateDataItemsRequestInput = {
  /** Aggregation applied to the data. */
  aggregation?: InputMaybe<CloudDataDataAggregateDataItemsRequestAggregationInput>;
  /**
   * Whether to retrieve data from the primary database instance.
   * This decreases performance but ensures data retrieved is up to date even immediately after an update.
   * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
   *
   * Default: `false`
   */
  consistentRead?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<CloudDataDataUpstreamCommonCursorPagingInput>;
  /** ID of the collection on which to run the aggregation. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** Filter applied to the processed data following the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
  finalFilter?: InputMaybe<Scalars['JSON']['input']>;
  /** Filter applied to the collection's data prior to running the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
  initialFilter?: InputMaybe<Scalars['JSON']['input']>;
  /** Paging options to limit and skip the number of items. */
  paging?: InputMaybe<CloudDataDataUpstreamCommonPagingInput>;
  /**
   * Whether to return the total count in the response for a query with offset paging.
   * When `true`, the `pagingMetadata` object in the response contains a `total` field.
   *
   * Default: `false`
   */
  returnTotalCount?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CloudDataDataUpstreamCommonSortingInput>>>;
};

export type CloudDataDataAggregateDataItemsResponse = {
  __typename?: 'CloudDataDataAggregateDataItemsResponse';
  /** Paging information. */
  pagingMetadata?: Maybe<CloudDataDataUpstreamCommonPagingMetadataV2>;
  /** Aggregation results. */
  results?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};

export type CloudDataDataBulkDataItemReferenceResult = {
  __typename?: 'CloudDataDataBulkDataItemReferenceResult';
  /** The action attempted for the reference. */
  action?: Maybe<CloudDataDataUpstreamCommonBulkActionType>;
  /** The reference for which the action was attempted. Only returned if `returnEntity` is `true` in the request and the action is successful. */
  dataItemReference?: Maybe<CloudDataDataDataItemReference>;
  /** Metadata related to the reference for which the action was attempted. */
  referenceMetadata?: Maybe<CloudDataDataUpstreamCommonItemMetadata>;
};

export type CloudDataDataBulkDataItemResult = {
  __typename?: 'CloudDataDataBulkDataItemResult';
  /** The action attempted for the data item. */
  action?: Maybe<CloudDataDataUpstreamCommonBulkActionType>;
  /** The data item for which the action was attempted. Only returned if `returnEntity` is `true` in the request and the action is successful. */
  dataItem?: Maybe<CloudDataDataDataItem>;
  /** Metadata related to the data item for which the action was attempted. */
  itemMetadata?: Maybe<CloudDataDataUpstreamCommonItemMetadata>;
};

export type CloudDataDataBulkInsertDataItemReferencesRequestInput = {
  /** ID of the collection containing the referring items. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** References to insert. */
  dataItemReferences?: InputMaybe<Array<InputMaybe<CloudDataDataDataItemReferenceInput>>>;
  /**
   * Whether to return the inserted data item references.
   * When `true`, the `results` objects contain a `dataItemReference` field.
   *
   * Default: `false`
   */
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CloudDataDataBulkInsertDataItemReferencesResponse = {
  __typename?: 'CloudDataDataBulkInsertDataItemReferencesResponse';
  /** Bulk action metadata. */
  bulkActionMetadata?: Maybe<CloudDataDataUpstreamCommonBulkActionMetadata>;
  /** Information about the inserted references. */
  results?: Maybe<Array<Maybe<CloudDataDataBulkDataItemReferenceResult>>>;
};

export type CloudDataDataBulkInsertDataItemsRequestInput = {
  /** ID of the collection in which to insert the items. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** Data items to insert. */
  dataItems?: InputMaybe<Array<InputMaybe<CloudDataDataDataItemInput>>>;
  /**
   * Whether to return the inserted data items.
   * When `true`, the `results` objects contain a `dataItem` field.
   *
   * Default: `false`
   */
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CloudDataDataBulkInsertDataItemsResponse = {
  __typename?: 'CloudDataDataBulkInsertDataItemsResponse';
  /** Bulk action metadata. */
  bulkActionMetadata?: Maybe<CloudDataDataUpstreamCommonBulkActionMetadata>;
  /** Information about the inserted items. */
  results?: Maybe<Array<Maybe<CloudDataDataBulkDataItemResult>>>;
};

export type CloudDataDataBulkRemoveDataItemReferencesRequestInput = {
  /** ID of the collection containing the referring items. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** References to remove. */
  dataItemReferences?: InputMaybe<Array<InputMaybe<CloudDataDataDataItemReferenceInput>>>;
};

export type CloudDataDataBulkRemoveDataItemReferencesResponse = {
  __typename?: 'CloudDataDataBulkRemoveDataItemReferencesResponse';
  /** Bulk action metadata. */
  bulkActionMetadata?: Maybe<CloudDataDataUpstreamCommonBulkActionMetadata>;
  /** Information about the removed references. */
  results?: Maybe<Array<Maybe<CloudDataDataBulkDataItemReferenceResult>>>;
};

export type CloudDataDataBulkRemoveDataItemsRequestInput = {
  /** ID of the collection from which to remove the item. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** IDs of data items to remove. */
  dataItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CloudDataDataBulkRemoveDataItemsResponse = {
  __typename?: 'CloudDataDataBulkRemoveDataItemsResponse';
  /** Bulk action metadata. */
  bulkActionMetadata?: Maybe<CloudDataDataUpstreamCommonBulkActionMetadata>;
  /** Information about the removed data items. */
  results?: Maybe<Array<Maybe<CloudDataDataBulkDataItemResult>>>;
};

export type CloudDataDataBulkSaveDataItemsRequestInput = {
  /** ID of the collection in which to insert or update the items. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** Data items to insert or update. */
  dataItems?: InputMaybe<Array<InputMaybe<CloudDataDataDataItemInput>>>;
  /**
   * Whether to return the saved data item.
   * When `true`, the `results` objects contain a `dataItem` field.
   *
   * Default: `false`
   */
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CloudDataDataBulkSaveDataItemsResponse = {
  __typename?: 'CloudDataDataBulkSaveDataItemsResponse';
  /** Bulk action metadata. */
  bulkActionMetadata?: Maybe<CloudDataDataUpstreamCommonBulkActionMetadata>;
  /** Information about the saved items. */
  results?: Maybe<Array<Maybe<CloudDataDataBulkDataItemResult>>>;
};

export type CloudDataDataBulkUpdateDataItemsRequestInput = {
  /** ID of the collection in which to update items. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** Data items to update. */
  dataItems?: InputMaybe<Array<InputMaybe<CloudDataDataDataItemInput>>>;
  /**
   * Whether to return the updated data items.
   * When `true`, the `results` objects contain a `dataItem` field.
   *
   * Default: `false`
   */
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CloudDataDataBulkUpdateDataItemsResponse = {
  __typename?: 'CloudDataDataBulkUpdateDataItemsResponse';
  /** Bulk action metadata. */
  bulkActionMetadata?: Maybe<CloudDataDataUpstreamCommonBulkActionMetadata>;
  /** Information about the updated items. */
  results?: Maybe<Array<Maybe<CloudDataDataBulkDataItemResult>>>;
};

export type CloudDataDataCountDataItemsRequestInput = {
  /**
   * Whether to retrieve data from the primary database instance.
   * This decreases performance but ensures data retrieved is up to date even immediately after an update.
   * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
   *
   * Default: `false`
   */
  consistentRead?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the collection for which to count query results. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Filter object in the following format:
   *
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`.
   *
   * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`.
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
};

export type CloudDataDataCountDataItemsResponse = {
  __typename?: 'CloudDataDataCountDataItemsResponse';
  /** Number of items matching the query. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CloudDataDataDataItem = {
  __typename?: 'CloudDataDataDataItem';
  /**
   * Data item contents.
   *
   * Property-value pairs representing the data item's payload. When retrieving a data item, it also includes the following read-only fields:
   *
   * + `_id`: Item ID.
   * + `_createdDate`: Date and time the item was added to the collection.
   * + `_updatedDate`: Date and time the item was last modified. When the item is first inserted, `_createdDate` and `_updatedDate` have the same value.
   * + `_ownerId`: ID of the user who created the item. Can be modified with site owner permissions.
   */
  data?: Maybe<Scalars['JSON']['output']>;
  /** Data item ID. */
  id?: Maybe<Scalars['String']['output']>;
};

export type CloudDataDataDataItemInput = {
  /**
   * Data item contents.
   *
   * Property-value pairs representing the data item's payload. When retrieving a data item, it also includes the following read-only fields:
   *
   * + `_id`: Item ID.
   * + `_createdDate`: Date and time the item was added to the collection.
   * + `_updatedDate`: Date and time the item was last modified. When the item is first inserted, `_createdDate` and `_updatedDate` have the same value.
   * + `_ownerId`: ID of the user who created the item. Can be modified with site owner permissions.
   */
  data?: InputMaybe<Scalars['JSON']['input']>;
  /** Data item ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CloudDataDataDataItemReference = {
  __typename?: 'CloudDataDataDataItemReference';
  /** ID of the referenced item. */
  referencedItemId?: Maybe<Scalars['String']['output']>;
  /** Referring item field containing the references to the referenced items. */
  referringItemFieldName?: Maybe<Scalars['String']['output']>;
  /** ID of the referring item. */
  referringItemId?: Maybe<Scalars['String']['output']>;
};

export type CloudDataDataDataItemReferenceInput = {
  /** ID of the referenced item. */
  referencedItemId?: InputMaybe<Scalars['String']['input']>;
  /** Referring item field containing the references to the referenced items. */
  referringItemFieldName?: InputMaybe<Scalars['String']['input']>;
  /** ID of the referring item. */
  referringItemId?: InputMaybe<Scalars['String']['input']>;
};

export type CloudDataDataInsertDataItemReferenceRequestInput = {
  /** ID of the collection in which to insert the reference. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** Reference to insert */
  dataItemReference?: InputMaybe<CloudDataDataDataItemReferenceInput>;
};

export type CloudDataDataInsertDataItemReferenceResponse = {
  __typename?: 'CloudDataDataInsertDataItemReferenceResponse';
  /** Inserted reference. */
  dataItemReference?: Maybe<CloudDataDataDataItemReference>;
};

export type CloudDataDataInsertDataItemRequestInput = {
  /** ID of the collection in which to insert the item. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** Item to insert. */
  dataItem?: InputMaybe<CloudDataDataDataItemInput>;
};

export type CloudDataDataInsertDataItemResponse = {
  __typename?: 'CloudDataDataInsertDataItemResponse';
  /** Inserted data item. */
  dataItem?: Maybe<CloudDataDataDataItem>;
};

export type CloudDataDataIsReferencedDataItemRequestInput = {
  /**
   * Whether to retrieve data from the primary database instance.
   * This decreases performance but ensures data retrieved is up to date even immediately after an update.
   * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
   *
   * Default: `false`
   */
  consistentRead?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the collection containing the referring data item. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the item that may be referenced. */
  referencedItemId?: InputMaybe<Scalars['String']['input']>;
  /** Field to check for a reference to the item that may be referenced. */
  referringItemFieldName?: InputMaybe<Scalars['String']['input']>;
  /** ID of the referring item. */
  referringItemId?: InputMaybe<Scalars['String']['input']>;
};

export type CloudDataDataIsReferencedDataItemResponse = {
  __typename?: 'CloudDataDataIsReferencedDataItemResponse';
  /** Whether the specified reference exists. */
  isReferenced?: Maybe<Scalars['Boolean']['output']>;
};

export type CloudDataDataQueryDataItemsRequestInput = {
  /**
   * Whether to retrieve data from the primary database instance.
   * This decreases performance but ensures data retrieved is up to date even immediately after an update.
   * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
   *
   * Default: `false`
   */
  consistentRead?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the collection in which to insert the item. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Properties for which to include referenced items in the query's results.
   * Up to 50 referenced items can be included for each item that matches the query.
   */
  includeReferencedItems?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Query preferences. For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language). */
  query?: InputMaybe<CloudDataDataUpstreamCommonQueryV2Input>;
  /**
   * Whether to return the total count in the response for a query with offset paging.
   * When `true`, the `pagingMetadata` object in the response contains a `total` field.
   *
   * Default: `false`
   */
  returnTotalCount?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CloudDataDataQueryDataItemsResponse = {
  __typename?: 'CloudDataDataQueryDataItemsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<CloudDataDataDataItem>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type CloudDataDataQueryDistinctValuesRequestInput = {
  /**
   * Whether to retrieve data from the primary database instance.
   * This decreases performance but ensures data retrieved is up to date even immediately after an update.
   * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
   *
   * Default: `false`
   */
  consistentRead?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<CloudDataDataUpstreamCommonCursorPagingInput>;
  /** ID of the collection to query. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** Item field name for which to return all distinct values. */
  fieldName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Filter object in the following format:
   *
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`.
   *
   * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`.
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Sort order. */
  order?: InputMaybe<CloudDataDataUpstreamCommonSortOrder>;
  /** Paging options to limit and skip the number of items. */
  paging?: InputMaybe<CloudDataDataUpstreamCommonPagingInput>;
  /**
   * Whether to return the total count in the response for a query with offset paging.
   * When `true`, the `pagingMetadata` object in the response contains a `total` field.
   *
   * Default: `false`
   */
  returnTotalCount?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CloudDataDataQueryDistinctValuesResponse = {
  __typename?: 'CloudDataDataQueryDistinctValuesResponse';
  /** List of distinct values contained in the field specified in `fieldName`. */
  distinctValues?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Paging information. */
  pagingMetadata?: Maybe<CloudDataDataUpstreamCommonPagingMetadataV2>;
};

export type CloudDataDataQueryReferencedDataItemsRequestInput = {
  /**
   * Whether to retrieve data from the primary database instance.
   * This decreases performance but ensures data retrieved is up to date even immediately after an update.
   * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
   *
   * Default: `false`
   */
  consistentRead?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<CloudDataDataUpstreamCommonCursorPagingInput>;
  /** ID of the collection containing the referring item. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** Order of the returned referenced items. Sorted by the date each item was referenced. */
  order?: InputMaybe<CloudDataDataUpstreamCommonSortOrder>;
  /** Paging options to limit and skip the number of items. */
  paging?: InputMaybe<CloudDataDataUpstreamCommonPagingInput>;
  /** Field containing references in the referring item. */
  referringItemFieldName?: InputMaybe<Scalars['String']['input']>;
  /** ID of the referring item. */
  referringItemId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Whether to return the total count in the response.
   * When `true`, the `pagingMetadata` object in the response contains a `total` field.
   *
   * Default: `false`
   */
  returnTotalCount?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CloudDataDataQueryReferencedDataItemsResponse = {
  __typename?: 'CloudDataDataQueryReferencedDataItemsResponse';
  /** Paging information. */
  pagingMetadata?: Maybe<CloudDataDataUpstreamCommonPagingMetadataV2>;
  /** Referenced items and/or IDs. For successfully resolved references, the referenced data item is returned. For references that can't be resolved, the ID is returned. */
  results?: Maybe<Array<Maybe<CloudDataDataQueryReferencedDataItemsResponseReferencedResult>>>;
};

export type CloudDataDataQueryReferencedDataItemsResponseReferencedResult = {
  __typename?: 'CloudDataDataQueryReferencedDataItemsResponseReferencedResult';
  /** Data item referenced. */
  dataItem?: Maybe<CloudDataDataDataItem>;
  /** Unresolved reference. Appears instead of the data item when the reference doesn't resolve, for example, when an ID isn't found or if an item is in draft state. */
  unresolvedReference?: Maybe<CloudDataDataQueryReferencedDataItemsResponseUnresolvedReference>;
};

export type CloudDataDataQueryReferencedDataItemsResponseUnresolvedReference = {
  __typename?: 'CloudDataDataQueryReferencedDataItemsResponseUnresolvedReference';
  /** Field specified to query for references. */
  referringItemFieldName?: Maybe<Scalars['String']['output']>;
  /** ID of the referring item. */
  referringItemId?: Maybe<Scalars['String']['output']>;
};

export type CloudDataDataRemoveDataItemReferenceRequestInput = {
  /** ID of the collection containing the referring item. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** Reference to remove. */
  dataItemReference?: InputMaybe<CloudDataDataDataItemReferenceInput>;
};

export type CloudDataDataRemoveDataItemReferenceResponse = {
  __typename?: 'CloudDataDataRemoveDataItemReferenceResponse';
  /** Removed reference. */
  dataItemReference?: Maybe<CloudDataDataDataItemReference>;
};

export type CloudDataDataRemoveDataItemRequestInput = {
  /** ID of the collection from which to remove the item. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the item to remove. */
  dataItemId?: InputMaybe<Scalars['String']['input']>;
};

export type CloudDataDataRemoveDataItemResponse = {
  __typename?: 'CloudDataDataRemoveDataItemResponse';
  /** Removed item. */
  dataItem?: Maybe<CloudDataDataDataItem>;
};

export type CloudDataDataReplaceDataItemReferencesRequestInput = {
  /** ID of the collection containing the referring item. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** List of new referenced item IDs to replace the existing ones. */
  newReferencedItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Field containing references in the referring item. */
  referringItemFieldName?: InputMaybe<Scalars['String']['input']>;
  /** ID of the referring item. */
  referringItemId?: InputMaybe<Scalars['String']['input']>;
};

export type CloudDataDataReplaceDataItemReferencesResponse = {
  __typename?: 'CloudDataDataReplaceDataItemReferencesResponse';
  /** Updated references. */
  dataItemReferences?: Maybe<Array<Maybe<CloudDataDataDataItemReference>>>;
};

export type CloudDataDataSaveDataItemRequestInput = {
  /** ID of the collection in which to insert or update the item. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** Data item to insert or update. */
  dataItem?: InputMaybe<CloudDataDataDataItemInput>;
};

export type CloudDataDataSaveDataItemResponse = {
  __typename?: 'CloudDataDataSaveDataItemResponse';
  /**
   * The action carried out for the item.
   *
   * + `INSERTED`: A new item was added to the collection.
   * + `UPDATED`: An existing item in the collection was updated.
   */
  action?: Maybe<CloudDataDataSaveDataItemResponseAction>;
  /** Inserted or updated data item. */
  dataItem?: Maybe<CloudDataDataDataItem>;
};

export enum CloudDataDataSaveDataItemResponseAction {
  Inserted = 'INSERTED',
  UnknownAction = 'UNKNOWN_ACTION',
  Updated = 'UPDATED'
}

export type CloudDataDataTruncateDataItemsRequestInput = {
  /** ID of the collection to truncate. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
};

export type CloudDataDataUpdateDataItemRequestInput = {
  /** ID of the collection containing the existing item. */
  dataCollectionId?: InputMaybe<Scalars['String']['input']>;
  /** Updated data item content. The existing data item's content is replaced entirely. */
  dataItem?: InputMaybe<CloudDataDataDataItemInput>;
};

export type CloudDataDataUpdateDataItemResponse = {
  __typename?: 'CloudDataDataUpdateDataItemResponse';
  /** Updated data item. */
  dataItem?: Maybe<CloudDataDataDataItem>;
};

export type CloudDataDataUpstreamCommonBulkActionMetadata = {
  __typename?: 'CloudDataDataUpstreamCommonBulkActionMetadata';
  /** Number of items that couldn't be processed. */
  totalFailures?: Maybe<Scalars['Int']['output']>;
  /** Number of items successfully processed. */
  totalSuccesses?: Maybe<Scalars['Int']['output']>;
};

export enum CloudDataDataUpstreamCommonBulkActionType {
  Delete = 'DELETE',
  Insert = 'INSERT',
  UnknownActionType = 'UNKNOWN_ACTION_TYPE',
  Update = 'UPDATE'
}

export type CloudDataDataUpstreamCommonCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   *
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type CloudDataDataUpstreamCommonCursors = {
  __typename?: 'CloudDataDataUpstreamCommonCursors';
  /** Cursor pointing to next page in the list of results. */
  next?: Maybe<Scalars['String']['output']>;
  /** Cursor pointing to previous page in the list of results. */
  prev?: Maybe<Scalars['String']['output']>;
};

export type CloudDataDataUpstreamCommonItemMetadata = {
  __typename?: 'CloudDataDataUpstreamCommonItemMetadata';
  /** Details about the error in case of failure. */
  error?: Maybe<ApiApplicationError>;
  /** Item ID. This field doesn't appear if there is no item ID, for example, when item creation fails. */
  id?: Maybe<Scalars['String']['output']>;
  /** Index of the item within the request array. Allows for correlation between request and response items. */
  originalIndex?: Maybe<Scalars['Int']['output']>;
  /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CloudDataDataUpstreamCommonPagingInput = {
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to skip in the current sort order. */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type CloudDataDataUpstreamCommonPagingMetadataV2 = {
  __typename?: 'CloudDataDataUpstreamCommonPagingMetadataV2';
  /** Number of items returned in the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
  cursors?: Maybe<CloudDataDataUpstreamCommonCursors>;
  /** Offset that was requested. */
  offset?: Maybe<Scalars['Int']['output']>;
  /** Whether the server failed to calculate the `total` field. */
  tooManyToCount?: Maybe<Scalars['Boolean']['output']>;
  /** Total number of items that match the query. Returned if offset paging is used, `returnTotalCount` is `true` in the request, and `tooManyToCount` is false. */
  total?: Maybe<Scalars['Int']['output']>;
};

export type CloudDataDataUpstreamCommonQueryV2Input = {
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<CloudDataDataUpstreamCommonCursorPagingInput>;
  /** Array of projected fields. A list of specific field names to return. */
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Filter object in the following format:
   *
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   *
   * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Paging options to limit and skip the number of items. */
  paging?: InputMaybe<CloudDataDataUpstreamCommonPagingInput>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CloudDataDataUpstreamCommonSortingInput>>>;
};

export enum CloudDataDataUpstreamCommonSortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type CloudDataDataUpstreamCommonSortingInput = {
  /** Name of the field to sort by. */
  fieldName?: InputMaybe<Scalars['String']['input']>;
  /** Sort order. */
  order?: InputMaybe<CloudDataDataUpstreamCommonSortOrder>;
};

export type CommonBulkActionMetadata = {
  __typename?: 'CommonBulkActionMetadata';
  /** Number of items that couldn't be processed. */
  totalFailures?: Maybe<Scalars['Int']['output']>;
  /** Number of items that were successfully processed. */
  totalSuccesses?: Maybe<Scalars['Int']['output']>;
  /** Number of failures without details because detailed failure threshold was exceeded. */
  undetailedFailures?: Maybe<Scalars['Int']['output']>;
};

export type CommonCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   *
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type CommonCursors = {
  __typename?: 'CommonCursors';
  /** Cursor pointing to next page in the list of results. */
  next?: Maybe<Scalars['String']['output']>;
  /** Cursor pointing to previous page in the list of results. */
  prev?: Maybe<Scalars['String']['output']>;
};

export type CommonDataDataextensionsExtendedFields = {
  __typename?: 'CommonDataDataextensionsExtendedFields';
  /**
   * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
   * The value of each key is structured according to the schema defined when the extended fields were configured.
   *
   * You can only access fields for which you have the appropriate permissions.
   */
  namespaces?: Maybe<Scalars['JSON']['output']>;
};

export type CommonDataDataextensionsExtendedFieldsInput = {
  /**
   * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
   * The value of each key is structured according to the schema defined when the extended fields were configured.
   *
   * You can only access fields for which you have the appropriate permissions.
   */
  namespaces?: InputMaybe<Scalars['JSON']['input']>;
};

export type CommonDataDataextensionsUpdateExtendedFieldsRequestInput = {
  /** ID of the entity to update. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Identifier for the app whose extended fields are being updated. */
  namespace?: InputMaybe<Scalars['String']['input']>;
  /** Data to update. Structured according to the [schema](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields#json-schema-for-extended-fields) defined when the extended fields were configured. */
  namespaceData?: InputMaybe<Scalars['JSON']['input']>;
};

export type CommonDomaineventsActionEventInput = {
  bodyAsJson?: InputMaybe<Scalars['String']['input']>;
};

export type CommonDomaineventsDomainEventInput = {
  actionEvent?: InputMaybe<CommonDomaineventsActionEventInput>;
  createdEvent?: InputMaybe<CommonDomaineventsEntityCreatedEventInput>;
  deletedEvent?: InputMaybe<CommonDomaineventsEntityDeletedEventInput>;
  /**
   * A sequence number defining the order of updates to the underlying entity.
   * For example, given that some entity was updated at 16:00 and than again at 16:01,
   * it is guaranteed that the sequence number of the second update is strictly higher than the first.
   * As the consumer, you can use this value to ensure that you handle messages in the correct order.
   * To do so, you will need to persist this number on your end, and compare the sequence number from the
   * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
   */
  entityEventSequence?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Assumes actions are also always typed to an entity_type
   * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
   */
  entityFqdn?: InputMaybe<Scalars['String']['input']>;
  /**
   * Assuming that all messages including Actions have id
   * Example: The id of the specific order, the id of a specific campaign
   */
  entityId?: InputMaybe<Scalars['String']['input']>;
  /** The time of the event. Useful if there was a delay in dispatching */
  eventTime?: InputMaybe<Scalars['String']['input']>;
  /** random GUID so clients can tell if event was already handled */
  id?: InputMaybe<Scalars['String']['input']>;
  /** If present, indicates the action that triggered the event. */
  originatedFrom?: InputMaybe<Scalars['String']['input']>;
  /**
   * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
   * This is although the created/updated/deleted notion is duplication of the oneof types
   * Example: created/updated/deleted/started/completed/email_opened
   */
  slug?: InputMaybe<Scalars['String']['input']>;
  /**
   * A field that should be set if this event was triggered by an anonymize request.
   * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
   * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
   */
  triggeredByAnonymizeRequest?: InputMaybe<Scalars['Boolean']['input']>;
  updatedEvent?: InputMaybe<CommonDomaineventsEntityUpdatedEventInput>;
};

export type CommonDomaineventsEntityCreatedEventInput = {
  entityAsJson?: InputMaybe<Scalars['String']['input']>;
  /** Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity */
  triggeredByUndelete?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommonDomaineventsEntityDeletedEventInput = {
  /** Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled */
  movedToTrash?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommonDomaineventsEntityUpdatedEventInput = {
  /**
   * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
   * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
   * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
   */
  currentEntityAsJson?: InputMaybe<Scalars['String']['input']>;
  /**
   * WIP - This property will hold both names and values of the updated fields of the entity.
   * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
   */
  entityUpdates?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
   * wont populate it / have any reference to it in the API.
   * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
   * the developer should send only the new (current) entity.
   * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
   * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
   */
  previousEntityAsJson?: InputMaybe<Scalars['String']['input']>;
};

export type CommonImage = {
  __typename?: 'CommonImage';
  /** Image alt text. */
  altText?: Maybe<Scalars['String']['output']>;
  /** Image filename. */
  filename?: Maybe<Scalars['String']['output']>;
  /** Original image height. */
  height?: Maybe<Scalars['Int']['output']>;
  /** WixMedia image ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Image URL. */
  url?: Maybe<Scalars['String']['output']>;
  /** Original image width. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type CommonImageInput = {
  /** Image alt text. */
  altText?: InputMaybe<Scalars['String']['input']>;
  /** Image filename. */
  filename?: InputMaybe<Scalars['String']['input']>;
  /** Original image height. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** WixMedia image ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Image URL. */
  url?: InputMaybe<Scalars['String']['input']>;
  /** Original image width. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CommonItemMetadata = {
  __typename?: 'CommonItemMetadata';
  /** Details about the error in case of failure. */
  error?: Maybe<ApiApplicationError>;
  /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
  id?: Maybe<Scalars['String']['output']>;
  /** Index of the item within the request array. Allows for correlation between request and response items. */
  originalIndex?: Maybe<Scalars['Int']['output']>;
  /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CommonMoney = {
  __typename?: 'CommonMoney';
  /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
  currency?: Maybe<Scalars['String']['output']>;
  /** Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative. */
  formattedValue?: Maybe<Scalars['String']['output']>;
  /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
  value?: Maybe<Scalars['String']['output']>;
};

export type CommonMoneyInput = {
  /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative. */
  formattedValue?: InputMaybe<Scalars['String']['input']>;
  /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CommonPageUrl = {
  __typename?: 'CommonPageUrl';
  /** The base URL. For premium sites, this will be the domain. For free sites, this would be site URL (e.g mysite.wixsite.com/mysite) */
  base?: Maybe<Scalars['String']['output']>;
  /** The path to that page - e.g /product-page/a-product */
  path?: Maybe<Scalars['String']['output']>;
};

export type CommonPageUrlInput = {
  /** The base URL. For premium sites, this will be the domain. For free sites, this would be site URL (e.g mysite.wixsite.com/mysite) */
  base?: InputMaybe<Scalars['String']['input']>;
  /** The path to that page - e.g /product-page/a-product */
  path?: InputMaybe<Scalars['String']['input']>;
};

export type CommonPageUrlV2 = {
  __typename?: 'CommonPageUrlV2';
  /** The path to that page - e.g /product-page/a-product */
  relativePath?: Maybe<Scalars['String']['output']>;
  /** The URL of that page. e.g https://mysite.com/product-page/a-product */
  url?: Maybe<Scalars['String']['output']>;
};

export type CommonPageUrlV2Input = {
  /** The path to that page - e.g /product-page/a-product */
  relativePath?: InputMaybe<Scalars['String']['input']>;
  /** The URL of that page. e.g https://mysite.com/product-page/a-product */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CommonPagingInput = {
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to skip in the current sort order. */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type CommonPagingMetadata = {
  __typename?: 'CommonPagingMetadata';
  /** Number of items returned in the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Offset that was requested. */
  offset?: Maybe<Scalars['Int']['output']>;
  /** Flag that indicates the server failed to calculate the `total` field. */
  tooManyToCount?: Maybe<Scalars['Boolean']['output']>;
  /** Total number of items that match the query. */
  total?: Maybe<Scalars['Int']['output']>;
};

export type CommonPagingMetadataV2 = {
  __typename?: 'CommonPagingMetadataV2';
  /** Number of items returned in the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
  cursors?: Maybe<CommonCursors>;
  /** Offset that was requested. */
  offset?: Maybe<Scalars['Int']['output']>;
  /** Flag that indicates the server failed to calculate the `total` field. */
  tooManyToCount?: Maybe<Scalars['Boolean']['output']>;
  /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
  total?: Maybe<Scalars['Int']['output']>;
};

export type CommonQueryInput = {
  /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
  fieldsets?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Paging options to limit and skip the number of items. */
  paging?: InputMaybe<CommonPagingInput>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type CommonQueryV2Input = {
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<CommonCursorPagingInput>;
  /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
  fieldsets?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Paging options to limit and skip the number of items. */
  paging?: InputMaybe<CommonPagingInput>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export enum CommonSortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type CommonSortingInput = {
  /** Name of the field to sort by. */
  fieldName?: InputMaybe<Scalars['String']['input']>;
  /** Sort order. */
  order?: InputMaybe<CommonSortOrder>;
};

export type CommonStreetAddress = {
  __typename?: 'CommonStreetAddress';
  /** Street name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Street number. */
  number?: Maybe<Scalars['String']['output']>;
};

export type CommonStreetAddressInput = {
  /** Street name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Street number. */
  number?: InputMaybe<Scalars['String']['input']>;
};

export type CommonVatId = {
  __typename?: 'CommonVatId';
  /** Customer's tax ID. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Tax type.
   *
   * Supported values:
   * + `CPF`: for individual tax payers
   * + `CNPJ`: for corporations
   */
  type?: Maybe<CommonVatType>;
};

export type CommonVatIdInput = {
  /** Customer's tax ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * Tax type.
   *
   * Supported values:
   * + `CPF`: for individual tax payers
   * + `CNPJ`: for corporations
   */
  type?: InputMaybe<CommonVatType>;
};

export enum CommonVatType {
  /** CNPJ - for corporations */
  Cnpj = 'CNPJ',
  /** CPF - for individual tax payers. */
  Cpf = 'CPF',
  Unspecified = 'UNSPECIFIED'
}

export type CommonVideo = {
  __typename?: 'CommonVideo';
  /** Original image height */
  height?: Maybe<Scalars['Int']['output']>;
  /** WixMedia ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Video poster */
  thumbnail?: Maybe<CommonImage>;
  /** URL of video */
  url?: Maybe<Scalars['String']['output']>;
  /** Original image width */
  width?: Maybe<Scalars['Int']['output']>;
};

export type CommonVideoInput = {
  /** Original image height */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** WixMedia ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Video poster */
  thumbnail?: InputMaybe<CommonImageInput>;
  /** URL of video */
  url?: InputMaybe<Scalars['String']['input']>;
  /** Original image width */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CommonVideoResolution = {
  __typename?: 'CommonVideoResolution';
  /** Video format for example, mp4, hls. */
  format?: Maybe<Scalars['String']['output']>;
  /** Video height. */
  height?: Maybe<Scalars['Int']['output']>;
  /** Video URL. */
  url?: Maybe<Scalars['String']['output']>;
  /** Video width. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type CommonVideoV2 = {
  __typename?: 'CommonVideoV2';
  /** Video filename. */
  filename?: Maybe<Scalars['String']['output']>;
  /** WixMedia ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Available resolutions for the video, starting with the optimal resolution. */
  resolutions?: Maybe<Array<Maybe<CommonVideoResolution>>>;
};

export type ContactsFieldsV4DeleteExtendedFieldRequestInput = {
  /** Extended field key. */
  key?: InputMaybe<Scalars['String']['input']>;
};

export type ContactsFieldsV4ExtendedField = {
  __typename?: 'ContactsFieldsV4ExtendedField';
  /** Date and time the field was created. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /**
   * Type of data the field holds.
   *
   * - `TEXT`: Accepts strings.
   * - `NUMBER`: Accepts floats.
   * - `DATE`: Accepts dates formatted as `YYYY-MM-DD`.
   * - `URL`: Accepts strings. Prepends `https://` if no protocol is included.
   */
  dataType?: Maybe<ContactsFieldsV4ExtendedFieldFieldDataType>;
  /** Field description, if the field is a system field. */
  description?: Maybe<Scalars['String']['output']>;
  /** Display name shown in the Contact List. */
  displayName?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates whether the extended field is a system field or custom field.
   *
   * - `SYSTEM`: The field is a system field managed by Wix. System fields cannot be modified by 3rd-party apps or site contributors.
   * - `USER_DEFINED`: The field is a custom field and can be modified by 3rd-party apps or site contributors.
   */
  fieldType?: Maybe<ContactsFieldsV4ExtendedFieldFieldType>;
  /**
   * Extended field key.
   *
   * When accessing contact data,
   * extended field data is available at `extendedFields[key]`.
   * For example, if the key is "custom.notes",
   * the value can be accessed at `extendedFields["custom.notes"]`.
   *
   * `key` is generated when the extended field is created
   * and cannot be modified, even if `displayName` changes.
   */
  key?: Maybe<Scalars['String']['output']>;
  /**
   * Extended field namespace.
   *
   * Extended fields created by site contributors or 3rd-party apps
   * are automatically assigned to the `custom` namespace.
   */
  namespace?: Maybe<Scalars['String']['output']>;
  /** Date and time the field was last updated. */
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export enum ContactsFieldsV4ExtendedFieldFieldDataType {
  Date = 'DATE',
  Number = 'NUMBER',
  Text = 'TEXT',
  UnknownDataType = 'UNKNOWN_DATA_TYPE',
  Url = 'URL'
}

export enum ContactsFieldsV4ExtendedFieldFieldType {
  System = 'SYSTEM',
  Unknown = 'UNKNOWN',
  UserDefined = 'USER_DEFINED'
}

export type ContactsFieldsV4ExtendedFieldInput = {
  /** Date and time the field was created. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * Type of data the field holds.
   *
   * - `TEXT`: Accepts strings.
   * - `NUMBER`: Accepts floats.
   * - `DATE`: Accepts dates formatted as `YYYY-MM-DD`.
   * - `URL`: Accepts strings. Prepends `https://` if no protocol is included.
   */
  dataType?: InputMaybe<ContactsFieldsV4ExtendedFieldFieldDataType>;
  /** Field description, if the field is a system field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Display name shown in the Contact List. */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Indicates whether the extended field is a system field or custom field.
   *
   * - `SYSTEM`: The field is a system field managed by Wix. System fields cannot be modified by 3rd-party apps or site contributors.
   * - `USER_DEFINED`: The field is a custom field and can be modified by 3rd-party apps or site contributors.
   */
  fieldType?: InputMaybe<ContactsFieldsV4ExtendedFieldFieldType>;
  /**
   * Extended field key.
   *
   * When accessing contact data,
   * extended field data is available at `extendedFields[key]`.
   * For example, if the key is "custom.notes",
   * the value can be accessed at `extendedFields["custom.notes"]`.
   *
   * `key` is generated when the extended field is created
   * and cannot be modified, even if `displayName` changes.
   */
  key?: InputMaybe<Scalars['String']['input']>;
  /**
   * Extended field namespace.
   *
   * Extended fields created by site contributors or 3rd-party apps
   * are automatically assigned to the `custom` namespace.
   */
  namespace?: InputMaybe<Scalars['String']['input']>;
  /** Date and time the field was last updated. */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
};

export type ContactsFieldsV4FindOrCreateExtendedFieldRequestInput = {
  /**
   * Type of data the field holds.
   * Ignored if an existing field is an exact match
   * for the specified display name.
   *
   * - `TEXT`: Accepts strings.
   * - `NUMBER`: Accepts floats.
   * - `DATE`: Accepts dates formatted as `YYYY-MM-DD`.
   * - `URL`: Accepts strings. Prepends `https://` if no protocol is included.
   */
  dataType?: InputMaybe<ContactsFieldsV4ExtendedFieldFieldDataType>;
  /**
   * Display name to find or create.
   *
   * If an existing custom field is an exact match
   * for the specified `displayName`,
   * the existing field is returned.
   * If not, a new field is created and returned.
   */
  displayName?: InputMaybe<Scalars['String']['input']>;
};

export type ContactsFieldsV4FindOrCreateExtendedFieldResponse = {
  __typename?: 'ContactsFieldsV4FindOrCreateExtendedFieldResponse';
  /** Extended field that was found or created. */
  field?: Maybe<ContactsFieldsV4ExtendedField>;
  /**
   * Indicates whether the extended field was just created or already existed.
   *
   * If the field was just created, returns `true`.
   * If the field already existed, returns `false`.
   */
  newField?: Maybe<Scalars['Boolean']['output']>;
};

export type ContactsFieldsV4ListExtendedFieldsRequestInput = {
  /** Filter for fields of the specified type. */
  fieldType?: InputMaybe<ContactsFieldsV4ExtendedFieldFieldType>;
  /**
   * Filter for fields in the specified namespace.
   * Fields created by site contributors or 3rd-party apps
   * are automatically assigned to the `custom` namespace.
   */
  namespace?: InputMaybe<Scalars['String']['input']>;
  /** Paging options. */
  paging?: InputMaybe<ContactsFieldsV4UpstreamCommonPagingInput>;
  /** Sorting options. */
  sort?: InputMaybe<ContactsFieldsV4UpstreamCommonSortingInput>;
  /** Filter for fields where `displayName` starts with the specified case-sensitive string. */
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type ContactsFieldsV4ListExtendedFieldsResponse = {
  __typename?: 'ContactsFieldsV4ListExtendedFieldsResponse';
  /** List of extended fields. */
  fields?: Maybe<Array<Maybe<ContactsFieldsV4ExtendedField>>>;
  /** Metadata for the page of results. */
  metadata?: Maybe<ContactsFieldsV4UpstreamCommonPagingMetadata>;
};

export type ContactsFieldsV4QueryExtendedFieldsRequestInput = {
  /** Query options. */
  query?: InputMaybe<ContactsFieldsV4UpstreamQueryQueryInput>;
};

export type ContactsFieldsV4QueryExtendedFieldsResponse = {
  __typename?: 'ContactsFieldsV4QueryExtendedFieldsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<ContactsFieldsV4ExtendedField>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type ContactsFieldsV4UpdateExtendedFieldRequestInput = {
  /** Field to update. */
  field?: InputMaybe<ContactsFieldsV4ExtendedFieldInput>;
};

export type ContactsFieldsV4UpdateExtendedFieldResponse = {
  __typename?: 'ContactsFieldsV4UpdateExtendedFieldResponse';
  /** Updated extended field. */
  field?: Maybe<ContactsFieldsV4ExtendedField>;
};

export type ContactsFieldsV4UpstreamCommonPagingInput = {
  /**
   * Number of items to return.
   *
   * Defaults to `100`.
   */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Number of items to skip in the current sort order.
   *
   * Defaults to `0`.
   */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactsFieldsV4UpstreamCommonPagingMetadata = {
  __typename?: 'ContactsFieldsV4UpstreamCommonPagingMetadata';
  /** Number of items returned. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Requested offset. */
  offset?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates if `total` calculation timed out before the response was sent.
   * Typically this happens if there is a large set of results.
   */
  tooManyToCount?: Maybe<Scalars['Boolean']['output']>;
  /** Number of items that matched the query. */
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ContactsFieldsV4UpstreamCommonSortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ContactsFieldsV4UpstreamCommonSortingInput = {
  /** Name of the field to sort by. */
  fieldName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Sort order. Use `ASC` for ascending order or `DESC` for descending order.
   *
   * Defaults to `ASC`.
   */
  order?: InputMaybe<ContactsFieldsV4UpstreamCommonSortOrder>;
};

export type ContactsFieldsV4UpstreamQueryQueryInput = {
  /**
   * ilter object.
   *
   * Possible filters: `$eq`, `$gt`, `$gte`, `$in`, `$lt`, `$lte`, `$ne`, `$startsWith`.
   *
   * For a detailed list of supported filters, see [sorting and filtering for extended fields](https://dev.wix.com/api/rest/contacts/extended-fields/sort-and-filter).
   *
   * Example: `{ "filter": {
   * "displayName": {
   * "$startsWith": "Referral"
   * }
   * }
   * }`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Pagination options. */
  paging?: InputMaybe<ContactsFieldsV4UpstreamCommonPagingInput>;
  /**
   * Sorting options. Currently supports sorting on one field only.
   *
   * Example: `{ "sort": [{"fieldName": "displayName", "order": "DESC"}] }`
   */
  sort?: InputMaybe<Array<InputMaybe<ContactsFieldsV4UpstreamCommonSortingInput>>>;
};

export type ContactsLabelsV4ContactLabel = {
  __typename?: 'ContactsLabelsV4ContactLabel';
  /** Date and time the label was created. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Label display name shown in the Dashboard. */
  displayName?: Maybe<Scalars['String']['output']>;
  /**
   * Label key.
   *
   * `key` is generated when the label is created
   * and cannot be modified, even if `displayName` changes.
   */
  key?: Maybe<Scalars['String']['output']>;
  /**
   * Label type.
   *
   * - `SYSTEM`: The label is a default system label for the Contact List.
   * - `USER_DEFINED`: The label was created by a site contributor or 3rd-party app.
   * - `WIX_APP_DEFINED`: The label was created by a Wix app.
   */
  labelType?: Maybe<ContactsLabelsV4ContactLabelLabelType>;
  /**
   * Label namespace.
   *
   * Labels created by site contributors or 3rd-party apps
   * are automatically assigned to the `custom` namespace.
   */
  namespace?: Maybe<Scalars['String']['output']>;
  /**
   * Display name for the namespace,
   * used to organize the list of labels in the site Dashboard.
   */
  namespaceDisplayName?: Maybe<Scalars['String']['output']>;
  /** Date and time the label was last updated. */
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type ContactsLabelsV4ContactLabelInput = {
  /** Date and time the label was created. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Label display name shown in the Dashboard. */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Label key.
   *
   * `key` is generated when the label is created
   * and cannot be modified, even if `displayName` changes.
   */
  key?: InputMaybe<Scalars['String']['input']>;
  /**
   * Label type.
   *
   * - `SYSTEM`: The label is a default system label for the Contact List.
   * - `USER_DEFINED`: The label was created by a site contributor or 3rd-party app.
   * - `WIX_APP_DEFINED`: The label was created by a Wix app.
   */
  labelType?: InputMaybe<ContactsLabelsV4ContactLabelLabelType>;
  /**
   * Label namespace.
   *
   * Labels created by site contributors or 3rd-party apps
   * are automatically assigned to the `custom` namespace.
   */
  namespace?: InputMaybe<Scalars['String']['input']>;
  /**
   * Display name for the namespace,
   * used to organize the list of labels in the site Dashboard.
   */
  namespaceDisplayName?: InputMaybe<Scalars['String']['input']>;
  /** Date and time the label was last updated. */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
};

export enum ContactsLabelsV4ContactLabelLabelType {
  System = 'SYSTEM',
  /** Need UNKNOWN to be able to fetch all labels */
  Unknown = 'UNKNOWN',
  UserDefined = 'USER_DEFINED',
  WixAppDefined = 'WIX_APP_DEFINED'
}

export type ContactsLabelsV4DeleteLabelRequestInput = {
  /** Label key to delete. */
  key?: InputMaybe<Scalars['String']['input']>;
};

export type ContactsLabelsV4FindOrCreateLabelRequestInput = {
  /**
   * Display name to retrieve or create.
   *
   * If an existing label is an exact match
   * for the specified display name,
   * the existing label is returned.
   * If not, a new label is created and returned.
   */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /** Language for localization. */
  language?: InputMaybe<Scalars['String']['input']>;
};

export type ContactsLabelsV4FindOrCreateLabelResponse = {
  __typename?: 'ContactsLabelsV4FindOrCreateLabelResponse';
  /** Label that was found or created. */
  label?: Maybe<ContactsLabelsV4ContactLabel>;
  /**
   * Indicates whether the label was just created or already existed.
   *
   * If the label was just created, returns `true`.
   * If it already existed, returns `false`.
   */
  newLabel?: Maybe<Scalars['Boolean']['output']>;
};

export type ContactsLabelsV4ListLabelsRequestInput = {
  /** Filter for labels of the specified type. */
  labelType?: InputMaybe<ContactsLabelsV4ContactLabelLabelType>;
  /** Language for localization. */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Filter for labels in the specified namespace. */
  namespace?: InputMaybe<Scalars['String']['input']>;
  /** Paging options. */
  paging?: InputMaybe<ContactsLabelsV4UpstreamCommonPagingInput>;
  /** Sorting options. */
  sort?: InputMaybe<ContactsLabelsV4UpstreamCommonSortingInput>;
  /** Filter for labels where `displayName` starts with the specified case-sensitive string. */
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type ContactsLabelsV4ListLabelsResponse = {
  __typename?: 'ContactsLabelsV4ListLabelsResponse';
  /** List of labels. */
  labels?: Maybe<Array<Maybe<ContactsLabelsV4ContactLabel>>>;
  /** Metadata for the page of results. */
  metadata?: Maybe<ContactsLabelsV4UpstreamCommonPagingMetadata>;
};

export type ContactsLabelsV4QueryLabelsRequestInput = {
  /** Language for localization. */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Query options. */
  query?: InputMaybe<ContactsLabelsV4UpstreamQueryQueryInput>;
};

export type ContactsLabelsV4QueryLabelsResponse = {
  __typename?: 'ContactsLabelsV4QueryLabelsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<ContactsLabelsV4ContactLabel>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type ContactsLabelsV4UpdateLabelRequestInput = {
  /** Label details to update. */
  label?: InputMaybe<ContactsLabelsV4ContactLabelInput>;
  /** Language for localization. */
  language?: InputMaybe<Scalars['String']['input']>;
};

export type ContactsLabelsV4UpdateLabelResponse = {
  __typename?: 'ContactsLabelsV4UpdateLabelResponse';
  /** Updated label. */
  label?: Maybe<ContactsLabelsV4ContactLabel>;
};

export type ContactsLabelsV4UpstreamCommonPagingInput = {
  /**
   * Number of items to return.
   *
   * Defaults to `1000`. <br>
   * Maximum: `2000`.
   */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to skip in the current sort order. */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactsLabelsV4UpstreamCommonPagingMetadata = {
  __typename?: 'ContactsLabelsV4UpstreamCommonPagingMetadata';
  /** Number of items returned. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Requested offset. */
  offset?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates if `total` calculation timed out before the response was sent.
   * Typically this happens if there is a large set of results.
   */
  tooManyToCount?: Maybe<Scalars['Boolean']['output']>;
  /** Number of items that matched the query. */
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ContactsLabelsV4UpstreamCommonSortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ContactsLabelsV4UpstreamCommonSortingInput = {
  /** Name of the field to sort by. */
  fieldName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Sort order. Use `ASC` for ascending order or `DESC` for descending order.
   *
   * Defaults to `ASC`.
   */
  order?: InputMaybe<ContactsLabelsV4UpstreamCommonSortOrder>;
};

export type ContactsLabelsV4UpstreamQueryQueryInput = {
  /**
   * ilter object.
   *
   * Possible filters: `$eq`, `$gt`, `$gte`, `$in`, `$lt`, `$lte`, `$ne`, `$startsWith`.
   *
   * For a detailed list of supported filters, see [sorting and filtering for labels](https://dev.wix.com/api/rest/contacts/labels/sort-and-filter).
   *
   * Example: `{ "filter": {
   * "displayName": {
   * "$startsWith": "Referral"
   * }
   * }
   * }`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Pagination options. */
  paging?: InputMaybe<ContactsLabelsV4UpstreamCommonPagingInput>;
  /**
   * Sorting options. For a list of fields that can be sorted, see [sorting and filtering for labels](https://dev.wix.com/api/rest/contacts/labels/sort-and-filter).
   *
   * Example: `{ "sort": [{"fieldName": "displayName", "order": "DESC"}] }`
   */
  sort?: InputMaybe<Array<InputMaybe<ContactsLabelsV4UpstreamCommonSortingInput>>>;
};

export type EcomCartV1AddToCartRequestInput = {
  /** Cart ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Catalog line items. */
  lineItems?: InputMaybe<Array<InputMaybe<EcomCartV1LineItemInput>>>;
};

export type EcomCartV1AddToCartResponse = {
  __typename?: 'EcomCartV1AddToCartResponse';
  /** Updated cart. */
  cart?: Maybe<EcomCartV1Cart>;
};

export type EcomCartV1AddToCurrentCartRequestInput = {
  /** Catalog line items. */
  lineItems?: InputMaybe<Array<InputMaybe<EcomCartV1LineItemInput>>>;
};

export type EcomCartV1BuyerInfo = {
  __typename?: 'EcomCartV1BuyerInfo';
  /** Contact ID. For more information, see [Contacts API](https://dev.wix.com/api/rest/contacts/contacts/introduction). */
  contactId?: Maybe<Scalars['String']['output']>;
  /** Buyer email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** Member ID - if the buyer is a site member. */
  member?: Maybe<MembersMember>;
  /** Member ID - if the buyer is a site member. */
  memberId?: Maybe<Scalars['String']['output']>;
  /** User ID - if the buyer (or cart owner) is a Wix user. */
  userId?: Maybe<Scalars['String']['output']>;
  /** Visitor ID - if the buyer is **not** a site member. */
  visitorId?: Maybe<Scalars['String']['output']>;
};

export type EcomCartV1BuyerInfoInput = {
  /** Contact ID. For more information, see [Contacts API](https://dev.wix.com/api/rest/contacts/contacts/introduction). */
  contactId?: InputMaybe<Scalars['String']['input']>;
  /** Buyer email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Member ID - if the buyer is a site member. */
  memberId?: InputMaybe<Scalars['String']['input']>;
  /** User ID - if the buyer (or cart owner) is a Wix user. */
  userId?: InputMaybe<Scalars['String']['input']>;
  /** Visitor ID - if the buyer is **not** a site member. */
  visitorId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCartV1Cart = {
  __typename?: 'EcomCartV1Cart';
  /** Cart discounts. */
  appliedDiscounts?: Maybe<Array<Maybe<EcomCartV1CartDiscount>>>;
  /** Buyer information. */
  buyerInfo?: Maybe<EcomCartV1BuyerInfo>;
  /**
   * Language for communication with the buyer. Defaults to the site language.
   * For a site that supports multiple languages, this is the language the buyer selected.
   */
  buyerLanguage?: Maybe<Scalars['String']['output']>;
  /** Note left by the buyer/customer. */
  buyerNote?: Maybe<Scalars['String']['output']>;
  /** ID of the checkout that originated from this cart. */
  checkoutId?: Maybe<Scalars['String']['output']>;
  /** Contact info. */
  contactInfo?: Maybe<EcommercePlatformCommonAddressWithContact>;
  /**
   * Currency code used for all the converted prices that are returned.
   * For a site that supports multiple currencies, this is the currency the buyer selected.
   */
  conversionCurrency?: Maybe<Scalars['String']['output']>;
  /** Date and time the cart was created. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Currency used for pricing. */
  currency?: Maybe<Scalars['String']['output']>;
  /** Cart ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Line items. */
  lineItems?: Maybe<Array<Maybe<EcomCartV1LineItem>>>;
  /**
   * `overrideCheckoutUrl` allows the flexibility to redirect customers to a customized checkout page.
   *
   * This field overrides the `checkoutUrl` in a cart or checkout. `checkoutUrl` is used in the [Abandoned Checkout API](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/abandoned-checkout/introduction)
   * to send customers back to their checkouts. By default, a `checkoutUrl` generates for a checkout and directs to a
   * standard Wix checkout page. When `overrideCheckoutUrl` has a value, it will replace and set the value of `checkoutUrl`.
   */
  overrideCheckoutUrl?: Maybe<Scalars['String']['output']>;
  /** Persistent ID that correlates between the various eCommerce elements: cart, checkout, and order. */
  purchaseFlowId?: Maybe<Scalars['String']['output']>;
  /** Selected shipping option. */
  selectedShippingOption?: Maybe<EcomTotalsCalculatorV1SelectedShippingOption>;
  /** Site language in which original values are displayed. */
  siteLanguage?: Maybe<Scalars['String']['output']>;
  /** Whether tax is included in line item prices. */
  taxIncludedInPrices?: Maybe<Scalars['Boolean']['output']>;
  /** Date and time the cart was updated. */
  updatedDate?: Maybe<Scalars['String']['output']>;
  /** Weight measurement unit - defaults to site's weight unit. */
  weightUnit?: Maybe<EcommercePlatformCommonWeightUnit>;
};

export type EcomCartV1CartDiscount = {
  __typename?: 'EcomCartV1CartDiscount';
  /** Coupon details. */
  coupon?: Maybe<EcomCartV1Coupon>;
  /** Merchant discount. */
  merchantDiscount?: Maybe<EcomCartV1MerchantDiscount>;
};

export type EcomCartV1CartDiscountInput = {
  /** Coupon details. */
  coupon?: InputMaybe<EcomCartV1CouponInput>;
  /** Merchant discount. */
  merchantDiscount?: InputMaybe<EcomCartV1MerchantDiscountInput>;
};

export type EcomCartV1CartInput = {
  /** Cart discounts. */
  appliedDiscounts?: InputMaybe<Array<InputMaybe<EcomCartV1CartDiscountInput>>>;
  /** Buyer information. */
  buyerInfo?: InputMaybe<EcomCartV1BuyerInfoInput>;
  /**
   * Language for communication with the buyer. Defaults to the site language.
   * For a site that supports multiple languages, this is the language the buyer selected.
   */
  buyerLanguage?: InputMaybe<Scalars['String']['input']>;
  /** Note left by the buyer/customer. */
  buyerNote?: InputMaybe<Scalars['String']['input']>;
  /** ID of the checkout that originated from this cart. */
  checkoutId?: InputMaybe<Scalars['String']['input']>;
  /** Contact info. */
  contactInfo?: InputMaybe<EcommercePlatformCommonAddressWithContactInput>;
  /**
   * Currency code used for all the converted prices that are returned.
   * For a site that supports multiple currencies, this is the currency the buyer selected.
   */
  conversionCurrency?: InputMaybe<Scalars['String']['input']>;
  /** Date and time the cart was created. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Currency used for pricing. */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Cart ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Line items. */
  lineItems?: InputMaybe<Array<InputMaybe<EcomCartV1LineItemInput>>>;
  /**
   * `overrideCheckoutUrl` allows the flexibility to redirect customers to a customized checkout page.
   *
   * This field overrides the `checkoutUrl` in a cart or checkout. `checkoutUrl` is used in the [Abandoned Checkout API](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/abandoned-checkout/introduction)
   * to send customers back to their checkouts. By default, a `checkoutUrl` generates for a checkout and directs to a
   * standard Wix checkout page. When `overrideCheckoutUrl` has a value, it will replace and set the value of `checkoutUrl`.
   */
  overrideCheckoutUrl?: InputMaybe<Scalars['String']['input']>;
  /** Persistent ID that correlates between the various eCommerce elements: cart, checkout, and order. */
  purchaseFlowId?: InputMaybe<Scalars['String']['input']>;
  /** Selected shipping option. */
  selectedShippingOption?: InputMaybe<EcomTotalsCalculatorV1SelectedShippingOptionInput>;
  /** Site language in which original values are displayed. */
  siteLanguage?: InputMaybe<Scalars['String']['input']>;
  /** Whether tax is included in line item prices. */
  taxIncludedInPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /** Date and time the cart was updated. */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
  /** Weight measurement unit - defaults to site's weight unit. */
  weightUnit?: InputMaybe<EcommercePlatformCommonWeightUnit>;
};

export type EcomCartV1Coupon = {
  __typename?: 'EcomCartV1Coupon';
  /** Coupon code. */
  code?: Maybe<Scalars['String']['output']>;
  /** Coupon ID. */
  id?: Maybe<Scalars['String']['output']>;
};

export type EcomCartV1CouponInput = {
  /** Coupon code. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Coupon ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCartV1CreateCartRequestInput = {
  /** Cart info. */
  cartInfo?: InputMaybe<EcomCartV1CartInput>;
  /** Code of an existing coupon to apply to cart. For more information, see the [Coupons API](https://dev.wix.com/api/rest/coupons/coupons/introduction). */
  couponCode?: InputMaybe<Scalars['String']['input']>;
  /** Catalog line items. */
  lineItems?: InputMaybe<Array<InputMaybe<EcomCartV1LineItemInput>>>;
  /** Merchant discounts to apply to specific line items. If no `lineItemIds` are passed, the discount will be applied to the whole cart. */
  merchantDiscounts?: InputMaybe<Array<InputMaybe<EcomTotalsCalculatorV1MerchantDiscountInputInput>>>;
};

export type EcomCartV1CreateCartResponse = {
  __typename?: 'EcomCartV1CreateCartResponse';
  /** Cart. */
  cart?: Maybe<EcomCartV1Cart>;
};

export type EcomCartV1CreateCheckoutFromCurrentCartRequestInput = {
  /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
  billingAddress?: InputMaybe<EcommercePlatformCommonAddressInput>;
  /** Sales channel type. */
  channelType?: InputMaybe<EcommercePlatformCommonChannelType>;
  /** Mandatory when setting billing or shipping address and user is not logged in. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Selected shipping option. */
  selectedShippingOption?: InputMaybe<EcomTotalsCalculatorV1SelectedShippingOptionInput>;
  /** Shipping address. Used for calculating tax and shipping (when applicable). */
  shippingAddress?: InputMaybe<EcommercePlatformCommonAddressInput>;
};

export type EcomCartV1CreateCheckoutRequestInput = {
  /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
  billingAddress?: InputMaybe<EcommercePlatformCommonAddressInput>;
  /** Sales channel type. */
  channelType?: InputMaybe<EcommercePlatformCommonChannelType>;
  /** Required when setting a billing or shipping address if the site visitor isn't logged in. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Cart ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Selected shipping option. */
  selectedShippingOption?: InputMaybe<EcomTotalsCalculatorV1SelectedShippingOptionInput>;
  /** Shipping address. Used for calculating tax and shipping (when applicable). */
  shippingAddress?: InputMaybe<EcommercePlatformCommonAddressInput>;
};

export type EcomCartV1CreateCheckoutResponse = {
  __typename?: 'EcomCartV1CreateCheckoutResponse';
  /** The newly created checkout's ID. */
  checkoutId?: Maybe<Scalars['String']['output']>;
};

export type EcomCartV1DeleteCartRequestInput = {
  /** ID of the cart to delete. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCartV1EstimateCurrentCartTotalsRequestInput = {
  /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
  billingAddress?: InputMaybe<EcommercePlatformCommonAddressInput>;
  /** The selected membership payment options and which line items they apply to. */
  selectedMemberships?: InputMaybe<EcomMembershipsSpiV1HostSelectedMembershipsInput>;
  /** Selected shipping option. */
  selectedShippingOption?: InputMaybe<EcomTotalsCalculatorV1SelectedShippingOptionInput>;
  /** Shipping address. Used for calculating tax and shipping (when applicable). */
  shippingAddress?: InputMaybe<EcommercePlatformCommonAddressInput>;
};

export type EcomCartV1EstimateTotalsRequestInput = {
  /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
  billingAddress?: InputMaybe<EcommercePlatformCommonAddressInput>;
  /** Cart ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The selected membership payment options and which line items they apply to. */
  selectedMemberships?: InputMaybe<EcomMembershipsSpiV1HostSelectedMembershipsInput>;
  /** Selected shipping option. */
  selectedShippingOption?: InputMaybe<EcomTotalsCalculatorV1SelectedShippingOptionInput>;
  /** Shipping address. Used for calculating tax and shipping (when applicable). */
  shippingAddress?: InputMaybe<EcommercePlatformCommonAddressInput>;
};

export type EcomCartV1EstimateTotalsResponse = {
  __typename?: 'EcomCartV1EstimateTotalsResponse';
  /** Additional fees */
  additionalFees?: Maybe<Array<Maybe<EcomTotalsCalculatorV1AdditionalFee>>>;
  /** Applied discounts. */
  appliedDiscounts?: Maybe<Array<Maybe<EcomTotalsCalculatorV1AppliedDiscount>>>;
  /** Calculated line items. */
  calculatedLineItems?: Maybe<Array<Maybe<EcomTotalsCalculatorV1CalculatedLineItem>>>;
  /** Calculation errors. */
  calculationErrors?: Maybe<EcomTotalsCalculatorV1CalculationErrors>;
  /** Cart. */
  cart?: Maybe<EcomCartV1Cart>;
  /** Currency used for pricing in this store. */
  currency?: Maybe<Scalars['String']['output']>;
  /** Applied gift card. */
  giftCard?: Maybe<EcomTotalsCalculatorV1GiftCard>;
  /** Information about valid and invalid memberships, and which ones are selected for usage. */
  membershipOptions?: Maybe<EcomTotalsCalculatorV1MembershipOptions>;
  /** Remaining amount for the order to be fully paid. */
  payLater?: Maybe<EcomTotalsCalculatorV1PriceSummary>;
  /** Minimal amount to pay in order to place the order. */
  payNow?: Maybe<EcomTotalsCalculatorV1PriceSummary>;
  /** Price summary. */
  priceSummary?: Maybe<EcomTotalsCalculatorV1PriceSummary>;
  /** Shipping information. */
  shippingInfo?: Maybe<EcomTotalsCalculatorV1ShippingInformation>;
  /** Tax summary. */
  taxSummary?: Maybe<EcomTotalsCalculatorV1TaxSummary>;
  /** List of validation violations raised by the [Validations SPI](https://dev.wix.com/api/rest/wix-ecommerce/validations-integration-spi/introduction). */
  violations?: Maybe<Array<Maybe<EcommerceValidationsSpiV1Violation>>>;
  /** Weight measurement unit - defaults to site's weight unit. */
  weightUnit?: Maybe<EcommercePlatformCommonWeightUnit>;
};

export type EcomCartV1GetCurrentCartResponse = {
  __typename?: 'EcomCartV1GetCurrentCartResponse';
  /** Current session's active cart. */
  cart?: Maybe<EcomCartV1Cart>;
};

export type EcomCartV1LineItem = {
  __typename?: 'EcomCartV1LineItem';
  /** Item availability details. */
  availability?: Maybe<EcomCheckoutV1ItemAvailabilityInfo>;
  /** Catalog and item reference. Holds IDs for the item and the catalog it came from, as well as further optional info. */
  catalogReference?: Maybe<EcommerceCatalogSpiV1CatalogReference>;
  /** Partial payment to be paid upfront during the checkout. Eligible for catalog items with `lineItem.paymentOption` type `DEPOSIT_ONLINE` only. */
  depositAmount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Line item description lines. Used for displaying the cart, checkout and order. */
  descriptionLines?: Maybe<Array<Maybe<EcommerceCatalogSpiV1DescriptionLine>>>;
  /** Item price **before** catalog-defined discount. Defaults to `price` when not provided. */
  fullPrice?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Line item ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Line item image details. */
  image?: Maybe<CommonImage>;
  /** Item type. Either a preset type or custom. */
  itemType?: Maybe<EcommerceCatalogSpiV1ItemType>;
  /**
   * Type of selected payment option for current item. Defaults to `FULL_PAYMENT_ONLINE`.
   * + `FULL_PAYMENT_ONLINE` - The entire payment for this item happens as part of the checkout.
   * + `FULL_PAYMENT_OFFLINE` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
   * + `MEMBERSHIP` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is 0.
   * + `DEPOSIT_ONLINE` - Partial payment to be paid upfront during the checkout. Initial amount to be paid for each line item is defined by `lineItem.deposit`.
   * + `MEMBERSHIP_OFFLINE` - Payment for this item can only be performed by using a membership and must be manually redeemed in the dashboard by the site owner. When this option is used, `lineItem.price.amount` is 0.
   */
  paymentOption?: Maybe<EcommerceCatalogSpiV1PaymentOptionType>;
  /** Physical properties of the item. When relevant, contains information such as SKU, item weight, and shippability. */
  physicalProperties?: Maybe<EcommerceCatalogSpiV1PhysicalProperties>;
  /** Item price **after** catalog-defined discount and line item discounts. */
  price?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Item price **before** line item discounts and **after** catalog-defined discount. Defaults to `price` when not provided. */
  priceBeforeDiscounts?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Additional description for the price. For example, when price is 0 but additional details about the actual price are needed - "Starts at $67". */
  priceDescription?: Maybe<EcommerceCatalogSpiV1PriceDescription>;
  /**
   * Item name.
   * + Stores - `product.name`
   * + Bookings - `service.info.name`
   * + Events - `ticket.name`
   */
  productName?: Maybe<EcommerceCatalogSpiV1ProductName>;
  /** Item quantity. */
  quantity?: Maybe<Scalars['Int']['output']>;
  /**
   * In cases where `catalogReference.catalogItemId` is NOT the actual catalog item ID, this field will return the true item's ID.
   * + For example, for Wix Bookings, `catalogReference.catalogItemId` is the booking ID. Therefore this value is set to the service ID.
   * + in most cases, this field is the same as `catalogReference.catalogItemId`.
   * + Used in membership validation.
   */
  rootCatalogItemId?: Maybe<Scalars['String']['output']>;
  /** Selected membership to be used as payment for this item. Must be used with `lineItem.paymentOption` set to `MEMBERSHIP` or `MEMBERSHIP_OFFLINE`. This field can be empty when `lineItem.paymentOption` is set to `MEMBERSHIP_OFFLINE`. */
  selectedMembership?: Maybe<EcomCartV1SelectedMembership>;
  /** Service properties. When relevant, this contains information such as date and number of participants. */
  serviceProperties?: Maybe<EcommerceCatalogSpiV1ServiceProperties>;
  /** URL to the item's page on the site. */
  url?: Maybe<CommonPageUrlV2>;
};

export type EcomCartV1LineItemInput = {
  /** Item availability details. */
  availability?: InputMaybe<EcomCheckoutV1ItemAvailabilityInfoInput>;
  /** Catalog and item reference. Holds IDs for the item and the catalog it came from, as well as further optional info. */
  catalogReference?: InputMaybe<EcommerceCatalogSpiV1CatalogReferenceInput>;
  /** Partial payment to be paid upfront during the checkout. Eligible for catalog items with `lineItem.paymentOption` type `DEPOSIT_ONLINE` only. */
  depositAmount?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Line item description lines. Used for displaying the cart, checkout and order. */
  descriptionLines?: InputMaybe<Array<InputMaybe<EcommerceCatalogSpiV1DescriptionLineInput>>>;
  /** Item price **before** catalog-defined discount. Defaults to `price` when not provided. */
  fullPrice?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Line item ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Line item image details. */
  image?: InputMaybe<CommonImageInput>;
  /** Item type. Either a preset type or custom. */
  itemType?: InputMaybe<EcommerceCatalogSpiV1ItemTypeInput>;
  /**
   * Type of selected payment option for current item. Defaults to `FULL_PAYMENT_ONLINE`.
   * + `FULL_PAYMENT_ONLINE` - The entire payment for this item happens as part of the checkout.
   * + `FULL_PAYMENT_OFFLINE` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
   * + `MEMBERSHIP` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is 0.
   * + `DEPOSIT_ONLINE` - Partial payment to be paid upfront during the checkout. Initial amount to be paid for each line item is defined by `lineItem.deposit`.
   * + `MEMBERSHIP_OFFLINE` - Payment for this item can only be performed by using a membership and must be manually redeemed in the dashboard by the site owner. When this option is used, `lineItem.price.amount` is 0.
   */
  paymentOption?: InputMaybe<EcommerceCatalogSpiV1PaymentOptionType>;
  /** Physical properties of the item. When relevant, contains information such as SKU, item weight, and shippability. */
  physicalProperties?: InputMaybe<EcommerceCatalogSpiV1PhysicalPropertiesInput>;
  /** Item price **after** catalog-defined discount and line item discounts. */
  price?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Item price **before** line item discounts and **after** catalog-defined discount. Defaults to `price` when not provided. */
  priceBeforeDiscounts?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Additional description for the price. For example, when price is 0 but additional details about the actual price are needed - "Starts at $67". */
  priceDescription?: InputMaybe<EcommerceCatalogSpiV1PriceDescriptionInput>;
  /**
   * Item name.
   * + Stores - `product.name`
   * + Bookings - `service.info.name`
   * + Events - `ticket.name`
   */
  productName?: InputMaybe<EcommerceCatalogSpiV1ProductNameInput>;
  /** Item quantity. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /**
   * In cases where `catalogReference.catalogItemId` is NOT the actual catalog item ID, this field will return the true item's ID.
   * + For example, for Wix Bookings, `catalogReference.catalogItemId` is the booking ID. Therefore this value is set to the service ID.
   * + in most cases, this field is the same as `catalogReference.catalogItemId`.
   * + Used in membership validation.
   */
  rootCatalogItemId?: InputMaybe<Scalars['String']['input']>;
  /** Selected membership to be used as payment for this item. Must be used with `lineItem.paymentOption` set to `MEMBERSHIP` or `MEMBERSHIP_OFFLINE`. This field can be empty when `lineItem.paymentOption` is set to `MEMBERSHIP_OFFLINE`. */
  selectedMembership?: InputMaybe<EcomCartV1SelectedMembershipInput>;
  /** Service properties. When relevant, this contains information such as date and number of participants. */
  serviceProperties?: InputMaybe<EcommerceCatalogSpiV1ServicePropertiesInput>;
  /** URL to the item's page on the site. */
  url?: InputMaybe<CommonPageUrlV2Input>;
};

export type EcomCartV1LineItemQuantityUpdateInput = {
  /** Line item ID. Required. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** New quantity. Number must be 1 or higher. Required. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type EcomCartV1MerchantDiscount = {
  __typename?: 'EcomCartV1MerchantDiscount';
  /** Discount value. */
  amount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
};

export type EcomCartV1MerchantDiscountInput = {
  /** Discount value. */
  amount?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
};

export type EcomCartV1RemoveCouponRequestInput = {
  /** Cart ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCartV1RemoveCouponResponse = {
  __typename?: 'EcomCartV1RemoveCouponResponse';
  /** Updated cart. */
  cart?: Maybe<EcomCartV1Cart>;
};

export type EcomCartV1RemoveLineItemsFromCurrentCartRequestInput = {
  /** Line item IDs to remove from cart. */
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EcomCartV1RemoveLineItemsRequestInput = {
  /** Cart ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Line item IDs to remove from cart. */
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EcomCartV1RemoveLineItemsResponse = {
  __typename?: 'EcomCartV1RemoveLineItemsResponse';
  /** Updated cart. */
  cart?: Maybe<EcomCartV1Cart>;
};

export type EcomCartV1SelectedMembership = {
  __typename?: 'EcomCartV1SelectedMembership';
  /** ID of the app providing this payment option. */
  appId?: Maybe<Scalars['String']['output']>;
  /** Membership ID. */
  id?: Maybe<Scalars['String']['output']>;
};

export type EcomCartV1SelectedMembershipInput = {
  /** ID of the app providing this payment option. */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** Membership ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCartV1UpdateCartRequestInput = {
  /** Cart info. */
  cartInfo?: InputMaybe<EcomCartV1CartInput>;
  /** Coupon code. For more information, see [Coupons API](https://dev.wix.com/api/rest/wix-coupons/coupons/introduction). */
  couponCode?: InputMaybe<Scalars['String']['input']>;
  /** Catalog line items. */
  lineItems?: InputMaybe<Array<InputMaybe<EcomCartV1LineItemInput>>>;
  /** Merchant discounts to apply to specific line items. If no `lineItemIds` are passed, the discount will be applied to the whole cart. */
  merchantDiscounts?: InputMaybe<Array<InputMaybe<EcomTotalsCalculatorV1MerchantDiscountInputInput>>>;
};

export type EcomCartV1UpdateCartResponse = {
  __typename?: 'EcomCartV1UpdateCartResponse';
  /** Updated Cart. */
  cart?: Maybe<EcomCartV1Cart>;
};

export type EcomCartV1UpdateCurrentCartLineItemQuantityRequestInput = {
  /** Line item IDs and their new quantity. */
  lineItems?: InputMaybe<Array<InputMaybe<EcomCartV1LineItemQuantityUpdateInput>>>;
};

export type EcomCartV1UpdateLineItemsQuantityRequestInput = {
  /** Cart ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Line item IDs and their new quantity. */
  lineItems?: InputMaybe<Array<InputMaybe<EcomCartV1LineItemQuantityUpdateInput>>>;
};

export type EcomCartV1UpdateLineItemsQuantityResponse = {
  __typename?: 'EcomCartV1UpdateLineItemsQuantityResponse';
  /** Updated cart. */
  cart?: Maybe<EcomCartV1Cart>;
};

export type EcomCheckoutV1AddToCheckoutRequestInput = {
  /** Checkout ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Catalog line items. */
  lineItems?: InputMaybe<Array<InputMaybe<EcomCheckoutV1LineItemInput>>>;
};

export type EcomCheckoutV1AddToCheckoutResponse = {
  __typename?: 'EcomCheckoutV1AddToCheckoutResponse';
  /** Updated checkout. */
  checkout?: Maybe<EcomCheckoutV1Checkout>;
};

export type EcomCheckoutV1AddressWithContact = {
  __typename?: 'EcomCheckoutV1AddressWithContact';
  /** Address. */
  address?: Maybe<EcommercePlatformCommonAddress>;
  /** Contact details. */
  contactDetails?: Maybe<EcommercePlatformCommonFullAddressContactDetails>;
};

export type EcomCheckoutV1AddressWithContactInput = {
  /** Address. */
  address?: InputMaybe<EcommercePlatformCommonAddressInput>;
  /** Contact details. */
  contactDetails?: InputMaybe<EcommercePlatformCommonFullAddressContactDetailsInput>;
};

export type EcomCheckoutV1BuyerInfo = {
  __typename?: 'EcomCheckoutV1BuyerInfo';
  /** Contact ID. Auto-created if one does not yet exist. For more information, see [Contacts API](https://dev.wix.com/api/rest/contacts/contacts/introduction). */
  contactId?: Maybe<Scalars['String']['output']>;
  /** Buyer email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** Member ID (if site visitor is a site member). */
  member?: Maybe<MembersMember>;
  /** Member ID (if site visitor is a site member). */
  memberId?: Maybe<Scalars['String']['output']>;
  /** Visitor ID (if site visitor is **not** a member). */
  visitorId?: Maybe<Scalars['String']['output']>;
};

export type EcomCheckoutV1BuyerInfoInput = {
  /** Contact ID. Auto-created if one does not yet exist. For more information, see [Contacts API](https://dev.wix.com/api/rest/contacts/contacts/introduction). */
  contactId?: InputMaybe<Scalars['String']['input']>;
  /** Buyer email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Member ID (if site visitor is a site member). */
  memberId?: InputMaybe<Scalars['String']['input']>;
  /** Visitor ID (if site visitor is **not** a member). */
  visitorId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCheckoutV1Checkout = {
  __typename?: 'EcomCheckoutV1Checkout';
  /** Additional Fees. */
  additionalFees?: Maybe<Array<Maybe<EcomTotalsCalculatorV1AdditionalFee>>>;
  /** Applied discounts. */
  appliedDiscounts?: Maybe<Array<Maybe<EcomTotalsCalculatorV1AppliedDiscount>>>;
  /** Billing information. */
  billingInfo?: Maybe<EcomCheckoutV1AddressWithContact>;
  /** Buyer information. */
  buyerInfo?: Maybe<EcomCheckoutV1BuyerInfo>;
  /**
   * Language for communication with the buyer. Defaults to the site language.
   * For a site that supports multiple languages, this is the language the buyer selected.
   */
  buyerLanguage?: Maybe<Scalars['String']['output']>;
  /** [Buyer note](https://support.wix.com/en/article/wix-stores-viewing-buyer-notes) left by the customer. */
  buyerNote?: Maybe<Scalars['String']['output']>;
  /** Errors when calculating totals. */
  calculationErrors?: Maybe<EcomTotalsCalculatorV1CalculationErrors>;
  /** Cart ID that this checkout was created from. Empty if this checkout wasn't created from a cart. */
  cartId?: Maybe<Scalars['String']['output']>;
  /**
   * Sales channel that submitted the order.
   * + `"UNSPECIFIED"`: Unspecified sales channel. This value is not supported.
   * + `"WEB"`: A web client.
   * + `"POS"`: [Point of sale solutions](https://support.wix.com/en/wix-mobile-pos-2196395)
   * + `"EBAY"`: [eBay](https://support.wix.com/en/article/wix-stores-connecting-and-setting-up-an-ebay-shop)
   * + `"AMAZON"`: [Amazon](https://support.wix.com/en/article/wix-stores-connecting-and-setting-up-an-amazon-shop)
   * + `"WISH"`: [Wish](https://support.wix.com/en/article/wix-stores-connecting-and-setting-up-a-wish-shop)
   * + `"WIX_INVOICES"`: Wix Invoices app in [your dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Finvoices/settings/general-settings)
   * + `"WIX_APP_STORE"`: [Wix Owner app](https://support.wix.com/article/wix-owner-app-an-overview)
   * + `"BACKOFFICE_MERCHANT"`: Wix merchant backoffice
   * + `"OTHER_PLATFORM"`: Other sales platform.
   */
  channelType?: Maybe<EcommercePlatformCommonChannelType>;
  /**
   * Whether an order was successfully created from this checkout.
   * For an order to be successful, it must be successfully paid for (unless the total is 0).
   */
  completed?: Maybe<Scalars['Boolean']['output']>;
  /** All converted prices are displayed in this currency in three-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
  conversionCurrency?: Maybe<Scalars['String']['output']>;
  /** ID of the checkout's initiator. */
  createdBy?: Maybe<EcomCheckoutV1CreatedBy>;
  /** Date and time the checkout was created. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** The currency used when submitting the order. */
  currency?: Maybe<Scalars['String']['output']>;
  /** Custom fields. */
  customFields?: Maybe<Array<Maybe<EcomOrdersV1CustomField>>>;
  /**
   * Additional settings for customization of the checkout process.
   *
   * Custom settings can only be defined when [creating a checkout](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/checkout/create-checkout).
   */
  customSettings?: Maybe<EcomCheckoutV1CustomSettings>;
  externalEnrichedLineItems?: Maybe<EcomLineItemsEnricherSpiHostV1EnrichLineItemsForCheckoutResponse>;
  /**
   * Applied gift card details.
   *
   * >**Note:** Gift cards are supported through the Wix UI, though the SPI is not currently available. Learn more about [Wix Gift Cards](https://support.wix.com/en/article/wix-stores-setting-up-wix-gift-cards).
   */
  giftCard?: Maybe<EcomTotalsCalculatorV1GiftCard>;
  /** Checkout ID. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Line items.
   *
   * Max: 300 items
   */
  lineItems?: Maybe<Array<Maybe<EcomCheckoutV1LineItem>>>;
  /** Memberships to apply when creating the order. */
  membershipOptions?: Maybe<EcomCheckoutV1MembershipOptions>;
  /** Remaining amount for the order to be fully paid. */
  payLater?: Maybe<EcomTotalsCalculatorV1PriceSummary>;
  /** Minimal amount to pay in order to place the order. */
  payNow?: Maybe<EcomTotalsCalculatorV1PriceSummary>;
  /** Calculated price summary for the checkout. */
  priceSummary?: Maybe<EcomTotalsCalculatorV1PriceSummary>;
  /** Persistent ID that correlates between the various eCommerce elements: cart, checkout, and order. */
  purchaseFlowId?: Maybe<Scalars['String']['output']>;
  /** Shipping information. */
  shippingInfo?: Maybe<EcomCheckoutV1ShippingInfo>;
  /** Site language in which original values are shown. */
  siteLanguage?: Maybe<Scalars['String']['output']>;
  /** Whether tax is included in line item prices. */
  taxIncludedInPrice?: Maybe<Scalars['Boolean']['output']>;
  /** Tax summary. */
  taxSummary?: Maybe<EcomTotalsCalculatorV1TaxSummary>;
  /** Date and time the checkout was updated. */
  updatedDate?: Maybe<Scalars['String']['output']>;
  /** List of validation violations raised by the [Validations SPI](https://dev.wix.com/api/rest/wix-ecommerce/validations-integration-spi/introduction). */
  violations?: Maybe<Array<Maybe<EcommerceValidationsSpiV1Violation>>>;
  /** Weight measurement unit - defaults to site's weight unit. */
  weightUnit?: Maybe<EcommercePlatformCommonWeightUnit>;
};

export type EcomCheckoutV1CheckoutInput = {
  /** Additional Fees. */
  additionalFees?: InputMaybe<Array<InputMaybe<EcomTotalsCalculatorV1AdditionalFeeInput>>>;
  /** Applied discounts. */
  appliedDiscounts?: InputMaybe<Array<InputMaybe<EcomTotalsCalculatorV1AppliedDiscountInput>>>;
  /** Billing information. */
  billingInfo?: InputMaybe<EcomCheckoutV1AddressWithContactInput>;
  /** Buyer information. */
  buyerInfo?: InputMaybe<EcomCheckoutV1BuyerInfoInput>;
  /**
   * Language for communication with the buyer. Defaults to the site language.
   * For a site that supports multiple languages, this is the language the buyer selected.
   */
  buyerLanguage?: InputMaybe<Scalars['String']['input']>;
  /** [Buyer note](https://support.wix.com/en/article/wix-stores-viewing-buyer-notes) left by the customer. */
  buyerNote?: InputMaybe<Scalars['String']['input']>;
  /** Errors when calculating totals. */
  calculationErrors?: InputMaybe<EcomTotalsCalculatorV1CalculationErrorsInput>;
  /** Cart ID that this checkout was created from. Empty if this checkout wasn't created from a cart. */
  cartId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Sales channel that submitted the order.
   * + `"UNSPECIFIED"`: Unspecified sales channel. This value is not supported.
   * + `"WEB"`: A web client.
   * + `"POS"`: [Point of sale solutions](https://support.wix.com/en/wix-mobile-pos-2196395)
   * + `"EBAY"`: [eBay](https://support.wix.com/en/article/wix-stores-connecting-and-setting-up-an-ebay-shop)
   * + `"AMAZON"`: [Amazon](https://support.wix.com/en/article/wix-stores-connecting-and-setting-up-an-amazon-shop)
   * + `"WISH"`: [Wish](https://support.wix.com/en/article/wix-stores-connecting-and-setting-up-a-wish-shop)
   * + `"WIX_INVOICES"`: Wix Invoices app in [your dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Finvoices/settings/general-settings)
   * + `"WIX_APP_STORE"`: [Wix Owner app](https://support.wix.com/article/wix-owner-app-an-overview)
   * + `"BACKOFFICE_MERCHANT"`: Wix merchant backoffice
   * + `"OTHER_PLATFORM"`: Other sales platform.
   */
  channelType?: InputMaybe<EcommercePlatformCommonChannelType>;
  /**
   * Whether an order was successfully created from this checkout.
   * For an order to be successful, it must be successfully paid for (unless the total is 0).
   */
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  /** All converted prices are displayed in this currency in three-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
  conversionCurrency?: InputMaybe<Scalars['String']['input']>;
  /** ID of the checkout's initiator. */
  createdBy?: InputMaybe<EcomCheckoutV1CreatedByInput>;
  /** Date and time the checkout was created. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** The currency used when submitting the order. */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Custom fields. */
  customFields?: InputMaybe<Array<InputMaybe<EcomOrdersV1CustomFieldInput>>>;
  /**
   * Additional settings for customization of the checkout process.
   *
   * Custom settings can only be defined when [creating a checkout](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/checkout/create-checkout).
   */
  customSettings?: InputMaybe<EcomCheckoutV1CustomSettingsInput>;
  /**
   * Applied gift card details.
   *
   * >**Note:** Gift cards are supported through the Wix UI, though the SPI is not currently available. Learn more about [Wix Gift Cards](https://support.wix.com/en/article/wix-stores-setting-up-wix-gift-cards).
   */
  giftCard?: InputMaybe<EcomTotalsCalculatorV1GiftCardInput>;
  /** Checkout ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * Line items.
   *
   * Max: 300 items
   */
  lineItems?: InputMaybe<Array<InputMaybe<EcomCheckoutV1LineItemInput>>>;
  /** Memberships to apply when creating the order. */
  membershipOptions?: InputMaybe<EcomCheckoutV1MembershipOptionsInput>;
  /** Remaining amount for the order to be fully paid. */
  payLater?: InputMaybe<EcomTotalsCalculatorV1PriceSummaryInput>;
  /** Minimal amount to pay in order to place the order. */
  payNow?: InputMaybe<EcomTotalsCalculatorV1PriceSummaryInput>;
  /** Calculated price summary for the checkout. */
  priceSummary?: InputMaybe<EcomTotalsCalculatorV1PriceSummaryInput>;
  /** Persistent ID that correlates between the various eCommerce elements: cart, checkout, and order. */
  purchaseFlowId?: InputMaybe<Scalars['String']['input']>;
  /** Shipping information. */
  shippingInfo?: InputMaybe<EcomCheckoutV1ShippingInfoInput>;
  /** Site language in which original values are shown. */
  siteLanguage?: InputMaybe<Scalars['String']['input']>;
  /** Whether tax is included in line item prices. */
  taxIncludedInPrice?: InputMaybe<Scalars['Boolean']['input']>;
  /** Tax summary. */
  taxSummary?: InputMaybe<EcomTotalsCalculatorV1TaxSummaryInput>;
  /** Date and time the checkout was updated. */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
  /** List of validation violations raised by the [Validations SPI](https://dev.wix.com/api/rest/wix-ecommerce/validations-integration-spi/introduction). */
  violations?: InputMaybe<Array<InputMaybe<EcommerceValidationsSpiV1ViolationInput>>>;
  /** Weight measurement unit - defaults to site's weight unit. */
  weightUnit?: InputMaybe<EcommercePlatformCommonWeightUnit>;
};

export type EcomCheckoutV1CreateCheckoutRequestInput = {
  /**
   * Sales channel that submitted the order.
   * + `"UNSPECIFIED"`: Unspecified sales channel. This value is not supported.
   * + `"WEB"`: A web client.
   * + `"POS"`: [Point of sale solutions](https://support.wix.com/en/wix-mobile-pos-2196395)
   * + `"EBAY"`: [eBay](https://support.wix.com/en/article/wix-stores-connecting-and-setting-up-an-ebay-shop)
   * + `"AMAZON"`: [Amazon](https://support.wix.com/en/article/wix-stores-connecting-and-setting-up-an-amazon-shop)
   * + `"WISH"`: [Wish](https://support.wix.com/en/article/wix-stores-connecting-and-setting-up-a-wish-shop)
   * + `"WIX_INVOICES"`: Wix Invoices app in [your dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Finvoices/settings/general-settings)
   * + `"WIX_APP_STORE"`: [Wix Owner app](https://support.wix.com/article/wix-owner-app-an-overview)
   * + `"BACKOFFICE_MERCHANT"`: Wix merchant backoffice
   * + `"OTHER_PLATFORM"`: Other sales platform.
   */
  channelType?: InputMaybe<EcommercePlatformCommonChannelType>;
  /** Checkout information. */
  checkoutInfo?: InputMaybe<EcomCheckoutV1CheckoutInput>;
  /** Coupon code. */
  couponCode?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gift card code.
   *
   * The checkout can only hold 1 `giftCardCode` at a time. If an additional `giftCardCode` is added, it will override the existing `giftCardCode`.
   *
   * >**Note:** Gift cards are supported through the Wix UI, though the SPI is not currently available. Learn more about [Wix Gift Cards](https://support.wix.com/en/article/wix-stores-setting-up-wix-gift-cards).
   */
  giftCardCode?: InputMaybe<Scalars['String']['input']>;
  /** Line items to be added to checkout. */
  lineItems?: InputMaybe<Array<InputMaybe<EcomCheckoutV1LineItemInput>>>;
  /**
   * `overrideCheckoutUrl` allows the flexibility to redirect customers to a customized checkout page.
   *
   * This field overrides the `checkoutUrl` in a cart or checkout. `checkoutUrl` is used in the [Abandoned Checkout API](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/abandoned-checkout/introduction)
   * to send customers back to their checkouts. By default, a `checkoutUrl` generates for a checkout and directs to a
   * standard Wix checkout page. When `overrideCheckoutUrl` has a value, it will replace and set the value of `checkoutUrl`.
   */
  overrideCheckoutUrl?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCheckoutV1CreateCheckoutResponse = {
  __typename?: 'EcomCheckoutV1CreateCheckoutResponse';
  /** Newly created checkout. */
  checkout?: Maybe<EcomCheckoutV1Checkout>;
};

export type EcomCheckoutV1CreatedBy = {
  __typename?: 'EcomCheckoutV1CreatedBy';
  /** App ID - when the order was created by an external application or Wix service. */
  appId?: Maybe<Scalars['String']['output']>;
  /** Member ID - when the order was created by a **logged in** site visitor. */
  member?: Maybe<MembersMember>;
  /** Member ID - when the order was created by a **logged in** site visitor. */
  memberId?: Maybe<Scalars['String']['output']>;
  /**
   * User ID - when the order was created by a Wix user on behalf of a buyer.
   * For example, via POS (point of service).
   */
  userId?: Maybe<Scalars['String']['output']>;
  /** Visitor ID - when the order was created by a site visitor that was **not** logged in. */
  visitorId?: Maybe<Scalars['String']['output']>;
};

export type EcomCheckoutV1CreatedByInput = {
  /** App ID - when the order was created by an external application or Wix service. */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** Member ID - when the order was created by a **logged in** site visitor. */
  memberId?: InputMaybe<Scalars['String']['input']>;
  /**
   * User ID - when the order was created by a Wix user on behalf of a buyer.
   * For example, via POS (point of service).
   */
  userId?: InputMaybe<Scalars['String']['input']>;
  /** Visitor ID - when the order was created by a site visitor that was **not** logged in. */
  visitorId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCheckoutV1CustomSettings = {
  __typename?: 'EcomCheckoutV1CustomSettings';
  /**
   * Whether to restrict the option to add or remove a coupon code on the checkout page. This field can only be set when [creating a checkout](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/checkout/create-checkout).
   * Default: `false`
   */
  lockCouponCode?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Whether to restrict the option to add or remove a gift card on the checkout page. This field can only be set when [creating a checkout](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/checkout/create-checkout).
   * Default: `false`
   */
  lockGiftCard?: Maybe<Scalars['Boolean']['output']>;
};

export type EcomCheckoutV1CustomSettingsInput = {
  /**
   * Whether to restrict the option to add or remove a coupon code on the checkout page. This field can only be set when [creating a checkout](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/checkout/create-checkout).
   * Default: `false`
   */
  lockCouponCode?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Whether to restrict the option to add or remove a gift card on the checkout page. This field can only be set when [creating a checkout](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/checkout/create-checkout).
   * Default: `false`
   */
  lockGiftCard?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EcomCheckoutV1GetCheckoutUrlRequestInput = {
  /** Checkout ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCheckoutV1GetCheckoutUrlResponse = {
  __typename?: 'EcomCheckoutV1GetCheckoutURLResponse';
  /** Checkout URL. */
  checkoutUrl?: Maybe<Scalars['String']['output']>;
};

export type EcomCheckoutV1ItemAvailabilityInfo = {
  __typename?: 'EcomCheckoutV1ItemAvailabilityInfo';
  /** Quantity available. */
  quantityAvailable?: Maybe<Scalars['Int']['output']>;
  /**
   * Item availability status.
   * + `"NOT_FOUND"`: Item does not exist
   * + `"NOT_AVAILABLE"`: Item not in stock
   * + `"PARTIALLY_AVAILABLE"`: Available quantity is less than requested
   */
  status?: Maybe<EcomCheckoutV1ItemAvailabilityStatus>;
};

export type EcomCheckoutV1ItemAvailabilityInfoInput = {
  /** Quantity available. */
  quantityAvailable?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Item availability status.
   * + `"NOT_FOUND"`: Item does not exist
   * + `"NOT_AVAILABLE"`: Item not in stock
   * + `"PARTIALLY_AVAILABLE"`: Available quantity is less than requested
   */
  status?: InputMaybe<EcomCheckoutV1ItemAvailabilityStatus>;
};

export enum EcomCheckoutV1ItemAvailabilityStatus {
  Available = 'AVAILABLE',
  /** Not in stock */
  NotAvailable = 'NOT_AVAILABLE',
  NotFound = 'NOT_FOUND',
  /** Available quantity is less than requested */
  PartiallyAvailable = 'PARTIALLY_AVAILABLE'
}

export type EcomCheckoutV1LineItem = {
  __typename?: 'EcomCheckoutV1LineItem';
  /** Item availability details. */
  availability?: Maybe<EcomCheckoutV1ItemAvailabilityInfo>;
  /** Catalog and item reference. Includes IDs for the item and the catalog it came from, as well as further optional info. */
  catalogReference?: Maybe<EcommerceCatalogSpiV1CatalogReference>;
  /** Partial payment to be paid upfront during the checkout. Eligible for catalog items with `lineItem.paymentOption` type `DEPOSIT_ONLINE` only. */
  depositAmount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Line item description lines. Used for display purposes for the cart, checkout and order. */
  descriptionLines?: Maybe<Array<Maybe<EcommerceCatalogSpiV1DescriptionLine>>>;
  /** Discount for this line item's entire quantity. */
  discount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Item price **before** catalog-defined discount. Defaults to `price` when not provided. */
  fullPrice?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Line item ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Item type. Either a preset type or custom. */
  itemType?: Maybe<EcommerceCatalogSpiV1ItemType>;
  /** Total line item price **after** catalog-defined discount and line item discounts. */
  lineItemPrice?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Line item image details. */
  media?: Maybe<CommonImage>;
  /**
   * Type of selected payment option for current item. Defaults to `FULL_PAYMENT_ONLINE`.
   * + `FULL_PAYMENT_ONLINE`: The entire payment for this item happens as part of the checkout.
   * + `FULL_PAYMENT_OFFLINE`: The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
   * + `MEMBERSHIP`: Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is `0`.
   * + `DEPOSIT_ONLINE`: Partial payment to be paid upfront during the checkout. Initial amount to be paid for each line item is defined by `lineItem.deposit`.
   * + `MEMBERSHIP_OFFLINE`: Payment for this item can only be performed by using a membership and must be manually redeemed in the dashboard by the site owner. When this option is used, `lineItem.price.amount` is `0`.
   */
  paymentOption?: Maybe<EcommerceCatalogSpiV1PaymentOptionType>;
  /** Physical properties of the item. When relevant, contains information such as SKU, item weight, and shippability. */
  physicalProperties?: Maybe<EcommerceCatalogSpiV1PhysicalProperties>;
  /** Item price **after** catalog-defined discount and line item discounts. */
  price?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Item price **before** line item discounts and **after** catalog-defined discount. Defaults to `price` when not provided. */
  priceBeforeDiscounts?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Additional description for the price. For example, when price is 0 but additional details about the actual price are needed - "Starts at $67". */
  priceDescription?: Maybe<EcommerceCatalogSpiV1PriceDescription>;
  /**
   * Item name.
   * + Stores - `product.name`
   * + Bookings - `service.info.name`
   * + Events - `ticket.name`
   */
  productName?: Maybe<EcommerceCatalogSpiV1ProductName>;
  /**
   * Item quantity.
   *
   * Min: `"1"`
   * Max: `"100000"`
   */
  quantity?: Maybe<Scalars['Int']['output']>;
  /**
   * In cases where `catalogReference.catalogItemId` is NOT the actual catalog item ID, this field will return the true item's ID.
   * + For example, for Wix Bookings, `catalogReference.catalogItemId` is the booking ID. Therefore this value is set to the service ID.
   * + In most cases, this field has the same value as `catalogReference.catalogItemId`.
   * + Used in membership validation.
   */
  rootCatalogItemId?: Maybe<Scalars['String']['output']>;
  /** Service properties. When relevant, this contains information such as date and number of participants. */
  serviceProperties?: Maybe<EcommerceCatalogSpiV1ServiceProperties>;
  /** Tax details for this line item. */
  taxDetails?: Maybe<EcomTotalsCalculatorV1ItemTaxFullDetails>;
  /** Total price after all discounts and tax. */
  totalPriceAfterTax?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** __Deprecated.__ Use `totalPriceAfterTax` minus `taxDetails.totalTax` instead. */
  totalPriceBeforeTax?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** URL to the item's page on the site. */
  url?: Maybe<CommonPageUrlV2>;
};

export type EcomCheckoutV1LineItemInput = {
  /** Item availability details. */
  availability?: InputMaybe<EcomCheckoutV1ItemAvailabilityInfoInput>;
  /** Catalog and item reference. Includes IDs for the item and the catalog it came from, as well as further optional info. */
  catalogReference?: InputMaybe<EcommerceCatalogSpiV1CatalogReferenceInput>;
  /** Partial payment to be paid upfront during the checkout. Eligible for catalog items with `lineItem.paymentOption` type `DEPOSIT_ONLINE` only. */
  depositAmount?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Line item description lines. Used for display purposes for the cart, checkout and order. */
  descriptionLines?: InputMaybe<Array<InputMaybe<EcommerceCatalogSpiV1DescriptionLineInput>>>;
  /** Discount for this line item's entire quantity. */
  discount?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Item price **before** catalog-defined discount. Defaults to `price` when not provided. */
  fullPrice?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Line item ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Item type. Either a preset type or custom. */
  itemType?: InputMaybe<EcommerceCatalogSpiV1ItemTypeInput>;
  /** Total line item price **after** catalog-defined discount and line item discounts. */
  lineItemPrice?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Line item image details. */
  media?: InputMaybe<CommonImageInput>;
  /**
   * Type of selected payment option for current item. Defaults to `FULL_PAYMENT_ONLINE`.
   * + `FULL_PAYMENT_ONLINE`: The entire payment for this item happens as part of the checkout.
   * + `FULL_PAYMENT_OFFLINE`: The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
   * + `MEMBERSHIP`: Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is `0`.
   * + `DEPOSIT_ONLINE`: Partial payment to be paid upfront during the checkout. Initial amount to be paid for each line item is defined by `lineItem.deposit`.
   * + `MEMBERSHIP_OFFLINE`: Payment for this item can only be performed by using a membership and must be manually redeemed in the dashboard by the site owner. When this option is used, `lineItem.price.amount` is `0`.
   */
  paymentOption?: InputMaybe<EcommerceCatalogSpiV1PaymentOptionType>;
  /** Physical properties of the item. When relevant, contains information such as SKU, item weight, and shippability. */
  physicalProperties?: InputMaybe<EcommerceCatalogSpiV1PhysicalPropertiesInput>;
  /** Item price **after** catalog-defined discount and line item discounts. */
  price?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Item price **before** line item discounts and **after** catalog-defined discount. Defaults to `price` when not provided. */
  priceBeforeDiscounts?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Additional description for the price. For example, when price is 0 but additional details about the actual price are needed - "Starts at $67". */
  priceDescription?: InputMaybe<EcommerceCatalogSpiV1PriceDescriptionInput>;
  /**
   * Item name.
   * + Stores - `product.name`
   * + Bookings - `service.info.name`
   * + Events - `ticket.name`
   */
  productName?: InputMaybe<EcommerceCatalogSpiV1ProductNameInput>;
  /**
   * Item quantity.
   *
   * Min: `"1"`
   * Max: `"100000"`
   */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /**
   * In cases where `catalogReference.catalogItemId` is NOT the actual catalog item ID, this field will return the true item's ID.
   * + For example, for Wix Bookings, `catalogReference.catalogItemId` is the booking ID. Therefore this value is set to the service ID.
   * + In most cases, this field has the same value as `catalogReference.catalogItemId`.
   * + Used in membership validation.
   */
  rootCatalogItemId?: InputMaybe<Scalars['String']['input']>;
  /** Service properties. When relevant, this contains information such as date and number of participants. */
  serviceProperties?: InputMaybe<EcommerceCatalogSpiV1ServicePropertiesInput>;
  /** Tax details for this line item. */
  taxDetails?: InputMaybe<EcomTotalsCalculatorV1ItemTaxFullDetailsInput>;
  /** Total price after all discounts and tax. */
  totalPriceAfterTax?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** __Deprecated.__ Use `totalPriceAfterTax` minus `taxDetails.totalTax` instead. */
  totalPriceBeforeTax?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** URL to the item's page on the site. */
  url?: InputMaybe<CommonPageUrlV2Input>;
};

export type EcomCheckoutV1LineItemQuantityUpdateInput = {
  /** ID of the line item to update. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * New total amount of the line item,
   * not the amount to add to the current `quantity`.
   *
   * Min: `1`
   *
   * Max: `100000`
   */
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type EcomCheckoutV1MarkCheckoutAsCompletedRequestInput = {
  /** Checkout ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCheckoutV1MembershipOptions = {
  __typename?: 'EcomCheckoutV1MembershipOptions';
  /** Reserved for internal use. */
  eligibleMemberships?: Maybe<Array<Maybe<EcomMembershipsSpiV1HostMembership>>>;
  /** Reserved for internal use. */
  invalidMemberships?: Maybe<Array<Maybe<EcomMembershipsSpiV1HostInvalidMembership>>>;
  /** Selected membership to apply to this checkout. */
  selectedMemberships?: Maybe<EcomMembershipsSpiV1HostSelectedMemberships>;
};

export type EcomCheckoutV1MembershipOptionsInput = {
  /** Reserved for internal use. */
  eligibleMemberships?: InputMaybe<Array<InputMaybe<EcomMembershipsSpiV1HostMembershipInput>>>;
  /** Reserved for internal use. */
  invalidMemberships?: InputMaybe<Array<InputMaybe<EcomMembershipsSpiV1HostInvalidMembershipInput>>>;
  /** Selected membership to apply to this checkout. */
  selectedMemberships?: InputMaybe<EcomMembershipsSpiV1HostSelectedMembershipsInput>;
};

export type EcomCheckoutV1RemoveCouponRequestInput = {
  /** ID of the checkout to remove the coupon from. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCheckoutV1RemoveCouponResponse = {
  __typename?: 'EcomCheckoutV1RemoveCouponResponse';
  /** Updated checkout after removal of coupon. */
  checkout?: Maybe<EcomCheckoutV1Checkout>;
};

export type EcomCheckoutV1RemoveGiftCardRequestInput = {
  /** ID of the checkout to remove the gift card from. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCheckoutV1RemoveGiftCardResponse = {
  __typename?: 'EcomCheckoutV1RemoveGiftCardResponse';
  /** Updated checkout after removal of gift card. */
  checkout?: Maybe<EcomCheckoutV1Checkout>;
};

export type EcomCheckoutV1RemoveLineItemsRequestInput = {
  /** ID of the checkout to remove line items from. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** IDs of the line items to remove from the checkout. */
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EcomCheckoutV1RemoveLineItemsResponse = {
  __typename?: 'EcomCheckoutV1RemoveLineItemsResponse';
  /** Updated checkout after removal of line items. */
  checkout?: Maybe<EcomCheckoutV1Checkout>;
};

export type EcomCheckoutV1RemoveOverrideCheckoutUrlRequestInput = {
  /** ID of the checkout to remove the override checkout url from. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCheckoutV1RemoveOverrideCheckoutUrlResponse = {
  __typename?: 'EcomCheckoutV1RemoveOverrideCheckoutUrlResponse';
  /** Updated checkout after removal of override checkout url. */
  checkout?: Maybe<EcomCheckoutV1Checkout>;
};

export type EcomCheckoutV1ShippingInfo = {
  __typename?: 'EcomCheckoutV1ShippingInfo';
  /** All carrier options for this shipping rule. */
  carrierServiceOptions?: Maybe<Array<Maybe<EcomTotalsCalculatorV1CarrierServiceOption>>>;
  /** Shipping region. Based on the address provided. */
  region?: Maybe<EcomTotalsCalculatorV1ShippingRegion>;
  /** Selected option out of the options allowed for the `region`. */
  selectedCarrierServiceOption?: Maybe<EcomTotalsCalculatorV1SelectedCarrierServiceOption>;
  /** Shipping address and contact details. */
  shippingDestination?: Maybe<EcomCheckoutV1AddressWithContact>;
};

export type EcomCheckoutV1ShippingInfoInput = {
  /** All carrier options for this shipping rule. */
  carrierServiceOptions?: InputMaybe<Array<InputMaybe<EcomTotalsCalculatorV1CarrierServiceOptionInput>>>;
  /** Shipping region. Based on the address provided. */
  region?: InputMaybe<EcomTotalsCalculatorV1ShippingRegionInput>;
  /** Selected option out of the options allowed for the `region`. */
  selectedCarrierServiceOption?: InputMaybe<EcomTotalsCalculatorV1SelectedCarrierServiceOptionInput>;
  /** Shipping address and contact details. */
  shippingDestination?: InputMaybe<EcomCheckoutV1AddressWithContactInput>;
};

export type EcomCheckoutV1UpdateCheckoutRequestInput = {
  /** Checkout information. */
  checkout?: InputMaybe<EcomCheckoutV1CheckoutInput>;
  /**
   * Coupon code.
   *
   * The checkout can only hold 1 `couponCode` at a time. If an additional `couponCode` is added, it will override the existing `couponCode`.
   */
  couponCode?: InputMaybe<Scalars['String']['input']>;
  /** Gift card code. */
  giftCardCode?: InputMaybe<Scalars['String']['input']>;
  /**
   * `overrideCheckoutUrl` allows the flexibility to redirect customers to a customized checkout page.
   *
   * This field overrides the `checkoutUrl` in a cart or checkout. `checkoutUrl` is used in the [Abandoned Checkout API](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/abandoned-checkout/introduction)
   * to send customers back to their checkouts. By default, a `checkoutUrl` generates for a checkout and directs to a
   * standard Wix checkout page. When `overrideCheckoutUrl` has a value, it will replace and set the value of `checkoutUrl`.
   */
  overrideCheckoutUrl?: InputMaybe<Scalars['String']['input']>;
};

export type EcomCheckoutV1UpdateCheckoutResponse = {
  __typename?: 'EcomCheckoutV1UpdateCheckoutResponse';
  /** Updated checkout. */
  checkout?: Maybe<EcomCheckoutV1Checkout>;
};

export type EcomCheckoutV1UpdateLineItemsQuantityRequestInput = {
  /** Checkout ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Line item info to update. */
  lineItems?: InputMaybe<Array<InputMaybe<EcomCheckoutV1LineItemQuantityUpdateInput>>>;
};

export type EcomCheckoutV1UpdateLineItemsQuantityResponse = {
  __typename?: 'EcomCheckoutV1UpdateLineItemsQuantityResponse';
  /** Updated checkout. */
  checkout?: Maybe<EcomCheckoutV1Checkout>;
};

export type EcomDiscountsActiveTimeInfo = {
  __typename?: 'EcomDiscountsActiveTimeInfo';
  /** Date and time the discount rule is active **till**, in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
  end?: Maybe<Scalars['String']['output']>;
  /** Date and time the discount rule is active **from**, in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
  start?: Maybe<Scalars['String']['output']>;
};

export type EcomDiscountsActiveTimeInfoInput = {
  /** Date and time the discount rule is active **till**, in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
  end?: InputMaybe<Scalars['String']['input']>;
  /** Date and time the discount rule is active **from**, in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
  start?: InputMaybe<Scalars['String']['input']>;
};

export type EcomDiscountsBuyXGetYInfo = {
  __typename?: 'EcomDiscountsBuyXGetYInfo';
  /** Information about which items must be in the cart (buy X) for the discount to apply (get Y). */
  customerBuys?: Maybe<EcomDiscountsCustomerBuy>;
  /** Information about which items will be discounted (get Y). */
  customerGets?: Maybe<EcomDiscountsCustomerGet>;
  /**
   * The maximum number of times the 'buy X get Y' discount can be applied.
   * For example, when the value of `limit` is `2`, with a "2+1" sale on all items, the following logic applies:
   * + Buy 2 get 1, buy 3 get 1.
   * + Buy 4 get 2, buy 6 get 2, buy 9 get 2, and so on.
   */
  limit?: Maybe<Scalars['Int']['output']>;
};

export type EcomDiscountsBuyXGetYInfoInput = {
  /** Information about which items must be in the cart (buy X) for the discount to apply (get Y). */
  customerBuys?: InputMaybe<EcomDiscountsCustomerBuyInput>;
  /** Information about which items will be discounted (get Y). */
  customerGets?: InputMaybe<EcomDiscountsCustomerGetInput>;
  /**
   * The maximum number of times the 'buy X get Y' discount can be applied.
   * For example, when the value of `limit` is `2`, with a "2+1" sale on all items, the following logic applies:
   * + Buy 2 get 1, buy 3 get 1.
   * + Buy 4 get 2, buy 6 get 2, buy 9 get 2, and so on.
   */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type EcomDiscountsCatalogItemFilter = {
  __typename?: 'EcomDiscountsCatalogItemFilter';
  /** Catalog App ID. For example, the Wix Stores, Wix Bookings, or 3rd-party `appId`. */
  catalogAppId?: Maybe<Scalars['String']['output']>;
  /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores. */
  catalogItemIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EcomDiscountsCatalogItemFilterInput = {
  /** Catalog App ID. For example, the Wix Stores, Wix Bookings, or 3rd-party `appId`. */
  catalogAppId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores. */
  catalogItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EcomDiscountsCreateDiscountRuleRequestInput = {
  /** Discount rule info. */
  discountRule?: InputMaybe<EcomDiscountsDiscountRuleInput>;
};

export type EcomDiscountsCreateDiscountRuleResponse = {
  __typename?: 'EcomDiscountsCreateDiscountRuleResponse';
  /** Discount rule. */
  discountRule?: Maybe<EcomDiscountsDiscountRule>;
};

export type EcomDiscountsCustomFilter = {
  __typename?: 'EcomDiscountsCustomFilter';
  /** Custom filter app ID, when relevant. */
  appId?: Maybe<Scalars['String']['output']>;
  /**
   * Custom filter in `{ "key": "value" }` form.
   * For example, an array of `collectionIDs`:
   * `{ ["collectionId": "12345"], ["collectionId": "67890"] }`.
   */
  params?: Maybe<Scalars['JSON']['output']>;
};

export type EcomDiscountsCustomFilterInput = {
  /** Custom filter app ID, when relevant. */
  appId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Custom filter in `{ "key": "value" }` form.
   * For example, an array of `collectionIDs`:
   * `{ ["collectionId": "12345"], ["collectionId": "67890"] }`.
   */
  params?: InputMaybe<Scalars['JSON']['input']>;
};

export type EcomDiscountsCustomerBuy = {
  __typename?: 'EcomDiscountsCustomerBuy';
  /** Minimum number of items the customer must add to the cart to be eligible for a discount. */
  minimumQuantity?: Maybe<Scalars['Int']['output']>;
  /** Minimum price the customer must add to the cart to be eligible for a discount. */
  minimumSpend?: Maybe<Scalars['String']['output']>;
  /** Scopes of the items that must be added to the cart to enable the discount. */
  scopes?: Maybe<Array<Maybe<EcomDiscountsScope>>>;
};

export type EcomDiscountsCustomerBuyInput = {
  /** Minimum number of items the customer must add to the cart to be eligible for a discount. */
  minimumQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Minimum price the customer must add to the cart to be eligible for a discount. */
  minimumSpend?: InputMaybe<Scalars['String']['input']>;
  /** Scopes of the items that must be added to the cart to enable the discount. */
  scopes?: InputMaybe<Array<InputMaybe<EcomDiscountsScopeInput>>>;
};

export type EcomDiscountsCustomerGet = {
  __typename?: 'EcomDiscountsCustomerGet';
  /**
   * Exact number of items in the cart that will be discounted.
   * If the cart contains fewer items than the value of quantity, the discount will not apply.
   */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Scopes of the items that will be discounted. */
  scopes?: Maybe<Array<Maybe<EcomDiscountsScope>>>;
};

export type EcomDiscountsCustomerGetInput = {
  /**
   * Exact number of items in the cart that will be discounted.
   * If the cart contains fewer items than the value of quantity, the discount will not apply.
   */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** Scopes of the items that will be discounted. */
  scopes?: InputMaybe<Array<InputMaybe<EcomDiscountsScopeInput>>>;
};

export type EcomDiscountsDeleteDiscountRuleRequestInput = {
  /** ID of the discount rule to delete. */
  discountRuleId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomDiscountsDiscount = {
  __typename?: 'EcomDiscountsDiscount';
  /** Data related to `BUY_X_GET_Y` target type. */
  buyXGetYInfo?: Maybe<EcomDiscountsBuyXGetYInfo>;
  /**
   * Discount type.
   *
   * + `PERCENTAGE`: Price is reduced by percentage value.
   * + `FIXED_AMOUNT`: Price is reduced by fixed amount.
   * + `FIXED_PRICE`: Price will be set to fixed amount.
   */
  discountType?: Maybe<EcomDiscountsDiscountDiscountType>;
  /** Amount to discount from original price. */
  fixedAmount?: Maybe<Scalars['String']['output']>;
  /** Fixed price. Line item will be fixed to this price. */
  fixedPrice?: Maybe<Scalars['String']['output']>;
  /** Percentage to discount from original price. */
  percentage?: Maybe<Scalars['Float']['output']>;
  /** Data related to `SPECIFIC_ITEMS` target type. */
  specificItemsInfo?: Maybe<EcomDiscountsSpecificItemsInfo>;
  /**
   * Discount target.
   *
   * + `SPECIFIC_ITEMS`: Discount applies to a specific set of items.
   */
  targetType?: Maybe<EcomDiscountsDiscountTargetType>;
};

export enum EcomDiscountsDiscountDiscountType {
  /** Fixed amount discount */
  FixedAmount = 'FIXED_AMOUNT',
  /** Fixed price discount */
  FixedPrice = 'FIXED_PRICE',
  /** Percentage discount */
  Percentage = 'PERCENTAGE',
  Undefined = 'UNDEFINED'
}

export type EcomDiscountsDiscountInput = {
  /** Data related to `BUY_X_GET_Y` target type. */
  buyXGetYInfo?: InputMaybe<EcomDiscountsBuyXGetYInfoInput>;
  /**
   * Discount type.
   *
   * + `PERCENTAGE`: Price is reduced by percentage value.
   * + `FIXED_AMOUNT`: Price is reduced by fixed amount.
   * + `FIXED_PRICE`: Price will be set to fixed amount.
   */
  discountType?: InputMaybe<EcomDiscountsDiscountDiscountType>;
  /** Amount to discount from original price. */
  fixedAmount?: InputMaybe<Scalars['String']['input']>;
  /** Fixed price. Line item will be fixed to this price. */
  fixedPrice?: InputMaybe<Scalars['String']['input']>;
  /** Percentage to discount from original price. */
  percentage?: InputMaybe<Scalars['Float']['input']>;
  /** Data related to `SPECIFIC_ITEMS` target type. */
  specificItemsInfo?: InputMaybe<EcomDiscountsSpecificItemsInfoInput>;
  /**
   * Discount target.
   *
   * + `SPECIFIC_ITEMS`: Discount applies to a specific set of items.
   */
  targetType?: InputMaybe<EcomDiscountsDiscountTargetType>;
};

export type EcomDiscountsDiscountRule = {
  __typename?: 'EcomDiscountsDiscountRule';
  /**
   * Whether the discount rule is active.
   *
   * Default: `true`
   */
  active?: Maybe<Scalars['Boolean']['output']>;
  /** Time frame in which the discount rule is active. */
  activeTimeInfo?: Maybe<EcomDiscountsActiveTimeInfo>;
  /** Date and time the discount rule was created. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /**
   * List of discounts that are applied when one or more triggers are met.
   *
   * Currently, a discount rule can apply only 1 discount.
   */
  discounts?: Maybe<EcomDiscountsDiscounts>;
  /** Discount rule ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Discount rule name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Revision number, which increments by 1 each time the discount rule is updated.
   * To prevent conflicting changes, the current `revision` must be passed when updating the discount rule.
   */
  revision?: Maybe<Scalars['Int']['output']>;
  /** Discount rule status. */
  status?: Maybe<EcomDiscountsDiscountRuleStatus>;
  /**
   * Discount rule trigger.
   * A set of conditions that must be met for the `discounts` to be applied.
   * Not passing a trigger will cause the discount to always apply.
   */
  trigger?: Maybe<EcomDiscountsDiscountTrigger>;
  /** Date and time the discount rule was last updated. */
  updatedDate?: Maybe<Scalars['String']['output']>;
  /** Number of times the discount rule was used. */
  usageCount?: Maybe<Scalars['Int']['output']>;
};

export type EcomDiscountsDiscountRuleInput = {
  /**
   * Whether the discount rule is active.
   *
   * Default: `true`
   */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Time frame in which the discount rule is active. */
  activeTimeInfo?: InputMaybe<EcomDiscountsActiveTimeInfoInput>;
  /** Date and time the discount rule was created. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * List of discounts that are applied when one or more triggers are met.
   *
   * Currently, a discount rule can apply only 1 discount.
   */
  discounts?: InputMaybe<EcomDiscountsDiscountsInput>;
  /** Discount rule ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Discount rule name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Revision number, which increments by 1 each time the discount rule is updated.
   * To prevent conflicting changes, the current `revision` must be passed when updating the discount rule.
   */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** Discount rule status. */
  status?: InputMaybe<EcomDiscountsDiscountRuleStatus>;
  /**
   * Discount rule trigger.
   * A set of conditions that must be met for the `discounts` to be applied.
   * Not passing a trigger will cause the discount to always apply.
   */
  trigger?: InputMaybe<EcomDiscountsDiscountTriggerInput>;
  /** Date and time the discount rule was last updated. */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
  /** Number of times the discount rule was used. */
  usageCount?: InputMaybe<Scalars['Int']['input']>;
};

export enum EcomDiscountsDiscountRuleStatus {
  /** Rule status is expired, it might have been live in the past. */
  Expired = 'EXPIRED',
  /** Rule status is live. */
  Live = 'LIVE',
  /** Rule status is pending, it might be live in the future. */
  Pending = 'PENDING',
  /** Rule status is not defined. */
  Undefined = 'UNDEFINED'
}

export enum EcomDiscountsDiscountTargetType {
  /** Target type is a buy x get y */
  BuyXGetY = 'BUY_X_GET_Y',
  /** Target type is a set of specific items */
  SpecificItems = 'SPECIFIC_ITEMS',
  /** Target type is not defined */
  Undefined = 'UNDEFINED'
}

export type EcomDiscountsDiscountTrigger = {
  __typename?: 'EcomDiscountsDiscountTrigger';
  /** Chain multiple triggers with `and` operator. */
  and?: Maybe<EcomDiscountsDiscountTriggerAnd>;
  /** Custom trigger. */
  customTrigger?: Maybe<EcomDiscountsDiscountTriggerCustom>;
  /** Item quantity trigger range. */
  itemQuantityRange?: Maybe<EcomDiscountsDiscountTriggerItemQuantityRange>;
  /** Chain multiple triggers with OR operator */
  or?: Maybe<EcomDiscountsDiscountTriggerOr>;
  /** Subtotal trigger range. */
  subtotalRange?: Maybe<EcomDiscountsDiscountTriggerSubtotalRange>;
  /**
   * Trigger type.
   *
   * + `AND`: Operator used for chaining multiple triggers. Currently 1 `AND` chain operator is supported.
   * + `SUBTOTAL_RANGE`: Subtotal must be within the specified `subtotalRange` values.
   * + `ITEM_QUANTITY_RANGE`: Quantity of items in scope must be within specified `itemQuantityRange` values.
   * + `CUSTOM`: Custom trigger type defined in `customTrigger` object.
   */
  triggerType?: Maybe<EcomDiscountsDiscountTriggerTriggerType>;
};

export type EcomDiscountsDiscountTriggerAnd = {
  __typename?: 'EcomDiscountsDiscountTriggerAnd';
  /**
   * List of triggers.
   * Max: 5 triggers.
   */
  triggers?: Maybe<Array<Maybe<EcomDiscountsDiscountTrigger>>>;
};

export type EcomDiscountsDiscountTriggerAndInput = {
  /**
   * List of triggers.
   * Max: 5 triggers.
   */
  triggers?: InputMaybe<Array<InputMaybe<EcomDiscountsDiscountTriggerInput>>>;
};

export type EcomDiscountsDiscountTriggerCustom = {
  __typename?: 'EcomDiscountsDiscountTriggerCustom';
  /** ID of the app that created the trigger. */
  appId?: Maybe<Scalars['String']['output']>;
  /** Trigger ID. */
  id?: Maybe<Scalars['String']['output']>;
};

export type EcomDiscountsDiscountTriggerCustomInput = {
  /** ID of the app that created the trigger. */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** Trigger ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomDiscountsDiscountTriggerInput = {
  /** Chain multiple triggers with `and` operator. */
  and?: InputMaybe<EcomDiscountsDiscountTriggerAndInput>;
  /** Custom trigger. */
  customTrigger?: InputMaybe<EcomDiscountsDiscountTriggerCustomInput>;
  /** Item quantity trigger range. */
  itemQuantityRange?: InputMaybe<EcomDiscountsDiscountTriggerItemQuantityRangeInput>;
  /** Chain multiple triggers with OR operator */
  or?: InputMaybe<EcomDiscountsDiscountTriggerOrInput>;
  /** Subtotal trigger range. */
  subtotalRange?: InputMaybe<EcomDiscountsDiscountTriggerSubtotalRangeInput>;
  /**
   * Trigger type.
   *
   * + `AND`: Operator used for chaining multiple triggers. Currently 1 `AND` chain operator is supported.
   * + `SUBTOTAL_RANGE`: Subtotal must be within the specified `subtotalRange` values.
   * + `ITEM_QUANTITY_RANGE`: Quantity of items in scope must be within specified `itemQuantityRange` values.
   * + `CUSTOM`: Custom trigger type defined in `customTrigger` object.
   */
  triggerType?: InputMaybe<EcomDiscountsDiscountTriggerTriggerType>;
};

export type EcomDiscountsDiscountTriggerItemQuantityRange = {
  __typename?: 'EcomDiscountsDiscountTriggerItemQuantityRange';
  /** Minimum item quantity (inclusive). */
  from?: Maybe<Scalars['Int']['output']>;
  /** Relevant scopes for `SPECIFIC_ITEMS` target type. */
  scopes?: Maybe<Array<Maybe<EcomDiscountsScope>>>;
  /** Maximum item quantity (inclusive). */
  to?: Maybe<Scalars['Int']['output']>;
};

export type EcomDiscountsDiscountTriggerItemQuantityRangeInput = {
  /** Minimum item quantity (inclusive). */
  from?: InputMaybe<Scalars['Int']['input']>;
  /** Relevant scopes for `SPECIFIC_ITEMS` target type. */
  scopes?: InputMaybe<Array<InputMaybe<EcomDiscountsScopeInput>>>;
  /** Maximum item quantity (inclusive). */
  to?: InputMaybe<Scalars['Int']['input']>;
};

export type EcomDiscountsDiscountTriggerOr = {
  __typename?: 'EcomDiscountsDiscountTriggerOr';
  triggers?: Maybe<Array<Maybe<EcomDiscountsDiscountTrigger>>>;
};

export type EcomDiscountsDiscountTriggerOrInput = {
  triggers?: InputMaybe<Array<InputMaybe<EcomDiscountsDiscountTriggerInput>>>;
};

export type EcomDiscountsDiscountTriggerSubtotalRange = {
  __typename?: 'EcomDiscountsDiscountTriggerSubtotalRange';
  /** Minimum subtotal price (inclusive). */
  from?: Maybe<Scalars['String']['output']>;
  /** Relevant scopes for `SPECIFIC_ITEMS` target type. */
  scopes?: Maybe<Array<Maybe<EcomDiscountsScope>>>;
  /** Maximum subtotal price (inclusive). */
  to?: Maybe<Scalars['String']['output']>;
};

export type EcomDiscountsDiscountTriggerSubtotalRangeInput = {
  /** Minimum subtotal price (inclusive). */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Relevant scopes for `SPECIFIC_ITEMS` target type. */
  scopes?: InputMaybe<Array<InputMaybe<EcomDiscountsScopeInput>>>;
  /** Maximum subtotal price (inclusive). */
  to?: InputMaybe<Scalars['String']['input']>;
};

export enum EcomDiscountsDiscountTriggerTriggerType {
  /** Chain multiple triggers with AND operator */
  And = 'AND',
  /** Custom trigger, see Custom Triggers SPI for more details */
  Custom = 'CUSTOM',
  /** Item quantity range trigger */
  ItemQuantityRange = 'ITEM_QUANTITY_RANGE',
  /** Chain multiple triggers with OR operator */
  Or = 'OR',
  /** Subtotal range trigger */
  SubtotalRange = 'SUBTOTAL_RANGE',
  Undefined = 'UNDEFINED'
}

export type EcomDiscountsDiscounts = {
  __typename?: 'EcomDiscountsDiscounts';
  /** Discounts. */
  values?: Maybe<Array<Maybe<EcomDiscountsDiscount>>>;
};

export type EcomDiscountsDiscountsInput = {
  /** Discounts. */
  values?: InputMaybe<Array<InputMaybe<EcomDiscountsDiscountInput>>>;
};

export type EcomDiscountsQueryDiscountRulesRequestInput = {
  /** Query options. */
  query?: InputMaybe<EcommerceCommonsPlatformQueryInput>;
};

export type EcomDiscountsQueryDiscountRulesResponse = {
  __typename?: 'EcomDiscountsQueryDiscountRulesResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<EcomDiscountsDiscountRule>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type EcomDiscountsScope = {
  __typename?: 'EcomDiscountsScope';
  /** Catalog item filter. Must be passed with `type."CATALOG_ITEM"`. */
  catalogItemFilter?: Maybe<EcomDiscountsCatalogItemFilter>;
  /** Custom filter. Must be passed with `type."CATALOG_ITEM"`. */
  customFilter?: Maybe<EcomDiscountsCustomFilter>;
  /** Scope ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Scope type. */
  type?: Maybe<EcomDiscountsScopeType>;
};

export type EcomDiscountsScopeInput = {
  /** Catalog item filter. Must be passed with `type."CATALOG_ITEM"`. */
  catalogItemFilter?: InputMaybe<EcomDiscountsCatalogItemFilterInput>;
  /** Custom filter. Must be passed with `type."CATALOG_ITEM"`. */
  customFilter?: InputMaybe<EcomDiscountsCustomFilterInput>;
  /** Scope ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Scope type. */
  type?: InputMaybe<EcomDiscountsScopeType>;
};

export enum EcomDiscountsScopeType {
  /** Specific catalog items */
  CatalogItem = 'CATALOG_ITEM',
  /** Specific items by custom filters */
  CustomFilter = 'CUSTOM_FILTER',
  UndefinedScope = 'UNDEFINED_SCOPE'
}

export type EcomDiscountsSpecificItemsInfo = {
  __typename?: 'EcomDiscountsSpecificItemsInfo';
  /**
   * limit number of items the discount can be applied to
   * if no limit specified, the discount will be applied to all items in the request that match 'scopes' field
   */
  limit?: Maybe<Scalars['Int']['output']>;
  /** All associated scopes for `SPECIFIC_ITEMS` target type. */
  scopes?: Maybe<Array<Maybe<EcomDiscountsScope>>>;
};

export type EcomDiscountsSpecificItemsInfoInput = {
  /**
   * limit number of items the discount can be applied to
   * if no limit specified, the discount will be applied to all items in the request that match 'scopes' field
   */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** All associated scopes for `SPECIFIC_ITEMS` target type. */
  scopes?: InputMaybe<Array<InputMaybe<EcomDiscountsScopeInput>>>;
};

export type EcomDiscountsUpdateDiscountRuleRequestInput = {
  /** Discount rule info. */
  discountRule?: InputMaybe<EcomDiscountsDiscountRuleInput>;
  /** Explicit list of fields to update. */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EcomDiscountsUpdateDiscountRuleResponse = {
  __typename?: 'EcomDiscountsUpdateDiscountRuleResponse';
  /** Updated discount rule. */
  discountRule?: Maybe<EcomDiscountsDiscountRule>;
};

export type EcomLineItemsEnricherSpiHostV1EnrichLineItemsForCheckoutResponse = {
  __typename?: 'EcomLineItemsEnricherSpiHostV1EnrichLineItemsForCheckoutResponse';
  enrichedLineItems?: Maybe<Array<Maybe<EcomLineItemsEnricherSpiV1EnrichedLineItem>>>;
};

export type EcomLineItemsEnricherSpiHostV1EnrichLineItemsForThankYouPageResponse = {
  __typename?: 'EcomLineItemsEnricherSpiHostV1EnrichLineItemsForThankYouPageResponse';
  enrichedLineItems?: Maybe<Array<Maybe<EcomLineItemsEnricherSpiV1EnrichedLineItemWithActions>>>;
};

export type EcomLineItemsEnricherSpiV1EnrichedLineItem = {
  __typename?: 'EcomLineItemsEnricherSpiV1EnrichedLineItem';
  /** Line item ID. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Description lines to replace the original
   * This is optional - If you do not want to override, do not return this and the original description lines will be used
   * If you do pass it, it overrides the existing description line.
   * If you want to append, copy the original description lines and add your own
   */
  overriddenDescriptionLines?: Maybe<EcomLineItemsEnricherSpiV1OverriddenDescriptionLines>;
  /** Option to hide specific sections */
  renderingConfig?: Maybe<EcomLineItemsEnricherSpiV1LineItemRenderingConfig>;
};

export type EcomLineItemsEnricherSpiV1EnrichedLineItemWithActions = {
  __typename?: 'EcomLineItemsEnricherSpiV1EnrichedLineItemWithActions';
  /**
   * Optional list of actions to be rendered next to the line item
   * Implementation depends on the client (checkout page, mobile)
   */
  actions?: Maybe<Array<Maybe<EcomLineItemsEnricherSpiV1LineItemAction>>>;
  /** Line item ID */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Description lines to replace the original
   * This is optional - If you do not want to override, do not return this and the original description lines will be used
   * If you do pass it, it overrides the existing description line.
   * If you want to append, copy the original description lines and add your own
   */
  overriddenDescriptionLines?: Maybe<EcomLineItemsEnricherSpiV1OverriddenDescriptionLines>;
  /** Option to hide specific sections */
  renderingConfig?: Maybe<EcomLineItemsEnricherSpiV1LineItemRenderingConfig>;
};

export type EcomLineItemsEnricherSpiV1LineItemAction = {
  __typename?: 'EcomLineItemsEnricherSpiV1LineItemAction';
  /**
   * The unique id of the action
   * for example: DOWNLOAD_LINK, ADD_TO_CALENDAR
   * Note that a specific client may rely on action id and parameters and ignore the URL or the other way around
   */
  actionId?: Maybe<Scalars['String']['output']>;
  /** Parameters for the actions, will be used by the client implementing the action based on actionId */
  actionParameters?: Maybe<Scalars['JSON']['output']>;
  /** the translated text to display (i.e. will be shown "as is") */
  label?: Maybe<Scalars['String']['output']>;
  /** the key that we use to save the text in the editor settings panel */
  settingsKey?: Maybe<Scalars['String']['output']>;
  /**
   * URL to navigate to in order to perform the action
   * can be relative e.g "/api/download" or absolute e.g. "http://www.google.com"
   * Note that a specific client may rely on action id and parameters and ignore the URL or the other way around
   */
  url?: Maybe<Scalars['String']['output']>;
};

export type EcomLineItemsEnricherSpiV1LineItemRenderingConfig = {
  __typename?: 'EcomLineItemsEnricherSpiV1LineItemRenderingConfig';
  hidePrice?: Maybe<Scalars['Boolean']['output']>;
  hideQuantity?: Maybe<Scalars['Boolean']['output']>;
};

export type EcomLineItemsEnricherSpiV1OverriddenDescriptionLines = {
  __typename?: 'EcomLineItemsEnricherSpiV1OverriddenDescriptionLines';
  descriptionLines?: Maybe<Array<Maybe<EcommerceCatalogSpiV1DescriptionLine>>>;
};

export type EcomMembershipsSpiV1HostInvalidMembership = {
  __typename?: 'EcomMembershipsSpiV1HostInvalidMembership';
  /** Membership details. */
  membership?: Maybe<EcomMembershipsSpiV1HostMembership>;
  /** Reason why this membership is invalid and cannot be used. */
  reason?: Maybe<Scalars['String']['output']>;
};

export type EcomMembershipsSpiV1HostInvalidMembershipInput = {
  /** Membership details. */
  membership?: InputMaybe<EcomMembershipsSpiV1HostMembershipInput>;
  /** Reason why this membership is invalid and cannot be used. */
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type EcomMembershipsSpiV1HostMembership = {
  __typename?: 'EcomMembershipsSpiV1HostMembership';
  /** Additional data about this membership. */
  additionalData?: Maybe<Scalars['JSON']['output']>;
  /** ID of the application providing this payment option. */
  appId?: Maybe<Scalars['String']['output']>;
  /** Optional - For a membership that has limited credits, information about credit usage. */
  credits?: Maybe<EcomMembershipsSpiV1MembershipPaymentCredits>;
  /** Optional - TMembership expiry date. */
  expirationDate?: Maybe<Scalars['String']['output']>;
  /** Membership ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Line item IDs which are "paid" for by this membership. */
  lineItemIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The name of this membership. */
  name?: Maybe<EcomMembershipsSpiV1MembershipName>;
};

export type EcomMembershipsSpiV1HostMembershipInput = {
  /** Additional data about this membership. */
  additionalData?: InputMaybe<Scalars['JSON']['input']>;
  /** ID of the application providing this payment option. */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** Optional - For a membership that has limited credits, information about credit usage. */
  credits?: InputMaybe<EcomMembershipsSpiV1MembershipPaymentCreditsInput>;
  /** Optional - TMembership expiry date. */
  expirationDate?: InputMaybe<Scalars['String']['input']>;
  /** Membership ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Line item IDs which are "paid" for by this membership. */
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The name of this membership. */
  name?: InputMaybe<EcomMembershipsSpiV1MembershipNameInput>;
};

export type EcomMembershipsSpiV1HostSelectedMembership = {
  __typename?: 'EcomMembershipsSpiV1HostSelectedMembership';
  /** ID of the app providing this payment option. */
  appId?: Maybe<Scalars['String']['output']>;
  /** Membership ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** IDs of the line items this membership applies to. */
  lineItemIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EcomMembershipsSpiV1HostSelectedMembershipInput = {
  /** ID of the app providing this payment option. */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** Membership ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** IDs of the line items this membership applies to. */
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EcomMembershipsSpiV1HostSelectedMemberships = {
  __typename?: 'EcomMembershipsSpiV1HostSelectedMemberships';
  /** Selected memberships. */
  memberships?: Maybe<Array<Maybe<EcomMembershipsSpiV1HostSelectedMembership>>>;
};

export type EcomMembershipsSpiV1HostSelectedMembershipsInput = {
  /** Selected memberships. */
  memberships?: InputMaybe<Array<InputMaybe<EcomMembershipsSpiV1HostSelectedMembershipInput>>>;
};

export type EcomMembershipsSpiV1MembershipName = {
  __typename?: 'EcomMembershipsSpiV1MembershipName';
  /** The name of this membership */
  original?: Maybe<Scalars['String']['output']>;
  /** Optional - Translated name of this membership. Defaults to `original` when not provided. */
  translated?: Maybe<Scalars['String']['output']>;
};

export type EcomMembershipsSpiV1MembershipNameInput = {
  /** The name of this membership */
  original?: InputMaybe<Scalars['String']['input']>;
  /** Optional - Translated name of this membership. Defaults to `original` when not provided. */
  translated?: InputMaybe<Scalars['String']['input']>;
};

export type EcomMembershipsSpiV1MembershipPaymentCredits = {
  __typename?: 'EcomMembershipsSpiV1MembershipPaymentCredits';
  /** How much credit remained for this membership */
  remaining?: Maybe<Scalars['Int']['output']>;
  /** How much credit this membership has in total */
  total?: Maybe<Scalars['Int']['output']>;
};

export type EcomMembershipsSpiV1MembershipPaymentCreditsInput = {
  /** How much credit remained for this membership */
  remaining?: InputMaybe<Scalars['Int']['input']>;
  /** How much credit this membership has in total */
  total?: InputMaybe<Scalars['Int']['input']>;
};

export type EcomOrdersPaymentsCollectorV1BulkMarkOrdersAsPaidRequestInput = {
  /** IDs of orders to mark as paid. */
  ecomOrderIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EcomOrdersPaymentsCollectorV1BulkMarkOrdersAsPaidResponse = {
  __typename?: 'EcomOrdersPaymentsCollectorV1BulkMarkOrdersAsPaidResponse';
  /** Bulk action metadata. */
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  /**
   * Items updated by the bulk action.
   * The Order entity within the results optimistically changes its payment status to paid, however this process is async.
   */
  results?: Maybe<Array<Maybe<EcomOrdersV1BulkOrderResult>>>;
};

export type EcomOrdersPaymentsCollectorV1ChargeMembershipsRequestInput = {
  /** Order ID. */
  ecomOrderId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The member id. Do not attempt to get it from the request context, since in some cases the caller is not a member
   * but a user which is using the membership on behalf of the a member
   */
  memberId?: InputMaybe<Scalars['String']['input']>;
  /** List of items to be paid by memberships */
  membershipCharges?: InputMaybe<Array<InputMaybe<EcomOrdersPaymentsCollectorV1MembershipChargeItemInput>>>;
};

export type EcomOrdersPaymentsCollectorV1ChargedByInput = {
  /** Full name - name of the user who initiated the payment */
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** ID - id of the user who initiated the payment */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersPaymentsCollectorV1CreatePaymentGatewayOrderRequestInput = {
  /** Information about the user who initiated the payment. */
  chargedBy?: InputMaybe<EcomOrdersPaymentsCollectorV1ChargedByInput>;
  /** Ecom order ID. */
  ecomOrderId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersPaymentsCollectorV1CreatePaymentGatewayOrderResponse = {
  __typename?: 'EcomOrdersPaymentsCollectorV1CreatePaymentGatewayOrderResponse';
  /** ID of the order created in the payment gateway */
  paymentGatewayOrderId?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersPaymentsCollectorV1GetPaymentCollectabilityStatusRequestInput = {
  /** Ecom order ID. */
  ecomOrderId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersPaymentsCollectorV1GetPaymentCollectabilityStatusResponse = {
  __typename?: 'EcomOrdersPaymentsCollectorV1GetPaymentCollectabilityStatusResponse';
  /** Collectable order amount */
  amount?: Maybe<EcommercePlatformCommonPrice>;
  /** Payment collectability status */
  status?: Maybe<EcomOrdersPaymentsCollectorV1PaymentCollectabilityStatusEnumPaymentCollectabilityStatus>;
};

export type EcomOrdersPaymentsCollectorV1GetRefundabilityStatusRequestInput = {
  /** Order ID. */
  ecomOrderId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersPaymentsCollectorV1GetRefundabilityStatusResponse = {
  __typename?: 'EcomOrdersPaymentsCollectorV1GetRefundabilityStatusResponse';
  /** Refundability details. */
  refundabilities?: Maybe<Array<Maybe<EcomOrdersPaymentsCollectorV1Refundability>>>;
  /** Whether the order supports refunding per item. */
  refundablePerItem?: Maybe<Scalars['Boolean']['output']>;
};

export type EcomOrdersPaymentsCollectorV1MarkOrderAsPaidRequestInput = {
  /** Ecom order ID. */
  ecomOrderId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersPaymentsCollectorV1MarkOrderAsPaidResponse = {
  __typename?: 'EcomOrdersPaymentsCollectorV1MarkOrderAsPaidResponse';
  /** Updated order. */
  order?: Maybe<EcomOrdersV1Order>;
};

export type EcomOrdersPaymentsCollectorV1MembershipChargeItemInput = {
  /** ID of the application providing this payment option */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** Catalog and item reference info. */
  catalogReference?: InputMaybe<EcommerceCatalogSpiV1CatalogReferenceInput>;
  /** line item id of Checkout/Order line item */
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  /** Additional data about this membership */
  membershipAdditionalData?: InputMaybe<Scalars['JSON']['input']>;
  /** The id of used membership */
  membershipId?: InputMaybe<Scalars['String']['input']>;
  /** The name of used membership */
  membershipName?: InputMaybe<EcomMembershipsSpiV1MembershipNameInput>;
  /**
   * Usually would be the same as catalogReference.catalogItemId
   * For cases when these are not the same, this field would return the actual id of the item in the catalog
   * For example, for Wix bookings, catalogReference.catalogItemId is the booking id, and this value is being set to be the service id
   */
  rootCatalogItemId?: InputMaybe<Scalars['String']['input']>;
  /** Properties of the service. When relevant, contains information such as date and number of participants. */
  serviceProperties?: InputMaybe<EcommerceCatalogSpiV1ServicePropertiesInput>;
};

export enum EcomOrdersPaymentsCollectorV1PaymentCollectabilityStatusEnumPaymentCollectabilityStatus {
  Collectable = 'COLLECTABLE',
  NoncollectableMissingPaymentMethod = 'NONCOLLECTABLE_MISSING_PAYMENT_METHOD',
  NoncollectableOrderIsCancelled = 'NONCOLLECTABLE_ORDER_IS_CANCELLED',
  NoncollectableOrderIsPaid = 'NONCOLLECTABLE_ORDER_IS_PAID',
  Unknown = 'UNKNOWN'
}

export type EcomOrdersPaymentsCollectorV1PreparePaymentCollectionRequestInput = {
  /** Amount to collect */
  amount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Ecom order ID. */
  ecomOrderId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Optional parameter. When present, payment collection will be performed using given payment gateway order.
   * Existing payment gateway order will be updated with a new amount.
   * When parameter is absent, new payment gateway order will be created and used for payment collection.
   */
  paymentGatewayOrderId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersPaymentsCollectorV1PreparePaymentCollectionResponse = {
  __typename?: 'EcomOrdersPaymentsCollectorV1PreparePaymentCollectionResponse';
  /** Payment gateway order id which is associated with given payment */
  paymentGatewayOrderId?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersPaymentsCollectorV1RecordManuallyCollectedPaymentRequestInput = {
  /** Amount to be recorded as approved manual payment for given order */
  amount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Order ID. */
  orderId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersPaymentsCollectorV1Refundability = {
  __typename?: 'EcomOrdersPaymentsCollectorV1Refundability';
  /** Reason why payment is only refundable manually. */
  manuallyRefundableReason?: Maybe<EcomOrdersPaymentsCollectorV1RefundabilityManuallyRefundableReason>;
  /** Reason why payment is not refundable. */
  nonRefundableReason?: Maybe<EcomOrdersPaymentsCollectorV1RefundabilityNonRefundableReason>;
  /** Payment ID. */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** Link to payment provider dashboard. */
  providerLink?: Maybe<Scalars['String']['output']>;
  /** Payment refundability status. */
  refundabilityStatus?: Maybe<EcomOrdersPaymentsCollectorV1RefundabilityRefundableStatus>;
};

export enum EcomOrdersPaymentsCollectorV1RefundabilityManuallyRefundableReason {
  Expired = 'EXPIRED',
  NotSupported = 'NOT_SUPPORTED',
  Offline = 'OFFLINE'
}

export enum EcomOrdersPaymentsCollectorV1RefundabilityNonRefundableReason {
  AccessDenied = 'ACCESS_DENIED',
  AlreadyRefunded = 'ALREADY_REFUNDED',
  DisabledByProvider = 'DISABLED_BY_PROVIDER',
  Forbidden = 'FORBIDDEN',
  InternalError = 'INTERNAL_ERROR',
  None = 'NONE',
  NotPaid = 'NOT_PAID',
  PendingRefund = 'PENDING_REFUND',
  ProviderIsDown = 'PROVIDER_IS_DOWN',
  TransactionNotFound = 'TRANSACTION_NOT_FOUND',
  ZeroPrice = 'ZERO_PRICE'
}

export enum EcomOrdersPaymentsCollectorV1RefundabilityRefundableStatus {
  Manual = 'MANUAL',
  NotRefundable = 'NOT_REFUNDABLE',
  Refundable = 'REFUNDABLE'
}

export type EcomOrdersPaymentsCollectorV1TriggerRefundRequestInput = {
  /** Business model of a refund */
  details?: InputMaybe<EcomOrdersPaymentsV1RefundDetailsInput>;
  /** The order this refund related to */
  ecomOrderId?: InputMaybe<Scalars['String']['input']>;
  /** Refund operations information */
  payments?: InputMaybe<Array<InputMaybe<EcomOrdersPaymentsV1PaymentRefundInput>>>;
  /** Side effect details related to refund */
  sideEffects?: InputMaybe<EcomOrdersPaymentsV1RefundSideEffectsInput>;
};

export type EcomOrdersPaymentsCollectorV1TriggerRefundResponse = {
  __typename?: 'EcomOrdersPaymentsCollectorV1TriggerRefundResponse';
  /** Payment ID's that the refund execution had failed for */
  failedPaymentIds?: Maybe<Array<Maybe<CommonItemMetadata>>>;
  /** All order's transactions after the refunds were added */
  orderTransactions?: Maybe<EcomOrdersPaymentsV1OrderTransactions>;
  /** Created refund ID */
  refundId?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersPaymentsV1AddPaymentsRequestInput = {
  /** Order ID. */
  orderId?: InputMaybe<Scalars['String']['input']>;
  /** Payments to be added to order. */
  payments?: InputMaybe<Array<InputMaybe<EcomOrdersPaymentsV1PaymentInput>>>;
};

export type EcomOrdersPaymentsV1AddPaymentsResponse = {
  __typename?: 'EcomOrdersPaymentsV1AddPaymentsResponse';
  /** Order ID and its associated transactions. */
  orderTransactions?: Maybe<EcomOrdersPaymentsV1OrderTransactions>;
  /** IDs of added order payments. */
  paymentsIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EcomOrdersPaymentsV1AddRefundRequestInput = {
  /** Order ID this refunds related to */
  orderId?: InputMaybe<Scalars['String']['input']>;
  /** Refund with refund transactions to be added to order. */
  refund?: InputMaybe<EcomOrdersPaymentsV1RefundInput>;
  /** Side effect details related to refund */
  sideEffects?: InputMaybe<EcomOrdersPaymentsV1RefundSideEffectsInput>;
};

export type EcomOrdersPaymentsV1AddRefundResponse = {
  __typename?: 'EcomOrdersPaymentsV1AddRefundResponse';
  /** Order ID and its associated transactions. */
  orderTransactions?: Maybe<EcomOrdersPaymentsV1OrderTransactions>;
  /** Created refund ID */
  refundId?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersPaymentsV1BulkPaymentResult = {
  __typename?: 'EcomOrdersPaymentsV1BulkPaymentResult';
  /** Updated payment. Returned if `return_full_entity` set to `true`. */
  item?: Maybe<EcomOrdersPaymentsV1Payment>;
  /** Item metadata. */
  itemMetadata?: Maybe<CommonItemMetadata>;
};

export type EcomOrdersPaymentsV1BulkUpdatePaymentStatusesRequestInput = {
  /** Order and payment IDs for which to update payment status. */
  paymentAndOrderIds?: InputMaybe<Array<InputMaybe<EcomOrdersPaymentsV1PaymentAndOrderIdInput>>>;
  /** Whether to return the full payment entity (`results.item`) in the response. */
  returnFullEntity?: InputMaybe<Scalars['Boolean']['input']>;
  /** Payment status. */
  status?: InputMaybe<PaymentPayV3TransactionTransactionStatus>;
};

export type EcomOrdersPaymentsV1BulkUpdatePaymentStatusesResponse = {
  __typename?: 'EcomOrdersPaymentsV1BulkUpdatePaymentStatusesResponse';
  /** Bulk operation metadata. */
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  /** Bulk operation results. */
  results?: Maybe<Array<Maybe<EcomOrdersPaymentsV1BulkPaymentResult>>>;
};

export type EcomOrdersPaymentsV1GiftCardPaymentDetails = {
  __typename?: 'EcomOrdersPaymentsV1GiftCardPaymentDetails';
  /** ID of the app that created the gift card. */
  appId?: Maybe<Scalars['String']['output']>;
  /** Gift card payment ID. */
  giftCardPaymentId?: Maybe<Scalars['String']['output']>;
  /** Whether the gift card is voided. */
  voided?: Maybe<Scalars['Boolean']['output']>;
};

export type EcomOrdersPaymentsV1GiftCardPaymentDetailsInput = {
  /** ID of the app that created the gift card. */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** Gift card payment ID. */
  giftCardPaymentId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the gift card is voided. */
  voided?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EcomOrdersPaymentsV1ListTransactionsForMultipleOrdersRequestInput = {
  /** Order IDs for which to retrieve transactions. */
  orderIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EcomOrdersPaymentsV1ListTransactionsForMultipleOrdersResponse = {
  __typename?: 'EcomOrdersPaymentsV1ListTransactionsForMultipleOrdersResponse';
  /** List of order IDs and their associated transactions. */
  orderTransactions?: Maybe<Array<Maybe<EcomOrdersPaymentsV1OrderTransactions>>>;
};

export type EcomOrdersPaymentsV1ListTransactionsForSingleOrderRequestInput = {
  /** Order ID. */
  orderId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersPaymentsV1ListTransactionsForSingleOrderResponse = {
  __typename?: 'EcomOrdersPaymentsV1ListTransactionsForSingleOrderResponse';
  /** Order ID and its associated transactions. */
  orderTransactions?: Maybe<EcomOrdersPaymentsV1OrderTransactions>;
};

export type EcomOrdersPaymentsV1OrderTransactions = {
  __typename?: 'EcomOrdersPaymentsV1OrderTransactions';
  /** Order ID. */
  order?: Maybe<EcomOrdersV1Order>;
  /** Order ID. */
  orderId?: Maybe<Scalars['String']['output']>;
  /** Record of payments made to the merchant. */
  payments?: Maybe<Array<Maybe<EcomOrdersPaymentsV1Payment>>>;
  /** Record of refunds made to the buyer. */
  refunds?: Maybe<Array<Maybe<EcomOrdersPaymentsV1Refund>>>;
};

export type EcomOrdersPaymentsV1Payment = {
  __typename?: 'EcomOrdersPaymentsV1Payment';
  /** Payment amount. */
  amount?: Maybe<EcommercePlatformCommonPrice>;
  /** Date and time the payment was created in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. Defaults to current time when not provided. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Gift card payment details. */
  giftcardPaymentDetails?: Maybe<EcomOrdersPaymentsV1GiftCardPaymentDetails>;
  /** Payment ID. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Whether refunds for this payment are disabled.
   * + `true`: This payment is not refundable.
   * + `false`: This payment may be refunded. However, this ultimately depends on the payment provider.
   */
  refundDisabled?: Maybe<Scalars['Boolean']['output']>;
  /** Regular payment details. */
  regularPaymentDetails?: Maybe<EcomOrdersPaymentsV1RegularPaymentDetails>;
  /** Date and time the payment was last updated in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersPaymentsV1PaymentAndOrderIdInput = {
  /** Order ID. */
  orderId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Payment ID.
   * todo: remove comment once UI will use BulkMarkOrderAsPaid
   */
  paymentId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersPaymentsV1PaymentInput = {
  /** Payment amount. */
  amount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Date and time the payment was created in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. Defaults to current time when not provided. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Gift card payment details. */
  giftcardPaymentDetails?: InputMaybe<EcomOrdersPaymentsV1GiftCardPaymentDetailsInput>;
  /** Payment ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * Whether refunds for this payment are disabled.
   * + `true`: This payment is not refundable.
   * + `false`: This payment may be refunded. However, this ultimately depends on the payment provider.
   */
  refundDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Regular payment details. */
  regularPaymentDetails?: InputMaybe<EcomOrdersPaymentsV1RegularPaymentDetailsInput>;
  /** Date and time the payment was last updated in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersPaymentsV1PaymentRefundInput = {
  /** Refund amount. Not relevant for membership refunds. */
  amount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /**
   * Whether refund is made externally and manually (on the payment provider's side)
   * When false (default), the payment gateway will be called in order to make an actual refund, and then the payment will be marked as refunded.
   * When true, the payment will only be *marked* as refunded, and no actual refund will be performed.
   */
  externalRefund?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific payment within the order to refund */
  paymentId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersPaymentsV1Refund = {
  __typename?: 'EcomOrdersPaymentsV1Refund';
  /** Date and time the refund was created in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. Defaults to current time when not provided. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Refund business details. */
  details?: Maybe<EcomOrdersPaymentsV1RefundDetails>;
  /** Refund ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** List of transactions. */
  transactions?: Maybe<Array<Maybe<EcomOrdersPaymentsV1RefundTransaction>>>;
};

export type EcomOrdersPaymentsV1RefundDetails = {
  __typename?: 'EcomOrdersPaymentsV1RefundDetails';
  /** Order line item IDs and quantities that were refunded. */
  items?: Maybe<Array<Maybe<EcomOrdersPaymentsV1RefundItem>>>;
  /** Reason for the refund, provided by customer (optional). */
  reason?: Maybe<Scalars['String']['output']>;
  /** Whether the shipping fee was also refunded. */
  shippingIncluded?: Maybe<Scalars['Boolean']['output']>;
};

export type EcomOrdersPaymentsV1RefundDetailsInput = {
  /** Order line item IDs and quantities that were refunded. */
  items?: InputMaybe<Array<InputMaybe<EcomOrdersPaymentsV1RefundItemInput>>>;
  /** Reason for the refund, provided by customer (optional). */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Whether the shipping fee was also refunded. */
  shippingIncluded?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EcomOrdersPaymentsV1RefundInput = {
  /** Date and time the refund was created in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. Defaults to current time when not provided. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Refund business details. */
  details?: InputMaybe<EcomOrdersPaymentsV1RefundDetailsInput>;
  /** Refund ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** List of transactions. */
  transactions?: InputMaybe<Array<InputMaybe<EcomOrdersPaymentsV1RefundTransactionInput>>>;
};

export type EcomOrdersPaymentsV1RefundItem = {
  __typename?: 'EcomOrdersPaymentsV1RefundItem';
  /** Line item ID the refunded line item. */
  lineItemId?: Maybe<Scalars['String']['output']>;
  /** Line item quantity refunded. */
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type EcomOrdersPaymentsV1RefundItemInput = {
  /** Line item ID the refunded line item. */
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  /** Line item quantity refunded. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type EcomOrdersPaymentsV1RefundSideEffectsInput = {
  /** Custom message added to the refund confirmation email. */
  customMessage?: InputMaybe<Scalars['String']['input']>;
  /** Inventory restock details as part of this refund. */
  restockInfo?: InputMaybe<EcomOrdersPaymentsV1RestockInfoInput>;
  /** Whether to send a refund confirmation email to the customer. */
  sendOrderRefundedEmail?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum EcomOrdersPaymentsV1RefundStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Succeeded = 'SUCCEEDED'
}

export type EcomOrdersPaymentsV1RefundTransaction = {
  __typename?: 'EcomOrdersPaymentsV1RefundTransaction';
  /** Refund amount. */
  amount?: Maybe<EcommercePlatformCommonPrice>;
  /** Whether refund was made externally and manually on the payment provider's side. */
  externalRefund?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Payment gateway's refund ID. This ID can be used with the Wix Payments [Transactions API](https://dev.wix.com/docs/rest/api-reference/wix-payments/transactions/introduction).
   * This field is only returned when the value of `external_refund` is `false`.
   */
  gatewayRefundId?: Maybe<Scalars['String']['output']>;
  /** ID of the payment associated with this refund. */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** ID of the refund in the payment provider's system. For example, at PayPal, Square, Stripe, etc. Not returned for external refunds. */
  providerRefundId?: Maybe<Scalars['String']['output']>;
  /** Refund status. */
  refundStatus?: Maybe<EcomOrdersPaymentsV1RefundStatus>;
};

export type EcomOrdersPaymentsV1RefundTransactionInput = {
  /** Refund amount. */
  amount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Whether refund was made externally and manually on the payment provider's side. */
  externalRefund?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Payment gateway's refund ID. This ID can be used with the Wix Payments [Transactions API](https://dev.wix.com/docs/rest/api-reference/wix-payments/transactions/introduction).
   * This field is only returned when the value of `external_refund` is `false`.
   */
  gatewayRefundId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the payment associated with this refund. */
  paymentId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the refund in the payment provider's system. For example, at PayPal, Square, Stripe, etc. Not returned for external refunds. */
  providerRefundId?: InputMaybe<Scalars['String']['input']>;
  /** Refund status. */
  refundStatus?: InputMaybe<EcomOrdersPaymentsV1RefundStatus>;
};

export type EcomOrdersPaymentsV1RegularPaymentDetails = {
  __typename?: 'EcomOrdersPaymentsV1RegularPaymentDetails';
  /**
   * Payment gateway's transaction ID. This ID can be used with the Wix Payments [Transactions API](https://dev.wix.com/docs/rest/api-reference/wix-payments/transactions/introduction).
   * This field is only returned when the value of `offline_payment` is `false`.
   */
  gatewayTransactionId?: Maybe<Scalars['String']['output']>;
  /** Whether the payment was made offline. For example, when using cash or when marked as paid in the Business Manager. */
  offlinePayment?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Payment method. Non-exhaustive list of supported values:
   * + `CreditCard`, `Alipay`, `AstropayCash`, `AstropayDBT`, `AstropayMBT`, `Bitcoin`, `BitPay`, `Cash`, `ConvenienceStore`, `EPay`, `Fake`, `Giropay`, `IDeal`, `InPerson`, `Klarna`, `MercadoPago`, `Netpay`, `NordeaSolo`, `Offline`, `PagSeguro`, `PayEasy`, `PayPal`, `Paysafecard`, `Paysafecash`, `PointOfSale`, `Poli`, `Privat24`, `Przelewy24`, `RapidTransfer`, `Sepa`, `Skrill`, `Sofort`, `Trustly`, `Neteller`, `Unionpay`, `UniPay`, `Yandex`
   */
  paymentMethod?: Maybe<Scalars['String']['output']>;
  /** Wix Payments order ID. */
  paymentOrderId?: Maybe<Scalars['String']['output']>;
  /** Transaction ID in the payment provider's system. For example, at PayPal, Square, Stripe, etc. Not returned for offline payments. */
  providerTransactionId?: Maybe<Scalars['String']['output']>;
  /** Payment status. */
  status?: Maybe<PaymentPayV3TransactionTransactionStatus>;
};

export type EcomOrdersPaymentsV1RegularPaymentDetailsInput = {
  /**
   * Payment gateway's transaction ID. This ID can be used with the Wix Payments [Transactions API](https://dev.wix.com/docs/rest/api-reference/wix-payments/transactions/introduction).
   * This field is only returned when the value of `offline_payment` is `false`.
   */
  gatewayTransactionId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the payment was made offline. For example, when using cash or when marked as paid in the Business Manager. */
  offlinePayment?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Payment method. Non-exhaustive list of supported values:
   * + `CreditCard`, `Alipay`, `AstropayCash`, `AstropayDBT`, `AstropayMBT`, `Bitcoin`, `BitPay`, `Cash`, `ConvenienceStore`, `EPay`, `Fake`, `Giropay`, `IDeal`, `InPerson`, `Klarna`, `MercadoPago`, `Netpay`, `NordeaSolo`, `Offline`, `PagSeguro`, `PayEasy`, `PayPal`, `Paysafecard`, `Paysafecash`, `PointOfSale`, `Poli`, `Privat24`, `Przelewy24`, `RapidTransfer`, `Sepa`, `Skrill`, `Sofort`, `Trustly`, `Neteller`, `Unionpay`, `UniPay`, `Yandex`
   */
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  /** Wix Payments order ID. */
  paymentOrderId?: InputMaybe<Scalars['String']['input']>;
  /** Transaction ID in the payment provider's system. For example, at PayPal, Square, Stripe, etc. Not returned for offline payments. */
  providerTransactionId?: InputMaybe<Scalars['String']['input']>;
  /** Payment status. */
  status?: InputMaybe<PaymentPayV3TransactionTransactionStatus>;
};

export type EcomOrdersPaymentsV1RestockInfoInput = {
  /** Restocked line items and quantities. Only relevant for `{"type": "SOME_ITEMS"}`. */
  items?: InputMaybe<Array<InputMaybe<EcomOrdersPaymentsV1RestockItemInput>>>;
  /** Restock type. */
  type?: InputMaybe<EcomOrdersPaymentsV1RestockInfoRestockType>;
};

export enum EcomOrdersPaymentsV1RestockInfoRestockType {
  AllItems = 'ALL_ITEMS',
  NoItems = 'NO_ITEMS',
  SomeItems = 'SOME_ITEMS'
}

export type EcomOrdersPaymentsV1RestockItemInput = {
  /** ID of the line item being restocked. */
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  /** Line item quantity being restocked. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type EcomOrdersPaymentsV1UpdatePaymentStatusRequestInput = {
  /** Order ID. */
  orderId?: InputMaybe<Scalars['String']['input']>;
  /** Payment ID. */
  paymentId?: InputMaybe<Scalars['String']['input']>;
  /** Payment status. */
  status?: InputMaybe<PaymentPayV3TransactionTransactionStatus>;
};

export type EcomOrdersPaymentsV1UpdatePaymentStatusResponse = {
  __typename?: 'EcomOrdersPaymentsV1UpdatePaymentStatusResponse';
  /** Order ID and its associated transactions after update. */
  orderTransactions?: Maybe<EcomOrdersPaymentsV1OrderTransactions>;
};

export type EcomOrdersV1Activity = {
  __typename?: 'EcomOrdersV1Activity';
  /** Activity author's email. */
  authorEmail?: Maybe<Scalars['String']['output']>;
  /** Activity creation date and time. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Custom activity details (optional). `activity.type` must be `CUSTOM_ACTIVITY`. */
  customActivity?: Maybe<EcomOrdersV1CustomActivity>;
  draftOrderChangesApplied?: Maybe<EcomOrdersV1DraftOrderChangesApplied>;
  /** Activity ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Merchant comment details (optional). `activity.type` must be `MERCHANT_COMMENT`. */
  merchantComment?: Maybe<EcomOrdersV1MerchantComment>;
  /** Additional info about order refunded activity (optional). `activity.type` must be `ORDER_REFUNDED`. */
  orderRefunded?: Maybe<EcomOrdersV1OrderRefunded>;
  /** Activity type. */
  type?: Maybe<EcomOrdersV1ActivityTypeEnumActivityType>;
};

export type EcomOrdersV1ActivityInput = {
  /** Activity author's email. */
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  /** Activity creation date and time. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Custom activity details (optional). `activity.type` must be `CUSTOM_ACTIVITY`. */
  customActivity?: InputMaybe<EcomOrdersV1CustomActivityInput>;
  draftOrderChangesApplied?: InputMaybe<EcomOrdersV1DraftOrderChangesAppliedInput>;
  /** Activity ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Merchant comment details (optional). `activity.type` must be `MERCHANT_COMMENT`. */
  merchantComment?: InputMaybe<EcomOrdersV1MerchantCommentInput>;
  /** Additional info about order refunded activity (optional). `activity.type` must be `ORDER_REFUNDED`. */
  orderRefunded?: InputMaybe<EcomOrdersV1OrderRefundedInput>;
  /** Activity type. */
  type?: InputMaybe<EcomOrdersV1ActivityTypeEnumActivityType>;
};

export enum EcomOrdersV1ActivityTypeEnumActivityType {
  CustomActivity = 'CUSTOM_ACTIVITY',
  DownloadLinkSent = 'DOWNLOAD_LINK_SENT',
  DraftOrderChangesApplied = 'DRAFT_ORDER_CHANGES_APPLIED',
  EmailEdited = 'EMAIL_EDITED',
  FulfillerEmailSent = 'FULFILLER_EMAIL_SENT',
  InvoiceAdded = 'INVOICE_ADDED',
  InvoiceRemoved = 'INVOICE_REMOVED',
  InvoiceSent = 'INVOICE_SENT',
  MerchantComment = 'MERCHANT_COMMENT',
  NewExchangeOrderCreated = 'NEW_EXCHANGE_ORDER_CREATED',
  OrderCanceled = 'ORDER_CANCELED',
  OrderCreatedFromExchange = 'ORDER_CREATED_FROM_EXCHANGE',
  OrderFulfilled = 'ORDER_FULFILLED',
  OrderNotFulfilled = 'ORDER_NOT_FULFILLED',
  OrderPaid = 'ORDER_PAID',
  OrderPartiallyPaid = 'ORDER_PARTIALLY_PAID',
  OrderPlaced = 'ORDER_PLACED',
  OrderRefunded = 'ORDER_REFUNDED',
  PickupReadyEmailSent = 'PICKUP_READY_EMAIL_SENT',
  ShippingAddressEdited = 'SHIPPING_ADDRESS_EDITED',
  ShippingConfirmationEmailSent = 'SHIPPING_CONFIRMATION_EMAIL_SENT',
  TrackingLinkAdded = 'TRACKING_LINK_ADDED',
  TrackingNumberAdded = 'TRACKING_NUMBER_ADDED',
  TrackingNumberEdited = 'TRACKING_NUMBER_EDITED'
}

export type EcomOrdersV1AddActivityRequestInput = {
  /** Activity info. */
  activity?: InputMaybe<EcomOrdersV1PublicActivityInput>;
  /** Order ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1AddActivityResponse = {
  __typename?: 'EcomOrdersV1AddActivityResponse';
  /**
   * ID of the added activity.
   * Use this ID to either [update](https://bo.wix.com/wix-docs/rest/ecommerce/orders/update-activity) or [delete](https://bo.wix.com/wix-docs/rest/ecommerce/orders/delete-activity) the activity.
   */
  activityId?: Maybe<Scalars['String']['output']>;
  /** Updated order. */
  order?: Maybe<EcomOrdersV1Order>;
};

export type EcomOrdersV1AdditionalFee = {
  __typename?: 'EcomOrdersV1AdditionalFee';
  /** Additional fee's unique code for future processing. */
  code?: Maybe<Scalars['String']['output']>;
  /** Additional fee's id. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Optional - Line items associated with this additional fee.
   * If no `lineItemIds` are provided, the fee will be associated with the whole cart/checkout/order.
   */
  lineItemIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Name of additional fee. */
  name?: Maybe<Scalars['String']['output']>;
  /** Additional fee's price. */
  price?: Maybe<EcommercePlatformCommonPrice>;
  /** Additional fee's price before tax. */
  priceBeforeTax?: Maybe<EcommercePlatformCommonPrice>;
  /** SPI implementer's `appId`. */
  providerAppId?: Maybe<Scalars['String']['output']>;
  /** Tax details. */
  taxDetails?: Maybe<EcomTaxItemTaxFullDetails>;
};

export type EcomOrdersV1AdditionalFeeDeltaInput = {
  /** Additional fee id. */
  additionalFeeId?: InputMaybe<Scalars['String']['input']>;
  additionalFeeRemoved?: InputMaybe<Scalars['Boolean']['input']>;
  editedAdditionalFee?: InputMaybe<EcomOrdersV1AdditionalFeeInput>;
};

export type EcomOrdersV1AdditionalFeeInput = {
  /** Additional fee's unique code for future processing. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Additional fee's id. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * Optional - Line items associated with this additional fee.
   * If no `lineItemIds` are provided, the fee will be associated with the whole cart/checkout/order.
   */
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Name of additional fee. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Additional fee's price. */
  price?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Additional fee's price before tax. */
  priceBeforeTax?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** SPI implementer's `appId`. */
  providerAppId?: InputMaybe<Scalars['String']['input']>;
  /** Tax details. */
  taxDetails?: InputMaybe<EcomTaxItemTaxFullDetailsInput>;
};

export type EcomOrdersV1AggregateOrdersRequestInput = {
  /** This is an object defining aggregation itself */
  aggregation?: InputMaybe<Scalars['JSON']['input']>;
  /** Filter applied to original data */
  filter?: InputMaybe<Scalars['JSON']['input']>;
};

export type EcomOrdersV1AggregateOrdersResponse = {
  __typename?: 'EcomOrdersV1AggregateOrdersResponse';
  aggregates?: Maybe<Scalars['JSON']['output']>;
};

export type EcomOrdersV1AppliedDiscount = {
  __typename?: 'EcomOrdersV1AppliedDiscount';
  /** Applied coupon info. */
  coupon?: Maybe<EcomOrdersV1Coupon>;
  /** Automatic Discount */
  discountRule?: Maybe<EcomOrdersV1DiscountRule>;
  /**
   * Discount type.
   * * `"GLOBAL"` - discount applies to entire order.
   * * `"SPECIFIC-ITEMS"` - discount applies to specific items.
   * * `"SHIPPING"` - discount applies to shipping. For example, free shipping.
   */
  discountType?: Maybe<EcomOrdersV1AppliedDiscountDiscountType>;
  /** Discount id. */
  id?: Maybe<Scalars['String']['output']>;
  /** IDs of line items discount applies to. */
  lineItemIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Merchant discount. */
  merchantDiscount?: Maybe<EcomOrdersV1MerchantDiscount>;
};

export type EcomOrdersV1AppliedDiscountDeltaInput = {
  /** Discount id. */
  discountId?: InputMaybe<Scalars['String']['input']>;
  discountRemoved?: InputMaybe<Scalars['Boolean']['input']>;
  editedDiscount?: InputMaybe<EcomOrdersV1AppliedDiscountInput>;
};

export enum EcomOrdersV1AppliedDiscountDiscountType {
  Global = 'GLOBAL',
  Shipping = 'SHIPPING',
  SpecificItems = 'SPECIFIC_ITEMS'
}

export type EcomOrdersV1AppliedDiscountInput = {
  /** Applied coupon info. */
  coupon?: InputMaybe<EcomOrdersV1CouponInput>;
  /** Automatic Discount */
  discountRule?: InputMaybe<EcomOrdersV1DiscountRuleInput>;
  /**
   * Discount type.
   * * `"GLOBAL"` - discount applies to entire order.
   * * `"SPECIFIC-ITEMS"` - discount applies to specific items.
   * * `"SHIPPING"` - discount applies to shipping. For example, free shipping.
   */
  discountType?: InputMaybe<EcomOrdersV1AppliedDiscountDiscountType>;
  /** Discount id. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** IDs of line items discount applies to. */
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Merchant discount. */
  merchantDiscount?: InputMaybe<EcomOrdersV1MerchantDiscountInput>;
};

export enum EcomOrdersV1AttributionSourceEnumAttributionSource {
  FacebookAds = 'FACEBOOK_ADS',
  Unspecified = 'UNSPECIFIED'
}

export type EcomOrdersV1BulkOrderResult = {
  __typename?: 'EcomOrdersV1BulkOrderResult';
  /** Updated item. Optional - returned only if requested with `return_full_entity` set to `true`. */
  item?: Maybe<EcomOrdersV1Order>;
  /** Item metadata. */
  itemMetadata?: Maybe<CommonItemMetadata>;
};

export type EcomOrdersV1BuyerInfo = {
  __typename?: 'EcomOrdersV1BuyerInfo';
  /** Contact ID. Auto-created if one does not yet exist. For more information, see [Contacts API](https://dev.wix.com/api/rest/contacts/contacts/introduction). */
  contactId?: Maybe<Scalars['String']['output']>;
  /** Buyer email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** Member ID (if site visitor is a site member). */
  member?: Maybe<MembersMember>;
  /** Member ID (if site visitor is a site member). */
  memberId?: Maybe<Scalars['String']['output']>;
  /** Visitor ID (if site visitor is not a member). */
  visitorId?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersV1BuyerInfoInput = {
  /** Contact ID. Auto-created if one does not yet exist. For more information, see [Contacts API](https://dev.wix.com/api/rest/contacts/contacts/introduction). */
  contactId?: InputMaybe<Scalars['String']['input']>;
  /** Buyer email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Member ID (if site visitor is a site member). */
  memberId?: InputMaybe<Scalars['String']['input']>;
  /** Visitor ID (if site visitor is not a member). */
  visitorId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1CancelOrderRequestInput = {
  /** Custom note to be added to the email (optional). */
  customMessage?: InputMaybe<Scalars['String']['input']>;
  /** Order ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Whether to restock all items in the order. This will only apply to products in the Wix Stores inventory. */
  restockAllItems?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send an order canceled email to the buyer. */
  sendOrderCanceledEmail?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EcomOrdersV1CancelOrderResponse = {
  __typename?: 'EcomOrdersV1CancelOrderResponse';
  /** Canceled order. */
  order?: Maybe<EcomOrdersV1Order>;
};

export type EcomOrdersV1ChannelInfo = {
  __typename?: 'EcomOrdersV1ChannelInfo';
  /** Reference to an order ID from an external system. */
  externalOrderId?: Maybe<Scalars['String']['output']>;
  /** URL to the order in the external system. */
  externalOrderUrl?: Maybe<Scalars['String']['output']>;
  /** Sales channel that submitted the order. */
  type?: Maybe<EcommercePlatformCommonChannelType>;
};

export type EcomOrdersV1ChannelInfoInput = {
  /** Reference to an order ID from an external system. */
  externalOrderId?: InputMaybe<Scalars['String']['input']>;
  /** URL to the order in the external system. */
  externalOrderUrl?: InputMaybe<Scalars['String']['input']>;
  /** Sales channel that submitted the order. */
  type?: InputMaybe<EcommercePlatformCommonChannelType>;
};

export type EcomOrdersV1CommitDeltasRequestInput = {
  /** Draft order changes to be applied */
  changes?: InputMaybe<EcomOrdersV1DraftOrderDiffsInput>;
  /** Side-effects to happen after order is updated */
  commitSettings?: InputMaybe<EcomOrdersV1DraftOrderCommitSettingsInput>;
  /**
   * Draft order Id representing this change.
   * Use this ID to get this specific draft content. call .../v1/draft-orders/{draft_order_id}/get
   */
  draftOrderId?: InputMaybe<Scalars['String']['input']>;
  /** Order id to be updated */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Reason for edit, given by user (optional). */
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1CommitDeltasResponse = {
  __typename?: 'EcomOrdersV1CommitDeltasResponse';
  /** Order after deltas are applied */
  order?: Maybe<EcomOrdersV1Order>;
};

export type EcomOrdersV1Coupon = {
  __typename?: 'EcomOrdersV1Coupon';
  /** Coupon value. */
  amount?: Maybe<EcommercePlatformCommonPrice>;
  /** Coupon code. */
  code?: Maybe<Scalars['String']['output']>;
  /** Coupon ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Coupon name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersV1CouponInput = {
  /** Coupon value. */
  amount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Coupon code. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Coupon ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Coupon name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1CreateOrderRequestInput = {
  /** Order info. */
  order?: InputMaybe<EcomOrdersV1OrderInput>;
};

export type EcomOrdersV1CreateOrderResponse = {
  __typename?: 'EcomOrdersV1CreateOrderResponse';
  /** Newly created order. */
  order?: Maybe<EcomOrdersV1Order>;
};

export type EcomOrdersV1CreatedBy = {
  __typename?: 'EcomOrdersV1CreatedBy';
  /** App ID - when the order was created by an external application. */
  appId?: Maybe<Scalars['String']['output']>;
  /** Member ID - when the order was created by a **logged in** site visitor. */
  memberId?: Maybe<Scalars['String']['output']>;
  /**
   * User ID - when the order was created by a Wix user on behalf of a buyer.
   * For example, via POS (point of service).
   */
  userId?: Maybe<Scalars['String']['output']>;
  /** Visitor ID - when the order was created by a site visitor that was **not** logged in. */
  visitorId?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersV1CreatedByInput = {
  /** App ID - when the order was created by an external application. */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** Member ID - when the order was created by a **logged in** site visitor. */
  memberId?: InputMaybe<Scalars['String']['input']>;
  /**
   * User ID - when the order was created by a Wix user on behalf of a buyer.
   * For example, via POS (point of service).
   */
  userId?: InputMaybe<Scalars['String']['input']>;
  /** Visitor ID - when the order was created by a site visitor that was **not** logged in. */
  visitorId?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1CustomActivity = {
  __typename?: 'EcomOrdersV1CustomActivity';
  /** Additional data in key-value form. For example, `{ "Ticket number": "123456" }`. */
  additionalData?: Maybe<Scalars['JSON']['output']>;
  /** ID of the app that created the custom activity. */
  appId?: Maybe<Scalars['String']['output']>;
  /** Custom activity type. For example, `"Ticket number set"`. */
  type?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersV1CustomActivityInput = {
  /** Additional data in key-value form. For example, `{ "Ticket number": "123456" }`. */
  additionalData?: InputMaybe<Scalars['JSON']['input']>;
  /** ID of the app that created the custom activity. */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** Custom activity type. For example, `"Ticket number set"`. */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1CustomField = {
  __typename?: 'EcomOrdersV1CustomField';
  /** Custom field title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Translated custom field title. */
  translatedTitle?: Maybe<Scalars['String']['output']>;
  /** Custom field value. */
  value?: Maybe<Scalars['JSON']['output']>;
};

export type EcomOrdersV1CustomFieldInput = {
  /** Custom field title. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Translated custom field title. */
  translatedTitle?: InputMaybe<Scalars['String']['input']>;
  /** Custom field value. */
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type EcomOrdersV1DeleteActivityRequestInput = {
  /** ID of the activity to delete. */
  activityId?: InputMaybe<Scalars['String']['input']>;
  /** Order ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1DeleteActivityResponse = {
  __typename?: 'EcomOrdersV1DeleteActivityResponse';
  /** Updated order. */
  order?: Maybe<EcomOrdersV1Order>;
};

export type EcomOrdersV1DeliveryLogistics = {
  __typename?: 'EcomOrdersV1DeliveryLogistics';
  /** Deprecated - Latest expected delivery date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
  deliverByDate?: Maybe<Scalars['String']['output']>;
  /** Expected delivery time in free text. For example, `"3-5 business days"`. */
  deliveryTime?: Maybe<Scalars['String']['output']>;
  /** Instructions for carrier. For example, `"Please knock on the door. If unanswered, please call contact number. Thanks."`. */
  instructions?: Maybe<Scalars['String']['output']>;
  /** Pickup details. */
  pickupDetails?: Maybe<EcomOrdersV1PickupDetails>;
  /** Shipping address and contact details. */
  shippingDestination?: Maybe<EcommercePlatformCommonAddressWithContact>;
};

export type EcomOrdersV1DeliveryLogisticsInput = {
  /** Deprecated - Latest expected delivery date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
  deliverByDate?: InputMaybe<Scalars['String']['input']>;
  /** Expected delivery time in free text. For example, `"3-5 business days"`. */
  deliveryTime?: InputMaybe<Scalars['String']['input']>;
  /** Instructions for carrier. For example, `"Please knock on the door. If unanswered, please call contact number. Thanks."`. */
  instructions?: InputMaybe<Scalars['String']['input']>;
  /** Pickup details. */
  pickupDetails?: InputMaybe<EcomOrdersV1PickupDetailsInput>;
  /** Shipping address and contact details. */
  shippingDestination?: InputMaybe<EcommercePlatformCommonAddressWithContactInput>;
};

export enum EcomOrdersV1DeltaPaymentOptionType {
  /** The entire payment for given item will happen after the checkout. */
  FullPaymentOffline = 'FULL_PAYMENT_OFFLINE',
  /**
   * Payment for this item can only be done using a membership and must be manually redeemed in the dashboard by the site owner.
   * Note: when this option is used, price will be 0.
   */
  MembershipOffline = 'MEMBERSHIP_OFFLINE',
  /** irrelevant */
  UnknownPaymentOption = 'UNKNOWN_PAYMENT_OPTION'
}

export type EcomOrdersV1DiscountRule = {
  __typename?: 'EcomOrdersV1DiscountRule';
  /** Discount value. */
  amount?: Maybe<EcommercePlatformCommonPrice>;
  /** Discount rule ID */
  discountRule?: Maybe<EcomDiscountsDiscountRule>;
  /** Discount rule ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Discount rule name */
  name?: Maybe<EcomOrdersV1DiscountRuleName>;
};

export type EcomOrdersV1DiscountRuleInput = {
  /** Discount value. */
  amount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Discount rule ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Discount rule name */
  name?: InputMaybe<EcomOrdersV1DiscountRuleNameInput>;
};

export type EcomOrdersV1DiscountRuleName = {
  __typename?: 'EcomOrdersV1DiscountRuleName';
  /** Original discount rule name (in site's default language). */
  original?: Maybe<Scalars['String']['output']>;
  /** Translated discount rule name according to buyer language. Defaults to `original` when not provided. */
  translated?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersV1DiscountRuleNameInput = {
  /** Original discount rule name (in site's default language). */
  original?: InputMaybe<Scalars['String']['input']>;
  /** Translated discount rule name according to buyer language. Defaults to `original` when not provided. */
  translated?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1DraftOrderChangesApplied = {
  __typename?: 'EcomOrdersV1DraftOrderChangesApplied';
  /** Changes applied to order. */
  changes?: Maybe<Array<Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesOrderChange>>>;
  /** Draft order id. */
  draftOrderId?: Maybe<Scalars['String']['output']>;
  /** Reason for edit, given by user (optional). */
  reason?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersV1DraftOrderChangesAppliedInput = {
  /** Changes applied to order. */
  changes?: InputMaybe<Array<InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesOrderChangeInput>>>;
  /** Draft order id. */
  draftOrderId?: InputMaybe<Scalars['String']['input']>;
  /** Reason for edit, given by user (optional). */
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesLineItemAmount = {
  __typename?: 'EcomOrdersV1DraftOrderChangesAppliedTypesLineItemAmount';
  /** Amount associated with this item. (Discount amount for item / additional fee amount for item) */
  amount?: Maybe<EcommercePlatformCommonPrice>;
  /** Order line item id */
  id?: Maybe<Scalars['String']['output']>;
  /** Item name. */
  name?: Maybe<EcommerceCatalogSpiV1ProductName>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesLineItemAmountInput = {
  /** Amount associated with this item. (Discount amount for item / additional fee amount for item) */
  amount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Order line item id */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Item name. */
  name?: InputMaybe<EcommerceCatalogSpiV1ProductNameInput>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesLineItemChanges = {
  __typename?: 'EcomOrdersV1DraftOrderChangesAppliedTypesLineItemChanges';
  /** Line item ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Item name. */
  name?: Maybe<EcommerceCatalogSpiV1ProductName>;
  /** Item price change. */
  price?: Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesLineItemPriceChange>;
  /** Item quantity change. */
  quantity?: Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesLineItemQuantityChange>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesLineItemChangesInput = {
  /** Line item ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Item name. */
  name?: InputMaybe<EcommerceCatalogSpiV1ProductNameInput>;
  /** Item price change. */
  price?: InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesLineItemPriceChangeInput>;
  /** Item quantity change. */
  quantity?: InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesLineItemQuantityChangeInput>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesLineItemPriceChange = {
  __typename?: 'EcomOrdersV1DraftOrderChangesAppliedTypesLineItemPriceChange';
  /** Item price after update. */
  newPrice?: Maybe<EcommercePlatformCommonPrice>;
  /** Item price before update. */
  originalPrice?: Maybe<EcommercePlatformCommonPrice>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesLineItemPriceChangeInput = {
  /** Item price after update. */
  newPrice?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Item price before update. */
  originalPrice?: InputMaybe<EcommercePlatformCommonPriceInput>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesLineItemQuantityChange = {
  __typename?: 'EcomOrdersV1DraftOrderChangesAppliedTypesLineItemQuantityChange';
  /** Type of quantity change: increase or decrease. */
  deltaType?: Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesLineItemQuantityChangeLineItemQuantityChangeType>;
  /** Difference between original and new quantity. Absolute value. */
  diff?: Maybe<Scalars['Int']['output']>;
  /** Item quantity after update. */
  newQuantity?: Maybe<Scalars['Int']['output']>;
  /** Item quantity before update. */
  originalQuantity?: Maybe<Scalars['Int']['output']>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesLineItemQuantityChangeInput = {
  /** Type of quantity change: increase or decrease. */
  deltaType?: InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesLineItemQuantityChangeLineItemQuantityChangeType>;
  /** Difference between original and new quantity. Absolute value. */
  diff?: InputMaybe<Scalars['Int']['input']>;
  /** Item quantity after update. */
  newQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Item quantity before update. */
  originalQuantity?: InputMaybe<Scalars['Int']['input']>;
};

export enum EcomOrdersV1DraftOrderChangesAppliedTypesLineItemQuantityChangeLineItemQuantityChangeType {
  QuantityDecreased = 'QUANTITY_DECREASED',
  QuantityIncreased = 'QUANTITY_INCREASED'
}

export type EcomOrdersV1DraftOrderChangesAppliedTypesManagedAdditionalFee = {
  __typename?: 'EcomOrdersV1DraftOrderChangesAppliedTypesManagedAdditionalFee';
  /** Line items additional fee applies to. */
  affectedLineItems?: Maybe<Array<Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesLineItemAmount>>>;
  /** Additional fee id. */
  id?: Maybe<Scalars['String']['output']>;
  /** Additional fee name. */
  name?: Maybe<EcomOrdersV1TranslatedValue>;
  /** Additional fee amount. */
  totalAmount?: Maybe<EcommercePlatformCommonPrice>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesManagedAdditionalFeeInput = {
  /** Line items additional fee applies to. */
  affectedLineItems?: InputMaybe<Array<InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesLineItemAmountInput>>>;
  /** Additional fee id. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Additional fee name. */
  name?: InputMaybe<EcomOrdersV1TranslatedValueInput>;
  /** Additional fee amount. */
  totalAmount?: InputMaybe<EcommercePlatformCommonPriceInput>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesManagedDiscount = {
  __typename?: 'EcomOrdersV1DraftOrderChangesAppliedTypesManagedDiscount';
  /** Line items discount applies to. */
  affectedLineItems?: Maybe<Array<Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesLineItemAmount>>>;
  /** Discount id. */
  id?: Maybe<Scalars['String']['output']>;
  /** Discount name: coupon name / discount rule name / merchant discount description. */
  name?: Maybe<EcomOrdersV1TranslatedValue>;
  /** Discount amount. */
  totalAmount?: Maybe<EcommercePlatformCommonPrice>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesManagedDiscountInput = {
  /** Line items discount applies to. */
  affectedLineItems?: InputMaybe<Array<InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesLineItemAmountInput>>>;
  /** Discount id. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Discount name: coupon name / discount rule name / merchant discount description. */
  name?: InputMaybe<EcomOrdersV1TranslatedValueInput>;
  /** Discount amount. */
  totalAmount?: InputMaybe<EcommercePlatformCommonPriceInput>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesManagedLineItem = {
  __typename?: 'EcomOrdersV1DraftOrderChangesAppliedTypesManagedLineItem';
  /** Line item ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Item name. */
  name?: Maybe<EcommerceCatalogSpiV1ProductName>;
  /** Added or removed item quantity. */
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesManagedLineItemInput = {
  /** Line item ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Item name. */
  name?: InputMaybe<EcommerceCatalogSpiV1ProductNameInput>;
  /** Added or removed item quantity. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesOrderChange = {
  __typename?: 'EcomOrdersV1DraftOrderChangesAppliedTypesOrderChange';
  additionalFeeAdded?: Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesManagedAdditionalFee>;
  additionalFeeRemoved?: Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesManagedAdditionalFee>;
  discountAdded?: Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesManagedDiscount>;
  discountRemoved?: Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesManagedDiscount>;
  lineItemAdded?: Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesManagedLineItem>;
  lineItemChanged?: Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesLineItemChanges>;
  lineItemRemoved?: Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesManagedLineItem>;
  totalPriceChanged?: Maybe<EcomOrdersV1DraftOrderChangesAppliedTypesTotalPriceChange>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesOrderChangeInput = {
  additionalFeeAdded?: InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesManagedAdditionalFeeInput>;
  additionalFeeRemoved?: InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesManagedAdditionalFeeInput>;
  discountAdded?: InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesManagedDiscountInput>;
  discountRemoved?: InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesManagedDiscountInput>;
  lineItemAdded?: InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesManagedLineItemInput>;
  lineItemChanged?: InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesLineItemChangesInput>;
  lineItemRemoved?: InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesManagedLineItemInput>;
  totalPriceChanged?: InputMaybe<EcomOrdersV1DraftOrderChangesAppliedTypesTotalPriceChangeInput>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesTotalPriceChange = {
  __typename?: 'EcomOrdersV1DraftOrderChangesAppliedTypesTotalPriceChange';
  /** Order’s total price after discounts and tax. After update */
  newTotal?: Maybe<EcommercePlatformCommonPrice>;
  /** Order’s total price after discounts and tax. Before update */
  originalTotal?: Maybe<EcommercePlatformCommonPrice>;
};

export type EcomOrdersV1DraftOrderChangesAppliedTypesTotalPriceChangeInput = {
  /** Order’s total price after discounts and tax. After update */
  newTotal?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Order’s total price after discounts and tax. Before update */
  originalTotal?: InputMaybe<EcommercePlatformCommonPriceInput>;
};

export type EcomOrdersV1DraftOrderCommitSettingsInput = {
  /** If false,do not add activities to the order. Default is true. */
  addActivitiesToOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Inventory changes to be applied. Either to restock, or decrease. */
  inventoryUpdates?: InputMaybe<Array<InputMaybe<EcomOrdersV1InventoryUpdateDetailsInput>>>;
  /** If false, do not send notifications to business. Default is true. */
  sendNotificationsToBusiness?: InputMaybe<Scalars['Boolean']['input']>;
  /** If false, do not send notifications to buyer. Default is true. */
  sendNotificationsToBuyer?: InputMaybe<Scalars['Boolean']['input']>;
  /** If false, do not send mails to custom fulfillers in case of a change of shippable items fulfilled by custom fulfillers. Default is true. */
  sendNotificationsToCustomFulfillers?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EcomOrdersV1DraftOrderDiffsInput = {
  /** Added/updated/removed additional fee. */
  additionalFees?: InputMaybe<Array<InputMaybe<EcomOrdersV1AdditionalFeeDeltaInput>>>;
  /**
   * Added/updated/removed discounts.
   * todo: set (.wix.api.maxSize). need to find it. existing : merchant can have 100 + 1 coupon + ? due to automatic discounts
   */
  appliedDiscounts?: InputMaybe<Array<InputMaybe<EcomOrdersV1AppliedDiscountDeltaInput>>>;
  /** Shipping info and selected shipping option details. */
  changedShippingInfo?: InputMaybe<EcomOrdersV1ShippingInformationInput>;
  /** Added/updated/removed order line items. */
  lineItems?: InputMaybe<Array<InputMaybe<EcomOrdersV1LineItemDeltaInput>>>;
  /**
   * Updated order price summary. overwrites existing price summary.
   * balance will be updated automatically.
   */
  priceSummary?: InputMaybe<EcomOrdersV1PriceSummaryInput>;
  /** Remove existing shipping info. */
  shippingInfoRemoved?: InputMaybe<Scalars['Boolean']['input']>;
  /** Updated Tax summary. overwrites existing tax summary. */
  taxSummary?: InputMaybe<EcomTaxTaxSummaryInput>;
};

export enum EcomOrdersV1FulfillmentStatus {
  /**
   * All of the order items are fulfilled or order was manually marked as fulfilled
   * Orders without shipping info are fulfilled automatically
   */
  Fulfilled = 'FULFILLED',
  /** none of the order items are fulfilled or order was manually marked as unfulfilled */
  NotFulfilled = 'NOT_FULFILLED',
  /** Some, but not all of the order items are fulfilled */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED'
}

export type EcomOrdersV1InternalQueryOrdersRequestInput = {
  /** Query options. */
  query?: InputMaybe<EcommerceCommonsPlatformQueryInput>;
};

export type EcomOrdersV1InternalQueryOrdersResponse = {
  __typename?: 'EcomOrdersV1InternalQueryOrdersResponse';
  /** Details on the paged set of results returned. */
  metadata?: Maybe<EcommerceCommonsPlatformPagingMetadata>;
  /** List of orders. */
  orders?: Maybe<Array<Maybe<EcomOrdersV1Order>>>;
};

export type EcomOrdersV1InventoryUpdateDetailsInput = {
  /** Action to be applied - decrease or restock */
  actionType?: InputMaybe<EcomOrdersV1InventoryUpdateDetailsInventoryAction>;
  /** Order line item id */
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  /** The amount to be increased or restocked */
  quantityChange?: InputMaybe<Scalars['Int']['input']>;
};

export enum EcomOrdersV1InventoryUpdateDetailsInventoryAction {
  /** Decrease inventory. Without failing on negative inventory. */
  Decrease = 'DECREASE',
  /** Restock inventory */
  Restock = 'RESTOCK'
}

export type EcomOrdersV1ItemChangedDetailsInput = {
  /** The price before the change. */
  priceBeforeChange?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** The price description before the change */
  priceDescriptionBeforeChange?: InputMaybe<EcommerceCatalogSpiV1PriceDescriptionInput>;
  /** The quantity before the change. */
  quantityBeforeChange?: InputMaybe<Scalars['Int']['input']>;
};

export type EcomOrdersV1LineItemDeltaInput = {
  /** The line item was modified. */
  changedDetails?: InputMaybe<EcomOrdersV1ItemChangedDetailsInput>;
  lineItem?: InputMaybe<EcomOrdersV1OrderLineItemChangedDetailsInput>;
  /** The line item was added. */
  lineItemAdded?: InputMaybe<Scalars['Boolean']['input']>;
  /** Line item ID. */
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  /** The line item was added. */
  lineItemRemoved?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EcomOrdersV1MerchantComment = {
  __typename?: 'EcomOrdersV1MerchantComment';
  /** Merchant comment message. */
  message?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersV1MerchantCommentInput = {
  /** Merchant comment message. */
  message?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1MerchantDiscount = {
  __typename?: 'EcomOrdersV1MerchantDiscount';
  /** Discount amount. */
  amount?: Maybe<EcommercePlatformCommonPrice>;
  /** Discount description as free text (optional). */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * Pre-defined discount reason (optional).
   * * `"ITEMS_EXCHANGE"` - exchange balance acquired as a result of items exchange.
   */
  discountReason?: Maybe<EcomOrdersV1MerchantDiscountDiscountReason>;
};

export enum EcomOrdersV1MerchantDiscountDiscountReason {
  ExchangedItems = 'EXCHANGED_ITEMS',
  Unspecified = 'UNSPECIFIED'
}

export type EcomOrdersV1MerchantDiscountInput = {
  /** Discount amount. */
  amount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Discount description as free text (optional). */
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pre-defined discount reason (optional).
   * * `"ITEMS_EXCHANGE"` - exchange balance acquired as a result of items exchange.
   */
  discountReason?: InputMaybe<EcomOrdersV1MerchantDiscountDiscountReason>;
};

export type EcomOrdersV1Order = {
  __typename?: 'EcomOrdersV1Order';
  /** Order activities. */
  activities?: Maybe<Array<Maybe<EcomOrdersV1Activity>>>;
  /** Additional fees applied to the order. */
  additionalFees?: Maybe<Array<Maybe<EcomOrdersV1AdditionalFee>>>;
  /** Applied discounts. */
  appliedDiscounts?: Maybe<Array<Maybe<EcomOrdersV1AppliedDiscount>>>;
  /** Whether order is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Order attribution source. */
  attributionSource?: Maybe<EcomOrdersV1AttributionSourceEnumAttributionSource>;
  /** Billing address and contact details. */
  billingInfo?: Maybe<EcommercePlatformCommonAddressWithContact>;
  /** Buyer information. */
  buyerInfo?: Maybe<EcomOrdersV1BuyerInfo>;
  /**
   * Language for communication with the buyer. Defaults to the site language.
   * For a site that supports multiple languages, this is the language the buyer selected.
   */
  buyerLanguage?: Maybe<Scalars['String']['output']>;
  /** [Buyer note](https://support.wix.com/en/article/wix-stores-viewing-buyer-notes) left by the customer. */
  buyerNote?: Maybe<Scalars['String']['output']>;
  /** Information about the sales channel that submitted this order. */
  channelInfo?: Maybe<EcomOrdersV1ChannelInfo>;
  /** Checkout ID. */
  checkoutId?: Maybe<Scalars['String']['output']>;
  /** ID of the order's initiator. */
  createdBy?: Maybe<EcomOrdersV1CreatedBy>;
  /** Date and time the order was created in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Currency used for the pricing of this order in [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes) format. */
  currency?: Maybe<Scalars['String']['output']>;
  /** Custom fields. */
  customFields?: Maybe<Array<Maybe<EcomOrdersV1CustomField>>>;
  externalEnrichedLineItemsForTYP?: Maybe<EcomLineItemsEnricherSpiHostV1EnrichLineItemsForThankYouPageResponse>;
  externalTransactions?: Maybe<EcomOrdersPaymentsV1ListTransactionsForSingleOrderResponse>;
  /** Order fulfillment status. */
  fulfillmentStatus?: Maybe<EcomOrdersV1FulfillmentStatus>;
  /** Order ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Order line items. */
  lineItems?: Maybe<Array<Maybe<EcomOrdersV1OrderLineItem>>>;
  /** Order number displayed in the site owner's business manager (auto-generated). */
  number?: Maybe<Scalars['Int']['output']>;
  /**
   * Order payment status.
   * + `NOT_PAID` - This can be an order made online, but not yet paid. In such cases `order.status` will be `INITIALIZED`.
   * + This status also applies when an offline order needs to be manually marked as paid. In such cases `order.status` will be `APPROVED`.
   * + `PAID` - All payments associated with this order are paid. For online payments: [`payment.regularPaymentDetails.status: APPROVED`](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/order-transactions/order-transactions-object). For gift cards: [`payment.giftCardPaymentDetails.voided: false`](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/order-transactions/order-transactions-object).
   * + `PARTIALLY_REFUNDED` - Order was refunded, but refund amount is less than order total price.
   * + `FULLY_REFUNDED` - Order fully refunded. Refund amount equals total price.
   * + `PENDING` - Payments received but not yet confirmed by the payment provider.
   * + `PARTIALLY_PAID` -  At least one payment was received and approved, covering less than total price amount.
   */
  paymentStatus?: Maybe<EcomOrdersV1PaymentStatusEnumPaymentStatus>;
  /** Order price summary. */
  priceSummary?: Maybe<EcomOrdersV1PriceSummary>;
  /** Persistent ID that correlates between the various eCommerce elements: cart, checkout, and order. */
  purchaseFlowId?: Maybe<Scalars['String']['output']>;
  /** Whether a human has seen the order. Set when an order is clicked on in the Business Manager. */
  seenByAHuman?: Maybe<Scalars['Boolean']['output']>;
  /** Shipping info and selected shipping option details. */
  shippingInfo?: Maybe<EcomOrdersV1ShippingInformation>;
  /** Site language in which original values are shown. */
  siteLanguage?: Maybe<Scalars['String']['output']>;
  /**
   * Order status.
   * + `INITIALIZED` - Order was created, but not yet approved or declined.
   * + `APPROVED` - Order was approved. This happens when either the online payment succeeded or the order is an offline order. Once an order is approved, many side effects are triggered. For example, holding of stock in the inventory and sending of notification emails.
   * + `CANCELED` - Order was canceled by the user.
   */
  status?: Maybe<EcomOrdersV1OrderStatus>;
  /** Whether tax is included in line item prices. */
  taxIncludedInPrices?: Maybe<Scalars['Boolean']['output']>;
  /** Tax summary. */
  taxSummary?: Maybe<EcomTaxTaxSummary>;
  /** Date and time the order was last updated in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
  updatedDate?: Maybe<Scalars['String']['output']>;
  /** Weight measurement unit - defaults to site's weight unit. */
  weightUnit?: Maybe<EcommercePlatformCommonWeightUnit>;
};

export type EcomOrdersV1OrderInput = {
  /** Order activities. */
  activities?: InputMaybe<Array<InputMaybe<EcomOrdersV1ActivityInput>>>;
  /** Additional fees applied to the order. */
  additionalFees?: InputMaybe<Array<InputMaybe<EcomOrdersV1AdditionalFeeInput>>>;
  /** Applied discounts. */
  appliedDiscounts?: InputMaybe<Array<InputMaybe<EcomOrdersV1AppliedDiscountInput>>>;
  /** Whether order is archived. */
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  /** Order attribution source. */
  attributionSource?: InputMaybe<EcomOrdersV1AttributionSourceEnumAttributionSource>;
  /** Billing address and contact details. */
  billingInfo?: InputMaybe<EcommercePlatformCommonAddressWithContactInput>;
  /** Buyer information. */
  buyerInfo?: InputMaybe<EcomOrdersV1BuyerInfoInput>;
  /**
   * Language for communication with the buyer. Defaults to the site language.
   * For a site that supports multiple languages, this is the language the buyer selected.
   */
  buyerLanguage?: InputMaybe<Scalars['String']['input']>;
  /** [Buyer note](https://support.wix.com/en/article/wix-stores-viewing-buyer-notes) left by the customer. */
  buyerNote?: InputMaybe<Scalars['String']['input']>;
  /** Information about the sales channel that submitted this order. */
  channelInfo?: InputMaybe<EcomOrdersV1ChannelInfoInput>;
  /** Checkout ID. */
  checkoutId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the order's initiator. */
  createdBy?: InputMaybe<EcomOrdersV1CreatedByInput>;
  /** Date and time the order was created in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Currency used for the pricing of this order in [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes) format. */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Custom fields. */
  customFields?: InputMaybe<Array<InputMaybe<EcomOrdersV1CustomFieldInput>>>;
  /** Order fulfillment status. */
  fulfillmentStatus?: InputMaybe<EcomOrdersV1FulfillmentStatus>;
  /** Order ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Order line items. */
  lineItems?: InputMaybe<Array<InputMaybe<EcomOrdersV1OrderLineItemInput>>>;
  /** Order number displayed in the site owner's business manager (auto-generated). */
  number?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Order payment status.
   * + `NOT_PAID` - This can be an order made online, but not yet paid. In such cases `order.status` will be `INITIALIZED`.
   * + This status also applies when an offline order needs to be manually marked as paid. In such cases `order.status` will be `APPROVED`.
   * + `PAID` - All payments associated with this order are paid. For online payments: [`payment.regularPaymentDetails.status: APPROVED`](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/order-transactions/order-transactions-object). For gift cards: [`payment.giftCardPaymentDetails.voided: false`](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/order-transactions/order-transactions-object).
   * + `PARTIALLY_REFUNDED` - Order was refunded, but refund amount is less than order total price.
   * + `FULLY_REFUNDED` - Order fully refunded. Refund amount equals total price.
   * + `PENDING` - Payments received but not yet confirmed by the payment provider.
   * + `PARTIALLY_PAID` -  At least one payment was received and approved, covering less than total price amount.
   */
  paymentStatus?: InputMaybe<EcomOrdersV1PaymentStatusEnumPaymentStatus>;
  /** Order price summary. */
  priceSummary?: InputMaybe<EcomOrdersV1PriceSummaryInput>;
  /** Persistent ID that correlates between the various eCommerce elements: cart, checkout, and order. */
  purchaseFlowId?: InputMaybe<Scalars['String']['input']>;
  /** Whether a human has seen the order. Set when an order is clicked on in the Business Manager. */
  seenByAHuman?: InputMaybe<Scalars['Boolean']['input']>;
  /** Shipping info and selected shipping option details. */
  shippingInfo?: InputMaybe<EcomOrdersV1ShippingInformationInput>;
  /** Site language in which original values are shown. */
  siteLanguage?: InputMaybe<Scalars['String']['input']>;
  /**
   * Order status.
   * + `INITIALIZED` - Order was created, but not yet approved or declined.
   * + `APPROVED` - Order was approved. This happens when either the online payment succeeded or the order is an offline order. Once an order is approved, many side effects are triggered. For example, holding of stock in the inventory and sending of notification emails.
   * + `CANCELED` - Order was canceled by the user.
   */
  status?: InputMaybe<EcomOrdersV1OrderStatus>;
  /** Whether tax is included in line item prices. */
  taxIncludedInPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /** Tax summary. */
  taxSummary?: InputMaybe<EcomTaxTaxSummaryInput>;
  /** Date and time the order was last updated in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
  /** Weight measurement unit - defaults to site's weight unit. */
  weightUnit?: InputMaybe<EcommercePlatformCommonWeightUnit>;
};

export type EcomOrdersV1OrderLineItem = {
  __typename?: 'EcomOrdersV1OrderLineItem';
  /**
   * References to the line item's origin catalog.
   * This field is empty in the case of a custom line item.
   */
  catalogReference?: Maybe<EcommerceCatalogSpiV1CatalogReference>;
  /** Item's price amount to be charged during checkout, relevant for items with payment option DEPOSIT_ONLINE */
  depositAmount?: Maybe<EcommercePlatformCommonPrice>;
  /** Line item description lines. Used for display purposes for the cart, checkout and order. */
  descriptionLines?: Maybe<Array<Maybe<EcommerceCatalogSpiV1DescriptionLine>>>;
  /**
   * Fulfiller ID. Field is empty when the line item is self-fulfilled.
   * To get fulfillment information, pass the order ID to [List Fulfillments For Single Order](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/order-fulfillments/list-fulfillments-for-single-order).
   */
  fulfillerId?: Maybe<Scalars['String']['output']>;
  /** Line item ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Line item image. */
  image?: Maybe<CommonImage>;
  /** Item type. Either a preset type or custom. */
  itemType?: Maybe<EcommerceCatalogSpiV1ItemType>;
  /**
   * Type of selected payment option for current item. Defaults to `FULL_PAYMENT_ONLINE`.
   * + `FULL_PAYMENT_ONLINE` - The entire payment for this item happens as part of the checkout.
   * + `FULL_PAYMENT_OFFLINE` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
   * + `MEMBERSHIP` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is 0.
   * + `DEPOSIT_ONLINE` - Partial payment for the given item to be paid upfront during the checkout. Eligible for catalog items with type `DEPOSIT_ONLINE` only.
   */
  paymentOption?: Maybe<EcommerceCatalogSpiV1PaymentOptionType>;
  /** Physical properties of the item. When relevant, contains information such as SKU and item weight. */
  physicalProperties?: Maybe<EcommerceCatalogSpiV1PhysicalProperties>;
  /** Line item price after line item discounts for display purposes. */
  price?: Maybe<EcommercePlatformCommonPrice>;
  /** Line item price before line item discounts for display purposes. Defaults to `price` when not provided. */
  priceBeforeDiscounts?: Maybe<EcommercePlatformCommonPrice>;
  /** Additional description for the price. For example, when price is 0 but additional details about the actual price are needed - "Starts at $67". */
  priceDescription?: Maybe<EcommerceCatalogSpiV1PriceDescription>;
  /**
   * Item name.
   * + Stores - `product.name`
   * + Bookings - `service.info.name`
   * + Events - `ticket.name`
   */
  productName?: Maybe<EcommerceCatalogSpiV1ProductName>;
  /** Line item quantity. */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** quantity of inventory requested to be returned. Whether to restock or ignore the request is up the vertical. */
  restockQuantity?: Maybe<Scalars['Int']['output']>;
  /** Subscription info. */
  subscriptionInfo?: Maybe<EcomOrdersV1SubscriptionInfo>;
  /** Tax details for this line item. */
  taxDetails?: Maybe<EcomTaxItemTaxFullDetails>;
  /** Total discount for this line item's entire quantity. */
  totalDiscount?: Maybe<EcommercePlatformCommonPrice>;
  /** Total price after all discounts and tax. */
  totalPriceAfterTax?: Maybe<EcommercePlatformCommonPrice>;
  /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
  totalPriceBeforeTax?: Maybe<EcommercePlatformCommonPrice>;
};

export type EcomOrdersV1OrderLineItemChangedDetailsInput = {
  /**
   * References to the line item's origin catalog.
   * This field is empty in the case of a custom line item.
   */
  catalogReference?: InputMaybe<EcommerceCatalogSpiV1CatalogReferenceInput>;
  /** Line item description lines. Used for display purposes for the cart, checkout and order. */
  descriptionLines?: InputMaybe<Array<InputMaybe<EcommerceCatalogSpiV1DescriptionLineInput>>>;
  /**
   * Fulfiller ID. Field is empty when the line item is self-fulfilled.
   * To get fulfillment information, pass this order's ID to [List Fulfillments For Single Order](https://bo.wix.com/wix-docs/rest/ecommerce/order-fulfillments/list-fulfillments-for-single-order).
   */
  fulfillerId?: InputMaybe<Scalars['String']['input']>;
  /** Line item image. */
  image?: InputMaybe<CommonImageInput>;
  /** Item type. Either a preset type or custom. */
  itemType?: InputMaybe<EcommerceCatalogSpiV1ItemTypeInput>;
  /**
   * Type of selected payment option for current item. Defaults to `FULL_PAYMENT_ONLINE`.
   * + `FULL_PAYMENT_OFFLINE` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
   * + `MEMBERSHIP` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is 0.
   */
  paymentOption?: InputMaybe<EcomOrdersV1DeltaPaymentOptionType>;
  /** Physical properties of the item. When relevant, contains information such as SKU and item weight. */
  physicalProperties?: InputMaybe<EcommerceCatalogSpiV1PhysicalPropertiesInput>;
  /** Line item price after line item discounts for display purposes. */
  price?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Line item price before line item discounts for display purposes. Defaults to `price` when not provided. */
  priceBeforeDiscounts?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Additional description for the price. For example, when price is 0 but additional details about the actual price are needed - "Starts at $67". */
  priceDescription?: InputMaybe<EcommerceCatalogSpiV1PriceDescriptionInput>;
  /**
   * Item name.
   * + Stores - `product.name`
   * + Bookings - `service.info.name`
   * + Events - `ticket.name`
   */
  productName?: InputMaybe<EcommerceCatalogSpiV1ProductNameInput>;
  /** Line item quantity. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** Tax details for this line item. */
  taxDetails?: InputMaybe<EcomTaxItemTaxFullDetailsInput>;
  /** Total discount for this line item's entire quantity. */
  totalDiscount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Total price after all discounts and tax. */
  totalPriceAfterTax?: InputMaybe<EcommercePlatformCommonPriceInput>;
};

export type EcomOrdersV1OrderLineItemInput = {
  /**
   * References to the line item's origin catalog.
   * This field is empty in the case of a custom line item.
   */
  catalogReference?: InputMaybe<EcommerceCatalogSpiV1CatalogReferenceInput>;
  /** Item's price amount to be charged during checkout, relevant for items with payment option DEPOSIT_ONLINE */
  depositAmount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Line item description lines. Used for display purposes for the cart, checkout and order. */
  descriptionLines?: InputMaybe<Array<InputMaybe<EcommerceCatalogSpiV1DescriptionLineInput>>>;
  /**
   * Fulfiller ID. Field is empty when the line item is self-fulfilled.
   * To get fulfillment information, pass the order ID to [List Fulfillments For Single Order](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/order-fulfillments/list-fulfillments-for-single-order).
   */
  fulfillerId?: InputMaybe<Scalars['String']['input']>;
  /** Line item ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Line item image. */
  image?: InputMaybe<CommonImageInput>;
  /** Item type. Either a preset type or custom. */
  itemType?: InputMaybe<EcommerceCatalogSpiV1ItemTypeInput>;
  /**
   * Type of selected payment option for current item. Defaults to `FULL_PAYMENT_ONLINE`.
   * + `FULL_PAYMENT_ONLINE` - The entire payment for this item happens as part of the checkout.
   * + `FULL_PAYMENT_OFFLINE` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
   * + `MEMBERSHIP` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is 0.
   * + `DEPOSIT_ONLINE` - Partial payment for the given item to be paid upfront during the checkout. Eligible for catalog items with type `DEPOSIT_ONLINE` only.
   */
  paymentOption?: InputMaybe<EcommerceCatalogSpiV1PaymentOptionType>;
  /** Physical properties of the item. When relevant, contains information such as SKU and item weight. */
  physicalProperties?: InputMaybe<EcommerceCatalogSpiV1PhysicalPropertiesInput>;
  /** Line item price after line item discounts for display purposes. */
  price?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Line item price before line item discounts for display purposes. Defaults to `price` when not provided. */
  priceBeforeDiscounts?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Additional description for the price. For example, when price is 0 but additional details about the actual price are needed - "Starts at $67". */
  priceDescription?: InputMaybe<EcommerceCatalogSpiV1PriceDescriptionInput>;
  /**
   * Item name.
   * + Stores - `product.name`
   * + Bookings - `service.info.name`
   * + Events - `ticket.name`
   */
  productName?: InputMaybe<EcommerceCatalogSpiV1ProductNameInput>;
  /** Line item quantity. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** quantity of inventory requested to be returned. Whether to restock or ignore the request is up the vertical. */
  restockQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Subscription info. */
  subscriptionInfo?: InputMaybe<EcomOrdersV1SubscriptionInfoInput>;
  /** Tax details for this line item. */
  taxDetails?: InputMaybe<EcomTaxItemTaxFullDetailsInput>;
  /** Total discount for this line item's entire quantity. */
  totalDiscount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Total price after all discounts and tax. */
  totalPriceAfterTax?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
  totalPriceBeforeTax?: InputMaybe<EcommercePlatformCommonPriceInput>;
};

export type EcomOrdersV1OrderRefunded = {
  __typename?: 'EcomOrdersV1OrderRefunded';
  /** Refund amount. */
  amount?: Maybe<EcommercePlatformCommonPrice>;
  /** Whether order was refunded manually. For example, via payment provider or using cash. */
  manual?: Maybe<Scalars['Boolean']['output']>;
  /** Reason for refund. */
  reason?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersV1OrderRefundedInput = {
  /** Refund amount. */
  amount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Whether order was refunded manually. For example, via payment provider or using cash. */
  manual?: InputMaybe<Scalars['Boolean']['input']>;
  /** Reason for refund. */
  reason?: InputMaybe<Scalars['String']['input']>;
};

export enum EcomOrdersV1OrderStatus {
  Approved = 'APPROVED',
  Canceled = 'CANCELED',
  Initialized = 'INITIALIZED'
}

export enum EcomOrdersV1PaymentStatusEnumPaymentStatus {
  /** Full order total price was refunded */
  FullyRefunded = 'FULLY_REFUNDED',
  /** Order is not paid */
  NotPaid = 'NOT_PAID',
  /** Order is paid */
  Paid = 'PAID',
  /** At least one payment was received and approved, covering less than total price amount */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** Order was refunded, refund amount less than order total price */
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  /** Payments received but not yet confirmed by the payment provider */
  Pending = 'PENDING',
  Unspecified = 'UNSPECIFIED'
}

export type EcomOrdersV1PickupDetails = {
  __typename?: 'EcomOrdersV1PickupDetails';
  /** Pickup address. */
  address?: Maybe<EcommercePlatformCommonPickupAddress>;
  /** Pickup method */
  pickupMethod?: Maybe<EcomOrdersV1PickupDetailsPickupMethod>;
};

export type EcomOrdersV1PickupDetailsInput = {
  /** Pickup address. */
  address?: InputMaybe<EcommercePlatformCommonPickupAddressInput>;
  /** Pickup method */
  pickupMethod?: InputMaybe<EcomOrdersV1PickupDetailsPickupMethod>;
};

export enum EcomOrdersV1PickupDetailsPickupMethod {
  PickupPoint = 'PICKUP_POINT',
  StorePickup = 'STORE_PICKUP',
  UnknownMethod = 'UNKNOWN_METHOD'
}

export type EcomOrdersV1PriceSummary = {
  __typename?: 'EcomOrdersV1PriceSummary';
  /** Total calculated discount value. */
  discount?: Maybe<EcommercePlatformCommonPrice>;
  /** Total shipping price, before discounts and before tax. */
  shipping?: Maybe<EcommercePlatformCommonPrice>;
  /** Subtotal of all the line items, before discounts and before tax. */
  subtotal?: Maybe<EcommercePlatformCommonPrice>;
  /** Total tax on this order. */
  tax?: Maybe<EcommercePlatformCommonPrice>;
  /** Order’s total price after discounts and tax. */
  total?: Maybe<EcommercePlatformCommonPrice>;
  /** Total price of additional fees before tax. */
  totalAdditionalFees?: Maybe<EcommercePlatformCommonPrice>;
  /** Deprecated - use `total` instead. */
  totalPrice?: Maybe<EcommercePlatformCommonPrice>;
};

export type EcomOrdersV1PriceSummaryInput = {
  /** Total calculated discount value. */
  discount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Total shipping price, before discounts and before tax. */
  shipping?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Subtotal of all the line items, before discounts and before tax. */
  subtotal?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Total tax on this order. */
  tax?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Order’s total price after discounts and tax. */
  total?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Total price of additional fees before tax. */
  totalAdditionalFees?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Deprecated - use `total` instead. */
  totalPrice?: InputMaybe<EcommercePlatformCommonPriceInput>;
};

export type EcomOrdersV1PublicActivityInput = {
  /** Custom activity details. */
  customActivity?: InputMaybe<EcomOrdersV1CustomActivityInput>;
  /** Merchant commment. */
  merchantComment?: InputMaybe<EcomOrdersV1MerchantCommentInput>;
};

export type EcomOrdersV1QueryOrderRequestInput = {
  /** Query options. */
  query?: InputMaybe<EcommerceCommonsPlatformQueryInput>;
};

export type EcomOrdersV1QueryOrderResponse = {
  __typename?: 'EcomOrdersV1QueryOrderResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<EcomOrdersV1Order>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type EcomOrdersV1ShippingInformation = {
  __typename?: 'EcomOrdersV1ShippingInformation';
  /** App Def Id of external provider which was a source of shipping info */
  carrierId?: Maybe<Scalars['String']['output']>;
  /** Unique code (or ID) of selected shipping option. For example, `"usps_std_overnight"``. */
  code?: Maybe<Scalars['String']['output']>;
  /** Shipping costs. */
  cost?: Maybe<EcomOrdersV1ShippingPrice>;
  /** Shipping logistics. */
  logistics?: Maybe<EcomOrdersV1DeliveryLogistics>;
  /** Shipping region. */
  region?: Maybe<EcomOrdersV1ShippingRegion>;
  /**
   * Shipping option title.
   * For example, `"USPS Standard Overnight Delivery"`, `"Standard"` or `"First-Class Package International"`.
   */
  title?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersV1ShippingInformationInput = {
  /** App Def Id of external provider which was a source of shipping info */
  carrierId?: InputMaybe<Scalars['String']['input']>;
  /** Unique code (or ID) of selected shipping option. For example, `"usps_std_overnight"``. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Shipping costs. */
  cost?: InputMaybe<EcomOrdersV1ShippingPriceInput>;
  /** Shipping logistics. */
  logistics?: InputMaybe<EcomOrdersV1DeliveryLogisticsInput>;
  /** Shipping region. */
  region?: InputMaybe<EcomOrdersV1ShippingRegionInput>;
  /**
   * Shipping option title.
   * For example, `"USPS Standard Overnight Delivery"`, `"Standard"` or `"First-Class Package International"`.
   */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1ShippingPrice = {
  __typename?: 'EcomOrdersV1ShippingPrice';
  /** Shipping discount before tax. */
  discount?: Maybe<EcommercePlatformCommonPrice>;
  /** Shipping price for display purposes. */
  price?: Maybe<EcommercePlatformCommonPrice>;
  /** Tax details. */
  taxDetails?: Maybe<EcomTaxItemTaxFullDetails>;
  /** Shipping price after all discounts (if any exist), and after tax. */
  totalPriceAfterTax?: Maybe<EcommercePlatformCommonPrice>;
  /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
  totalPriceBeforeTax?: Maybe<EcommercePlatformCommonPrice>;
};

export type EcomOrdersV1ShippingPriceInput = {
  /** Shipping discount before tax. */
  discount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Shipping price for display purposes. */
  price?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Tax details. */
  taxDetails?: InputMaybe<EcomTaxItemTaxFullDetailsInput>;
  /** Shipping price after all discounts (if any exist), and after tax. */
  totalPriceAfterTax?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
  totalPriceBeforeTax?: InputMaybe<EcommercePlatformCommonPriceInput>;
};

export type EcomOrdersV1ShippingRegion = {
  __typename?: 'EcomOrdersV1ShippingRegion';
  /** Name of shipping region. For example, `"Metropolitan London"`, or `"Outer Melbourne suburbs"`. */
  name?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersV1ShippingRegionInput = {
  /** Name of shipping region. For example, `"Metropolitan London"`, or `"Outer Melbourne suburbs"`. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1SubscriptionInfo = {
  __typename?: 'EcomOrdersV1SubscriptionInfo';
  /** Subscription cycle. For example, if this order is for the 3rd cycle of a subscription, value will be `3`. */
  cycleNumber?: Maybe<Scalars['Int']['output']>;
  /** Subscription ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Subscription option description. For example, `"1kg of selected coffee, once a month"`. */
  subscriptionOptionDescription?: Maybe<Scalars['String']['output']>;
  /** Subscription option title. For example, `"Monthly coffee Subscription"`. */
  subscriptionOptionTitle?: Maybe<Scalars['String']['output']>;
  /** Subscription detailed information. */
  subscriptionSettings?: Maybe<EcomOrdersV1SubscriptionSettings>;
};

export type EcomOrdersV1SubscriptionInfoInput = {
  /** Subscription cycle. For example, if this order is for the 3rd cycle of a subscription, value will be `3`. */
  cycleNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Subscription ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Subscription option description. For example, `"1kg of selected coffee, once a month"`. */
  subscriptionOptionDescription?: InputMaybe<Scalars['String']['input']>;
  /** Subscription option title. For example, `"Monthly coffee Subscription"`. */
  subscriptionOptionTitle?: InputMaybe<Scalars['String']['input']>;
  /** Subscription detailed information. */
  subscriptionSettings?: InputMaybe<EcomOrdersV1SubscriptionSettingsInput>;
};

export type EcomOrdersV1SubscriptionSettings = {
  __typename?: 'EcomOrdersV1SubscriptionSettings';
  /** Whether subscription is renewed automatically at the end of each period. */
  autoRenewal?: Maybe<Scalars['Boolean']['output']>;
  /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
  billingCycles?: Maybe<Scalars['Int']['output']>;
  /** Frequency of recurring payment. */
  frequency?: Maybe<PaymentPayV2SubscriptionFrequency>;
};

export type EcomOrdersV1SubscriptionSettingsInput = {
  /** Whether subscription is renewed automatically at the end of each period. */
  autoRenewal?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
  billingCycles?: InputMaybe<Scalars['Int']['input']>;
  /** Frequency of recurring payment. */
  frequency?: InputMaybe<PaymentPayV2SubscriptionFrequency>;
};

export type EcomOrdersV1TranslatedValue = {
  __typename?: 'EcomOrdersV1TranslatedValue';
  /** Value in site default language. */
  original?: Maybe<Scalars['String']['output']>;
  /** Translated value. */
  translated?: Maybe<Scalars['String']['output']>;
};

export type EcomOrdersV1TranslatedValueInput = {
  /** Value in site default language. */
  original?: InputMaybe<Scalars['String']['input']>;
  /** Translated value. */
  translated?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1UpdateActivityRequestInput = {
  /** Activity info. */
  activity?: InputMaybe<EcomOrdersV1PublicActivityInput>;
  /** ID of the activity to update. */
  activityId?: InputMaybe<Scalars['String']['input']>;
  /** Order ID. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomOrdersV1UpdateActivityResponse = {
  __typename?: 'EcomOrdersV1UpdateActivityResponse';
  /** Updated order. */
  order?: Maybe<EcomOrdersV1Order>;
};

export type EcomOrdersV1UpdateOrderLineItemRequestInput = {
  /** Order ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Order line item to update */
  lineItem?: InputMaybe<EcomOrdersV1OrderLineItemInput>;
};

export type EcomOrdersV1UpdateOrderLineItemResponse = {
  __typename?: 'EcomOrdersV1UpdateOrderLineItemResponse';
  /** Updated order data */
  order?: Maybe<EcomOrdersV1Order>;
};

export type EcomOrdersV1UpdateOrderRequestInput = {
  /** Order to be updated. */
  order?: InputMaybe<EcomOrdersV1OrderInput>;
};

export type EcomOrdersV1UpdateOrderResponse = {
  __typename?: 'EcomOrdersV1UpdateOrderResponse';
  /** Newly created order. */
  order?: Maybe<EcomOrdersV1Order>;
};

export type EcomRecommendationsSpiAlgorithmConfig = {
  __typename?: 'EcomRecommendationsSpiAlgorithmConfig';
  /** A supplemental `description`. It can be used to help break up and organize information. You can, for example, display this information as a tooltip or as an additional section that is collapsed by default. */
  additionalInfo?: Maybe<Scalars['String']['output']>;
  /**
   * Algorithms may have the following types:
   * * `RELATED_ITEMS` - This type of algorithm provides recommendations based on 1 or more other provided items. For example, when an item is added to a cart, the algorithm can suggest other items frequently bought together with that item.
   * * `GLOBAL` - This type of algorithm provides general recommendations based on site or project statistics. For example, bestsellers or new arrivals.
   */
  algorithmType?: Maybe<EcomRecommendationsSpiAlgorithmType>;
  /** Algorithm description. This describes how the algorithm works and if it has any limitations regarding site content, number of items in the catalog, site traffic, and so on. This value is not translatable. */
  description?: Maybe<Scalars['String']['output']>;
  /** Algorithm ID. This must be unique for a specific app but does not have to be unique across all apps on the site or in the project. */
  id?: Maybe<Scalars['String']['output']>;
  /** Algorithm name. This value is not translatable. */
  name?: Maybe<Scalars['String']['output']>;
};

export enum EcomRecommendationsSpiAlgorithmType {
  Global = 'GLOBAL',
  RelatedItems = 'RELATED_ITEMS',
  Unspecified = 'UNSPECIFIED'
}

export type EcomRecommendationsV1Algorithm = {
  __typename?: 'EcomRecommendationsV1Algorithm';
  /**
   * App ID of the Wix or 3rd-party app providing the algorithm.
   *
   * Wix app IDs are <a href="https://dev.wix.com/api/rest/getting-started/wix-business-solutions#getting-started_wix-business-solutions_about-wix-business-solutions" target="_blank">listed here</a>.
   */
  appId?: Maybe<Scalars['String']['output']>;
  /** Algorithm ID defined by the app providing the algorithm. */
  id?: Maybe<Scalars['String']['output']>;
};

export type EcomRecommendationsV1AlgorithmInfo = {
  __typename?: 'EcomRecommendationsV1AlgorithmInfo';
  /**
   * The app ID of the application providing the algorithm.
   *
   * Wix app IDs are <a href="https://dev.wix.com/api/rest/getting-started/wix-business-solutions#getting-started_wix-business-solutions_about-wix-business-solutions" target="_blank">listed here</a>.
   */
  appId?: Maybe<Scalars['String']['output']>;
  /**
   * App IDs of catalogs to which the algorithm can be applied.
   *
   * Wix app IDs are <a href="https://dev.wix.com/api/rest/getting-started/wix-business-solutions#getting-started_wix-business-solutions_about-wix-business-solutions" target="_blank">listed here</a>.
   */
  catalogAppIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** How the algorithm is configured. */
  config?: Maybe<EcomRecommendationsSpiAlgorithmConfig>;
};

export type EcomRecommendationsV1AlgorithmInput = {
  /**
   * App ID of the Wix or 3rd-party app providing the algorithm.
   *
   * Wix app IDs are <a href="https://dev.wix.com/api/rest/getting-started/wix-business-solutions#getting-started_wix-business-solutions_about-wix-business-solutions" target="_blank">listed here</a>.
   */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** Algorithm ID defined by the app providing the algorithm. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EcomRecommendationsV1GetRecommendationRequestInput = {
  /**
   * A list of algorithms checked in a specific order determined by their `appID` and their position in the `algorithms` array.
   * See the method description for more information.
   *
   * If no algorithm is able to return at least `minimumRecommendedItems` items, an empty array is returned.
   */
  algorithms?: InputMaybe<Array<InputMaybe<EcomRecommendationsV1AlgorithmInput>>>;
  /** The set of items for which to get recommendations. Required if the `algorithmType` is `RELATED_ITEMS`. */
  items?: InputMaybe<Array<InputMaybe<EcommerceCatalogSpiV1CatalogReferenceInput>>>;
  /**
   * The minimum number of items that must be recommended by the algorithm for those items to be returned in the response.
   *
   * Max: `100`
   */
  minimumRecommendedItems?: InputMaybe<Scalars['Int']['input']>;
};

export type EcomRecommendationsV1GetRecommendationResponse = {
  __typename?: 'EcomRecommendationsV1GetRecommendationResponse';
  /** An object containing a list of items recommended by 1 of the specified algorithms. The recommendation is empty if none of the specified algorithms recommended enough items. */
  recommendation?: Maybe<EcomRecommendationsV1Recommendation>;
};

export type EcomRecommendationsV1ListAvailableAlgorithmsResponse = {
  __typename?: 'EcomRecommendationsV1ListAvailableAlgorithmsResponse';
  /** Algorithms available for use on your Wix site or project. See the method description for more information. */
  availableAlgorithms?: Maybe<Array<Maybe<EcomRecommendationsV1AlgorithmInfo>>>;
};

export type EcomRecommendationsV1Recommendation = {
  __typename?: 'EcomRecommendationsV1Recommendation';
  /** The algorithm used to provide the recommendation. */
  algorithm?: Maybe<EcomRecommendationsV1Algorithm>;
  /** Recommended items. */
  items?: Maybe<Array<Maybe<EcommerceCatalogSpiV1CatalogReference>>>;
};

export type EcomTaxAutoTaxFallbackCalculationDetails = {
  __typename?: 'EcomTaxAutoTaxFallbackCalculationDetails';
  /** invalid request (i.e. address), timeout, internal error, license error, and others will be encoded here */
  error?: Maybe<ApiApplicationError>;
  /** reason for fallback */
  fallbackReason?: Maybe<EcomTaxAutoTaxFallbackCalculationDetailsFallbackReason>;
};

export enum EcomTaxAutoTaxFallbackCalculationDetailsFallbackReason {
  /** auto-tax was temporarily deactivated on a system-level */
  AutoTaxDeactivated = 'AUTO_TAX_DEACTIVATED',
  /** auto-tax failed to be calculated */
  AutoTaxFailed = 'AUTO_TAX_FAILED'
}

export type EcomTaxAutoTaxFallbackCalculationDetailsInput = {
  /** invalid request (i.e. address), timeout, internal error, license error, and others will be encoded here */
  error?: InputMaybe<ApiApplicationErrorInput>;
  /** reason for fallback */
  fallbackReason?: InputMaybe<EcomTaxAutoTaxFallbackCalculationDetailsFallbackReason>;
};

export type EcomTaxItemTaxFullDetails = {
  __typename?: 'EcomTaxItemTaxFullDetails';
  /** Tax rate percentage, as a decimal numeral between 0 and 1. For example, `"0.13"`. */
  taxRate?: Maybe<Scalars['String']['output']>;
  /** Taxable amount of this line item. */
  taxableAmount?: Maybe<EcommercePlatformCommonPrice>;
  /** The calculated tax, based on the `taxableAmount` and `taxRate`. */
  totalTax?: Maybe<EcommercePlatformCommonPrice>;
};

export type EcomTaxItemTaxFullDetailsInput = {
  /** Tax rate percentage, as a decimal numeral between 0 and 1. For example, `"0.13"`. */
  taxRate?: InputMaybe<Scalars['String']['input']>;
  /** Taxable amount of this line item. */
  taxableAmount?: InputMaybe<EcommercePlatformCommonPriceInput>;
  /** The calculated tax, based on the `taxableAmount` and `taxRate`. */
  totalTax?: InputMaybe<EcommercePlatformCommonPriceInput>;
};

export enum EcomTaxManualCalculationReason {
  /** user set calculator in Business Manager to be Manual */
  GlobalSettingToManual = 'GLOBAL_SETTING_TO_MANUAL',
  /** specific region is on manual even though Global setting is Auto-tax */
  RegionSettingToManual = 'REGION_SETTING_TO_MANUAL'
}

export enum EcomTaxRateType {
  /** autotax rate used for calculation */
  AutoRate = 'AUTO_RATE',
  /** fallback rate used for calculation */
  FallbackRate = 'FALLBACK_RATE',
  /** manual rate used for calculation */
  ManualRate = 'MANUAL_RATE',
  /** no tax being collected for this request due to location of purchase */
  NoTaxCollected = 'NO_TAX_COLLECTED'
}

export type EcomTaxTaxCalculationDetails = {
  __typename?: 'EcomTaxTaxCalculationDetails';
  /** Details of the fallback rate calculation. */
  autoTaxFallbackDetails?: Maybe<EcomTaxAutoTaxFallbackCalculationDetails>;
  /** Reason the manual calculation was used. */
  manualRateReason?: Maybe<EcomTaxManualCalculationReason>;
  /** Rate calculation type. */
  rateType?: Maybe<EcomTaxRateType>;
};

export type EcomTaxTaxCalculationDetailsInput = {
  /** Details of the fallback rate calculation. */
  autoTaxFallbackDetails?: InputMaybe<EcomTaxAutoTaxFallbackCalculationDetailsInput>;
  /** Reason the manual calculation was used. */
  manualRateReason?: InputMaybe<EcomTaxManualCalculationReason>;
  /** Rate calculation type. */
  rateType?: InputMaybe<EcomTaxRateType>;
};

export type EcomTaxTaxSummary = {
  __typename?: 'EcomTaxTaxSummary';
  /** Total tax. */
  totalTax?: Maybe<EcommercePlatformCommonPrice>;
};

export type EcomTaxTaxSummaryInput = {
  /** Total tax. */
  totalTax?: InputMaybe<EcommercePlatformCommonPriceInput>;
};

export type EcomTotalsCalculatorV1AdditionalFee = {
  __typename?: 'EcomTotalsCalculatorV1AdditionalFee';
  /** Additional fee's unique code (or ID) for future processing. */
  code?: Maybe<Scalars['String']['output']>;
  /**
   * Optional - Line items associated with this additional fee.
   * If no `lineItemIds` are provided, the fee will be associated with the whole cart/checkout/order.
   */
  lineItemIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Translated additional fee's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Additional fee's price. */
  price?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Additional fee's price before tax. */
  priceBeforeTax?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Provider's app id. */
  providerAppId?: Maybe<Scalars['String']['output']>;
  /** Tax details. */
  taxDetails?: Maybe<EcomTotalsCalculatorV1ItemTaxFullDetails>;
};

export type EcomTotalsCalculatorV1AdditionalFeeInput = {
  /** Additional fee's unique code (or ID) for future processing. */
  code?: InputMaybe<Scalars['String']['input']>;
  /**
   * Optional - Line items associated with this additional fee.
   * If no `lineItemIds` are provided, the fee will be associated with the whole cart/checkout/order.
   */
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Translated additional fee's name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Additional fee's price. */
  price?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Additional fee's price before tax. */
  priceBeforeTax?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Provider's app id. */
  providerAppId?: InputMaybe<Scalars['String']['input']>;
  /** Tax details. */
  taxDetails?: InputMaybe<EcomTotalsCalculatorV1ItemTaxFullDetailsInput>;
};

export type EcomTotalsCalculatorV1AppliedDiscount = {
  __typename?: 'EcomTotalsCalculatorV1AppliedDiscount';
  /** Coupon details. */
  coupon?: Maybe<EcomTotalsCalculatorV1Coupon>;
  /** Discount rule */
  discountRule?: Maybe<EcomTotalsCalculatorV1DiscountRule>;
  /** Discount type. */
  discountType?: Maybe<EcomTotalsCalculatorV1AppliedDiscountDiscountType>;
  /** IDs of line items the discount applies to. */
  lineItemIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Merchant discount. */
  merchantDiscount?: Maybe<EcomTotalsCalculatorV1MerchantDiscount>;
};

export enum EcomTotalsCalculatorV1AppliedDiscountDiscountType {
  Global = 'GLOBAL',
  Shipping = 'SHIPPING',
  SpecificItems = 'SPECIFIC_ITEMS'
}

export type EcomTotalsCalculatorV1AppliedDiscountInput = {
  /** Coupon details. */
  coupon?: InputMaybe<EcomTotalsCalculatorV1CouponInput>;
  /** Discount rule */
  discountRule?: InputMaybe<EcomTotalsCalculatorV1DiscountRuleInput>;
  /** Discount type. */
  discountType?: InputMaybe<EcomTotalsCalculatorV1AppliedDiscountDiscountType>;
  /** IDs of line items the discount applies to. */
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Merchant discount. */
  merchantDiscount?: InputMaybe<EcomTotalsCalculatorV1MerchantDiscountInput>;
};

export type EcomTotalsCalculatorV1CalculatedLineItem = {
  __typename?: 'EcomTotalsCalculatorV1CalculatedLineItem';
  /** Line item ID. */
  lineItemId?: Maybe<Scalars['String']['output']>;
  /**
   * Type of selected payment option for current item. Supported values:
   * + `"FULL_PAYMENT_ONLINE"` - The entire payment for this item will happen as part of the checkout
   * + `"FULL_PAYMENT_OFFLINE"` - The entire payment for this item will happen after the checkout
   * + `"MEMBERSHIP"` - This item cannot be paid via monetary payment options, only via non monetary option such membership. When this option is used, price must be set to 0
   * + `"DEPOSIT_ONLINE"` -  Partial payment of the given item will happen as part of the checkout. Amount to be paid is defined by deposit_amount field.
   */
  paymentOption?: Maybe<EcommerceCatalogSpiV1PaymentOptionType>;
  /** Price breakdown for this line item. */
  pricesBreakdown?: Maybe<EcomTotalsCalculatorV1LineItemPricesData>;
};

export type EcomTotalsCalculatorV1CalculationErrors = {
  __typename?: 'EcomTotalsCalculatorV1CalculationErrors';
  /** Carrier errors. */
  carrierErrors?: Maybe<EcomTotalsCalculatorV1CarrierErrors>;
  /** Coupon calculation error. */
  couponCalculationError?: Maybe<ApiDetails>;
  /** Discount Rule calculation error. */
  discountsCalculationError?: Maybe<ApiDetails>;
  /** General shipping calculation error. */
  generalShippingCalculationError?: Maybe<ApiDetails>;
  /** Gift card calculation error. */
  giftCardCalculationError?: Maybe<ApiDetails>;
  /**
   * Membership payment methods calculation errors
   * For example, will indicate that a line item that must be paid with membership payment doesn't have one or selected memberships are invalid
   */
  membershipError?: Maybe<ApiDetails>;
  /** Order validation errors. */
  orderValidationErrors?: Maybe<Array<Maybe<ApiApplicationError>>>;
  /** Tax calculation error. */
  taxCalculationError?: Maybe<ApiDetails>;
};

export type EcomTotalsCalculatorV1CalculationErrorsInput = {
  /** Carrier errors. */
  carrierErrors?: InputMaybe<EcomTotalsCalculatorV1CarrierErrorsInput>;
  /** Coupon calculation error. */
  couponCalculationError?: InputMaybe<ApiDetailsInput>;
  /** Discount Rule calculation error. */
  discountsCalculationError?: InputMaybe<ApiDetailsInput>;
  /** General shipping calculation error. */
  generalShippingCalculationError?: InputMaybe<ApiDetailsInput>;
  /** Gift card calculation error. */
  giftCardCalculationError?: InputMaybe<ApiDetailsInput>;
  /**
   * Membership payment methods calculation errors
   * For example, will indicate that a line item that must be paid with membership payment doesn't have one or selected memberships are invalid
   */
  membershipError?: InputMaybe<ApiDetailsInput>;
  /** Order validation errors. */
  orderValidationErrors?: InputMaybe<Array<InputMaybe<ApiApplicationErrorInput>>>;
  /** Tax calculation error. */
  taxCalculationError?: InputMaybe<ApiDetailsInput>;
};

export type EcomTotalsCalculatorV1CarrierError = {
  __typename?: 'EcomTotalsCalculatorV1CarrierError';
  /** Carrier ID. */
  carrierId?: Maybe<Scalars['String']['output']>;
  /** Error details. */
  error?: Maybe<ApiDetails>;
};

export type EcomTotalsCalculatorV1CarrierErrorInput = {
  /** Carrier ID. */
  carrierId?: InputMaybe<Scalars['String']['input']>;
  /** Error details. */
  error?: InputMaybe<ApiDetailsInput>;
};

export type EcomTotalsCalculatorV1CarrierErrors = {
  __typename?: 'EcomTotalsCalculatorV1CarrierErrors';
  /** Carrier errors. */
  errors?: Maybe<Array<Maybe<EcomTotalsCalculatorV1CarrierError>>>;
};

export type EcomTotalsCalculatorV1CarrierErrorsInput = {
  /** Carrier errors. */
  errors?: InputMaybe<Array<InputMaybe<EcomTotalsCalculatorV1CarrierErrorInput>>>;
};

export type EcomTotalsCalculatorV1CarrierServiceOption = {
  __typename?: 'EcomTotalsCalculatorV1CarrierServiceOption';
  /** Carrier ID. */
  carrierId?: Maybe<Scalars['String']['output']>;
  /** Shipping options offered by this carrier for this request. */
  shippingOptions?: Maybe<Array<Maybe<EcomTotalsCalculatorV1ShippingOption>>>;
};

export type EcomTotalsCalculatorV1CarrierServiceOptionInput = {
  /** Carrier ID. */
  carrierId?: InputMaybe<Scalars['String']['input']>;
  /** Shipping options offered by this carrier for this request. */
  shippingOptions?: InputMaybe<Array<InputMaybe<EcomTotalsCalculatorV1ShippingOptionInput>>>;
};

export enum EcomTotalsCalculatorV1ChargeType {
  HandlingFee = 'HANDLING_FEE',
  Insurance = 'INSURANCE'
}

export type EcomTotalsCalculatorV1Coupon = {
  __typename?: 'EcomTotalsCalculatorV1Coupon';
  /** Coupon value. */
  amount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Coupon code. */
  code?: Maybe<Scalars['String']['output']>;
  /** Coupon ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Coupon name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type EcomTotalsCalculatorV1CouponInput = {
  /** Coupon value. */
  amount?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Coupon code. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Coupon ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Coupon name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EcomTotalsCalculatorV1DeliveryLogistics = {
  __typename?: 'EcomTotalsCalculatorV1DeliveryLogistics';
  /** Expected delivery time, in free text. For example, "3-5 business days". */
  deliveryTime?: Maybe<Scalars['String']['output']>;
  /** Instructions for caller, e.g for pickup: "Please deliver during opening hours, and please don't park in disabled parking spot". */
  instructions?: Maybe<Scalars['String']['output']>;
  /** Pickup details. */
  pickupDetails?: Maybe<EcomTotalsCalculatorV1PickupDetails>;
};

export type EcomTotalsCalculatorV1DeliveryLogisticsInput = {
  /** Expected delivery time, in free text. For example, "3-5 business days". */
  deliveryTime?: InputMaybe<Scalars['String']['input']>;
  /** Instructions for caller, e.g for pickup: "Please deliver during opening hours, and please don't park in disabled parking spot". */
  instructions?: InputMaybe<Scalars['String']['input']>;
  /** Pickup details. */
  pickupDetails?: InputMaybe<EcomTotalsCalculatorV1PickupDetailsInput>;
};

export type EcomTotalsCalculatorV1DiscountRule = {
  __typename?: 'EcomTotalsCalculatorV1DiscountRule';
  /** Discount value. */
  amount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Discount rule ID */
  discountRule?: Maybe<EcomDiscountsDiscountRule>;
  /** Discount rule ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Discount rule name */
  name?: Maybe<EcomTotalsCalculatorV1DiscountRuleName>;
};

export type EcomTotalsCalculatorV1DiscountRuleInput = {
  /** Discount value. */
  amount?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Discount rule ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Discount rule name */
  name?: InputMaybe<EcomTotalsCalculatorV1DiscountRuleNameInput>;
};

export type EcomTotalsCalculatorV1DiscountRuleName = {
  __typename?: 'EcomTotalsCalculatorV1DiscountRuleName';
  /** Original discount rule name (in site's default language). */
  original?: Maybe<Scalars['String']['output']>;
  /** Translated discount rule name according to buyer language. Defaults to `original` when not provided. */
  translated?: Maybe<Scalars['String']['output']>;
};

export type EcomTotalsCalculatorV1DiscountRuleNameInput = {
  /** Original discount rule name (in site's default language). */
  original?: InputMaybe<Scalars['String']['input']>;
  /** Translated discount rule name according to buyer language. Defaults to `original` when not provided. */
  translated?: InputMaybe<Scalars['String']['input']>;
};

export type EcomTotalsCalculatorV1GiftCard = {
  __typename?: 'EcomTotalsCalculatorV1GiftCard';
  /** Gift card value. */
  amount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** App ID of the gift card provider. */
  appId?: Maybe<Scalars['String']['output']>;
  /** Gift Card ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Gift card obfuscated code. */
  obfuscatedCode?: Maybe<Scalars['String']['output']>;
};

export type EcomTotalsCalculatorV1GiftCardInput = {
  /** Gift card value. */
  amount?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** App ID of the gift card provider. */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** Gift Card ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Gift card obfuscated code. */
  obfuscatedCode?: InputMaybe<Scalars['String']['input']>;
};

export type EcomTotalsCalculatorV1ItemTaxFullDetails = {
  __typename?: 'EcomTotalsCalculatorV1ItemTaxFullDetails';
  /** If breakdown exists, the sum of rates in the breakdown must equal `tax_rate`. */
  rateBreakdown?: Maybe<Array<Maybe<EcomTotalsCalculatorV1TaxRateBreakdown>>>;
  /** Tax rate %, as a decimal point between 0 and 1. */
  taxRate?: Maybe<Scalars['String']['output']>;
  /** Amount for which tax is calculated. */
  taxableAmount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Calculated tax, based on `taxable_amount` and `tax_rate`. */
  totalTax?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
};

export type EcomTotalsCalculatorV1ItemTaxFullDetailsInput = {
  /** If breakdown exists, the sum of rates in the breakdown must equal `tax_rate`. */
  rateBreakdown?: InputMaybe<Array<InputMaybe<EcomTotalsCalculatorV1TaxRateBreakdownInput>>>;
  /** Tax rate %, as a decimal point between 0 and 1. */
  taxRate?: InputMaybe<Scalars['String']['input']>;
  /** Amount for which tax is calculated. */
  taxableAmount?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Calculated tax, based on `taxable_amount` and `tax_rate`. */
  totalTax?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
};

export type EcomTotalsCalculatorV1LineItemPricesData = {
  __typename?: 'EcomTotalsCalculatorV1LineItemPricesData';
  /** Item price **before** line item discounts and **before** catalog-defined discount. Defaults to `price` when not provided. */
  fullPrice?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Total price **after** catalog-defined discount and line item discounts. */
  lineItemPrice?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Catalog price after catalog discount and automatic discounts. */
  price?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Item price **before** line item discounts and **after** catalog-defined discount. Defaults to `price` when not provided. */
  priceBeforeDiscounts?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Tax details. */
  taxDetails?: Maybe<EcomTotalsCalculatorV1ItemTaxFullDetails>;
  /** Total discount for all line items. */
  totalDiscount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Total price after discounts and after tax. */
  totalPriceAfterTax?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
  totalPriceBeforeTax?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
};

export type EcomTotalsCalculatorV1MembershipOptions = {
  __typename?: 'EcomTotalsCalculatorV1MembershipOptions';
  /** List of payment options that can be used. */
  eligibleMemberships?: Maybe<Array<Maybe<EcomMembershipsSpiV1HostMembership>>>;
  /** List of payment options that are owned by the member, but cannot be used due to reason provided. */
  invalidMemberships?: Maybe<Array<Maybe<EcomMembershipsSpiV1HostInvalidMembership>>>;
  /** The selected membership payment options and which line items they apply to. */
  selectedMemberships?: Maybe<Array<Maybe<EcomMembershipsSpiV1HostSelectedMembership>>>;
};

export type EcomTotalsCalculatorV1MerchantDiscount = {
  __typename?: 'EcomTotalsCalculatorV1MerchantDiscount';
  /** Discount value. */
  amount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
};

export type EcomTotalsCalculatorV1MerchantDiscountInput = {
  /** Discount value. */
  amount?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
};

export type EcomTotalsCalculatorV1MerchantDiscountInputInput = {
  /** Discount amount. */
  amount?: InputMaybe<Scalars['String']['input']>;
  /** IDs of line items the discount applies to. */
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EcomTotalsCalculatorV1OtherCharge = {
  __typename?: 'EcomTotalsCalculatorV1OtherCharge';
  /** Price of added cost. */
  price?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Type of additional cost. */
  type?: Maybe<EcomTotalsCalculatorV1ChargeType>;
};

export type EcomTotalsCalculatorV1OtherChargeInput = {
  /** Price of added cost. */
  price?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Type of additional cost. */
  type?: InputMaybe<EcomTotalsCalculatorV1ChargeType>;
};

export type EcomTotalsCalculatorV1PickupDetails = {
  __typename?: 'EcomTotalsCalculatorV1PickupDetails';
  /** Pickup address. */
  address?: Maybe<EcommercePlatformCommonAddress>;
  /** Whether the pickup address is that of a business - this may effect tax calculation. */
  businessLocation?: Maybe<Scalars['Boolean']['output']>;
  /** Pickup method */
  pickupMethod?: Maybe<EcomTotalsCalculatorV1PickupDetailsPickupMethod>;
};

export type EcomTotalsCalculatorV1PickupDetailsInput = {
  /** Pickup address. */
  address?: InputMaybe<EcommercePlatformCommonAddressInput>;
  /** Whether the pickup address is that of a business - this may effect tax calculation. */
  businessLocation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Pickup method */
  pickupMethod?: InputMaybe<EcomTotalsCalculatorV1PickupDetailsPickupMethod>;
};

export enum EcomTotalsCalculatorV1PickupDetailsPickupMethod {
  PickupPoint = 'PICKUP_POINT',
  StorePickup = 'STORE_PICKUP',
  UnknownMethod = 'UNKNOWN_METHOD'
}

export type EcomTotalsCalculatorV1PriceSummary = {
  __typename?: 'EcomTotalsCalculatorV1PriceSummary';
  /** Total additional fees price before tax. */
  additionalFees?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Total calculated discount value. */
  discount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Total shipping price, before discounts and before tax. */
  shipping?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Subtotal of all line items, before discounts and before tax. */
  subtotal?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Total tax. */
  tax?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Total price after discounts, gift cards, and tax. */
  total?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
};

export type EcomTotalsCalculatorV1PriceSummaryInput = {
  /** Total additional fees price before tax. */
  additionalFees?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Total calculated discount value. */
  discount?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Total shipping price, before discounts and before tax. */
  shipping?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Subtotal of all line items, before discounts and before tax. */
  subtotal?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Total tax. */
  tax?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Total price after discounts, gift cards, and tax. */
  total?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
};

export type EcomTotalsCalculatorV1SelectedCarrierServiceOption = {
  __typename?: 'EcomTotalsCalculatorV1SelectedCarrierServiceOption';
  /** This carrier's unique ID */
  carrierId?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of selected option. For example, "usps_std_overnight". */
  code?: Maybe<Scalars['String']['output']>;
  /** Shipping costs. */
  cost?: Maybe<EcomTotalsCalculatorV1SelectedCarrierServiceOptionPrices>;
  /** Delivery logistics. */
  logistics?: Maybe<EcomTotalsCalculatorV1DeliveryLogistics>;
  /** Other charges */
  otherCharges?: Maybe<Array<Maybe<EcomTotalsCalculatorV1SelectedCarrierServiceOptionOtherCharge>>>;
  /** Were we able to find the requested shipping option, or otherwise we fallback to the default one (the first) */
  requestedShippingOption?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
   * For example, "Standard" or "First-Class Package International".
   */
  title?: Maybe<Scalars['String']['output']>;
};

export type EcomTotalsCalculatorV1SelectedCarrierServiceOptionInput = {
  /** This carrier's unique ID */
  carrierId?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier of selected option. For example, "usps_std_overnight". */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Shipping costs. */
  cost?: InputMaybe<EcomTotalsCalculatorV1SelectedCarrierServiceOptionPricesInput>;
  /** Delivery logistics. */
  logistics?: InputMaybe<EcomTotalsCalculatorV1DeliveryLogisticsInput>;
  /** Other charges */
  otherCharges?: InputMaybe<Array<InputMaybe<EcomTotalsCalculatorV1SelectedCarrierServiceOptionOtherChargeInput>>>;
  /** Were we able to find the requested shipping option, or otherwise we fallback to the default one (the first) */
  requestedShippingOption?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
   * For example, "Standard" or "First-Class Package International".
   */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EcomTotalsCalculatorV1SelectedCarrierServiceOptionOtherCharge = {
  __typename?: 'EcomTotalsCalculatorV1SelectedCarrierServiceOptionOtherCharge';
  /** Price of added charge. */
  cost?: Maybe<EcomTotalsCalculatorV1SelectedCarrierServiceOptionPrices>;
  /** Details of the charge, such as 'Full Coverage Insurance of up to 80% of value of shipment'. */
  details?: Maybe<Scalars['String']['output']>;
  /** Type of additional cost. */
  type?: Maybe<EcomTotalsCalculatorV1ChargeType>;
};

export type EcomTotalsCalculatorV1SelectedCarrierServiceOptionOtherChargeInput = {
  /** Price of added charge. */
  cost?: InputMaybe<EcomTotalsCalculatorV1SelectedCarrierServiceOptionPricesInput>;
  /** Details of the charge, such as 'Full Coverage Insurance of up to 80% of value of shipment'. */
  details?: InputMaybe<Scalars['String']['input']>;
  /** Type of additional cost. */
  type?: InputMaybe<EcomTotalsCalculatorV1ChargeType>;
};

export type EcomTotalsCalculatorV1SelectedCarrierServiceOptionPrices = {
  __typename?: 'EcomTotalsCalculatorV1SelectedCarrierServiceOptionPrices';
  /** Shipping price before discount and before tax. */
  price?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Tax details. */
  taxDetails?: Maybe<EcomTotalsCalculatorV1ItemTaxFullDetails>;
  /** Shipping discount before tax. */
  totalDiscount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Total shipping price, after discount and after tax. */
  totalPriceAfterTax?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
  totalPriceBeforeTax?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
};

export type EcomTotalsCalculatorV1SelectedCarrierServiceOptionPricesInput = {
  /** Shipping price before discount and before tax. */
  price?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Tax details. */
  taxDetails?: InputMaybe<EcomTotalsCalculatorV1ItemTaxFullDetailsInput>;
  /** Shipping discount before tax. */
  totalDiscount?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Total shipping price, after discount and after tax. */
  totalPriceAfterTax?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
  totalPriceBeforeTax?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
};

export type EcomTotalsCalculatorV1SelectedShippingOption = {
  __typename?: 'EcomTotalsCalculatorV1SelectedShippingOption';
  /** Carrier ID. */
  carrierId?: Maybe<Scalars['String']['output']>;
  /** Selected shipping option code. For example, "usps_std_overnight". */
  code?: Maybe<Scalars['String']['output']>;
};

export type EcomTotalsCalculatorV1SelectedShippingOptionInput = {
  /** Carrier ID. */
  carrierId?: InputMaybe<Scalars['String']['input']>;
  /** Selected shipping option code. For example, "usps_std_overnight". */
  code?: InputMaybe<Scalars['String']['input']>;
};

export type EcomTotalsCalculatorV1ShippingInformation = {
  __typename?: 'EcomTotalsCalculatorV1ShippingInformation';
  /** All shipping options. */
  carrierServiceOptions?: Maybe<Array<Maybe<EcomTotalsCalculatorV1CarrierServiceOption>>>;
  /** Shipping region. */
  region?: Maybe<EcomTotalsCalculatorV1ShippingRegion>;
  /** Selected shipping option. */
  selectedCarrierServiceOption?: Maybe<EcomTotalsCalculatorV1SelectedCarrierServiceOption>;
};

export type EcomTotalsCalculatorV1ShippingOption = {
  __typename?: 'EcomTotalsCalculatorV1ShippingOption';
  /**
   * Unique code of provided shipping option like "usps_std_overnight".
   * For legacy calculators this would be the UUID of the option.
   */
  code?: Maybe<Scalars['String']['output']>;
  /** Sipping price information. */
  cost?: Maybe<EcomTotalsCalculatorV1ShippingPrice>;
  /** Delivery logistics. */
  logistics?: Maybe<EcomTotalsCalculatorV1DeliveryLogistics>;
  /**
   * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
   * For example, "Standard" or "First-Class Package International".
   */
  title?: Maybe<Scalars['String']['output']>;
};

export type EcomTotalsCalculatorV1ShippingOptionInput = {
  /**
   * Unique code of provided shipping option like "usps_std_overnight".
   * For legacy calculators this would be the UUID of the option.
   */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Sipping price information. */
  cost?: InputMaybe<EcomTotalsCalculatorV1ShippingPriceInput>;
  /** Delivery logistics. */
  logistics?: InputMaybe<EcomTotalsCalculatorV1DeliveryLogisticsInput>;
  /**
   * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
   * For example, "Standard" or "First-Class Package International".
   */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EcomTotalsCalculatorV1ShippingPrice = {
  __typename?: 'EcomTotalsCalculatorV1ShippingPrice';
  /** Other costs such as insurance, handling & packaging for fragile items, etc. */
  otherCharges?: Maybe<Array<Maybe<EcomTotalsCalculatorV1OtherCharge>>>;
  /** Shipping price. */
  price?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
};

export type EcomTotalsCalculatorV1ShippingPriceInput = {
  /** Other costs such as insurance, handling & packaging for fragile items, etc. */
  otherCharges?: InputMaybe<Array<InputMaybe<EcomTotalsCalculatorV1OtherChargeInput>>>;
  /** Shipping price. */
  price?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
};

export type EcomTotalsCalculatorV1ShippingRegion = {
  __typename?: 'EcomTotalsCalculatorV1ShippingRegion';
  /** Shipping region ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Shipping region name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type EcomTotalsCalculatorV1ShippingRegionInput = {
  /** Shipping region ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Shipping region name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EcomTotalsCalculatorV1TaxRateBreakdown = {
  __typename?: 'EcomTotalsCalculatorV1TaxRateBreakdown';
  /** Name of tax against which the calculation was performed. */
  name?: Maybe<Scalars['String']['output']>;
  /** Rate at which this tax detail was calculated. */
  rate?: Maybe<Scalars['String']['output']>;
  /** Amount of tax for this tax detail. */
  tax?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
};

export type EcomTotalsCalculatorV1TaxRateBreakdownInput = {
  /** Name of tax against which the calculation was performed. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Rate at which this tax detail was calculated. */
  rate?: InputMaybe<Scalars['String']['input']>;
  /** Amount of tax for this tax detail. */
  tax?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
};

export type EcomTotalsCalculatorV1TaxSummary = {
  __typename?: 'EcomTotalsCalculatorV1TaxSummary';
  /** Tax calculator that was active when the order was created. */
  calculationDetails?: Maybe<EcomTaxTaxCalculationDetails>;
  /** Amount for which tax is calculated, added from line items. */
  taxableAmount?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
  /** Calculated tax, added from line items. */
  totalTax?: Maybe<EcommercePlatformCommonMultiCurrencyPrice>;
};

export type EcomTotalsCalculatorV1TaxSummaryInput = {
  /** Tax calculator that was active when the order was created. */
  calculationDetails?: InputMaybe<EcomTaxTaxCalculationDetailsInput>;
  /** Amount for which tax is calculated, added from line items. */
  taxableAmount?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
  /** Calculated tax, added from line items. */
  totalTax?: InputMaybe<EcommercePlatformCommonMultiCurrencyPriceInput>;
};

export type EcommerceCatalogSpiV1CatalogReference = {
  __typename?: 'EcommerceCatalogSpiV1CatalogReference';
  /**
   * ID of the app providing the catalog. For items from Wix apps, the following values always apply:
   * + Wix Stores: `"215238eb-22a5-4c36-9e7b-e7c08025e04e"`
   * + Wix Bookings: `"13d21c63-b5ec-5912-8397-c3a5ddb27a97"`
   */
  appId?: Maybe<Scalars['String']['output']>;
  /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores or `bookingId` for Wix Bookings. */
  catalogItemId?: Maybe<Scalars['String']['output']>;
  /**
   * Additional info in key:value pairs. For example, to specify Wix Stores product options or variants:
   * + `{"options": {"options": {"Size": "M", "Color": "Red"}}}`
   * + `{"options": {"variantId": "<VARIANT_ID>"}}`
   */
  options?: Maybe<Scalars['JSON']['output']>;
};

export type EcommerceCatalogSpiV1CatalogReferenceInput = {
  /**
   * ID of the app providing the catalog. For items from Wix apps, the following values always apply:
   * + Wix Stores: `"215238eb-22a5-4c36-9e7b-e7c08025e04e"`
   * + Wix Bookings: `"13d21c63-b5ec-5912-8397-c3a5ddb27a97"`
   */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores or `bookingId` for Wix Bookings. */
  catalogItemId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Additional info in key:value pairs. For example, to specify Wix Stores product options or variants:
   * + `{"options": {"options": {"Size": "M", "Color": "Red"}}}`
   * + `{"options": {"variantId": "<VARIANT_ID>"}}`
   */
  options?: InputMaybe<Scalars['JSON']['input']>;
};

export type EcommerceCatalogSpiV1Color = {
  __typename?: 'EcommerceCatalogSpiV1Color';
  /** HEX or RGB color code for display. */
  code?: Maybe<Scalars['String']['output']>;
  /** Description line color name in site's default language. */
  original?: Maybe<Scalars['String']['output']>;
  /** Translated description line color name according to buyer language. Defaults to `original` when not provided. */
  translated?: Maybe<Scalars['String']['output']>;
};

export type EcommerceCatalogSpiV1ColorInput = {
  /** HEX or RGB color code for display. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Description line color name in site's default language. */
  original?: InputMaybe<Scalars['String']['input']>;
  /** Translated description line color name according to buyer language. Defaults to `original` when not provided. */
  translated?: InputMaybe<Scalars['String']['input']>;
};

export type EcommerceCatalogSpiV1DescriptionLine = {
  __typename?: 'EcommerceCatalogSpiV1DescriptionLine';
  /** Description line color value. */
  colorInfo?: Maybe<EcommerceCatalogSpiV1Color>;
  /** Description line name. */
  name?: Maybe<EcommerceCatalogSpiV1DescriptionLineName>;
  /** Description line plain text value. */
  plainText?: Maybe<EcommerceCatalogSpiV1PlainTextValue>;
};

export type EcommerceCatalogSpiV1DescriptionLineInput = {
  /** Description line color value. */
  colorInfo?: InputMaybe<EcommerceCatalogSpiV1ColorInput>;
  /** Description line name. */
  name?: InputMaybe<EcommerceCatalogSpiV1DescriptionLineNameInput>;
  /** Description line plain text value. */
  plainText?: InputMaybe<EcommerceCatalogSpiV1PlainTextValueInput>;
};

export type EcommerceCatalogSpiV1DescriptionLineName = {
  __typename?: 'EcommerceCatalogSpiV1DescriptionLineName';
  /** Description line name in site's default language. */
  original?: Maybe<Scalars['String']['output']>;
  /** Translated description line item according to buyer language. Defaults to `original` when not provided. */
  translated?: Maybe<Scalars['String']['output']>;
};

export type EcommerceCatalogSpiV1DescriptionLineNameInput = {
  /** Description line name in site's default language. */
  original?: InputMaybe<Scalars['String']['input']>;
  /** Translated description line item according to buyer language. Defaults to `original` when not provided. */
  translated?: InputMaybe<Scalars['String']['input']>;
};

export type EcommerceCatalogSpiV1ItemType = {
  __typename?: 'EcommerceCatalogSpiV1ItemType';
  /** Custom item type. */
  custom?: Maybe<Scalars['String']['output']>;
  /** Preset item type. */
  preset?: Maybe<EcommerceCatalogSpiV1ItemTypeItemType>;
};

export type EcommerceCatalogSpiV1ItemTypeInput = {
  /** Custom item type. */
  custom?: InputMaybe<Scalars['String']['input']>;
  /** Preset item type. */
  preset?: InputMaybe<EcommerceCatalogSpiV1ItemTypeItemType>;
};

export enum EcommerceCatalogSpiV1ItemTypeItemType {
  Digital = 'DIGITAL',
  GiftCard = 'GIFT_CARD',
  Physical = 'PHYSICAL',
  Service = 'SERVICE',
  Unrecognised = 'UNRECOGNISED'
}

export type EcommerceCatalogSpiV1NumericPropertyRange = {
  __typename?: 'EcommerceCatalogSpiV1NumericPropertyRange';
  /** Maximum value. */
  maxValue?: Maybe<Scalars['Float']['output']>;
  /** Minimum value. */
  minValue?: Maybe<Scalars['Float']['output']>;
};

export type EcommerceCatalogSpiV1NumericPropertyRangeInput = {
  /** Maximum value. */
  maxValue?: InputMaybe<Scalars['Float']['input']>;
  /** Minimum value. */
  minValue?: InputMaybe<Scalars['Float']['input']>;
};

export enum EcommerceCatalogSpiV1PaymentOptionType {
  /**
   * Partial payment for the given item to be paid upfront during the checkout.
   * Amount to be paid is defined by `deposit_amount` field on per-item basis.
   */
  DepositOnline = 'DEPOSIT_ONLINE',
  /** The entire payment for given item will happen after the checkout. */
  FullPaymentOffline = 'FULL_PAYMENT_OFFLINE',
  /** The entire payment for given item will happen as part of the checkout. */
  FullPaymentOnline = 'FULL_PAYMENT_ONLINE',
  /** Given item cannot be paid via monetary payment options, only via membership. When this option is used, price will always be 0. */
  Membership = 'MEMBERSHIP',
  /**
   * Payment for this item can only be done using a membership and must be manually redeemed in the dashboard by the site owner.
   * Note: when this option is used, price will be 0.
   */
  MembershipOffline = 'MEMBERSHIP_OFFLINE'
}

export type EcommerceCatalogSpiV1PhysicalProperties = {
  __typename?: 'EcommerceCatalogSpiV1PhysicalProperties';
  /** Whether this line item is shippable. */
  shippable?: Maybe<Scalars['Boolean']['output']>;
  /** Stock-keeping unit. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
  sku?: Maybe<Scalars['String']['output']>;
  /** Line item weight. Measurement unit (KG or LB) is taken from `order.weightUnit`. */
  weight?: Maybe<Scalars['Float']['output']>;
};

export type EcommerceCatalogSpiV1PhysicalPropertiesInput = {
  /** Whether this line item is shippable. */
  shippable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Stock-keeping unit. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Line item weight. Measurement unit (KG or LB) is taken from `order.weightUnit`. */
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type EcommerceCatalogSpiV1PlainTextValue = {
  __typename?: 'EcommerceCatalogSpiV1PlainTextValue';
  /** Description line plain text value in site's default language. */
  original?: Maybe<Scalars['String']['output']>;
  /** Translated description line plain text value according to buyer language. Defaults to `original` when not provided. */
  translated?: Maybe<Scalars['String']['output']>;
};

export type EcommerceCatalogSpiV1PlainTextValueInput = {
  /** Description line plain text value in site's default language. */
  original?: InputMaybe<Scalars['String']['input']>;
  /** Translated description line plain text value according to buyer language. Defaults to `original` when not provided. */
  translated?: InputMaybe<Scalars['String']['input']>;
};

export type EcommerceCatalogSpiV1PriceDescription = {
  __typename?: 'EcommerceCatalogSpiV1PriceDescription';
  /** *Required.** Original price description in site's default language. */
  original?: Maybe<Scalars['String']['output']>;
  /** Translated price description according to buyer language. Defaults to `original` when not provided. */
  translated?: Maybe<Scalars['String']['output']>;
};

export type EcommerceCatalogSpiV1PriceDescriptionInput = {
  /** *Required.** Original price description in site's default language. */
  original?: InputMaybe<Scalars['String']['input']>;
  /** Translated price description according to buyer language. Defaults to `original` when not provided. */
  translated?: InputMaybe<Scalars['String']['input']>;
};

export type EcommerceCatalogSpiV1ProductName = {
  __typename?: 'EcommerceCatalogSpiV1ProductName';
  /**
   * __Required.__ Original item name in site's default language.
   * Min: 1 character
   * Max: 200 characters
   */
  original?: Maybe<Scalars['String']['output']>;
  /**
   * Optional. Translated item name according to buyer language. Defaults to `original` when not provided.
   * Min: 1 character
   * Max: 400 characters
   */
  translated?: Maybe<Scalars['String']['output']>;
};

export type EcommerceCatalogSpiV1ProductNameInput = {
  /**
   * __Required.__ Original item name in site's default language.
   * Min: 1 character
   * Max: 200 characters
   */
  original?: InputMaybe<Scalars['String']['input']>;
  /**
   * Optional. Translated item name according to buyer language. Defaults to `original` when not provided.
   * Min: 1 character
   * Max: 400 characters
   */
  translated?: InputMaybe<Scalars['String']['input']>;
};

export type EcommerceCatalogSpiV1ServiceProperties = {
  __typename?: 'EcommerceCatalogSpiV1ServiceProperties';
  /** The number of people participating in this service. For example, the number of people attending the class or the number of people per hotel room. */
  numberOfParticipants?: Maybe<Scalars['Int']['output']>;
  /** Date and time the service is supposed to be provided in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. For example, the time of the class. */
  scheduledDate?: Maybe<Scalars['String']['output']>;
};

export type EcommerceCatalogSpiV1ServicePropertiesInput = {
  /** The number of people participating in this service. For example, the number of people attending the class or the number of people per hotel room. */
  numberOfParticipants?: InputMaybe<Scalars['Int']['input']>;
  /** Date and time the service is supposed to be provided in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. For example, the time of the class. */
  scheduledDate?: InputMaybe<Scalars['String']['input']>;
};

export enum EcommerceCommonsMeasurementUnitEnumMeasurementUnit {
  Cbm = 'CBM',
  Cl = 'CL',
  Cm = 'CM',
  Floz = 'FLOZ',
  Ft = 'FT',
  G = 'G',
  Gal = 'GAL',
  In = 'IN',
  Kg = 'KG',
  L = 'L',
  Lb = 'LB',
  M = 'M',
  Mg = 'MG',
  Ml = 'ML',
  Mm = 'MM',
  Oz = 'OZ',
  Pt = 'PT',
  Qt = 'QT',
  Sqft = 'SQFT',
  Sqm = 'SQM',
  Unspecified = 'UNSPECIFIED',
  Yd = 'YD'
}

export type EcommerceCommonsPlatformMedia = {
  __typename?: 'EcommerceCommonsPlatformMedia';
  image?: Maybe<CommonImage>;
  video?: Maybe<CommonVideoV2>;
};

export type EcommerceCommonsPlatformPagingInput = {
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to skip in the current sort order. */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type EcommerceCommonsPlatformPagingMetadata = {
  __typename?: 'EcommerceCommonsPlatformPagingMetadata';
  /** The number of items returned in this response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Cursors to navigate through result pages. Returned if cursor paging was used. */
  cursors?: Maybe<CommonCursors>;
  /** The offset which was requested. Returned if offset paging was used. */
  offset?: Maybe<Scalars['Int']['output']>;
  /** The total number of items that match the query. Returned if offset paging was used. */
  total?: Maybe<Scalars['Int']['output']>;
};

export type EcommerceCommonsPlatformQueryInput = {
  /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
  cursorPaging?: InputMaybe<CommonCursorPagingInput>;
  /** Filter object. */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
  paging?: InputMaybe<EcommerceCommonsPlatformPagingInput>;
  /** Sorting options. For example, `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]`. */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type EcommercePlatformCommonAddress = {
  __typename?: 'EcommercePlatformCommonAddress';
  /** Main address line (usually street name and number). */
  addressLine?: Maybe<Scalars['String']['output']>;
  /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** City name. */
  city?: Maybe<Scalars['String']['output']>;
  /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
  country?: Maybe<Scalars['String']['output']>;
  /** Country's full name. */
  countryFullname?: Maybe<Scalars['String']['output']>;
  /** Postal or zip code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Street address. */
  streetAddress?: Maybe<CommonStreetAddress>;
  /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
  subdivision?: Maybe<Scalars['String']['output']>;
  /** Subdivision full-name. */
  subdivisionFullname?: Maybe<Scalars['String']['output']>;
};

export type EcommercePlatformCommonAddressInput = {
  /** Main address line (usually street name and number). */
  addressLine?: InputMaybe<Scalars['String']['input']>;
  /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /** City name. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Country's full name. */
  countryFullname?: InputMaybe<Scalars['String']['input']>;
  /** Postal or zip code. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Street address. */
  streetAddress?: InputMaybe<CommonStreetAddressInput>;
  /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
  subdivision?: InputMaybe<Scalars['String']['input']>;
  /** Subdivision full-name. */
  subdivisionFullname?: InputMaybe<Scalars['String']['input']>;
};

export type EcommercePlatformCommonAddressWithContact = {
  __typename?: 'EcommercePlatformCommonAddressWithContact';
  /** Address. */
  address?: Maybe<EcommercePlatformCommonAddress>;
  /** Contact details. */
  contactDetails?: Maybe<EcommercePlatformCommonFullAddressContactDetails>;
};

export type EcommercePlatformCommonAddressWithContactInput = {
  /** Address. */
  address?: InputMaybe<EcommercePlatformCommonAddressInput>;
  /** Contact details. */
  contactDetails?: InputMaybe<EcommercePlatformCommonFullAddressContactDetailsInput>;
};

export enum EcommercePlatformCommonChannelType {
  Amazon = 'AMAZON',
  BackofficeMerchant = 'BACKOFFICE_MERCHANT',
  ClassPass = 'CLASS_PASS',
  Ebay = 'EBAY',
  GlobalE = 'GLOBAL_E',
  OtherPlatform = 'OTHER_PLATFORM',
  Pos = 'POS',
  Unspecified = 'UNSPECIFIED',
  Web = 'WEB',
  Wish = 'WISH',
  WixAppStore = 'WIX_APP_STORE',
  WixInvoices = 'WIX_INVOICES'
}

export type EcommercePlatformCommonFullAddressContactDetails = {
  __typename?: 'EcommercePlatformCommonFullAddressContactDetails';
  /** Company name. */
  company?: Maybe<Scalars['String']['output']>;
  /** First name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Phone number. */
  phone?: Maybe<Scalars['String']['output']>;
  /** Tax information (for Brazil only). If ID is provided, `vatId.type` must also be set, `UNSPECIFIED` is not allowed. */
  vatId?: Maybe<CommonVatId>;
};

export type EcommercePlatformCommonFullAddressContactDetailsInput = {
  /** Company name. */
  company?: InputMaybe<Scalars['String']['input']>;
  /** First name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Phone number. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Tax information (for Brazil only). If ID is provided, `vatId.type` must also be set, `UNSPECIFIED` is not allowed. */
  vatId?: InputMaybe<CommonVatIdInput>;
};

export type EcommercePlatformCommonMultiCurrencyPrice = {
  __typename?: 'EcommercePlatformCommonMultiCurrencyPrice';
  /** Amount. */
  amount?: Maybe<Scalars['String']['output']>;
  /** Converted amount. */
  convertedAmount?: Maybe<Scalars['String']['output']>;
  /** Amount formatted with currency symbol. */
  formattedAmount?: Maybe<Scalars['String']['output']>;
  /** Converted amount formatted with currency symbol. */
  formattedConvertedAmount?: Maybe<Scalars['String']['output']>;
};

export type EcommercePlatformCommonMultiCurrencyPriceInput = {
  /** Amount. */
  amount?: InputMaybe<Scalars['String']['input']>;
  /** Converted amount. */
  convertedAmount?: InputMaybe<Scalars['String']['input']>;
  /** Amount formatted with currency symbol. */
  formattedAmount?: InputMaybe<Scalars['String']['input']>;
  /** Converted amount formatted with currency symbol. */
  formattedConvertedAmount?: InputMaybe<Scalars['String']['input']>;
};

export type EcommercePlatformCommonPickupAddress = {
  __typename?: 'EcommercePlatformCommonPickupAddress';
  /** Main address line (usually street name and number). */
  addressLine?: Maybe<Scalars['String']['output']>;
  /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** City name. */
  city?: Maybe<Scalars['String']['output']>;
  /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
  country?: Maybe<Scalars['String']['output']>;
  /** Country's full name. */
  countryFullname?: Maybe<Scalars['String']['output']>;
  /** Postal or zip code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Street address object, with number, name, and apartment number in separate fields. */
  streetAddress?: Maybe<CommonStreetAddress>;
  /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
  subdivision?: Maybe<Scalars['String']['output']>;
  /** Subdivision full-name. */
  subdivisionFullname?: Maybe<Scalars['String']['output']>;
};

export type EcommercePlatformCommonPickupAddressInput = {
  /** Main address line (usually street name and number). */
  addressLine?: InputMaybe<Scalars['String']['input']>;
  /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /** City name. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Country's full name. */
  countryFullname?: InputMaybe<Scalars['String']['input']>;
  /** Postal or zip code. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Street address object, with number, name, and apartment number in separate fields. */
  streetAddress?: InputMaybe<CommonStreetAddressInput>;
  /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
  subdivision?: InputMaybe<Scalars['String']['input']>;
  /** Subdivision full-name. */
  subdivisionFullname?: InputMaybe<Scalars['String']['input']>;
};

export type EcommercePlatformCommonPrice = {
  __typename?: 'EcommercePlatformCommonPrice';
  /** Amount. */
  amount?: Maybe<Scalars['String']['output']>;
  /** Amount formatted with currency symbol. */
  formattedAmount?: Maybe<Scalars['String']['output']>;
};

export type EcommercePlatformCommonPriceInput = {
  /** Amount. */
  amount?: InputMaybe<Scalars['String']['input']>;
  /** Amount formatted with currency symbol. */
  formattedAmount?: InputMaybe<Scalars['String']['input']>;
};

export enum EcommercePlatformCommonWeightUnit {
  /** Kilograms */
  Kg = 'KG',
  /** Pounds */
  Lb = 'LB',
  /** Weight unit can't be classified, due to an error */
  UnspecifiedWeightUnit = 'UNSPECIFIED_WEIGHT_UNIT'
}

export type EcommerceValidationsSpiV1Target = {
  __typename?: 'EcommerceValidationsSpiV1Target';
  /** Other violation. */
  lineItem?: Maybe<EcommerceValidationsSpiV1TargetLineItem>;
  /** Specific line item violation. */
  other?: Maybe<EcommerceValidationsSpiV1TargetOther>;
};

export type EcommerceValidationsSpiV1TargetInput = {
  /** Other violation. */
  lineItem?: InputMaybe<EcommerceValidationsSpiV1TargetLineItemInput>;
  /** Specific line item violation. */
  other?: InputMaybe<EcommerceValidationsSpiV1TargetOtherInput>;
};

export type EcommerceValidationsSpiV1TargetLineItem = {
  __typename?: 'EcommerceValidationsSpiV1TargetLineItem';
  /** ID of the line item containing the violation. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Where on the checkout and cart page the violation belonging to a specific line item will be displayed.
   * Supported values:
   * + `LINE_ITEM_DEFAULT`: The default location on a checkout or cart page where a line item violation will be displayed.
   */
  name?: Maybe<EcommerceValidationsSpiV1TargetNameInLineItem>;
};

export type EcommerceValidationsSpiV1TargetLineItemInput = {
  /** ID of the line item containing the violation. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * Where on the checkout and cart page the violation belonging to a specific line item will be displayed.
   * Supported values:
   * + `LINE_ITEM_DEFAULT`: The default location on a checkout or cart page where a line item violation will be displayed.
   */
  name?: InputMaybe<EcommerceValidationsSpiV1TargetNameInLineItem>;
};

export enum EcommerceValidationsSpiV1TargetNameInLineItem {
  /** default location, in case no specific location is specified */
  LineItemDefault = 'LINE_ITEM_DEFAULT'
}

export enum EcommerceValidationsSpiV1TargetNameInOther {
  /** default location, in case no specific location is specified */
  OtherDefault = 'OTHER_DEFAULT'
}

export type EcommerceValidationsSpiV1TargetOther = {
  __typename?: 'EcommerceValidationsSpiV1TargetOther';
  /**
   * Where on the checkout and cart page the violation will be displayed.
   * Supported values:
   * + `OTHER_DEFAULT`: The default location on a checkout or cart page where a general (other) violation will be displayed.
   */
  name?: Maybe<EcommerceValidationsSpiV1TargetNameInOther>;
};

export type EcommerceValidationsSpiV1TargetOtherInput = {
  /**
   * Where on the checkout and cart page the violation will be displayed.
   * Supported values:
   * + `OTHER_DEFAULT`: The default location on a checkout or cart page where a general (other) violation will be displayed.
   */
  name?: InputMaybe<EcommerceValidationsSpiV1TargetNameInOther>;
};

export type EcommerceValidationsSpiV1Violation = {
  __typename?: 'EcommerceValidationsSpiV1Violation';
  /** Violation description. Can include rich text. Only HTTP or HTTPS links in the following format are allowed: `<a href="https://www.wix.com">Click me</a>`. */
  description?: Maybe<Scalars['String']['output']>;
  /** Severity of the violation. The violations are shown on the cart and checkout pages. A warning is displayed as yellow, and allows a site visitor to proceed with caution. An error is displayed as red, and doesn't allow a site visitor to proceed with the eCommerce flow. */
  severity?: Maybe<EcommerceValidationsSpiV1ViolationSeverity>;
  /** Target location on a checkout or cart page where the violation will be displayed. */
  target?: Maybe<EcommerceValidationsSpiV1Target>;
};

export type EcommerceValidationsSpiV1ViolationInput = {
  /** Violation description. Can include rich text. Only HTTP or HTTPS links in the following format are allowed: `<a href="https://www.wix.com">Click me</a>`. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Severity of the violation. The violations are shown on the cart and checkout pages. A warning is displayed as yellow, and allows a site visitor to proceed with caution. An error is displayed as red, and doesn't allow a site visitor to proceed with the eCommerce flow. */
  severity?: InputMaybe<EcommerceValidationsSpiV1ViolationSeverity>;
  /** Target location on a checkout or cart page where the violation will be displayed. */
  target?: InputMaybe<EcommerceValidationsSpiV1TargetInput>;
};

export enum EcommerceValidationsSpiV1ViolationSeverity {
  /**
   * The user is blocked from moving forward in the flow.
   * For example, if callerContext is CART - moving to checkout is blocked. if callerContext is CHECKOUT, placing an order is blocked.
   */
  Error = 'ERROR',
  /** The user is allowed to move forward in the flow. */
  Warning = 'WARNING'
}

export type EventsFacetCounts = {
  __typename?: 'EventsFacetCounts';
  /** Facet counts aggregated per value */
  counts?: Maybe<Scalars['JSON']['output']>;
};

export type EventsScheduleAddScheduleItemRequestInput = {
  /** Event ID. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Schedule item. */
  item?: InputMaybe<EventsScheduleScheduleItemDataInput>;
};

export type EventsScheduleAddScheduleItemResponse = {
  __typename?: 'EventsScheduleAddScheduleItemResponse';
  /** Schedule item. */
  item?: Maybe<EventsScheduleScheduleItem>;
};

export type EventsScheduleCreateBookmarkRequestInput = {
  /** Event ID. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Schedule item ID. */
  itemId?: InputMaybe<Scalars['String']['input']>;
};

export type EventsScheduleDeleteBookmarkRequestInput = {
  /** Event ID. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Schedule item ID. */
  itemId?: InputMaybe<Scalars['String']['input']>;
};

export type EventsScheduleDeleteScheduleItemRequestInput = {
  /** Event ID. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Schedule items to delete. */
  itemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EventsScheduleDiscardDraftRequestInput = {
  /** Event ID. */
  eventId?: InputMaybe<Scalars['String']['input']>;
};

export type EventsScheduleGetScheduleItemRequestInput = {
  /** Event ID. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  includeDraft?: InputMaybe<Scalars['Boolean']['input']>;
  /** Schedule item ID. */
  itemId?: InputMaybe<Scalars['String']['input']>;
};

export type EventsScheduleGetScheduleItemResponse = {
  __typename?: 'EventsScheduleGetScheduleItemResponse';
  /** Draft of the Schedule item. */
  draft?: Maybe<EventsScheduleScheduleItem>;
  /** Schedule item. */
  item?: Maybe<EventsScheduleScheduleItem>;
};

export type EventsScheduleListBookmarksRequestInput = {
  /** Event ID. */
  eventId?: InputMaybe<Scalars['String']['input']>;
};

export type EventsScheduleListBookmarksResponse = {
  __typename?: 'EventsScheduleListBookmarksResponse';
  /** Schedule items. */
  items?: Maybe<Array<Maybe<EventsScheduleScheduleItem>>>;
};

export type EventsScheduleListScheduleItemsRequestInput = {
  /** Event ID. */
  eventId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Filter facets.
   * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
   */
  facet?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Item IDs filter. */
  itemId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Deprecated, use `paging`.
   * Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
   */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Deprecated, use `paging`.
   * Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
   */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Pointer to page of results using offset.
   * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
   */
  paging?: InputMaybe<EventsUpstreamCommonPagingInput>;
  /** Stage names filter. */
  stageName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filters schedule items starting before specified point in time. Non-inclusive. */
  startingBefore?: InputMaybe<Scalars['String']['input']>;
  /** Filters schedule items starting on or after specified point in time. Inclusive. */
  startingFrom?: InputMaybe<Scalars['String']['input']>;
  /**
   * Schedule item state filter.
   * Defaults to `[PUBLISHED, VISIBLE]` when no filters are specified.
   * If neither `PUBLISHED` nor `DRAFT` are specified, assumes `PUBLISHED`, for example: `[HIDDEN]` becomes `[HIDDEN, PUBLISHED]`.
   * If neither `VISIBLE` nor `HIDDEN` are specified, assumes `VISIBLE`, for example: `[DRAFT]` becomes `[DRAFT, VISIBLE]`.
   */
  state?: InputMaybe<Array<InputMaybe<EventsScheduleStateFilter>>>;
  /** Tags filter. */
  tag?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EventsScheduleListScheduleItemsResponse = {
  __typename?: 'EventsScheduleListScheduleItemsResponse';
  /**
   * Whether there are draft changes which have not been published yet.
   * Returned only when filtering by single `event_id` with `WIX_EVENTS.MANAGE_AGENDA` permission.
   */
  draftNotPublished?: Maybe<Scalars['Boolean']['output']>;
  /** Facets. */
  facets?: Maybe<EventsFacetCounts>;
  /** Schedule items. */
  items?: Maybe<Array<Maybe<EventsScheduleScheduleItem>>>;
  /**
   * Deprecated.
   * Limit.
   */
  limit?: Maybe<Scalars['Int']['output']>;
  /**
   * Deprecated, use `paging_metadata.offset`.
   * Offset.
   */
  offset?: Maybe<Scalars['Int']['output']>;
  pagingMetadata?: Maybe<CommonPagingMetadataV2>;
  /**
   * Deprecated, use `paging_metadata.total`.
   * Total schedule items matching the given filters.
   */
  total?: Maybe<Scalars['Int']['output']>;
};

export type EventsSchedulePublishDraftRequestInput = {
  /** Event ID. */
  eventId?: InputMaybe<Scalars['String']['input']>;
};

export type EventsScheduleQueryScheduleItemsRequestInput = {
  query?: InputMaybe<EventsUpstreamCommonQueryV2Input>;
};

export type EventsScheduleQueryScheduleItemsResponse = {
  __typename?: 'EventsScheduleQueryScheduleItemsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<EventsScheduleScheduleItem>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type EventsScheduleRescheduleDraftRequestInput = {
  /** Event ID. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Offset added or subtracted from schedule item start & end times. */
  timeSlotOffset?: InputMaybe<Scalars['JSON']['input']>;
  /** Time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
  timeZoneId?: InputMaybe<Scalars['String']['input']>;
};

export type EventsScheduleScheduleItem = {
  __typename?: 'EventsScheduleScheduleItem';
  /** Schedule item created timestamp. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Rich-text content displayed in Wix UI when viewing schedule item details (HTML). */
  description?: Maybe<Scalars['String']['output']>;
  /** Whether schedule item is draft. */
  draft?: Maybe<Scalars['Boolean']['output']>;
  /** Event ID. */
  eventId?: Maybe<Scalars['String']['output']>;
  /** Whether schedule item is hidden from guests. */
  hidden?: Maybe<Scalars['Boolean']['output']>;
  /** Schedule item ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Schedule item name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Stage or room name in which session takes place. */
  stageName?: Maybe<Scalars['String']['output']>;
  /** Schedule item status. */
  status?: Maybe<EventsScheduleScheduleStatus>;
  /** Tags are used to organize schedule items by assigning them to a general theme or field of study. */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Time slot of an schedule item. */
  timeSlot?: Maybe<EventsTimeInterval>;
  /** Schedule item modified timestamp. */
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type EventsScheduleScheduleItemDataInput = {
  /** Rich-text content displayed in Wix UI when viewing schedule item details (HTML). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Whether schedule item is hidden from guests. */
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** Schedule item name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Stage or room name in which session takes place. */
  stageName?: InputMaybe<Scalars['String']['input']>;
  /** Schedule item status. */
  status?: InputMaybe<EventsScheduleScheduleStatus>;
  /** Tags are used to organize schedule items by assigning them to a general theme or field of study. */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timeSlot?: InputMaybe<EventsTimeIntervalInput>;
};

export enum EventsScheduleScheduleStatus {
  /** Item was canceled */
  Canceled = 'CANCELED',
  /** Item is scheduled for a future date */
  Scheduled = 'SCHEDULED'
}

export enum EventsScheduleStateFilter {
  /** Opposite of `PUBLISHED`. Requires `WIX_EVENTS.MANAGE_AGENDA` permission. */
  Draft = 'DRAFT',
  /** Opposite of `VISIBLE`. Requires `WIX_EVENTS.MANAGE_AGENDA` permission. */
  Hidden = 'HIDDEN',
  /** Schedule item is published. */
  Published = 'PUBLISHED',
  /** Schedule item is visible to the public. */
  Visible = 'VISIBLE'
}

export type EventsScheduleUpdateScheduleItemRequestInput = {
  /** Event ID. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Set of field paths to update.
   * When fields are empty, request is interpreted as full update.
   * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
   */
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Schedule item. */
  item?: InputMaybe<EventsScheduleScheduleItemDataInput>;
  /** Schedule item ID. */
  itemId?: InputMaybe<Scalars['String']['input']>;
};

export type EventsScheduleUpdateScheduleItemResponse = {
  __typename?: 'EventsScheduleUpdateScheduleItemResponse';
  /** Schedule item. */
  item?: Maybe<EventsScheduleScheduleItem>;
};

export type EventsTimeInterval = {
  __typename?: 'EventsTimeInterval';
  /** End of the interval. Non-inclusive. */
  end?: Maybe<Scalars['String']['output']>;
  /** Start of the interval. Inclusive. */
  start?: Maybe<Scalars['String']['output']>;
  /**
   * Time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`.
   * Defaults to `Etc/UTC` when not set.
   */
  timeZoneId?: Maybe<Scalars['String']['output']>;
};

export type EventsTimeIntervalInput = {
  /** End of the interval. Non-inclusive. */
  end?: InputMaybe<Scalars['String']['input']>;
  /** Start of the interval. Inclusive. */
  start?: InputMaybe<Scalars['String']['input']>;
  /**
   * Time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`.
   * Defaults to `Etc/UTC` when not set.
   */
  timeZoneId?: InputMaybe<Scalars['String']['input']>;
};

export type EventsUpstreamCommonPagingInput = {
  /** Number of items to load per page. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to skip in the current sort order. */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type EventsUpstreamCommonQueryV2Input = {
  /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Pointer to page of results using offset.
   * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
   */
  paging?: InputMaybe<EventsUpstreamCommonPagingInput>;
  /**
   * Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]
   * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
   */
  sort?: InputMaybe<Array<InputMaybe<EventsUpstreamCommonSortingInput>>>;
};

export type EventsUpstreamCommonSortingInput = {
  /** Name of the field to sort by */
  fieldName?: InputMaybe<Scalars['String']['input']>;
  /** Sort order (ASC/DESC). Defaults to ASC */
  order?: InputMaybe<CommonSortOrder>;
};

export type EventsV2CreatePolicyRequestInput = {
  /** Policy info. */
  policy?: InputMaybe<EventsV2PolicyInput>;
};

export type EventsV2CreatePolicyResponse = {
  __typename?: 'EventsV2CreatePolicyResponse';
  /** Created policy. */
  policy?: Maybe<EventsV2Policy>;
};

export type EventsV2DeletePolicyRequestInput = {
  /** ID of the policy to delete. */
  policyId?: InputMaybe<Scalars['String']['input']>;
};

export type EventsV2Policy = {
  __typename?: 'EventsV2Policy';
  body?: Maybe<Scalars['String']['output']>;
  /** Date and time when the policy was created in `yyyy-mm-ddThh:mm:sssZ` format. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** ID of the event to which the policy belongs. */
  eventId?: Maybe<Scalars['String']['output']>;
  /** Policy ID. */
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** Revision number, which increments by 1 each time the policy is updated. To prevent conflicting changes, the existing revision must be used when updating a policy. You'll get an error if you try to use the previous revision. */
  revision?: Maybe<Scalars['Int']['output']>;
  /** Date and time of the policy's latest update in `yyyy-mm-ddThh:mm:sssZ` format. */
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type EventsV2PolicyInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  /** Date and time when the policy was created in `yyyy-mm-ddThh:mm:sssZ` format. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** ID of the event to which the policy belongs. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Policy ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Revision number, which increments by 1 each time the policy is updated. To prevent conflicting changes, the existing revision must be used when updating a policy. You'll get an error if you try to use the previous revision. */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** Date and time of the policy's latest update in `yyyy-mm-ddThh:mm:sssZ` format. */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
};

export type EventsV2PolicyUpstreamCommonCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of items to load per page. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type EventsV2PolicyUpstreamCommonPagingInput = {
  /** Number of items to load per page. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to skip in the current sort order. */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type EventsV2PolicyUpstreamCommonQueryV2Input = {
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<EventsV2PolicyUpstreamCommonCursorPagingInput>;
  /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1", "fieldName2":{"$operator":"value2"} }`. <br/> <br/> **Example:** <br/> `"filter" : { "id": "2224a9d1-79e6-4549-a5c5-bf7ce5aac1a5", "revision": {"$ne":"1"} }` <br/> <br/> See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/policy-v2/filter-and-sort) for more information. */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Pagination options. */
  paging?: InputMaybe<EventsV2PolicyUpstreamCommonPagingInput>;
  /** Sort object in the following format: <br/> `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]` <br/> <br/> **Example:** <br/> `[{"fieldName":"createdDate","direction":"DESC"}]` <br/> <br/> See [supported fields](https://dev.wix.com/api/rest/wix-events/policy-v2/filter-and-sort) for more information. */
  sort?: InputMaybe<Array<InputMaybe<EventsV2PolicyUpstreamCommonSortingInput>>>;
};

export type EventsV2PolicyUpstreamCommonSortingInput = {
  /** Name of the field to sort by. */
  fieldName?: InputMaybe<Scalars['String']['input']>;
  /** Sort order (ASC/DESC). Defaults to ASC */
  order?: InputMaybe<CommonSortOrder>;
};

export type EventsV2QueryPoliciesRequestInput = {
  /** Query options. See [API Query Langauge](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
  query?: InputMaybe<EventsV2PolicyUpstreamCommonQueryV2Input>;
};

export type EventsV2QueryPoliciesResponse = {
  __typename?: 'EventsV2QueryPoliciesResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<EventsV2Policy>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type EventsV2ReorderEventPoliciesRequestInput = {
  /** Move the given `policyId` after the referenced policy. */
  afterPolicyId?: InputMaybe<Scalars['String']['input']>;
  /** Move the given `policyId` before the referenced policy. */
  beforePolicyId?: InputMaybe<Scalars['String']['input']>;
  /** Event ID. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Policy ID. */
  policyId?: InputMaybe<Scalars['String']['input']>;
};

export type EventsV2ReorderEventPoliciesResponse = {
  __typename?: 'EventsV2ReorderEventPoliciesResponse';
  /** Policies in the new order. */
  policies?: Maybe<Array<Maybe<EventsV2Policy>>>;
};

export type EventsV2UpdatePolicyRequestInput = {
  /** Policy to update. */
  policy?: InputMaybe<EventsV2PolicyInput>;
};

export type EventsV2UpdatePolicyResponse = {
  __typename?: 'EventsV2UpdatePolicyResponse';
  /** The updated policy. */
  policy?: Maybe<EventsV2Policy>;
};

export type FormsV4BreakPoint = {
  __typename?: 'FormsV4BreakPoint';
  /** Amount of columns of layout grid. */
  columns?: Maybe<Scalars['Int']['output']>;
  /** Description of layouts for items. */
  items?: Maybe<Array<Maybe<FormsV4ItemLayout>>>;
  /** Description of elements margins. */
  margin?: Maybe<FormsV4BreakPointMargin>;
  /** Description of elements paddings. */
  padding?: Maybe<FormsV4BreakPointMargin>;
  /** Row height of layout grid. */
  rowHeight?: Maybe<Scalars['Int']['output']>;
};

export type FormsV4BreakPointMargin = {
  __typename?: 'FormsV4BreakPointMargin';
  /** Horizontal value. */
  horizontal?: Maybe<Scalars['Int']['output']>;
  /** Vertical value. */
  vertical?: Maybe<Scalars['Int']['output']>;
};

export type FormsV4Form = {
  __typename?: 'FormsV4Form';
  /** Date of creation. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Fields which were soft deleted. */
  deletedFields?: Maybe<Array<Maybe<FormsV4FormField>>>;
  /** List of form fields that represent input elements. */
  deletedFieldsV2?: Maybe<Array<Maybe<FormsV4FormFieldV2>>>;
  /** Data extensions ExtendedFields. */
  extendedFields?: Maybe<CommonDataDataextensionsExtendedFields>;
  /** List of form fields that represent input elements. */
  fields?: Maybe<Array<Maybe<FormsV4FormField>>>;
  /** List of form fields that represent input elements. */
  fieldsV2?: Maybe<Array<Maybe<FormsV4FormFieldV2>>>;
  /** Form ID. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Regular forms can be freely modified.
   * Extensions are copied from templates and might have restrictions.
   */
  kind?: Maybe<FormsV4FormKindKind>;
  /** Media folder ID. */
  mediaFolderId?: Maybe<Scalars['String']['output']>;
  /** Identifies the namespace that the form belongs to. */
  namespace?: Maybe<Scalars['String']['output']>;
  /**
   * Defines triggers that will be executed after the submission, for the submissions based on this schema.
   * Forms provide a set of predefined triggers that allow it to assign specific business cases to created forms.
   */
  postSubmissionTriggers?: Maybe<FormsV4PostSubmissionTriggers>;
  /** Properties of the form. */
  properties?: Maybe<FormsV4FormFormProperties>;
  /** Represents the current state of an item. Each time the item is modified, its `revision` changes. For an update operation to succeed, you MUST pass the latest revision. */
  revision?: Maybe<Scalars['Int']['output']>;
  /** Form rules, can be applied to layout and items properties. */
  rules?: Maybe<Array<Maybe<FormsV4FormRule>>>;
  /** Defines the layout for form fields in each submission step. */
  steps?: Maybe<Array<Maybe<FormsV4Step>>>;
  /** Date of last update. */
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormField = {
  __typename?: 'FormsV4FormField';
  /** Whether the field is hidden. */
  hidden?: Maybe<Scalars['Boolean']['output']>;
  /** Item ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Mark the field as containing personal information. This will encrypt user data when storing it. */
  pii?: Maybe<Scalars['Boolean']['output']>;
  /** Definition of a target where the value of field belongs. */
  target?: Maybe<Scalars['String']['output']>;
  /** Validation of field output value. */
  validation?: Maybe<FormsV4FormFieldValidation>;
  /** Field view properties. */
  view?: Maybe<Scalars['JSON']['output']>;
};

export type FormsV4FormFieldArrayErrorMessages = {
  __typename?: 'FormsV4FormFieldArrayErrorMessages';
  /** Default error message on invalid validation. */
  default?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldArrayType = {
  __typename?: 'FormsV4FormFieldArrayType';
  /** Custom error message when validation fails. */
  errorMessages?: Maybe<FormsV4FormFieldArrayErrorMessages>;
  /** Type of items allowed in array. */
  items?: Maybe<FormsV4FormFieldArrayTypeArrayItems>;
  /** Maximum amount of array elements. */
  maxItems?: Maybe<Scalars['Int']['output']>;
  /** Minimum amount of array elements. */
  minItems?: Maybe<Scalars['Int']['output']>;
};

export type FormsV4FormFieldArrayTypeArrayItems = {
  __typename?: 'FormsV4FormFieldArrayTypeArrayItems';
  /** Boolean type validation for items. */
  boolean?: Maybe<FormsV4FormFieldBooleanType>;
  /** Integer type validation for items. */
  integer?: Maybe<FormsV4FormFieldIntegerType>;
  /** Number type validation for items. */
  number?: Maybe<FormsV4FormFieldNumberType>;
  /** Object type validation for items */
  object?: Maybe<FormsV4FormFieldObjectType>;
  /** String type validation for items. */
  string?: Maybe<FormsV4FormFieldStringType>;
};

export type FormsV4FormFieldBooleanErrorMessages = {
  __typename?: 'FormsV4FormFieldBooleanErrorMessages';
  /** Default error message on invalid validation. */
  default?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldBooleanType = {
  __typename?: 'FormsV4FormFieldBooleanType';
  /** List of allowed values. */
  enum?: Maybe<Array<Maybe<Scalars['Boolean']['output']>>>;
  /** Custom error message when validation fails. */
  errorMessages?: Maybe<FormsV4FormFieldBooleanErrorMessages>;
};

export type FormsV4FormFieldContactInfo = {
  __typename?: 'FormsV4FormFieldContactInfo';
  /** Address info. */
  addressInfo?: Maybe<FormsV4FormFieldContactInfoAddressInfo>;
  /** Field mapped to contacts. */
  contactField?: Maybe<FormsV4FormFieldContactInfoContactField>;
  /** Custom field info. */
  customFieldInfo?: Maybe<FormsV4FormFieldContactInfoCustomFieldInfo>;
  /** Email info. */
  emailInfo?: Maybe<FormsV4FormFieldContactInfoEmailInfo>;
  /** Phone info. */
  phoneInfo?: Maybe<FormsV4FormFieldContactInfoPhoneInfo>;
};

export type FormsV4FormFieldContactInfoAddressInfo = {
  __typename?: 'FormsV4FormFieldContactInfoAddressInfo';
  /** Address tag. */
  tag?: Maybe<FormsV4FormFieldContactInfoAddressInfoTag>;
};

export enum FormsV4FormFieldContactInfoAddressInfoTag {
  Home = 'HOME',
  Untagged = 'UNTAGGED'
}

export enum FormsV4FormFieldContactInfoContactField {
  Address = 'ADDRESS',
  Birthdate = 'BIRTHDATE',
  Company = 'COMPANY',
  CustomField = 'CUSTOM_FIELD',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME',
  Phone = 'PHONE',
  Position = 'POSITION',
  Subscription = 'SUBSCRIPTION',
  Undefined = 'UNDEFINED'
}

export type FormsV4FormFieldContactInfoCustomFieldInfo = {
  __typename?: 'FormsV4FormFieldContactInfoCustomFieldInfo';
  /** Custom field key. */
  key?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldContactInfoEmailInfo = {
  __typename?: 'FormsV4FormFieldContactInfoEmailInfo';
  /** Email tag. */
  tag?: Maybe<FormsV4FormFieldContactInfoEmailInfoTag>;
};

export enum FormsV4FormFieldContactInfoEmailInfoTag {
  Main = 'MAIN',
  Untagged = 'UNTAGGED'
}

export type FormsV4FormFieldContactInfoPhoneInfo = {
  __typename?: 'FormsV4FormFieldContactInfoPhoneInfo';
  /** Phone tag. */
  tag?: Maybe<FormsV4FormFieldContactInfoPhoneInfoTag>;
};

export enum FormsV4FormFieldContactInfoPhoneInfoTag {
  Main = 'MAIN',
  Untagged = 'UNTAGGED'
}

export type FormsV4FormFieldIntegerType = {
  __typename?: 'FormsV4FormFieldIntegerType';
  /** List of allowed values. */
  enum?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Custom error message when validation fails. */
  errorMessages?: Maybe<FormsV4FormFieldNumberErrorMessages>;
  /** Minimum value. */
  maximum?: Maybe<Scalars['Int']['output']>;
  /** Maximum value. */
  minimum?: Maybe<Scalars['Int']['output']>;
  /** Multiple of value. */
  multipleOf?: Maybe<Scalars['Int']['output']>;
};

export type FormsV4FormFieldNumberErrorMessages = {
  __typename?: 'FormsV4FormFieldNumberErrorMessages';
  /** Default error message on invalid validation. */
  default?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldNumberType = {
  __typename?: 'FormsV4FormFieldNumberType';
  /** List of allowed values. */
  enum?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** Custom error message when validation fails. */
  errorMessages?: Maybe<FormsV4FormFieldNumberErrorMessages>;
  /** Inclusive maximum value. */
  maximum?: Maybe<Scalars['Float']['output']>;
  /** Inclusive minimum value. */
  minimum?: Maybe<Scalars['Float']['output']>;
  /** Multiple of value. */
  multipleOf?: Maybe<Scalars['Float']['output']>;
};

export type FormsV4FormFieldObjectErrorMessages = {
  __typename?: 'FormsV4FormFieldObjectErrorMessages';
  /** Default error message on invalid validation. */
  default?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldObjectType = {
  __typename?: 'FormsV4FormFieldObjectType';
  /** Custom error message when validation fails. */
  errorMessages?: Maybe<FormsV4FormFieldObjectErrorMessages>;
  /** Description of object properties. */
  properties?: Maybe<FormsV4FormFieldObjectTypePropertiesType>;
};

export type FormsV4FormFieldObjectTypePropertiesType = {
  __typename?: 'FormsV4FormFieldObjectTypePropertiesType';
  /** Array type validation for property. */
  array?: Maybe<FormsV4FormFieldArrayType>;
  /** Boolean type validation for property. */
  boolean?: Maybe<FormsV4FormFieldBooleanType>;
  /** Integer type validation for property. */
  integer?: Maybe<FormsV4FormFieldIntegerType>;
  /** Number type validation for property. */
  number?: Maybe<FormsV4FormFieldNumberType>;
  /** Whether the property is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** String type validation for property. */
  string?: Maybe<FormsV4FormFieldStringType>;
};

export type FormsV4FormFieldPaymentInfo = {
  __typename?: 'FormsV4FormFieldPaymentInfo';
  /** Field mapped to products. */
  products?: Maybe<Array<Maybe<FormsV4FormFieldPaymentInfoProduct>>>;
};

export type FormsV4FormFieldPaymentInfoProduct = {
  __typename?: 'FormsV4FormFieldPaymentInfoProduct';
  /** Dynamic price options. */
  dynamicPriceOptions?: Maybe<FormsV4FormFieldPaymentInfoProductDynamicPriceOptions>;
  /** Fixed price options. */
  fixedPriceOptions?: Maybe<FormsV4FormFieldPaymentInfoProductFixedPriceOptions>;
  /** Product ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Price type. */
  priceType?: Maybe<FormsV4FormFieldPaymentInfoProductPriceTypeEnumPriceType>;
  /** Product type. */
  productType?: Maybe<FormsV4FormFieldPaymentInfoProductProductTypeEnumProductType>;
};

export type FormsV4FormFieldPaymentInfoProductDynamicPriceOptions = {
  __typename?: 'FormsV4FormFieldPaymentInfoProductDynamicPriceOptions';
  /** Maximal price monetary amount. */
  maxPrice?: Maybe<Scalars['String']['output']>;
  /** Minimal price monetary amount. */
  minPrice?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldPaymentInfoProductFixedPriceOptions = {
  __typename?: 'FormsV4FormFieldPaymentInfoProductFixedPriceOptions';
  /** Fixed price monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). */
  price?: Maybe<Scalars['String']['output']>;
};

export enum FormsV4FormFieldPaymentInfoProductPriceTypeEnumPriceType {
  /** Dynamic price from price range. */
  DynamicPrice = 'DYNAMIC_PRICE',
  /** Fixed price. */
  FixedPrice = 'FIXED_PRICE',
  Unknown = 'UNKNOWN'
}

export enum FormsV4FormFieldPaymentInfoProductProductTypeEnumProductType {
  /** Digital. */
  Digital = 'DIGITAL',
  /** Shippable (physical). */
  Shippable = 'SHIPPABLE',
  Unknown = 'UNKNOWN'
}

export type FormsV4FormFieldPredefinedValidation = {
  __typename?: 'FormsV4FormFieldPredefinedValidation';
  /** Format of predefined validation. */
  format?: Maybe<FormsV4FormFieldPredefinedValidationValidationFormat>;
};

export enum FormsV4FormFieldPredefinedValidationValidationFormat {
  /** Payment validation (described in payment trigger). */
  Payment = 'PAYMENT',
  Undefined = 'UNDEFINED',
  /** File upload validation. */
  WixFile = 'WIX_FILE'
}

export type FormsV4FormFieldStringErrorMessages = {
  __typename?: 'FormsV4FormFieldStringErrorMessages';
  /** Default error message on invalid validation. */
  default?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldStringType = {
  __typename?: 'FormsV4FormFieldStringType';
  /** List of allowed values. */
  enum?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Custom error messages when validation fails. */
  errorMessages?: Maybe<FormsV4FormFieldStringErrorMessages>;
  /** Format of a string. */
  format?: Maybe<FormsV4FormFieldStringTypeFormatEnumFormat>;
  /** Maximum length. */
  maxLength?: Maybe<Scalars['Int']['output']>;
  /** Minimum length. */
  minLength?: Maybe<Scalars['Int']['output']>;
  /** Pattern for a regular expression match. */
  pattern?: Maybe<Scalars['String']['output']>;
};

export enum FormsV4FormFieldStringTypeFormatEnumFormat {
  ColorHex = 'COLOR_HEX',
  Currency = 'CURRENCY',
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Email = 'EMAIL',
  Hostname = 'HOSTNAME',
  Language = 'LANGUAGE',
  Phone = 'PHONE',
  Time = 'TIME',
  Undefined = 'UNDEFINED',
  Uri = 'URI',
  Url = 'URL',
  Uuid = 'UUID'
}

export type FormsV4FormFieldV2 = {
  __typename?: 'FormsV4FormFieldV2';
  /** Field for displaying information */
  displayOptions?: Maybe<FormsV4FormFieldV2DisplayField>;
  /** Type of the field */
  fieldType?: Maybe<FormsV4FormFieldV2FieldType>;
  /**
   * Whether the field is hidden.
   * Default: false
   */
  hidden?: Maybe<Scalars['Boolean']['output']>;
  /** Field id. */
  id?: Maybe<Scalars['String']['output']>;
  /** Custom identification of field, can be used to specify exceptional behaviour of client for specific field */
  identifier?: Maybe<Scalars['String']['output']>;
  /** Field accept input of data */
  inputOptions?: Maybe<FormsV4FormFieldV2InputField>;
  /** Submit button of the form */
  submitOptions?: Maybe<FormsV4FormFieldV2SubmitButton>;
};

export type FormsV4FormFieldV2DisplayField = {
  __typename?: 'FormsV4FormFieldV2DisplayField';
  /** Header field */
  header?: Maybe<FormsV4FormFieldV2DisplayFieldHeader>;
  /** Rich text field */
  richText?: Maybe<FormsV4FormFieldV2DisplayFieldRichText>;
};

export type FormsV4FormFieldV2DisplayFieldHeader = {
  __typename?: 'FormsV4FormFieldV2DisplayFieldHeader';
  /** Content of the header */
  content?: Maybe<RichContentV1RichContent>;
};

export type FormsV4FormFieldV2DisplayFieldRichText = {
  __typename?: 'FormsV4FormFieldV2DisplayFieldRichText';
  /** Content of the rich text field */
  content?: Maybe<RichContentV1RichContent>;
};

export enum FormsV4FormFieldV2FieldType {
  Display = 'DISPLAY',
  Input = 'INPUT',
  Submit = 'SUBMIT',
  Unknown = 'UNKNOWN'
}

export type FormsV4FormFieldV2InputField = {
  __typename?: 'FormsV4FormFieldV2InputField';
  /** Input return array as value */
  arrayOptions?: Maybe<FormsV4FormFieldV2InputFieldArray>;
  /** Input return boolean as value */
  booleanOptions?: Maybe<FormsV4FormFieldV2InputFieldBoolean>;
  /** Type of the input field */
  inputType?: Maybe<FormsV4FormFieldV2InputFieldInputType>;
  /** Input return number as value */
  numberOptions?: Maybe<FormsV4FormFieldV2InputFieldNumber>;
  /** Input return object as value */
  objectOptions?: Maybe<FormsV4FormFieldV2InputFieldObject>;
  /**
   * Mark the field as containing personal information. This will encrypt user data when storing it.
   * Default: false
   */
  pii?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Whether the field is required.
   * Default: false
   */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** Input return string as value */
  stringOptions?: Maybe<FormsV4FormFieldV2InputFieldString>;
  /** Definition of a target where the value of field belongs. */
  target?: Maybe<Scalars['String']['output']>;
  /** Input return "Wix file" as value */
  wixFileOptions?: Maybe<FormsV4FormFieldV2InputFieldWixFile>;
};

export type FormsV4FormFieldV2InputFieldArray = {
  __typename?: 'FormsV4FormFieldV2InputFieldArray';
  /** Checkbox group input field */
  checkboxGroupOptions?: Maybe<FormsV4FormFieldV2InputFieldArrayCheckboxGroup>;
  /** Component type of the array input field */
  componentType?: Maybe<FormsV4FormFieldV2InputFieldArrayComponentType>;
  /** Validation of array type. */
  validation?: Maybe<FormsV4FormFieldV2InputFieldArrayType>;
};

export type FormsV4FormFieldV2InputFieldArrayCheckboxGroup = {
  __typename?: 'FormsV4FormFieldV2InputFieldArrayCheckboxGroup';
  /** Option which can be specified by UoU, enabled when this object is specified. */
  customOption?: Maybe<FormsV4FormFieldV2InputFieldArrayCheckboxGroupCustomOption>;
  /** Description of the field */
  description?: Maybe<RichContentV1RichContent>;
  /** Label of the field */
  label?: Maybe<Scalars['String']['output']>;
  /** List of options to select from */
  options?: Maybe<Array<Maybe<FormsV4FormFieldV2InputFieldArrayCheckboxGroupOption>>>;
  /**
   * Flag identifying to hide or not label
   * Default: true
   */
  showLabel?: Maybe<Scalars['Boolean']['output']>;
};

export type FormsV4FormFieldV2InputFieldArrayCheckboxGroupCustomOption = {
  __typename?: 'FormsV4FormFieldV2InputFieldArrayCheckboxGroupCustomOption';
  /** Label of custom option input */
  label?: Maybe<Scalars['String']['output']>;
  /** Placeholder of custom option input */
  placeholder?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldV2InputFieldArrayCheckboxGroupOption = {
  __typename?: 'FormsV4FormFieldV2InputFieldArrayCheckboxGroupOption';
  /** Flag identifying that option should be selected by default */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** Selectable option label */
  label?: Maybe<Scalars['String']['output']>;
  /** Selectable option value, which is saved to DB. */
  value?: Maybe<Scalars['JSON']['output']>;
};

export enum FormsV4FormFieldV2InputFieldArrayComponentType {
  CheckboxGroup = 'CHECKBOX_GROUP',
  Unknown = 'UNKNOWN'
}

export type FormsV4FormFieldV2InputFieldArrayErrorMessages = {
  __typename?: 'FormsV4FormFieldV2InputFieldArrayErrorMessages';
  /** Default error message on invalid validation. */
  default?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldV2InputFieldArrayType = {
  __typename?: 'FormsV4FormFieldV2InputFieldArrayType';
  /** Custom error message when validation fails. */
  errorMessages?: Maybe<FormsV4FormFieldV2InputFieldArrayErrorMessages>;
  /** Type of items allowed in array. */
  items?: Maybe<FormsV4FormFieldV2InputFieldArrayTypeArrayItems>;
  /** Maximum amount of array elements. */
  maxItems?: Maybe<Scalars['Int']['output']>;
  /** Minimum amount of array elements. */
  minItems?: Maybe<Scalars['Int']['output']>;
};

export type FormsV4FormFieldV2InputFieldArrayTypeArrayItems = {
  __typename?: 'FormsV4FormFieldV2InputFieldArrayTypeArrayItems';
  /** Boolean type validation for items. */
  booleanOptions?: Maybe<FormsV4FormFieldV2InputFieldBooleanType>;
  /** Integer type validation for items. */
  integerOptions?: Maybe<FormsV4FormFieldV2InputFieldIntegerType>;
  /** Type of array items */
  itemType?: Maybe<FormsV4FormFieldV2InputFieldArrayTypeArrayItemsItemType>;
  /** Number type validation for items. */
  numberOptions?: Maybe<FormsV4FormFieldV2InputFieldNumberType>;
  /** Object type validation for items */
  objectOptions?: Maybe<FormsV4FormFieldV2InputFieldObjectType>;
  /** String type validation for items. */
  stringOptions?: Maybe<FormsV4FormFieldV2InputFieldStringType>;
};

export enum FormsV4FormFieldV2InputFieldArrayTypeArrayItemsItemType {
  Boolean = 'BOOLEAN',
  Integer = 'INTEGER',
  Number = 'NUMBER',
  Object = 'OBJECT',
  String = 'STRING',
  Unknown = 'UNKNOWN'
}

export type FormsV4FormFieldV2InputFieldBoolean = {
  __typename?: 'FormsV4FormFieldV2InputFieldBoolean';
  /** Checkbox input field */
  checkboxOptions?: Maybe<FormsV4FormFieldV2InputFieldBooleanCheckbox>;
  /** Component type of the boolean input field */
  componentType?: Maybe<FormsV4FormFieldV2InputFieldBooleanComponentType>;
  /** Validation of field output value. */
  validation?: Maybe<FormsV4FormFieldV2InputFieldBooleanType>;
};

export type FormsV4FormFieldV2InputFieldBooleanCheckbox = {
  __typename?: 'FormsV4FormFieldV2InputFieldBooleanCheckbox';
  /** Label of the field */
  label?: Maybe<RichContentV1RichContent>;
};

export enum FormsV4FormFieldV2InputFieldBooleanComponentType {
  Checkbox = 'CHECKBOX',
  Unknown = 'UNKNOWN'
}

export type FormsV4FormFieldV2InputFieldBooleanErrorMessages = {
  __typename?: 'FormsV4FormFieldV2InputFieldBooleanErrorMessages';
  /** Default error message on invalid validation. */
  default?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldV2InputFieldBooleanType = {
  __typename?: 'FormsV4FormFieldV2InputFieldBooleanType';
  /** List of allowed values. */
  enum?: Maybe<Array<Maybe<Scalars['Boolean']['output']>>>;
  /** Custom error message when validation fails. */
  errorMessages?: Maybe<FormsV4FormFieldV2InputFieldBooleanErrorMessages>;
};

export enum FormsV4FormFieldV2InputFieldInputType {
  Array = 'ARRAY',
  Boolean = 'BOOLEAN',
  Number = 'NUMBER',
  Object = 'OBJECT',
  String = 'STRING',
  Unknown = 'UNKNOWN',
  WixFile = 'WIX_FILE'
}

export type FormsV4FormFieldV2InputFieldIntegerType = {
  __typename?: 'FormsV4FormFieldV2InputFieldIntegerType';
  /** List of allowed values. */
  enum?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Custom error message when validation fails. */
  errorMessages?: Maybe<FormsV4FormFieldV2InputFieldNumberErrorMessages>;
  /** Minimum value. */
  maximum?: Maybe<Scalars['Int']['output']>;
  /** Maximum value. */
  minimum?: Maybe<Scalars['Int']['output']>;
  /** Multiple of value. */
  multipleOf?: Maybe<Scalars['Int']['output']>;
};

export type FormsV4FormFieldV2InputFieldNumber = {
  __typename?: 'FormsV4FormFieldV2InputFieldNumber';
  /** Component type of the number input field */
  componentType?: Maybe<FormsV4FormFieldV2InputFieldNumberComponentType>;
  /** Number value input field */
  numberInputOptions?: Maybe<FormsV4FormFieldV2InputFieldNumberNumberInput>;
  /** Validation of field output value. */
  validation?: Maybe<FormsV4FormFieldV2InputFieldNumberType>;
};

export enum FormsV4FormFieldV2InputFieldNumberComponentType {
  NumberInput = 'NUMBER_INPUT',
  Unknown = 'UNKNOWN'
}

export type FormsV4FormFieldV2InputFieldNumberErrorMessages = {
  __typename?: 'FormsV4FormFieldV2InputFieldNumberErrorMessages';
  /** Default error message on invalid validation. */
  default?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldV2InputFieldNumberNumberInput = {
  __typename?: 'FormsV4FormFieldV2InputFieldNumberNumberInput';
  /** Description of the field */
  description?: Maybe<RichContentV1RichContent>;
  /** Label of the field */
  label?: Maybe<Scalars['String']['output']>;
  /** Placeholder for the value input */
  placeholder?: Maybe<Scalars['String']['output']>;
  /**
   * Flag identifying to hide or not label
   * Default: true
   */
  showLabel?: Maybe<Scalars['Boolean']['output']>;
};

export type FormsV4FormFieldV2InputFieldNumberType = {
  __typename?: 'FormsV4FormFieldV2InputFieldNumberType';
  /** List of allowed values. */
  enum?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** Custom error message when validation fails. */
  errorMessages?: Maybe<FormsV4FormFieldV2InputFieldNumberErrorMessages>;
  /** Inclusive maximum value. */
  maximum?: Maybe<Scalars['Float']['output']>;
  /** Inclusive minimum value. */
  minimum?: Maybe<Scalars['Float']['output']>;
  /** Multiple of value. */
  multipleOf?: Maybe<Scalars['Float']['output']>;
};

export type FormsV4FormFieldV2InputFieldObject = {
  __typename?: 'FormsV4FormFieldV2InputFieldObject';
  /** Validation of object type. */
  object?: Maybe<FormsV4FormFieldV2InputFieldObjectType>;
};

export type FormsV4FormFieldV2InputFieldObjectErrorMessages = {
  __typename?: 'FormsV4FormFieldV2InputFieldObjectErrorMessages';
  /** Default error message on invalid validation. */
  default?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldV2InputFieldObjectType = {
  __typename?: 'FormsV4FormFieldV2InputFieldObjectType';
  /** Custom error message when validation fails. */
  errorMessages?: Maybe<FormsV4FormFieldV2InputFieldObjectErrorMessages>;
  /** Description of object properties. */
  properties?: Maybe<FormsV4FormFieldV2InputFieldObjectTypePropertiesType>;
};

export type FormsV4FormFieldV2InputFieldObjectTypePropertiesType = {
  __typename?: 'FormsV4FormFieldV2InputFieldObjectTypePropertiesType';
  /** Array type validation for property. */
  arrayOptions?: Maybe<FormsV4FormFieldV2InputFieldArrayType>;
  /** Boolean type validation for property. */
  booleanOptions?: Maybe<FormsV4FormFieldV2InputFieldBooleanType>;
  /** Integer type validation for property. */
  integerOptions?: Maybe<FormsV4FormFieldV2InputFieldIntegerType>;
  /** Number type validation for property. */
  numberOptions?: Maybe<FormsV4FormFieldV2InputFieldNumberType>;
  /** Type of object properties */
  propertiesType?: Maybe<FormsV4FormFieldV2InputFieldObjectTypePropertiesTypePropertiesType>;
  /** Whether the property is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** String type validation for property. */
  stringOptions?: Maybe<FormsV4FormFieldV2InputFieldStringType>;
};

export enum FormsV4FormFieldV2InputFieldObjectTypePropertiesTypePropertiesType {
  Array = 'ARRAY',
  Boolean = 'BOOLEAN',
  Integer = 'INTEGER',
  Number = 'NUMBER',
  String = 'STRING',
  Unknown = 'UNKNOWN'
}

export type FormsV4FormFieldV2InputFieldString = {
  __typename?: 'FormsV4FormFieldV2InputFieldString';
  /** Component type of the string input field */
  componentType?: Maybe<FormsV4FormFieldV2InputFieldStringComponentType>;
  /** Selection field as drop down */
  dropDownOptions?: Maybe<FormsV4FormFieldV2InputFieldStringDropDown>;
  /** Selection field as radio group */
  radioGroupOptions?: Maybe<FormsV4FormFieldV2InputFieldStringRadioGroup>;
  /** Text input field */
  textInputOptions?: Maybe<FormsV4FormFieldV2InputFieldStringTextInput>;
  /** Validation of field output value. */
  validation?: Maybe<FormsV4FormFieldV2InputFieldStringType>;
};

export enum FormsV4FormFieldV2InputFieldStringComponentType {
  DropDown = 'DROP_DOWN',
  RadioGroup = 'RADIO_GROUP',
  TextInput = 'TEXT_INPUT',
  Unknown = 'UNKNOWN'
}

export type FormsV4FormFieldV2InputFieldStringDropDown = {
  __typename?: 'FormsV4FormFieldV2InputFieldStringDropDown';
  /** Option which can be specified by UoU, enabled when this object is specified. */
  customOption?: Maybe<FormsV4FormFieldV2InputFieldStringDropDownCustomOption>;
  /** Description of the field */
  description?: Maybe<RichContentV1RichContent>;
  /** Label of the field */
  label?: Maybe<Scalars['String']['output']>;
  /** List of options to select from */
  options?: Maybe<Array<Maybe<FormsV4FormFieldV2InputFieldStringDropDownOption>>>;
  /**
   * Flag identifying to hide or not label
   * Default: true
   */
  showLabel?: Maybe<Scalars['Boolean']['output']>;
};

export type FormsV4FormFieldV2InputFieldStringDropDownCustomOption = {
  __typename?: 'FormsV4FormFieldV2InputFieldStringDropDownCustomOption';
  /** Label of custom option input */
  label?: Maybe<Scalars['String']['output']>;
  /** Placeholder of custom option input */
  placeholder?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldV2InputFieldStringDropDownOption = {
  __typename?: 'FormsV4FormFieldV2InputFieldStringDropDownOption';
  /** Flag identifying that option should be selected by default */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** Selectable option label */
  label?: Maybe<Scalars['String']['output']>;
  /** Selectable option value, which is saved to DB. */
  value?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldV2InputFieldStringErrorMessages = {
  __typename?: 'FormsV4FormFieldV2InputFieldStringErrorMessages';
  /** Default error message on invalid validation. */
  default?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldV2InputFieldStringRadioGroup = {
  __typename?: 'FormsV4FormFieldV2InputFieldStringRadioGroup';
  /** Option which can be specified by UoU, enabled when this object is specified. */
  customOption?: Maybe<FormsV4FormFieldV2InputFieldStringRadioGroupCustomOption>;
  /** Description of the field */
  description?: Maybe<RichContentV1RichContent>;
  /** Label of the field */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * Flag identifying to show option allowing input custom value
   * List of options to select from
   */
  options?: Maybe<Array<Maybe<FormsV4FormFieldV2InputFieldStringRadioGroupOption>>>;
  /**
   * Flag identifying to hide or not label
   * Default: true
   */
  showLabel?: Maybe<Scalars['Boolean']['output']>;
};

export type FormsV4FormFieldV2InputFieldStringRadioGroupCustomOption = {
  __typename?: 'FormsV4FormFieldV2InputFieldStringRadioGroupCustomOption';
  /** Label of custom option input */
  label?: Maybe<Scalars['String']['output']>;
  /** Placeholder of custom option input */
  placeholder?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldV2InputFieldStringRadioGroupOption = {
  __typename?: 'FormsV4FormFieldV2InputFieldStringRadioGroupOption';
  /** Flag identifying that option should be selected by default */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** Selectable option label */
  label?: Maybe<Scalars['String']['output']>;
  /** Selectable option value, which is saved to DB. */
  value?: Maybe<Scalars['String']['output']>;
};

export type FormsV4FormFieldV2InputFieldStringTextInput = {
  __typename?: 'FormsV4FormFieldV2InputFieldStringTextInput';
  /** Description of the field */
  description?: Maybe<RichContentV1RichContent>;
  /** Label of the field */
  label?: Maybe<Scalars['String']['output']>;
  /** Placeholder for the value input */
  placeholder?: Maybe<Scalars['String']['output']>;
  /**
   * Flag identifying to hide or not label
   * Default: true
   */
  showLabel?: Maybe<Scalars['Boolean']['output']>;
};

export type FormsV4FormFieldV2InputFieldStringType = {
  __typename?: 'FormsV4FormFieldV2InputFieldStringType';
  /** List of allowed values. */
  enum?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Custom error messages when validation fails. */
  errorMessages?: Maybe<FormsV4FormFieldV2InputFieldStringErrorMessages>;
  /** Format of a string. */
  format?: Maybe<FormsV4FormFieldV2InputFieldStringTypeFormatEnumFormat>;
  /** Maximum length. */
  maxLength?: Maybe<Scalars['Int']['output']>;
  /** Minimum length. */
  minLength?: Maybe<Scalars['Int']['output']>;
  /** Pattern for a regular expression match. */
  pattern?: Maybe<Scalars['String']['output']>;
};

export enum FormsV4FormFieldV2InputFieldStringTypeFormatEnumFormat {
  ColorHex = 'COLOR_HEX',
  Currency = 'CURRENCY',
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Email = 'EMAIL',
  Hostname = 'HOSTNAME',
  Language = 'LANGUAGE',
  Phone = 'PHONE',
  Time = 'TIME',
  Undefined = 'UNDEFINED',
  Uri = 'URI',
  Url = 'URL',
  Uuid = 'UUID'
}

export type FormsV4FormFieldV2InputFieldWixFile = {
  __typename?: 'FormsV4FormFieldV2InputFieldWixFile';
  /** Component type of the array input field */
  componentType?: Maybe<FormsV4FormFieldV2InputFieldWixFileComponentType>;
  /** File upload input field */
  fileUploadOptions?: Maybe<FormsV4FormFieldV2InputFieldWixFileFileUpload>;
};

export enum FormsV4FormFieldV2InputFieldWixFileComponentType {
  FileUpload = 'FILE_UPLOAD',
  Unknown = 'UNKNOWN'
}

export type FormsV4FormFieldV2InputFieldWixFileFileUpload = {
  __typename?: 'FormsV4FormFieldV2InputFieldWixFileFileUpload';
  /** Text on upload button */
  buttonText?: Maybe<Scalars['String']['output']>;
  /** Description of the field */
  description?: Maybe<RichContentV1RichContent>;
  /** Custom text which appears when file is uploaded, if missing file name will be shown */
  explanationText?: Maybe<Scalars['String']['output']>;
  /** Amount of files allowed to upload */
  fileLimit?: Maybe<Scalars['Int']['output']>;
  /** Selectable option label */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * Flag identifying to hide or not label
   * Default: true
   */
  showLabel?: Maybe<Scalars['Boolean']['output']>;
  /** Supported file formats for upload */
  uploadFileFormats?: Maybe<Array<Maybe<FormsV4FormFieldV2InputFieldWixFileFileUploadUploadFileFormatEnumUploadFileFormat>>>;
};

export enum FormsV4FormFieldV2InputFieldWixFileFileUploadUploadFileFormatEnumUploadFileFormat {
  /** Audio files */
  Audio = 'AUDIO',
  /** Document files */
  Document = 'DOCUMENT',
  /** Image files */
  Image = 'IMAGE',
  Undefined = 'UNDEFINED',
  /** Video files */
  Video = 'VIDEO'
}

export type FormsV4FormFieldV2SubmitButton = {
  __typename?: 'FormsV4FormFieldV2SubmitButton';
  /** When button is not on last page it behaves as switch between pages page, text of label to go to next page. */
  nextText?: Maybe<Scalars['String']['output']>;
  /** When button is not on last page it behaves as switch between pages page, text of label to go to previous page. */
  previousText?: Maybe<Scalars['String']['output']>;
  /** Submit action effect is to redirect to */
  redirect?: Maybe<FormsV4FormFieldV2SubmitButtonRedirect>;
  /** Text on the button when button is submitting a form */
  submitText?: Maybe<Scalars['String']['output']>;
  /** Submit action effect is to show message */
  thankYouMessage?: Maybe<FormsV4FormFieldV2SubmitButtonThankYouMessage>;
};

export type FormsV4FormFieldV2SubmitButtonRedirect = {
  __typename?: 'FormsV4FormFieldV2SubmitButtonRedirect';
  /** How should url be opened */
  target?: Maybe<FormsV4FormFieldV2SubmitButtonRedirectTargetEnumTarget>;
  /** Url to which UoU should be redirected after successful submit of form */
  url?: Maybe<Scalars['String']['output']>;
};

export enum FormsV4FormFieldV2SubmitButtonRedirectTargetEnumTarget {
  /** Url open in new tab */
  Blank = 'BLANK',
  /** Opened in same browser tab */
  Self = 'SELF',
  Undefined = 'UNDEFINED'
}

export type FormsV4FormFieldV2SubmitButtonThankYouMessage = {
  __typename?: 'FormsV4FormFieldV2SubmitButtonThankYouMessage';
  /**
   * Duration after how much second it should disappear. If 0, will stay forever.
   * Default: false
   */
  duration?: Maybe<Scalars['Int']['output']>;
  /** Message show after form submission */
  text?: Maybe<RichContentV1RichContent>;
};

export type FormsV4FormFieldValidation = {
  __typename?: 'FormsV4FormFieldValidation';
  /** Validation of array type. */
  array?: Maybe<FormsV4FormFieldArrayType>;
  /** Validation of boolean type. */
  boolean?: Maybe<FormsV4FormFieldBooleanType>;
  /** Validation of integer type. */
  integer?: Maybe<FormsV4FormFieldIntegerType>;
  /** Validation of number type. */
  number?: Maybe<FormsV4FormFieldNumberType>;
  /** Validation of object type. */
  object?: Maybe<FormsV4FormFieldObjectType>;
  /** Predefined validation of specific format */
  predefined?: Maybe<FormsV4FormFieldPredefinedValidation>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** Validation of string type. */
  string?: Maybe<FormsV4FormFieldStringType>;
};

export type FormsV4FormFormProperties = {
  __typename?: 'FormsV4FormFormProperties';
  /** Identifies if the form is disabled. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** Form name. */
  name?: Maybe<Scalars['String']['output']>;
};

export enum FormsV4FormKindKind {
  Extension = 'EXTENSION',
  Regular = 'REGULAR'
}

export type FormsV4FormLayout = {
  __typename?: 'FormsV4FormLayout';
  /** Layout for large break point. */
  large?: Maybe<FormsV4BreakPoint>;
  /** Layout for medium break point. */
  medium?: Maybe<FormsV4BreakPoint>;
  /** Layout for small break point. */
  small?: Maybe<FormsV4BreakPoint>;
};

export type FormsV4FormRule = {
  __typename?: 'FormsV4FormRule';
  /** Rule on which item properties or layouts will be changed. */
  condition?: Maybe<Scalars['JSON']['output']>;
  /** Id of the rule */
  id?: Maybe<Scalars['String']['output']>;
  /** Name of the rule */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Form items with defined properties that will be
   * changed when given condition is resolved to true.
   */
  overrides?: Maybe<Array<Maybe<FormsV4FormRuleFormOverride>>>;
};

export type FormsV4FormRuleFormOverride = {
  __typename?: 'FormsV4FormRuleFormOverride';
  /** Overridden entity id */
  entityId?: Maybe<Scalars['String']['output']>;
  /** Override entity type. */
  entityType?: Maybe<FormsV4FormRuleFormOverrideOverrideEntityTypeEnumOverrideEntityType>;
  /** Form entity properties path with new value, that will be changed on condition. */
  valueChanges?: Maybe<Scalars['JSON']['output']>;
};

export enum FormsV4FormRuleFormOverrideOverrideEntityTypeEnumOverrideEntityType {
  Field = 'FIELD',
  Form = 'FORM',
  NestedFormField = 'NESTED_FORM_FIELD',
  Unknown = 'UNKNOWN'
}

export type FormsV4ItemLayout = {
  __typename?: 'FormsV4ItemLayout';
  /** Vertical coordinate in the grid. */
  column?: Maybe<Scalars['Int']['output']>;
  /** Form field reference id. */
  fieldId?: Maybe<Scalars['String']['output']>;
  /** Width. */
  height?: Maybe<Scalars['Int']['output']>;
  /** Horizontal coordinate in the grid. */
  row?: Maybe<Scalars['Int']['output']>;
  /** Height. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type FormsV4PaymentTrigger = {
  __typename?: 'FormsV4PaymentTrigger';
  /** Fields mapping (target field mapped to corresponding payment field). */
  fieldsMapping?: Maybe<FormsV4FormFieldPaymentInfo>;
};

export type FormsV4PostSubmissionTriggers = {
  __typename?: 'FormsV4PostSubmissionTriggers';
  /** Payment trigger. */
  paymentTrigger?: Maybe<FormsV4PaymentTrigger>;
  /** Upserts a contact from the submission data. */
  upsertContact?: Maybe<FormsV4UpsertContact>;
};

export type FormsV4Step = {
  __typename?: 'FormsV4Step';
  /** Is step hidden */
  hidden?: Maybe<Scalars['Boolean']['output']>;
  /** Step ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Form step properties */
  layout?: Maybe<FormsV4FormLayout>;
  /** Name of the step. */
  name?: Maybe<Scalars['String']['output']>;
};

export type FormsV4UpsertContact = {
  __typename?: 'FormsV4UpsertContact';
  /** Fields mapping (target field mapped to corresponding contact field). */
  fieldsMapping?: Maybe<FormsV4FormFieldContactInfo>;
  /**
   * List of contact label keys.
   * [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
   * help categorize contacts.
   */
  labels?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type HeadlessV1CallbackParamsInput = {
  /**
   * The URL for a custom bookings services page implemented outside of Wix.
   *
   * Default: If you don't pass a URL, a Wix bookings services page is used.
   */
  bookingsServiceListUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * The URL for a custom eCommerce cart page implemented outside of Wix.
   *
   * Default: If you don't pass a URL, a Wix cart page is used.
   */
  cartPageUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * The URL for a custom login page implemented outside of Wix.
   *
   * Default: If you don't pass a URL, a Wix login page is used.
   */
  loginUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * The URL for a custom pricing plans page implemented outside of Wix.
   * When redirecting to this URL, Wix passes the following query parameters:
   * + `planIds`:  IDs of the pricing plans on the custom page.
   * + `checkoutData`: Pass this string back in `paidPlansCheckout.checkoutData` when redirecting back to Wix for checkout.
   *
   * Default: If you don't pass a URL, a Wix pricing plans page is used.
   */
  planListUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * The URL Wix should redirect the visitor to when the Wix-managed process is completed, abandoned, or interrupted.
   *
   * **Note**: For an authentication redirect, don't pass a URL here. Instead, pass one in `auth.authRequest.redirectUri`.
   */
  postFlowUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * The URL for a custom thank you page implemented on a site outside of Wix. The visitor is directed to this page after the Wix-managed process is completed.
   * When redirecting to this URL, Wix passes different query parameters depending on the preceding transaction:
   *
   * After a pricing plans checkout:
   * + `planOrderId`: ID of a pricing plan order.
   *
   * After an eCommerce checkout:
   * + `orderId`: ID of an eCommerce order.
   *
   * After an Events checkout
   * + `orderNumber`: Unique order number for the transaction.
   * + `eventId`: ID of the event.
   *
   * If the process is abandoned or interrupted, the visitor is redirected to the URL specified in `postFlowUrl` instead.
   *
   * Default: If you don't pass a URL, the visitor is redirected to a Wix thank you page, and from there to the URL specified in `postFlowUrl`.
   */
  thankYouPageUrl?: InputMaybe<Scalars['String']['input']>;
};

export type HeadlessV1CreateOAuthAppRequestInput = {
  /** OAuth app to create. */
  oAuthApp?: InputMaybe<HeadlessV1OAuthAppInput>;
};

export type HeadlessV1CreateOAuthAppResponse = {
  __typename?: 'HeadlessV1CreateOAuthAppResponse';
  /** Created OAuth app info. */
  oAuthApp?: Maybe<HeadlessV1OAuthApp>;
};

export type HeadlessV1CreateRedirectSessionRequestInput = {
  /** Information required for generating a custom URL for Wix authentication. */
  auth?: InputMaybe<HeadlessV1RedirectSessionAuthParamsInput>;
  /** Information required for generating a custom URL for a Wix Bookings checkout. */
  bookingsCheckout?: InputMaybe<HeadlessV1RedirectSessionBookingsCheckoutParamsInput>;
  /**
   * Details of pages to redirect the visitor back to on the Wix Headless client site.
   * When redirecting to any callback URL, Wix passes the boolean `wixMemberLoggedIn` query parameter.
   * If `true`, a member logged in during the preceding Wix-managed process.
   *
   * **Note**: For an authentication redirect, don't pass a post-flow URL here. Instead, pass one in `auth.authRequest.redirectUri`.
   */
  callbacks?: InputMaybe<HeadlessV1CallbackParamsInput>;
  /** Information required for generating a custom URL for a Wix eCommerce checkout. */
  ecomCheckout?: InputMaybe<HeadlessV1RedirectSessionEcomCheckoutParamsInput>;
  /** Information required for generating a custom URL for a Wix Events checkout. */
  eventsCheckout?: InputMaybe<HeadlessV1RedirectSessionEventsCheckoutParamsInput>;
  /** Pass an empty object in this parameter to generate a URL for Wix login without first checking whether the visitor is authenticated. */
  login?: InputMaybe<Scalars['Void']['input']>;
  /** Information required for generating a custom URL to log out from a Wix account. This process invalidates the visitor or member token and clears cookies associated with the Wix domain from their browser. */
  logout?: InputMaybe<HeadlessV1RedirectSessionLogoutParamsInput>;
  /** Information required for generating a custom URL for a Wix Paid Plans checkout. */
  paidPlansCheckout?: InputMaybe<HeadlessV1RedirectSessionPaidPlansCheckoutParamsInput>;
  /** Optional preferences for customizing redirection to Wix pages. */
  preferences?: InputMaybe<HeadlessV1RedirectSessionPreferencesInput>;
};

export type HeadlessV1CreateRedirectSessionResponse = {
  __typename?: 'HeadlessV1CreateRedirectSessionResponse';
  /** Details for redirecting the visitor to a Wix page. */
  redirectSession?: Maybe<HeadlessV1RedirectSession>;
};

export type HeadlessV1DeleteOAuthAppRequestInput = {
  /** ID of the OAuth app to delete. */
  oAuthAppId?: InputMaybe<Scalars['String']['input']>;
};

export type HeadlessV1GenerateOAuthAppSecretRequestInput = {
  /** ID of the OAuth app to generate a secret for. */
  oAuthAppId?: InputMaybe<Scalars['String']['input']>;
};

export type HeadlessV1GenerateOAuthAppSecretResponse = {
  __typename?: 'HeadlessV1GenerateOAuthAppSecretResponse';
  /** Secret generated. */
  oAuthAppSecret?: Maybe<Scalars['String']['output']>;
};

export type HeadlessV1OAuthApp = {
  __typename?: 'HeadlessV1OAuthApp';
  /**
   * Whether a secret can be generated for this OAuth app.
   *
   * Default: `true` until a secret has been generated for the OAuth App.
   */
  allowSecretGeneration?: Maybe<Scalars['Boolean']['output']>;
  /**
   * List of domains to which redirection from Wix is allowed after processes other than authentication.
   *
   * When a client redirects a user to a Wix page (for example, for checkout), the client provides a URL to redirect the user back to.
   * Wix only redirects the user if the URL is in one of the specified domains.
   */
  allowedRedirectDomains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * List of URIs to which redirection from Wix is allowed after authentication.
   *
   * When a client redirects a user to Wix for authentication, the client provides a URI to redirect the user back to after the user has been authenticated.
   * Wix only redirects the user if the exact URI is contained in this array.
   */
  allowedRedirectUris?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Date and time the OAuth app was created, in ISO 8601 format. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Description of the OAuth app, as it appears in the dashboard. */
  description?: Maybe<Scalars['String']['output']>;
  /** ID of the OAuth app. */
  id?: Maybe<Scalars['String']['output']>;
  /** External login URL to which users are redirected automatically to authenticate. If no login URL is specified, the user is redirected to Wix to authenticate. */
  loginUrl?: Maybe<Scalars['String']['output']>;
  /** Display name of the OAuth app, as it appears in the dashboard. */
  name?: Maybe<Scalars['String']['output']>;
  /** For internal use only. */
  secret?: Maybe<Scalars['String']['output']>;
};

export type HeadlessV1OAuthAppInput = {
  /**
   * Whether a secret can be generated for this OAuth app.
   *
   * Default: `true` until a secret has been generated for the OAuth App.
   */
  allowSecretGeneration?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * List of domains to which redirection from Wix is allowed after processes other than authentication.
   *
   * When a client redirects a user to a Wix page (for example, for checkout), the client provides a URL to redirect the user back to.
   * Wix only redirects the user if the URL is in one of the specified domains.
   */
  allowedRedirectDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * List of URIs to which redirection from Wix is allowed after authentication.
   *
   * When a client redirects a user to Wix for authentication, the client provides a URI to redirect the user back to after the user has been authenticated.
   * Wix only redirects the user if the exact URI is contained in this array.
   */
  allowedRedirectUris?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Date and time the OAuth app was created, in ISO 8601 format. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Description of the OAuth app, as it appears in the dashboard. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** ID of the OAuth app. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** External login URL to which users are redirected automatically to authenticate. If no login URL is specified, the user is redirected to Wix to authenticate. */
  loginUrl?: InputMaybe<Scalars['String']['input']>;
  /** Display name of the OAuth app, as it appears in the dashboard. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** For internal use only. */
  secret?: InputMaybe<Scalars['String']['input']>;
};

export type HeadlessV1PlatformQueryInput = {
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<CommonCursorPagingInput>;
  /**
   * Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Paging options to limit and skip the number of items. */
  paging?: InputMaybe<CommonPagingInput>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"name","order":"ASC"},{"fieldName":"created_date","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type HeadlessV1QueryOAuthAppsRequestInput = {
  /** Query options. */
  query?: InputMaybe<HeadlessV1PlatformQueryInput>;
};

export type HeadlessV1QueryOAuthAppsResponse = {
  __typename?: 'HeadlessV1QueryOAuthAppsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<HeadlessV1OAuthApp>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type HeadlessV1RedirectSession = {
  __typename?: 'HeadlessV1RedirectSession';
  /** The full URL of the Wix page to redirect the visitor to. This URL includes query parameters informing Wix where to redirect the visitor back to on the Wix Headless client site. */
  fullUrl?: Maybe<Scalars['String']['output']>;
  /** ID of the redirect session created. */
  id?: Maybe<Scalars['String']['output']>;
};

export type HeadlessV1RedirectSessionAuthParamsInput = {
  /** *Required.** The authorization request to send to the authorization server. */
  authRequest?: InputMaybe<IdentityOauth2V1AuthorizeRequestInput>;
  prompt?: InputMaybe<HeadlessV1RedirectSessionAuthParamsPrompt>;
};

export enum HeadlessV1RedirectSessionAuthParamsPrompt {
  Consent = 'consent',
  Login = 'login',
  None = 'none',
  SelectAccount = 'select_account'
}

export type HeadlessV1RedirectSessionBookingsCheckoutParamsInput = {
  /** *Required.** The calendar slot to check out. */
  slotAvailability?: InputMaybe<BookingsAvailabilitySlotAvailabilityInput>;
  /**
   * The timezone to use when presenting the selected slot to users, in [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format. For example, `America/Santiago`.
   *
   * Default: If you don't specify a timezone, the timezone in `slotAvailability.slot.timezone` is used.
   */
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type HeadlessV1RedirectSessionEcomCheckoutParamsInput = {
  /** *Required.** ID of the checkout to process. Use [Create Checkout From Cart](https://dev.wix.com/api/rest/wix-ecommerce/cart/create-checkout-from-cart) to create a checkout and obtain an ID. */
  checkoutId?: InputMaybe<Scalars['String']['input']>;
};

export type HeadlessV1RedirectSessionEventsCheckoutParamsInput = {
  /** *Required.** URL-friendly event slug, generated from the event title of the event. For example, `my-event-4`. Use [Query Events](https://dev.wix.com/api/rest/wix-events/wix-events/event/query-events) to obtain an event slug. */
  eventSlug?: InputMaybe<Scalars['String']['input']>;
  /** *Required.** ID of the temporary event reservation. Use [Create Reservation](https://dev.wix.com/api/rest/wix-events/wix-events/checkout/create-reservation) to reserve a ticket temporarily and obtain a reservation ID. */
  reservationId?: InputMaybe<Scalars['String']['input']>;
};

export type HeadlessV1RedirectSessionLogoutParamsInput = {
  /** *Required.** ID of the OAuth app authorizing the client. */
  clientId?: InputMaybe<Scalars['String']['input']>;
};

export type HeadlessV1RedirectSessionPaidPlansCheckoutParamsInput = {
  /**
   * For use when pricing plan selection is part of a checkout flow, only if the paid plan selection page is implemented on an external Wix Headless client site.
   * In this case, a string is received by the external pricing plans page as a `checkoutData` query parameter. Pass this string back here when redirecting back to Wix for checkout.
   */
  checkoutData?: InputMaybe<Scalars['String']['input']>;
  /** *Required.** ID of the paid plan selected. Use [Query Public Plans](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans/query-public-plans) to obtain a paid plan ID. */
  planId?: InputMaybe<Scalars['String']['input']>;
};

export type HeadlessV1RedirectSessionPreferencesInput = {
  /**
   * A map of additional query parameters to pass to the created Wix URL.
   * Global query parameters to be passed to Wix, for example campaign parameters (UTM params).
   */
  additionalQueryParameters?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Whether to maintain the identity used in the redirect to wix (not relevant for "logout" and "auth" intents), or to use a new visitor identity.
   *
   * Default: `true`
   */
  maintainIdentity?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Whether to use a standard Wix template for Wix-managed pages the visitor is redirected to. Set to `false` only if your client site connects with a Wix site that has custom pages.
   *
   * Default: `true`
   */
  useGenericWixPages?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeadlessV1UpdateOAuthAppRequestInput = {
  /** Explicit list of fields to update. Only fields listed are updated. */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Updated OAuth app details. May include some or all fields. */
  oAuthApp?: InputMaybe<HeadlessV1OAuthAppInput>;
};

export type HeadlessV1UpdateOAuthAppResponse = {
  __typename?: 'HeadlessV1UpdateOAuthAppResponse';
  /** Updated OAuth app info. */
  oAuthApp?: Maybe<HeadlessV1OAuthApp>;
};

export type IdentityOauth2V1AuthorizeRequestInput = {
  /** ID of the Wix OAuth app requesting authorization. */
  clientId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Code challenge to use for PKCE verification.
   * This field is only used if `responseType` is set to `code`.
   */
  codeChallenge?: InputMaybe<Scalars['String']['input']>;
  /**
   * Code challenge method to use for PKCE verification.
   * This field is only used if `responseType` is set to `code`.
   *
   * Supported values:
   * + `S256`: The code challenge is transformed using SHA-256 encyption.
   * + `S512`: The code challenge is transformed using SHA-512 encyption.
   */
  codeChallengeMethod?: InputMaybe<Scalars['String']['input']>;
  /** URI to redirect the browser to after authentication and authorization. The browser is redirected to this URI whether the authentication and authorization process is successful or not. */
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  /**
   * esired response format.
   *
   * Supported values:
   * + `query`: The response parameters are encoded as query string parameters and added to the `redirectUri` when redirecting.
   * + `fragment`: The response parameters are encoded as URI fragment parameters and added to the `redirectUri` when redirecting.
   * + `web_message`: The response parameters are encoded as a JSON object and added to the body of a [web message response](https://datatracker.ietf.org/doc/html/draft-sakimura-oauth-wmrm-00).
   *
   * Default value: `query`
   */
  responseMode?: InputMaybe<Scalars['String']['input']>;
  /**
   * Desired authorization [grant type](https://auth0.com/docs/authenticate/protocols/oauth#grant-types).
   *
   * Supported values:
   * + `code`: The endpoint returns an authorization code that can be used to obtain an access token.
   */
  responseType?: InputMaybe<Scalars['String']['input']>;
  /**
   * Desired scope of access. If this field is left empty, only an access token is granted.
   * To received a refresh token, pass `offline_access` as the value of this field.
   */
  scope?: InputMaybe<Scalars['String']['input']>;
  /** Session token of the site visitor to authorize. */
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  /**
   * A value used to confirm the state of an application before and after it makes an authorization
   * request. If a value for this field is set in the request, it's added to the `redirectUri` when the browser
   * is redirected there.
   * Learn more about [using the state parameter](https://auth0.com/docs/secure/attack-protection/state-parameters).
   */
  state?: InputMaybe<Scalars['String']['input']>;
};

export type InventoryV1PreorderInfo = {
  __typename?: 'InventoryV1PreorderInfo';
  /** Whether the item is available for preorder. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Number of products that can be preordered after stock reaches zero. */
  limit?: Maybe<Scalars['Int']['output']>;
  /** A message the buyer will see when the item is out of stock and preorder is enabled. */
  message?: Maybe<Scalars['String']['output']>;
};

export type LocationsAddress = {
  __typename?: 'LocationsAddress';
  /** City name. */
  city?: Maybe<Scalars['String']['output']>;
  /** 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
  country?: Maybe<Scalars['String']['output']>;
  /** Full address of the location. */
  formattedAddress?: Maybe<Scalars['String']['output']>;
  /** Geographic coordinates of location. */
  geocode?: Maybe<LocationsAddressLocation>;
  /** Extra information that helps finding the location. */
  hint?: Maybe<Scalars['String']['output']>;
  /** Postal or zip code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Street address. Includes street name, number, and apartment number in separate fields. */
  streetAddress?: Maybe<LocationsStreetAddress>;
  /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
  subdivision?: Maybe<Scalars['String']['output']>;
};

export type LocationsAddressInput = {
  /** City name. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Full address of the location. */
  formattedAddress?: InputMaybe<Scalars['String']['input']>;
  /** Geographic coordinates of location. */
  geocode?: InputMaybe<LocationsAddressLocationInput>;
  /** Extra information that helps finding the location. */
  hint?: InputMaybe<Scalars['String']['input']>;
  /** Postal or zip code. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Street address. Includes street name, number, and apartment number in separate fields. */
  streetAddress?: InputMaybe<LocationsStreetAddressInput>;
  /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
  subdivision?: InputMaybe<Scalars['String']['input']>;
};

export type LocationsAddressLocation = {
  __typename?: 'LocationsAddressLocation';
  /** Latitude of the location. Must be between -90 and 90. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** Longitude of the location. Must be between -180 and 180. */
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type LocationsAddressLocationInput = {
  /** Latitude of the location. Must be between -90 and 90. */
  latitude?: InputMaybe<Scalars['Float']['input']>;
  /** Longitude of the location. Must be between -180 and 180. */
  longitude?: InputMaybe<Scalars['Float']['input']>;
};

export type LocationsArchiveLocationRequestInput = {
  /** ID of the location to archive. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type LocationsArchiveLocationResponse = {
  __typename?: 'LocationsArchiveLocationResponse';
  /** Archived location. */
  location?: Maybe<LocationsLocation>;
};

export type LocationsCreateLocationRequestInput = {
  /** Location to create. */
  location?: InputMaybe<LocationsLocationInput>;
};

export type LocationsCreateLocationResponse = {
  __typename?: 'LocationsCreateLocationResponse';
  /** Created location. */
  location?: Maybe<LocationsLocation>;
};

export type LocationsListLocationsRequestInput = {
  /**
   * Whether to include `archived` locations in the response.
   *
   * Default: `false`
   */
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Pagination.
   *
   * Default values:
   * `offset`: 0
   * `limit`: 50 (Max: 1000)
   */
  paging?: InputMaybe<CommonPagingInput>;
  /** Sort order. */
  sort?: InputMaybe<CommonSortingInput>;
};

export type LocationsListLocationsResponse = {
  __typename?: 'LocationsListLocationsResponse';
  /** Retrieved locations. */
  locations?: Maybe<Array<Maybe<LocationsLocation>>>;
  /** Paging info. */
  pagingMetadata?: Maybe<LocationsPagingMetadata>;
};

export type LocationsLocation = {
  __typename?: 'LocationsLocation';
  /** Address. */
  address?: Maybe<LocationsAddress>;
  /**
   * Whether the location is archived. Archived locations can't be updated.
   * __Note:__ [Archiving a location](https://dev.wix.com/api/rest/business-info/locations/archive-location)
   * doesn't affect its `status`.
   */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Business schedule. Array of weekly recurring time periods when the location is open for business. Limited to 100 time periods.
   *
   * __Note:__ Not supported by Wix Bookings.
   */
  businessSchedule?: Maybe<SitepropertiesV4BusinessSchedule>;
  /** Whether this is the default location. There can only be one default location per site. The default location can't be archived. */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** Location description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** Fax number. */
  fax?: Maybe<Scalars['String']['output']>;
  /** Location ID. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Location type.
   *
   * **Note:** Currently not supported.
   */
  locationType?: Maybe<LocationsLocationType>;
  /** Location name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Phone number. */
  phone?: Maybe<Scalars['String']['output']>;
  /**
   * Revision number, which increments by 1 each time the location is updated.
   * To prevent conflicting changes, the existing revision must be used when updating a location.
   */
  revision?: Maybe<Scalars['Int']['output']>;
  /**
   * Location status. Defaults to `ACTIVE`.
   * __Note:__ [Archiving a location](https://dev.wix.com/api/rest/business-info/locations/archive-location)
   * doesn't affect the location's status. `INACTIVE` is currently not supported.
   */
  status?: Maybe<LocationsLocationStatus>;
  /** Timezone in `America/New_York` format. */
  timeZone?: Maybe<Scalars['String']['output']>;
};

export type LocationsLocationInput = {
  /** Address. */
  address?: InputMaybe<LocationsAddressInput>;
  /**
   * Whether the location is archived. Archived locations can't be updated.
   * __Note:__ [Archiving a location](https://dev.wix.com/api/rest/business-info/locations/archive-location)
   * doesn't affect its `status`.
   */
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Business schedule. Array of weekly recurring time periods when the location is open for business. Limited to 100 time periods.
   *
   * __Note:__ Not supported by Wix Bookings.
   */
  businessSchedule?: InputMaybe<SitepropertiesV4BusinessScheduleInput>;
  /** Whether this is the default location. There can only be one default location per site. The default location can't be archived. */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Location description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Fax number. */
  fax?: InputMaybe<Scalars['String']['input']>;
  /** Location ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * Location type.
   *
   * **Note:** Currently not supported.
   */
  locationType?: InputMaybe<LocationsLocationType>;
  /** Location name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Phone number. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Revision number, which increments by 1 each time the location is updated.
   * To prevent conflicting changes, the existing revision must be used when updating a location.
   */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Location status. Defaults to `ACTIVE`.
   * __Note:__ [Archiving a location](https://dev.wix.com/api/rest/business-info/locations/archive-location)
   * doesn't affect the location's status. `INACTIVE` is currently not supported.
   */
  status?: InputMaybe<LocationsLocationStatus>;
  /** Timezone in `America/New_York` format. */
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export enum LocationsLocationStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum LocationsLocationType {
  Branch = 'BRANCH',
  Headquarters = 'HEADQUARTERS',
  Offices = 'OFFICES',
  Reception = 'RECEPTION',
  Unknown = 'UNKNOWN'
}

export type LocationsPagingMetadata = {
  __typename?: 'LocationsPagingMetadata';
  /** Number of items returned in the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates if there are more results after the current page.
   * If `true`, another page of results can be retrieved.
   * If `false`, this is the last page.
   */
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  /** Offset that was requested. */
  offset?: Maybe<Scalars['Int']['output']>;
};

export type LocationsQueryLocationsRequestInput = {
  /** Information about the filters, sorting, and paging. */
  query?: InputMaybe<CommonQueryInput>;
};

export type LocationsQueryLocationsResponse = {
  __typename?: 'LocationsQueryLocationsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<LocationsLocation>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type LocationsSetDefaultLocationRequestInput = {
  /** ID of the location to set as the default location. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type LocationsSetDefaultLocationResponse = {
  __typename?: 'LocationsSetDefaultLocationResponse';
  /** New default location. */
  location?: Maybe<LocationsLocation>;
};

export type LocationsStreetAddress = {
  __typename?: 'LocationsStreetAddress';
  /** Apartment number. */
  apt?: Maybe<Scalars['String']['output']>;
  /** Street name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Street number. */
  number?: Maybe<Scalars['String']['output']>;
};

export type LocationsStreetAddressInput = {
  /** Apartment number. */
  apt?: InputMaybe<Scalars['String']['input']>;
  /** Street name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Street number. */
  number?: InputMaybe<Scalars['String']['input']>;
};

export type LocationsUpdateLocationRequestInput = {
  /** Location to update. */
  location?: InputMaybe<LocationsLocationInput>;
};

export type LocationsUpdateLocationResponse = {
  __typename?: 'LocationsUpdateLocationResponse';
  /** Updated location. */
  location?: Maybe<LocationsLocation>;
};

export enum MembersAccessStatusStatus {
  Approved = 'APPROVED',
  Blocked = 'BLOCKED',
  Offline = 'OFFLINE',
  Pending = 'PENDING',
  Unknown = 'UNKNOWN'
}

export enum MembersActivityStatusStatus {
  Active = 'ACTIVE',
  Muted = 'MUTED',
  Unknown = 'UNKNOWN'
}

export type MembersAddress = {
  __typename?: 'MembersAddress';
  /** Main address line, usually street and number, as free text. */
  addressLine?: Maybe<Scalars['String']['output']>;
  /**
   * Free text providing more detailed address information,
   * such as apartment, suite, or floor.
   */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** City name. */
  city?: Maybe<Scalars['String']['output']>;
  /**
   * 2-letter country code in an
   * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
   */
  country?: Maybe<Scalars['String']['output']>;
  /** Street address ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Street address object, with number and name in separate fields. */
  streetAddress?: Maybe<MembersStreetAddress>;
  /**
   * Code for a subdivision (such as state, prefecture, or province) in an
   * [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
   */
  subdivision?: Maybe<Scalars['String']['output']>;
};

export type MembersAddressInput = {
  /** Main address line, usually street and number, as free text. */
  addressLine?: InputMaybe<Scalars['String']['input']>;
  /**
   * Free text providing more detailed address information,
   * such as apartment, suite, or floor.
   */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /** City name. */
  city?: InputMaybe<Scalars['String']['input']>;
  /**
   * 2-letter country code in an
   * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
   */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Street address ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Postal code. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Street address object, with number and name in separate fields. */
  streetAddress?: InputMaybe<MembersStreetAddressInput>;
  /**
   * Code for a subdivision (such as state, prefecture, or province) in an
   * [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
   */
  subdivision?: InputMaybe<Scalars['String']['input']>;
};

export type MembersCommonImage = {
  __typename?: 'MembersCommonImage';
  /** Original image width. */
  height?: Maybe<Scalars['Int']['output']>;
  /**
   * Wix Media image ID,
   * set when the member selects an image from Wix Media.
   */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * X-axis offset.
   *
   * Default: `0`.
   */
  offsetX?: Maybe<Scalars['Int']['output']>;
  /**
   * Y-axis offset.
   *
   * Default: `0`.
   */
  offsetY?: Maybe<Scalars['Int']['output']>;
  /** Image URL. */
  url?: Maybe<Scalars['String']['output']>;
  /** Original image height. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type MembersCommonImageInput = {
  /** Original image width. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Wix Media image ID,
   * set when the member selects an image from Wix Media.
   */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * X-axis offset.
   *
   * Default: `0`.
   */
  offsetX?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Y-axis offset.
   *
   * Default: `0`.
   */
  offsetY?: InputMaybe<Scalars['Int']['input']>;
  /** Image URL. */
  url?: InputMaybe<Scalars['String']['input']>;
  /** Original image height. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type MembersContact = {
  __typename?: 'MembersContact';
  /** List of street addresses. */
  addresses?: Maybe<Array<Maybe<MembersAddress>>>;
  /**
   * Contact's birthdate, formatted as `"YYYY-MM-DD"`.
   *
   * Example: `"2020-03-15"` for March 15, 2020.
   */
  birthdate?: Maybe<Scalars['String']['output']>;
  /** Contact's company name. */
  company?: Maybe<Scalars['String']['output']>;
  /**
   * Contact ID.
   *
   * > **Deprecation notice:**
   * > This property has been replaced with `member.contactId`
   * > and will be removed on June 11, 2021.
   */
  contactId?: Maybe<Scalars['String']['output']>;
  /**
   * Custom fields,
   * where each key is the field key,
   * and each value is the field's value for the member.
   */
  customFields?: Maybe<MembersCustomField>;
  /** List of email addresses. */
  emails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Contact's first name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Contact's job title. */
  jobTitle?: Maybe<Scalars['String']['output']>;
  /** Contact's last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** List of phone numbers. */
  phones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type MembersContactInput = {
  /** List of street addresses. */
  addresses?: InputMaybe<Array<InputMaybe<MembersAddressInput>>>;
  /**
   * Contact's birthdate, formatted as `"YYYY-MM-DD"`.
   *
   * Example: `"2020-03-15"` for March 15, 2020.
   */
  birthdate?: InputMaybe<Scalars['String']['input']>;
  /** Contact's company name. */
  company?: InputMaybe<Scalars['String']['input']>;
  /**
   * Contact ID.
   *
   * > **Deprecation notice:**
   * > This property has been replaced with `member.contactId`
   * > and will be removed on June 11, 2021.
   */
  contactId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Custom fields,
   * where each key is the field key,
   * and each value is the field's value for the member.
   */
  customFields?: InputMaybe<MembersCustomFieldInput>;
  /** List of email addresses. */
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Contact's first name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Contact's job title. */
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  /** Contact's last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** List of phone numbers. */
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MembersCreateMemberRequestInput = {
  /** Member to create. */
  member?: InputMaybe<MembersMemberInput>;
};

export type MembersCreateMemberResponse = {
  __typename?: 'MembersCreateMemberResponse';
  /** New member. */
  member?: Maybe<MembersMember>;
};

export type MembersCustomField = {
  __typename?: 'MembersCustomField';
  /** Custom field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Custom field value. */
  value?: Maybe<Scalars['JSON']['output']>;
};

export type MembersCustomFieldInput = {
  /** Custom field name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Custom field value. */
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MembersDeleteMemberAddressesRequestInput = {
  /** ID of the member whose street addresses will be deleted. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MembersDeleteMemberAddressesResponse = {
  __typename?: 'MembersDeleteMemberAddressesResponse';
  /** Updated member. */
  member?: Maybe<MembersMember>;
};

export type MembersDeleteMemberEmailsRequestInput = {
  /** ID of the member whose email addresses will be deleted. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MembersDeleteMemberEmailsResponse = {
  __typename?: 'MembersDeleteMemberEmailsResponse';
  /** Updated member. */
  member?: Maybe<MembersMember>;
};

export type MembersDeleteMemberPhonesRequestInput = {
  /** ID of the member whose phone numbers will be deleted. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MembersDeleteMemberPhonesResponse = {
  __typename?: 'MembersDeleteMemberPhonesResponse';
  /** Updated member. */
  member?: Maybe<MembersMember>;
};

export type MembersDeleteMemberRequestInput = {
  /** ID of the member to delete. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export enum MembersFieldSetSet {
  /** Extended properties of the entity */
  Extended = 'EXTENDED',
  /** Full entity defined in the doc */
  Full = 'FULL',
  /** Public properties of the entity */
  Public = 'PUBLIC'
}

export type MembersGetMyMemberRequestInput = {
  /**
   * Predefined set of fields to return.
   *
   * <!--ONLY:VELO
   * One of:
   *
   * - `"FULL"`: Returns all fields.
   * - `"PUBLIC"`: Returns `_id` and all fields under `profile`.
   *
   * > **Note:**
   * > When returning the `"PUBLIC"` fieldset,
   * > `profile.status`, `profile.privacyStatus`, and `profile.activityStatus`
   * > are returned as `"UNKNOWN"`.
   * <!--END:ONLY:VELO-->
   */
  fieldSet?: InputMaybe<MembersFieldSetSet>;
  fieldsets?: InputMaybe<Array<InputMaybe<MembersFieldSetSet>>>;
};

export type MembersGetMyMemberResponse = {
  __typename?: 'MembersGetMyMemberResponse';
  /** The requested member. */
  member?: Maybe<MembersMember>;
};

export type MembersJoinCommunityResponse = {
  __typename?: 'MembersJoinCommunityResponse';
  /** The updated member. */
  member?: Maybe<MembersMember>;
};

export type MembersLeaveCommunityResponse = {
  __typename?: 'MembersLeaveCommunityResponse';
  /** The updated member. */
  member?: Maybe<MembersMember>;
};

export type MembersListMembersRequestInput = {
  /**
   * Predefined sets of fields to return.
   *
   * Defaults to `PUBLIC`.
   *
   * __Deprecated.__ Use `fieldsets` instead.
   * This property will be removed on March 31, 2023.
   */
  fieldSet?: InputMaybe<MembersFieldSetSet>;
  /**
   * Predefined sets of fields to return.
   *
   * Defaults to `PUBLIC`.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<MembersFieldSetSet>>>;
  paging?: InputMaybe<CommonPagingInput>;
  sorting?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type MembersListMembersResponse = {
  __typename?: 'MembersListMembersResponse';
  /** List of members. */
  members?: Maybe<Array<Maybe<MembersMember>>>;
  /** Metadata for the paginated results. */
  metadata?: Maybe<CommonPagingMetadata>;
};

export type MembersMember = {
  __typename?: 'MembersMember';
  /**
   * Member activity status.
   *
   * <!--ONLY:REST-->
   * - `ACTIVE`: Member can write forum posts and blog comments.
   * - `MUTED`: Member cannot write forum posts or blog comments.
   * - `UNKNOWN`: Insufficient permissions to get the status.
   * <!--END:ONLY:REST-->
   *
   * <!--ONLY:VELO
   * One of:
   *
   * - `"ACTIVE"`: Member can write forum posts and blog comments.
   * - `"MUTED"`: Member cannot write forum posts or blog comments.
   * - `"UNKNOWN"`: Insufficient permissions to get the status.
   * <!--END:ONLY:VELO-->
   */
  activityStatus?: Maybe<MembersActivityStatusStatus>;
  /**
   * Member's contact information. Contact information is stored in the
   * [Contact List](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
   *
   * <!--ONLY:REST-->
   * The full set of contact data can be accessed and managed with the
   * [Contacts API](https://dev.wix.com/api/rest/contacts/contacts).
   * <!--END:ONLY:REST-->
   */
  contact?: Maybe<MembersContact>;
  /** Contact ID. */
  contactId?: Maybe<Scalars['String']['output']>;
  /** Date and time when the member was created. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Member ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Date and time when the member last logged in to the site. */
  lastLoginDate?: Maybe<Scalars['String']['output']>;
  /** Email used by the member to log in to the site. */
  loginEmail?: Maybe<Scalars['String']['output']>;
  /** Whether the email used by the member has been verified. */
  loginEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Member privacy status.
   *
   * <!--ONLY:REST-->
   * - `PUBLIC`: Member is visible to everyone.
   * - `PRIVATE`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
   * - `UNKNOWN`: Insufficient permissions to get the status.
   * <!--END:ONLY:REST-->
   *
   * <!--ONLY:VELO
   * One of:
   *
   * - `"PUBLIC"`: Member is visible to everyone.
   * - `"PRIVATE"`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
   * - `"UNKNOWN"`: Insufficient permissions to get the status.
   * <!--END:ONLY:VELO-->
   */
  privacyStatus?: Maybe<MembersPrivacyStatusStatus>;
  /** Profile display info. */
  profile?: Maybe<MembersProfile>;
  /**
   * Member site access status.
   * <!--ONLY:REST-->
   * - `PENDING`: Member created and is waiting for approval by site owner.
   * - `APPROVED`: Member can log in to the site.
   * - `OFFLINE`: Member is a [guest author](https://support.wix.com/en/article/wix-blog-adding-guest-authors-to-your-blog) for the site blog and cannot log in to the site.
   * - `BLOCKED`: Member is blocked and cannot log in to the site.
   * - `UNKNOWN`: Insufficient permissions to get the status.
   * <!--END:ONLY:REST-->
   *
   * <!--ONLY:VELO
   * One of:
   *
   * - `"PENDING"`: Member created and is waiting for approval by site owner.
   * - `"APPROVED"`: Member can log in to the site.
   * - `"OFFLINE"`: Member is a [guest author](https://support.wix.com/en/article/wix-blog-adding-guest-authors-to-your-blog) for the site blog and cannot log in to the site.
   * - `"BLOCKED"`: Member is blocked and cannot log in to the site.
   * - `"UNKNOWN"`: Insufficient permissions to get the status.
   * <!--END:ONLY:VELO-->
   */
  status?: Maybe<MembersAccessStatusStatus>;
  /** Date and time when the member was updated. */
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type MembersMemberInput = {
  /**
   * Member activity status.
   *
   * <!--ONLY:REST-->
   * - `ACTIVE`: Member can write forum posts and blog comments.
   * - `MUTED`: Member cannot write forum posts or blog comments.
   * - `UNKNOWN`: Insufficient permissions to get the status.
   * <!--END:ONLY:REST-->
   *
   * <!--ONLY:VELO
   * One of:
   *
   * - `"ACTIVE"`: Member can write forum posts and blog comments.
   * - `"MUTED"`: Member cannot write forum posts or blog comments.
   * - `"UNKNOWN"`: Insufficient permissions to get the status.
   * <!--END:ONLY:VELO-->
   */
  activityStatus?: InputMaybe<MembersActivityStatusStatus>;
  /**
   * Member's contact information. Contact information is stored in the
   * [Contact List](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
   *
   * <!--ONLY:REST-->
   * The full set of contact data can be accessed and managed with the
   * [Contacts API](https://dev.wix.com/api/rest/contacts/contacts).
   * <!--END:ONLY:REST-->
   */
  contact?: InputMaybe<MembersContactInput>;
  /** Contact ID. */
  contactId?: InputMaybe<Scalars['String']['input']>;
  /** Date and time when the member was created. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Member ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Date and time when the member last logged in to the site. */
  lastLoginDate?: InputMaybe<Scalars['String']['input']>;
  /** Email used by the member to log in to the site. */
  loginEmail?: InputMaybe<Scalars['String']['input']>;
  /** Whether the email used by the member has been verified. */
  loginEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Member privacy status.
   *
   * <!--ONLY:REST-->
   * - `PUBLIC`: Member is visible to everyone.
   * - `PRIVATE`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
   * - `UNKNOWN`: Insufficient permissions to get the status.
   * <!--END:ONLY:REST-->
   *
   * <!--ONLY:VELO
   * One of:
   *
   * - `"PUBLIC"`: Member is visible to everyone.
   * - `"PRIVATE"`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
   * - `"UNKNOWN"`: Insufficient permissions to get the status.
   * <!--END:ONLY:VELO-->
   */
  privacyStatus?: InputMaybe<MembersPrivacyStatusStatus>;
  /** Profile display info. */
  profile?: InputMaybe<MembersProfileInput>;
  /**
   * Member site access status.
   * <!--ONLY:REST-->
   * - `PENDING`: Member created and is waiting for approval by site owner.
   * - `APPROVED`: Member can log in to the site.
   * - `OFFLINE`: Member is a [guest author](https://support.wix.com/en/article/wix-blog-adding-guest-authors-to-your-blog) for the site blog and cannot log in to the site.
   * - `BLOCKED`: Member is blocked and cannot log in to the site.
   * - `UNKNOWN`: Insufficient permissions to get the status.
   * <!--END:ONLY:REST-->
   *
   * <!--ONLY:VELO
   * One of:
   *
   * - `"PENDING"`: Member created and is waiting for approval by site owner.
   * - `"APPROVED"`: Member can log in to the site.
   * - `"OFFLINE"`: Member is a [guest author](https://support.wix.com/en/article/wix-blog-adding-guest-authors-to-your-blog) for the site blog and cannot log in to the site.
   * - `"BLOCKED"`: Member is blocked and cannot log in to the site.
   * - `"UNKNOWN"`: Insufficient permissions to get the status.
   * <!--END:ONLY:VELO-->
   */
  status?: InputMaybe<MembersAccessStatusStatus>;
  /** Date and time when the member was updated. */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
};

export enum MembersPrivacyStatusStatus {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Unknown = 'UNKNOWN'
}

export type MembersProfile = {
  __typename?: 'MembersProfile';
  /**
   * Member's cover photo,
   * used as a background picture in members profile page.
   *
   * Cover positioning can be altered with `cover.offsetX` and `cover.offsetY`.
   * When left empty, the values default to `0`.
   */
  cover?: Maybe<MembersCommonImage>;
  /**
   * Name that identifies the member to other members.
   * Displayed on the member's profile page
   * and interactions in the forum or blog.
   */
  nickname?: Maybe<Scalars['String']['output']>;
  /** Member's profile photo. */
  photo?: Maybe<MembersCommonImage>;
  /** Slug that determines the member's profile page URL. */
  slug?: Maybe<Scalars['String']['output']>;
  /**
   * Member title.
   *
   * <!--ONLY:REST-->
   * Currently available through the API only.
   * <!--END:ONLY:REST-->
   */
  title?: Maybe<Scalars['String']['output']>;
};

export type MembersProfileInput = {
  /**
   * Member's cover photo,
   * used as a background picture in members profile page.
   *
   * Cover positioning can be altered with `cover.offsetX` and `cover.offsetY`.
   * When left empty, the values default to `0`.
   */
  cover?: InputMaybe<MembersCommonImageInput>;
  /**
   * Name that identifies the member to other members.
   * Displayed on the member's profile page
   * and interactions in the forum or blog.
   */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** Member's profile photo. */
  photo?: InputMaybe<MembersCommonImageInput>;
  /** Slug that determines the member's profile page URL. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /**
   * Member title.
   *
   * <!--ONLY:REST-->
   * Currently available through the API only.
   * <!--END:ONLY:REST-->
   */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MembersQueryInput = {
  /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Limit number of results */
  paging?: InputMaybe<CommonPagingInput>;
  /** Sort the results */
  sorting?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type MembersQueryMembersRequestInput = {
  /**
   * Predefined sets of fields to return.
   *
   * Defaults to `PUBLIC`.
   *
   * __Deprecated.__ Use `fieldsets` instead.
   * This property will be removed on March 31, 2023.
   */
  fieldSet?: InputMaybe<MembersFieldSetSet>;
  /**
   * Predefined sets of fields to return.
   *
   * Defaults to `PUBLIC`.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<MembersFieldSetSet>>>;
  /** Query options. */
  query?: InputMaybe<MembersQueryInput>;
  /** Plain text search. */
  search?: InputMaybe<MembersSearchInput>;
};

export type MembersQueryMembersResponse = {
  __typename?: 'MembersQueryMembersResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<MembersMember>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type MembersSearchInput = {
  /** Search term or expression */
  expression?: InputMaybe<Scalars['String']['input']>;
  /**
   * Currently supported fields for search:
   *
   * - `loginEmail`
   * - `contact.firstName`
   * - `contact.lastName`
   * - `profile.title`
   * - `profile.nickname`
   * - `profile.slug`
   *
   * Default is `profile.nickname`
   */
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MembersStreetAddress = {
  __typename?: 'MembersStreetAddress';
  /** Street name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Street number. */
  number?: Maybe<Scalars['String']['output']>;
};

export type MembersStreetAddressInput = {
  /** Street name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Street number. */
  number?: InputMaybe<Scalars['String']['input']>;
};

export type MembersUpdateMemberRequestInput = {
  /** Member to update. */
  member?: InputMaybe<MembersMemberInput>;
};

export type MembersUpdateMemberResponse = {
  __typename?: 'MembersUpdateMemberResponse';
  member?: Maybe<MembersMember>;
};

export type MembersUpdateMySlugRequestInput = {
  /** New slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type MembersUpdateMySlugResponse = {
  __typename?: 'MembersUpdateMySlugResponse';
  /** Updated member. */
  member?: Maybe<MembersMember>;
};

export type MembershipV2CommonMoney = {
  __typename?: 'MembershipV2CommonMoney';
  /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
  currency?: Maybe<Scalars['String']['output']>;
  /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). */
  value?: Maybe<Scalars['String']['output']>;
};

export type MembershipV2CommonMoneyInput = {
  /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type MembershipV2CommonQueryV2Input = {
  /** A filter object. See [supported fields and operators](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans/filter-and-sort#wix-pricing-plans_pricing-plans_plans_filter-and-sort_query-public-plans) */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Pointer to page of results using offset. Can not be used together with 'cursorPaging' */
  paging?: InputMaybe<CommonPagingInput>;
  /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type MembershipV2Duration = {
  __typename?: 'MembershipV2Duration';
  /**
   * The amount of a duration `unit` in a single payment cycle.
   *
   * Currently limited to support only `1`.
   */
  count?: Maybe<Scalars['Int']['output']>;
  /** Unit of time for the cycle duration. */
  unit?: Maybe<MembershipV2PeriodUnitEnumPeriodUnit>;
};

export type MembershipV2DurationInput = {
  /**
   * The amount of a duration `unit` in a single payment cycle.
   *
   * Currently limited to support only `1`.
   */
  count?: InputMaybe<Scalars['Int']['input']>;
  /** Unit of time for the cycle duration. */
  unit?: InputMaybe<MembershipV2PeriodUnitEnumPeriodUnit>;
};

export enum MembershipV2PeriodUnitEnumPeriodUnit {
  Day = 'DAY',
  Month = 'MONTH',
  Undefined = 'UNDEFINED',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type MembershipV2PlansArchivePlanRequestInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MembershipV2PlansArchivePlanResponse = {
  __typename?: 'MembershipV2PlansArchivePlanResponse';
  plan?: Maybe<MembershipV2PlansPlan>;
};

export enum MembershipV2PlansArchivedFilterEnumArchivedFilter {
  /** Returns all plans that are active. */
  Active = 'ACTIVE',
  /** Returns all plans that are archived. */
  Archived = 'ARCHIVED',
  /** Returns all plans that are active and archived. */
  ArchivedAndActive = 'ARCHIVED_AND_ACTIVE'
}

export type MembershipV2PlansArrangePlansRequestInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MembershipV2PlansCreatePlanRequestInput = {
  plan?: InputMaybe<MembershipV2PlansPlanInput>;
};

export type MembershipV2PlansCreatePlanResponse = {
  __typename?: 'MembershipV2PlansCreatePlanResponse';
  plan?: Maybe<MembershipV2PlansPlan>;
};

export type MembershipV2PlansGetPlanStatsResponse = {
  __typename?: 'MembershipV2PlansGetPlanStatsResponse';
  /** Total number of plans created, including active plans (both public and hidden) and archived plans. */
  totalPlans?: Maybe<Scalars['Int']['output']>;
};

export type MembershipV2PlansListPlansRequestInput = {
  /** Archived filter. Defaults to ACTIVE (not archived) only. */
  archived?: InputMaybe<MembershipV2PlansArchivedFilterEnumArchivedFilter>;
  /** Number of pricing plans to list. Defaults to 75. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Number of pricing plans to skip. Defaults to 0. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Plan ID filter. Non-existent IDs are ignored, and won't cause errors. You can pass a maximum of 100 IDs. */
  planIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Visibility filter. Defaults to PUBLIC_AND_HIDDEN (meaning, both are listed). */
  public?: InputMaybe<MembershipV2PlansPublicFilterEnumPublicFilter>;
};

export type MembershipV2PlansListPlansResponse = {
  __typename?: 'MembershipV2PlansListPlansResponse';
  /** Object containing paging-related data (number of plans returned, offset). */
  pagingMetadata?: Maybe<CommonPagingMetadataV2>;
  /** List of all public and hidden pricing plans. */
  plans?: Maybe<Array<Maybe<MembershipV2PlansPlan>>>;
};

export type MembershipV2PlansListPublicPlansRequestInput = {
  /** Number of items to list. Defaults to 75. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to skip. Defaults to 0. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** IDs of plans to list. Non-existent IDs will be ignored and won't cause errors. You can pass a maximum of 100 IDs. */
  planIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MembershipV2PlansListPublicPlansResponse = {
  __typename?: 'MembershipV2PlansListPublicPlansResponse';
  /** Object containing paging-related data (number of plans returned, offset). */
  pagingMetadata?: Maybe<CommonPagingMetadataV2>;
  /** List of public pricing plans. */
  plans?: Maybe<Array<Maybe<MembershipV2PlansPublicPlan>>>;
};

export type MembershipV2PlansMakePlanPrimaryRequestInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MembershipV2PlansMakePlanPrimaryResponse = {
  __typename?: 'MembershipV2PlansMakePlanPrimaryResponse';
  plan?: Maybe<MembershipV2PlansPlan>;
};

export type MembershipV2PlansPlan = {
  __typename?: 'MembershipV2PlansPlan';
  /** Whether the buyer can start the plan at a later date. Defaults to false. */
  allowFutureStartDate?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the plan is archived. Archived plans are not visible and can't be purchased anymore, but existing purchases remain in effect. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the buyer is allowed to cancel their plan. Defaults to false. */
  buyerCanCancel?: Maybe<Scalars['Boolean']['output']>;
  /** Date plan was created. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Plan description. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * ID of the form associated with the plan at checkout.
   *
   * Learn more about [forms](https://support.wix.com/en/article/wix-forms-an-overview).
   */
  form?: Maybe<FormsV4Form>;
  /**
   * ID of the form associated with the plan at checkout.
   *
   * Learn more about [forms](https://support.wix.com/en/article/wix-forms-an-overview).
   */
  formId?: Maybe<Scalars['String']['output']>;
  /** Whether the plan has any orders (including pending and unpaid orders). */
  hasOrders?: Maybe<Scalars['Boolean']['output']>;
  /** Plan ID. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Number of times the same buyer can purchase the plan. Currently limited to support:
   * - Empty value or a value of `0`, meaning no limitation.
   * - Value of `1`, meaning limited to one purchase per buyer.
   */
  maxPurchasesPerBuyer?: Maybe<Scalars['Int']['output']>;
  /** Plan name. */
  name?: Maybe<Scalars['String']['output']>;
  /** What is included with this plan (e.g., 1 weekly entrance to a specific class). */
  perks?: Maybe<MembershipV2StringList>;
  /** Plan price, payment schedule, and expiration. */
  pricing?: Maybe<MembershipV2Pricing>;
  /** Whether the plan is marked as primary. */
  primary?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the plan is public (visible to site visitors and members). */
  public?: Maybe<Scalars['Boolean']['output']>;
  /** URL-friendly version of plan name. Unique across all plans in the same site. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Any terms and conditions that apply to the plan. This information will be displayed during checkout. */
  termsAndConditions?: Maybe<Scalars['String']['output']>;
  /** Date plan was last updated. */
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type MembershipV2PlansPlanInput = {
  /** Whether the buyer can start the plan at a later date. Defaults to false. */
  allowFutureStartDate?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the plan is archived. Archived plans are not visible and can't be purchased anymore, but existing purchases remain in effect. */
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the buyer is allowed to cancel their plan. Defaults to false. */
  buyerCanCancel?: InputMaybe<Scalars['Boolean']['input']>;
  /** Date plan was created. */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Plan description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * ID of the form associated with the plan at checkout.
   *
   * Learn more about [forms](https://support.wix.com/en/article/wix-forms-an-overview).
   */
  formId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the plan has any orders (including pending and unpaid orders). */
  hasOrders?: InputMaybe<Scalars['Boolean']['input']>;
  /** Plan ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /**
   * Number of times the same buyer can purchase the plan. Currently limited to support:
   * - Empty value or a value of `0`, meaning no limitation.
   * - Value of `1`, meaning limited to one purchase per buyer.
   */
  maxPurchasesPerBuyer?: InputMaybe<Scalars['Int']['input']>;
  /** Plan name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** What is included with this plan (e.g., 1 weekly entrance to a specific class). */
  perks?: InputMaybe<MembershipV2StringListInput>;
  /** Plan price, payment schedule, and expiration. */
  pricing?: InputMaybe<MembershipV2PricingInput>;
  /** Whether the plan is marked as primary. */
  primary?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the plan is public (visible to site visitors and members). */
  public?: InputMaybe<Scalars['Boolean']['input']>;
  /** URL-friendly version of plan name. Unique across all plans in the same site. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Any terms and conditions that apply to the plan. This information will be displayed during checkout. */
  termsAndConditions?: InputMaybe<Scalars['String']['input']>;
  /** Date plan was last updated. */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
};

export enum MembershipV2PlansPublicFilterEnumPublicFilter {
  /** Returns only hidden plans. */
  Hidden = 'HIDDEN',
  /** Returns only public plans. */
  Public = 'PUBLIC',
  /** Returns all public and hidden plans. */
  PublicAndHidden = 'PUBLIC_AND_HIDDEN'
}

export type MembershipV2PlansPublicPlan = {
  __typename?: 'MembershipV2PlansPublicPlan';
  /** Whether the buyer can start the plan at a later date. Defaults to false. */
  allowFutureStartDate?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the buyer is allowed to cancel their plan. Defaults to false. */
  buyerCanCancel?: Maybe<Scalars['Boolean']['output']>;
  /** Date plan was created. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Plan description. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * ID of the form associated with the plan at checkout.
   *
   * Learn more about [forms](https://support.wix.com/en/article/wix-forms-an-overview).
   */
  form?: Maybe<FormsV4Form>;
  /**
   * ID of the form associated with the plan at checkout.
   *
   * Learn more about [forms](https://support.wix.com/en/article/wix-forms-an-overview).
   */
  formId?: Maybe<Scalars['String']['output']>;
  /** Plan ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Number of times the same buyer can purchase the plan. An empty value or a value of zero means no limitation. */
  maxPurchasesPerBuyer?: Maybe<Scalars['Int']['output']>;
  /** Plan name. */
  name?: Maybe<Scalars['String']['output']>;
  /** What is included with this plan (e.g., 1 weekly entrance to a specific class). */
  perks?: Maybe<MembershipV2StringList>;
  /** Plan price, payment schedule, and expiration. */
  pricing?: Maybe<MembershipV2Pricing>;
  /** Whether the plan is marked as primary. */
  primary?: Maybe<Scalars['Boolean']['output']>;
  /** URL-friendly version of plan name. Unique across all plans in the same site. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Any terms and conditions that apply to the plan. This information will be displayed during checkout. */
  termsAndConditions?: Maybe<Scalars['String']['output']>;
  /** Date plan was last updated. */
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type MembershipV2PlansQueryPublicPlansRequestInput = {
  query?: InputMaybe<MembershipV2CommonQueryV2Input>;
};

export type MembershipV2PlansQueryPublicPlansResponse = {
  __typename?: 'MembershipV2PlansQueryPublicPlansResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<MembershipV2PlansPlan>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type MembershipV2PlansSetPlanVisibilityRequestInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MembershipV2PlansSetPlanVisibilityResponse = {
  __typename?: 'MembershipV2PlansSetPlanVisibilityResponse';
  plan?: Maybe<MembershipV2PlansPlan>;
};

export type MembershipV2PlansUpdatePlanRequestInput = {
  fieldMask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  plan?: InputMaybe<MembershipV2PlansPlanInput>;
};

export type MembershipV2PlansUpdatePlanResponse = {
  __typename?: 'MembershipV2PlansUpdatePlanResponse';
  plan?: Maybe<MembershipV2PlansPlan>;
};

export type MembershipV2Pricing = {
  __typename?: 'MembershipV2Pricing';
  /** Free trial period for the plan in days. It’s available only for recurring plans. Set to 0 to remove free trial. */
  freeTrialDays?: Maybe<Scalars['Int']['output']>;
  /** Amount for a single payment (or the whole subscription if it's not a recurring plan) */
  price?: Maybe<MembershipV2CommonMoney>;
  /** One time payment, plan is valid for the specified duration. */
  singlePaymentForDuration?: Maybe<MembershipV2Duration>;
  /** One time payment, plan is valid until it is canceled. */
  singlePaymentUnlimited?: Maybe<Scalars['Boolean']['output']>;
  /** Plan has recurring payments. */
  subscription?: Maybe<MembershipV2Recurrence>;
};

export type MembershipV2PricingInput = {
  /** Free trial period for the plan in days. It’s available only for recurring plans. Set to 0 to remove free trial. */
  freeTrialDays?: InputMaybe<Scalars['Int']['input']>;
  /** Amount for a single payment (or the whole subscription if it's not a recurring plan) */
  price?: InputMaybe<MembershipV2CommonMoneyInput>;
  /** One time payment, plan is valid for the specified duration. */
  singlePaymentForDuration?: InputMaybe<MembershipV2DurationInput>;
  /** One time payment, plan is valid until it is canceled. */
  singlePaymentUnlimited?: InputMaybe<Scalars['Boolean']['input']>;
  /** Plan has recurring payments. */
  subscription?: InputMaybe<MembershipV2RecurrenceInput>;
};

export type MembershipV2Recurrence = {
  __typename?: 'MembershipV2Recurrence';
  /**
   * Amount of payment cycles this subscription is valid for.
   *
   * `0` for unlimited or until-canceled.
   */
  cycleCount?: Maybe<Scalars['Int']['output']>;
  /** Length of one payment cycle. */
  cycleDuration?: Maybe<MembershipV2Duration>;
};

export type MembershipV2RecurrenceInput = {
  /**
   * Amount of payment cycles this subscription is valid for.
   *
   * `0` for unlimited or until-canceled.
   */
  cycleCount?: InputMaybe<Scalars['Int']['input']>;
  /** Length of one payment cycle. */
  cycleDuration?: InputMaybe<MembershipV2DurationInput>;
};

export type MembershipV2StringList = {
  __typename?: 'MembershipV2StringList';
  /** List of strings */
  values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type MembershipV2StringListInput = {
  /** List of strings */
  values?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new OAuth app for a Wix Headless client. */
  authManagementOAuthAppsV1CreateOAuthApp?: Maybe<HeadlessV1CreateOAuthAppResponse>;
  /**
   * Deletes an OAuth app by ID.
   *
   *
   * > **Note:** After you delete an OAuth app, an external client can no longer make API calls by authenticating with its client ID.
   */
  authManagementOAuthAppsV1DeleteOAuthApp?: Maybe<Scalars['Void']['output']>;
  /**
   * Generates a secret for an existing OAuth app.
   *
   *
   * > **Note:** You can only generate a secret once for each OAuth app, and the secret can't be retrieved later. Store the secret securely.
   */
  authManagementOAuthAppsV1GenerateOAuthAppSecret?: Maybe<HeadlessV1GenerateOAuthAppSecretResponse>;
  /**
   * Updates an OAuth app.
   *
   *
   * Only fields provided in `mask.paths` are updated.
   *
   * You can update the following fields:
   * + `name`
   * + `description`
   * + `allowedDomain`
   * + `loginUrl`
   */
  authManagementOAuthAppsV1UpdateOAuthApp?: Maybe<HeadlessV1UpdateOAuthAppResponse>;
  /** Creates a category. */
  blogCategoriesV3CreateCategory?: Maybe<NpmCommunitiesPlatformizedBlogV3CreateCategoryResponse>;
  /** Deletes a category. */
  blogCategoriesV3DeleteCategory?: Maybe<Scalars['Void']['output']>;
  /** Gets a category with the provided slug. */
  blogCategoriesV3GetCategoryBySlug?: Maybe<NpmCommunitiesPlatformizedBlogV3GetCategoryBySlugResponse>;
  /**
   * Retrieves a list of up to 100 categories per request.
   *
   * List Categories runs with these defaults, which you can override:
   * - `paging.limit` is `50`.
   * - `paging.offset` is `0`.
   *
   * List Categories is sorted by `displayPosition` in descending order. This cannot be overridden.
   */
  blogCategoriesV3ListCategories?: Maybe<NpmCommunitiesPlatformizedBlogV3ListCategoriesResponse>;
  /** Updates a category. */
  blogCategoriesV3UpdateCategory?: Maybe<NpmCommunitiesPlatformizedBlogV3UpdateCategoryResponse>;
  /** Gets a post with the provided slug. */
  blogPostsV3GetPostBySlug?: Maybe<NpmCommunitiesPlatformizedBlogV3GetPostBySlugResponse>;
  /** Gets a specified post's metrics. */
  blogPostsV3GetPostMetrics?: Maybe<NpmCommunitiesPlatformizedBlogV3GetPostMetricsResponse>;
  /** Gets the total amount of published posts of the blog. */
  blogPostsV3GetTotalPosts?: Maybe<NpmCommunitiesPlatformizedBlogGetTotalPostsResponse>;
  /**
   * Retrieves a list of up to 100 published posts per request.
   *
   * List Posts runs with these defaults, which you can override:
   * - `firstPublishedDate` is sorted in descending order, with pinned posts first.
   * - `paging.limit` is `50`.
   * - `paging.offset` is `0`.
   */
  blogPostsV3ListPosts?: Maybe<NpmCommunitiesPlatformizedBlogV3ListPostsResponse>;
  /**
   * Retrieves the number of published posts per month within a specified time range.
   *
   * The time range is set using the `rangeStart` and `months` properties.
   * The time range always starts on the 1st day of the month set in `rangeStart` and
   * includes the number of `months` following `rangeStart`.
   * For example, if `rangeStart` is set to `'2022-03-13'` and `months` is set to `4`,
   * the time range will be from `'2022-03-01'` until `'2022-06-30'`. The time range always ends on the last day of the month.
   * > Note: If there are no published posts in a month within the time range, that month is not included in the response. For example, let's say a blog has `0` posts dated in February 2022. If `rangeStart` is set to `'2022-01-01'` and `months` is set to `3`, the response includes `postCount` values for January and March, but not February.
   */
  blogPostsV3QueryPostCountStats?: Maybe<NpmCommunitiesPlatformizedBlogQueryPostCountStatsResponse>;
  /** Creates a new tag with the provided label if a tag with the same label doesn't already exist. */
  blogTagsV3CreateTag?: Maybe<NpmCommunitiesPlatformizedBlogCreateTagResponse>;
  /** Deletes a tag. Deleting a tag removes that tag from all blog posts that contain it. */
  blogTagsV3DeleteTag?: Maybe<Scalars['Void']['output']>;
  /**
   * Gets a tag by the provided label.
   *
   * Sub-labels can also be specified using a `/`. For example, you can have `'dessert/icecream'` and `'dessert/pie'` as two different tag labels.
   *
   * > **Note**: The full URL path following `labels/` is counted as 1 label. Adding a `/` to a label does _not_ create multiple labels. This means that `'dessert/icecream'` is a sinlge label.
   */
  blogTagsV3GetTagByLabel?: Maybe<NpmCommunitiesPlatformizedBlogGetTagByLabelResponse>;
  /** Gets a tag with the provided slug. */
  blogTagsV3GetTagBySlug?: Maybe<NpmCommunitiesPlatformizedBlogGetTagBySlugResponse>;
  /**
   * Sets information about whether a booking's session was attended. This information
   * is saved in an `Attendance` object.
   *
   *
   * If attendance was already set, meaning the `Attendance` object already exists, the
   * existing attendance information is updated. Otherwise, a new `Attendance` object
   * is created.
   *
   * By default, the number
   * of attendees is set to `1`, but you can set a number to greater than `1` if multiple
   * participants attended. Do not set to `0` to indicate that no one attended the session.
   * Instead, set the `status` field to `NOT_ATTENDED`.
   *
   * > __Note:__ Make sure your code validates that:
   * >  + There is no mismatch between `numberOfAttendees` and `attendanceStatus` to make sure, for example, that `attendanceStatus` is not `NOT_ATTENDED` while `numberOfAttendees` is `5`.
   * >  + The attendance's `numberOfAttendees` and the booking's `numberOfParticipants` correspond. For example, the number of attendees usually should not exceed the booking's intended number of participants (unless perhaps you allow walk-ins that did not sign up in advance).
   */
  bookingsAttendanceV2SetAttendance?: Maybe<BookingsAttendanceV2SetAttendanceResponse>;
  /**
   * Clones a `serviceOptionsAndVariants` object. This endpoint can be called, for example, to duplicate a service.
   * The cloned service contains all the original service options and variants.
   *
   * Each option
   * in the cloned service has a newly-generated ID that is copied to all choices of the variants in the
   * clone. The cloned service references the service provided in the request by `target_service_id`.
   */
  bookingsServiceOptionsAndVariantsV1CloneServiceOptionsAndVariants?: Maybe<BookingsCatalogV1CloneServiceOptionsAndVariantsResponse>;
  /**
   * Creates options and variants for a service.
   *
   * Before creating the `serviceOptionsAndVariants` object you need to anticipate and manually define
   * all variants based on the defined options and their choices. You then pass
   * the `options` and `variants` arrays in the
   * request. Variants aren't automatically calculated from the defined options and choices.
   *
   * __Current Limitations:__
   *
   * + Only a single `serviceOptionsAndVariants` object is supported per service.
   *
   * + Only a single option is supported per `serviceOptionsAndVariants` object. This means that services are limited to a single option. Therefore, `variants`provides pricing details for either all choices of the single option (for `CUSTOM` options) or all staff members providing the service (for `STAFF_MEMBER` options).
   *
   * For a list of error messages, see [Create Service Options and Variants Errors](https://dev.wix.com/api/rest/wix-bookings/service-options-and-variants/error-messages#service-options-and-variants_error-messages_create-service-options-and-variants-errors).
   */
  bookingsServiceOptionsAndVariantsV1CreateServiceOptionsAndVariants?: Maybe<BookingsCatalogV1CreateServiceOptionsAndVariantsResponse>;
  /**
   * Deletes a `serviceOptionsAndVariants` object.
   *
   *
   * Because each service has only a single `serviceOptionsAndVariants` object, the
   * service won't have any supported options and variants any longer. Instead,
   * the standard Wix Bookings service price calculation is used.
   */
  bookingsServiceOptionsAndVariantsV1DeleteServiceOptionsAndVariants?: Maybe<Scalars['Void']['output']>;
  /** Retrieves a service's options and variants by `service_id`. */
  bookingsServiceOptionsAndVariantsV1GetServiceOptionsAndVariantsByServiceId?: Maybe<BookingsCatalogV1GetServiceOptionsAndVariantsByServiceIdResponse>;
  /**
   * Updates the specified fields of the `serviceOptionsAndVariants` object.
   *
   * Currently, only a single option is supported per `serviceOptionsAndVariants` object.
   *
   * If you want to update `variants`, you must pass the full list of supported variants.
   *
   * If you want to update `options`, you must pass the full list of supported options.
   *
   * For a list of error messages, see [Update Service Options and Variants Errors](https://dev.wix.com/api/rest/wix-bookings/service-options-and-variants/error-messages#service-options-and-variants_error-messages_update-service-options-and-variants-errors).
   */
  bookingsServiceOptionsAndVariantsV1UpdateServiceOptionsAndVariants?: Maybe<BookingsCatalogV1UpdateServiceOptionsAndVariantsResponse>;
  /** Creates a new service. */
  bookingsServicesV2CreateService?: Maybe<BookingsServicesV2CreateServiceResponse>;
  /** Deletes a service. */
  bookingsServicesV2DeleteService?: Maybe<Scalars['Void']['output']>;
  /** Disables specific [pricing plans](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans/plan-object) as payment methods for a service. Customers no longer will be able to pay for the service using a removed pricing plan. **Existing payments with a removed plan are not affected**. */
  bookingsServicesV2DisablePricingPlansForService?: Maybe<BookingsServicesV2DisablePricingPlansForServiceResponse>;
  /**
   * Enables specific [pricing plans](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans/plan-object) as payment methods for a service.
   * enabling customers to pay for the service using one of the specified pricing plans.
   */
  bookingsServicesV2EnablePricingPlansForService?: Maybe<BookingsServicesV2EnablePricingPlansForServiceResponse>;
  /**
   * Updates a service.
   *
   * [Partial updates](https://dev.wix.com/api/rest/wix-bookings/bookings/patch-endpoints-and-field-masks-in-update-requests) are supported.
   *
   * Each time the service is updated, `revision` increments by 1. You must include the
   * number of the existing revision when
   * updating the service. This ensures you're working with the
   * latest service information and prevents unintended overwrites.
   */
  bookingsServicesV2UpdateService?: Maybe<BookingsServicesV2UpdateServiceResponse>;
  /**
   * Creates a session.
   *
   * A session is one of the following:
   * + `"EVENT"`: Reserved period of time on any [schedule](wix-bookings-backend.sessions/introduction#schedules). For example, an appointment, class, or course. Events are visible in the Dashboard in the Bookings app's [**Booking Calendar**](https://support.wix.com/en/article/wix-bookings-about-the-wix-bookings-calendar) page. Set `type` to `"EVENT"` when creating sessions that reserve time on a service's schedule, or when creating a blocked time for a resource.
   * + `"WORKING_HOURS"`: Placeholder for available time on a resource’s schedule. Set `type` to `"WORKING_HOURS"` when creating sessions for resource availability.
   *
   * Sessions belong to a schedule. Schedules are owned by a resource or a service.
   *
   * A session may be an individual session or a recurring session.
   * An individual session has a discrete start and end date, while a recurring session defines a series of repeating sessions. An instance of a recurring session is a specific session in a series of repeating sessions, generated according to the recurrence rule.
   * The `start` and `end` properties set the time and duration of the session. For non-recurring sessions, you can use either the `timestamp` or `localDateTime` properties.
   * For recurring sessions, use the `localDateTime` property only. For recurring sessions, the `start` property sets the date and time of the first recurring session, subject to the recurrence rule. For example, if you set the `start` to Saturday, May 1 and your recurrence rule says every second Monday, then the first session will only be on Monday, May 10.
   *
   * The `year`, `monthOfYear` and `dayOfMonth` properties in the `end` property are used with the `hourOfDay` and `minutesOfHour` properties to set the duration of each session relative to the `start`.
   * The `UNTIL` keyword in the `recurrence` property sets the date for the last recurring session.
   *
   * You can create a session that blocks hours on the resource's calendar, making the resource unavailable.
   * Create a non-recurring session of type `"EVENT"`, and add `"Blocked"` to the `tags` array.
   *
   * >**Notes:**
   * > + For properties where there is no explicit time zone information, the time zone used is the business’s time zone.
   * > + Only users with **[Bookings Admin](https://support.wix.com/en/article/roles-permissions-overview#bookings-admin)** permissions can create a session. You can override the permissions by setting the `suppressAuth` option to `true`.
   */
  bookingsSessionsV1CreateSession?: Maybe<BookingsSchedulesVeloV2CreateSessionResponse>;
  /**
   * Deletes a session.
   *
   * Use the `participantNotification` property to send an email to the participants when the session is deleted.
   * When deleting a session of type `"EVENT"` where a booking exists, the booking's status is updated to `"CANCELED"`.
   * To delete a set of recurring sessions, specify the session's `recurringSessionId` in the `sessionId` property in the parameters.
   * When deleting a recurrence, only future instances of the recurrence are deleted.
   *
   * >**Note:** Only users with **[Bookings Admin](https://support.wix.com/en/article/roles-permissions-overview#bookings-admin)** permissions can delete a session. You can override the permissions by setting the `suppressAuth` option to `true`.
   */
  bookingsSessionsV1DeleteSession?: Maybe<Scalars['Void']['output']>;
  /**
   * Retrieves a list of sessions by their IDs.
   *
   *
   * By default, session objects are returned with the fields specified in the `NO_PI` fieldset. This means they don't contain personal information.
   * To retrieve full session objects including all personal information, use the `ALL_PI` fieldset. This requires the CALENDAR.SESSION_READ_PI permission scope.
   */
  bookingsSessionsV1ListSessions?: Maybe<BookingsCalendarV2ListSessionsResponse>;
  /**
   * Updates a session.
   *
   * When you update a recurring session, only the future instances of the recurrence will be updated. Changing an individual instance's `start` or `end` time will change the way updates to `start` and `end` on the recurring session affect the session instance:
   * |Change made to the instance | Effect of changes made to the recurrence
   * |--|--|
   * |Instance `start` time changed.|Changes to the recurring session's `start` or `end` time will not update the instance.|
   * |Instance `end` time changed, changing the session's duration| Changes made to the recurring session's start time will be updated on the instance while keeping the new duration, but changes to the recurring session's `end` time not be updated on the instance.
   * |Updating a changed `start` time for an instance back to the recurring session's value.|Future changes to the recurring session `start` and `end` times will update the instance's `starts` and `end` time.
   *
   * Changes to properties on the recurring session, other than `start` and `end`, are always updated on the recurrence instance.
   *
   * Use the `options.participantNotification` object to notify participants if the session has been booked.
   *
   * >**Notes:**
   * > + Where there is no explicit timezone information, the timezone used is the business’s timezone.
   * > + Only users with **[Bookings Admin](https://support.wix.com/en/article/roles-permissions-overview#bookings-admin)** permissions can update a session. You can override the permissions by setting the `suppressAuth` option to `true`.
   */
  bookingsSessionsV1UpdateSession?: Maybe<BookingsSchedulesVeloV2UpdateSessionResponse>;
  /**
   * Archives a location.
   *
   *
   * > **Notes:**
   * > + Changes the `archived` boolean of a location to `true`.
   * > + You can't change a location's `status` using this endpoint.
   * > + Archived locations can't be updated.
   * > + Currently, it isn't possible to unarchive locations.
   * > + The `default` location can't be archived.
   */
  businessToolsLocationsV1ArchiveLocation?: Maybe<LocationsArchiveLocationResponse>;
  /** Creates a location. */
  businessToolsLocationsV1CreateLocation?: Maybe<LocationsCreateLocationResponse>;
  /** Retrieves locations, given the provided filters, sorting, and paging. */
  businessToolsLocationsV1ListLocations?: Maybe<LocationsListLocationsResponse>;
  /**
   * Sets a new default location.
   *
   *
   * > **Notes:**
   * > + There can only be one default location per site.
   * > + The default location can't be archived.
   */
  businessToolsLocationsV1SetDefaultLocation?: Maybe<LocationsSetDefaultLocationResponse>;
  /**
   * Replaces a location.
   *
   *
   * > **Note:** Currently, it isn't possible to partially update a location. Therefore, you'll need to pass the full location object in the body of the call.
   */
  businessToolsLocationsV1UpdateLocation?: Maybe<LocationsUpdateLocationResponse>;
  /**
   * Deletes an extended field.
   *
   * When an extended field is deleted,
   * any contact data stored in the field is permanently deleted as well.
   */
  crmExtendedFieldsV4DeleteExtendedField?: Maybe<Scalars['Void']['output']>;
  /**
   * Retrieves a custom field with a given name, or creates one if it doesn't exist.
   *
   * Successful calls to this endpoint always return a field,
   * which can be passed to subsequent requests.
   *
   * To find an existing custom field without potentially creating a new one, use
   * [Get Extended Field](https:dev.wix.com/api/rest/contacts/extended-fields/get-extended-field) or
   * [List Extended Fields](https:dev.wix.com/api/rest/contacts/extended-fields/list-extended-fields).
   */
  crmExtendedFieldsV4FindOrCreateExtendedField?: Maybe<ContactsFieldsV4FindOrCreateExtendedFieldResponse>;
  /** Retrieves a list of extended fields. */
  crmExtendedFieldsV4ListExtendedFields?: Maybe<ContactsFieldsV4ListExtendedFieldsResponse>;
  /** Updates an extended field's specified properties. */
  crmExtendedFieldsV4UpdateExtendedField?: Maybe<ContactsFieldsV4UpdateExtendedFieldResponse>;
  /** Deletes a label from the site and removes it from contacts it applies to. */
  crmLabelsV4DeleteLabel?: Maybe<Scalars['Void']['output']>;
  /**
   * Retrieves a label with a given name, or creates one if it doesn't exist.
   *
   * Successful calls to this endpoint always return a label,
   * which can be passed to subsequent requests.
   *
   * For example, in the Contacts API,
   * [Label Contact](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/label-contact) and
   * [Unlabel Contact](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/unlabel-contact)
   * requests will fail if you include a nonexistant label.
   * To ensure successful calls, you can call this endpoint first,
   * and then use the response in the label and unlabel requests.
   *
   * To find an existing label without potentially creating a new one, use
   * [Get Label](https://dev.wix.com/api/rest/contacts/labels/get-label) or
   * [List Labels](https://dev.wix.com/api/rest/contacts/labels/list-labels).
   */
  crmLabelsV4FindOrCreateLabel?: Maybe<ContactsLabelsV4FindOrCreateLabelResponse>;
  /** Lists all contact labels for a site. */
  crmLabelsV4ListLabels?: Maybe<ContactsLabelsV4ListLabelsResponse>;
  /** Updates a label's specified properties. */
  crmLabelsV4UpdateLabel?: Maybe<ContactsLabelsV4UpdateLabelResponse>;
  /**
   * Runs an aggregation on a data collection and returns the resulting list of items.
   *
   *
   * An aggregation enables you to perform certain calculations on your collection data, or on groups of items that you define, to retrieve meaningful summaries.
   * You can also add paging, filtering, and sorting preferences to your aggregation to retrieve exactly what you need.
   */
  dataItemsV2AggregateDataItems?: Maybe<CloudDataDataAggregateDataItemsResponse>;
  /**
   * Inserts one or more references in the specified fields of items in a collection.
   *
   *
   * This endpoint adds one or more references to a collection.
   * Each new reference in the `dataItemReferences` field specifies a referring item's ID, the field in which to insert the reference, and the ID of the referenced item.
   */
  dataItemsV2BulkInsertDataItemReferences?: Maybe<CloudDataDataBulkInsertDataItemReferencesResponse>;
  /**
   * Adds multiple items to a collection.
   *
   *
   * When each item is inserted into a collection, its ID is automatically assigned a random value.
   * You can optionally provide your own ID when inserting the item. If you specify an ID that already exists in the collection, the insertion will fail.
   */
  dataItemsV2BulkInsertDataItems?: Maybe<CloudDataDataBulkInsertDataItemsResponse>;
  /** Removes one or more references. */
  dataItemsV2BulkRemoveDataItemReferences?: Maybe<CloudDataDataBulkRemoveDataItemReferencesResponse>;
  /**
   * Removes multiple items from a collection.
   *
   *
   * If any items in other collections reference the removed items in reference or multi-reference fields, those fields are cleared.
   *
   * > **Note:** Once an item has been removed from a collection, it can't be restored.
   */
  dataItemsV2BulkRemoveDataItems?: Maybe<CloudDataDataBulkRemoveDataItemsResponse>;
  /**
   * Inserts or updates multiple items in a collection.
   *
   *
   * The Bulk Save Data Items endpoint inserts or updates each item provided, depending on whether it already exists in the collection. For each item:
   *
   * + If you don't provide an ID, a new item is created.
   *
   * + If you provide an ID that doesn't exist in the collection, a new item is created with that ID.
   *
   * + If an item with the ID you provide already exists in the collection, that item is updated. When an item is updated, its `data._updatedDate` field is changed to the current date and time.
   *
   * > **Note:** When you provide an item with an ID that already exists in the collection, the item you provide completely replaces the existing item with that ID.
   * > This means that all of the item's previous fields and values are lost.
   */
  dataItemsV2BulkSaveDataItems?: Maybe<CloudDataDataBulkSaveDataItemsResponse>;
  /**
   * Updates multiple items in a collection.
   *
   *
   * This endpoint replaces each specified data item's existing data with the payload provided in the request.
   *
   * Each item in the request must include an ID. If an item is found in the specified collection with
   * the same ID, that item is updated. If the collection doesn't contain an item with that ID, the update fails.
   *
   * When an item is updated, its `data._updatedDate` field is changed to the current date and time.
   *
   * > **Note:**
   * > After each item is updated, it only contains the fields included in the request. If the existing item has fields with values and those fields
   * > aren't included in the updated item, their values are lost.
   */
  dataItemsV2BulkUpdateDataItems?: Maybe<CloudDataDataBulkUpdateDataItemsResponse>;
  /** Counts the number of items in a data collection that match the provided filtering preferences. */
  dataItemsV2CountDataItems?: Maybe<CloudDataDataCountDataItemsResponse>;
  /**
   * Adds an item to a collection.
   *
   *
   * An item can only be inserted into an existing connection.
   * You can create a new collection using the [Data Collections API](https://dev.wix.com/api/rest/wix-data/wix-data/data-collections).
   *
   * When an item is inserted into a collection, the item's ID is automatically assigned a random value.
   * You can optionally provide a custom ID in `dataItem.id` when inserting the item.
   * If you specify an ID that already exists in the collection, the insertion will fail.
   *
   * If `dataItem.data` is empty, a new item is created with no data fields.
   */
  dataItemsV2InsertDataItem?: Maybe<CloudDataDataInsertDataItemResponse>;
  /**
   * Inserts a reference in the specified field in an item in a collection.
   *
   *
   * A reference in the `dataItemReference` field specifies a referring item's ID, the field in which to insert the reference, and the ID of the referenced item.
   */
  dataItemsV2InsertDataItemReference?: Maybe<CloudDataDataInsertDataItemReferenceResponse>;
  /** Checks whether a field in a referring item contains a reference to a specified item. */
  dataItemsV2IsReferencedDataItem?: Maybe<CloudDataDataIsReferencedDataItemResponse>;
  /**
   * Retrieves a list of distinct values for a given field in all items that match a query, without duplicates.
   *
   *
   * As with the [Query Data Items](https://dev.wix.com/api/rest/wix-data/wix-data/data-items/query-data-items) endpoint, this endpoint retrieves items based on the filtering, sorting, and paging preferences you provide.
   * However, the Query Distinct Values endpoint doesn't return all of the full items that match the query.
   * Rather, it returns all unique values of the field you specify in `fieldName` for items that match the query.
   * If more than one item has the same value for that field, that value appears only once.
   *
   * For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   */
  dataItemsV2QueryDistinctValues?: Maybe<CloudDataDataQueryDistinctValuesResponse>;
  /**
   * Retrieves the full items referenced in the specified field of an item.
   *
   *
   * Reference and multi-reference fields refer to items in different collections.
   * Use this endpoint to retrieve the full details of the referenced items themselves.
   *
   * For example, suppose you have a **Movies** collection with an **Actors** field that contains references to items in a **People** collection.
   * Querying the **Movies** collection using the Query Referenced Data Items endpoint returns the relevant **People** items referenced in the **Actors** field of the specified **Movie** item.
   * This gives you information from the **People** collection about each of the actors in the specified movie.
   */
  dataItemsV2QueryReferencedDataItems?: Maybe<CloudDataDataQueryReferencedDataItemsResponse>;
  /**
   * Removes an item from a collection.
   *
   *
   * If any items in other collections reference the removed item in reference or multi-reference fields, those fields are cleared.
   *
   * > **Note:**
   * > Once an item has been removed from a collection, it can't be restored.
   */
  dataItemsV2RemoveDataItem?: Maybe<CloudDataDataRemoveDataItemResponse>;
  /** Removes the specified reference from the specified field. */
  dataItemsV2RemoveDataItemReference?: Maybe<CloudDataDataRemoveDataItemReferenceResponse>;
  /**
   * Replaces references in a specified field of a specified data item.
   *
   *
   * This endpoint replaces the existing reference or references contained in the field specified in `referringItemFieldName` within the data item specified in `referringItemId`.
   * The endpoint removes existing references and in their place it adds references to the items specified in `newReferencedItemIds`.
   *
   * > **Note:** If you pass an empty array in `newReferencedItemIds`, all existing references are removed.
   */
  dataItemsV2ReplaceDataItemReferences?: Maybe<CloudDataDataReplaceDataItemReferencesResponse>;
  /**
   * Inserts or updates an item in a collection.
   *
   *
   * The Save Data Item endpoint inserts or updates the specified item, depending on whether it already exists in the collection.
   *
   * + If you don't provide an ID, a new item is created.
   *
   * + If you provide an ID that does not exist in the collection, a new item is created with that ID.
   *
   * + If an item with the ID you provide already exists in the collection, that item is updated. When an item is updated, its `data._updatedDate` field is changed to the current date and time.
   *
   * > **Note:** When you provide an item with an ID that already exists in the collection, the payload you provide in `dataItem.data` replaces the existing item with that ID.
   * > This means that the item's previous fields and values are lost.
   */
  dataItemsV2SaveDataItem?: Maybe<CloudDataDataSaveDataItemResponse>;
  /**
   * Removes all items from a collection.
   *
   *
   * If any items in other collections reference the removed items in reference or multi-reference fields, those fields are cleared.
   *
   * > **Note:**
   * > Once items have been removed from a collection, they can't be restored.
   */
  dataItemsV2TruncateDataItems?: Maybe<Scalars['Void']['output']>;
  /**
   * Updates an item in a collection.
   *
   *
   * This endpoint replaces the data item's existing data with the payload provided in `dataItem.data` in the request.
   *
   * To update an item, you need to specify an item ID and a collection ID.
   * If an item is found in the specified collection with the specified ID, that item is updated.
   * If the collection doesn't contain an item with that ID, the request fails.
   *
   * When an item is updated, its `data._updatedDate` field is changed to the current date and time.
   *
   * > **Note:**
   * > After an item is updated, it only contains the fields included in the `dataItem.data` payload in Update Data Item request.
   * > If the existing item has fields with values and those fields aren't included in the updated item, their values are lost.
   */
  dataItemsV2UpdateDataItem?: Maybe<CloudDataDataUpdateDataItemResponse>;
  /**
   * Adds [catalog](https://dev.wix.com/api/rest/wix-stores/catalog/ecommerce-integration) line items to a cart.
   *
   * >**Note:** When adding catalog line items to your cart, the `lineItems.catalogReference.appId` and `lineItems.catalogReference.catalogItemId` fields are required.
   */
  ecomCartV1AddToCart?: Maybe<EcomCartV1AddToCartResponse>;
  /** Adds [catalog](https://bo.wix.com/wix-docs/rest/ecommerce/catalog-spi/introduction) and/or custom line items to the current site visitor's cart. */
  ecomCartV1AddToCurrentCart?: Maybe<EcomCartV1AddToCartResponse>;
  /**
   * Creates a cart.
   *
   * >**Note:** When adding catalog line items, the `lineItems.catalogReference.appId` and `lineItems.catalogReference.catalogItemId` fields are required.
   */
  ecomCartV1CreateCart?: Maybe<EcomCartV1CreateCartResponse>;
  /**
   * Creates a checkout from a cart.
   *
   * If a checkout for the specified cart already exists, that checkout is
   * updated with any new information from the cart.
   */
  ecomCartV1CreateCheckout?: Maybe<EcomCartV1CreateCheckoutResponse>;
  /**
   * Creates a checkout from the current site visitor's cart.
   *
   * If a checkout was already created from the specified cart, that checkout will be
   * updated (synced) with any new information from the cart.
   */
  ecomCartV1CreateCheckoutFromCurrentCart?: Maybe<EcomCartV1CreateCheckoutResponse>;
  /** Retrieves the current session's active cart. */
  ecomCartV1CurrentCartGetCurrentCart?: Maybe<EcomCartV1GetCurrentCartResponse>;
  /** Deletes a cart. */
  ecomCartV1DeleteCart?: Maybe<Scalars['Void']['output']>;
  /** Deletes the current site visitor's cart. */
  ecomCartV1DeleteCurrentCart?: Maybe<Scalars['Void']['output']>;
  /**
   * Estimates the price totals (including tax) of the current site visitor's cart, based on a selected carrier service,
   * shipping address, and billing information.
   */
  ecomCartV1EstimateCurrentCartTotals?: Maybe<EcomCartV1EstimateTotalsResponse>;
  /**
   * Estimates a cart's price totals (including tax), based on a selected carrier service,
   * shipping address, and billing information.
   */
  ecomCartV1EstimateTotals?: Maybe<EcomCartV1EstimateTotalsResponse>;
  /** Removes the coupon from a cart. */
  ecomCartV1RemoveCoupon?: Maybe<EcomCartV1RemoveCouponResponse>;
  /** Removes the coupon from the current site visitor's cart. */
  ecomCartV1RemoveCouponFromCurrentCart?: Maybe<EcomCartV1RemoveCouponResponse>;
  /** Removes line items from a cart. */
  ecomCartV1RemoveLineItems?: Maybe<EcomCartV1RemoveLineItemsResponse>;
  /** Removes line items from the current site visitor's cart. */
  ecomCartV1RemoveLineItemsFromCurrentCart?: Maybe<EcomCartV1RemoveLineItemsResponse>;
  /** Updates a cart's properties. */
  ecomCartV1UpdateCart?: Maybe<EcomCartV1UpdateCartResponse>;
  /** Updates the current site visitor's cart properties. */
  ecomCartV1UpdateCurrentCart?: Maybe<EcomCartV1UpdateCartResponse>;
  /** Updates the quantity of one or more line items on the current site visitor's cart. */
  ecomCartV1UpdateCurrentCartLineItemQuantity?: Maybe<EcomCartV1UpdateLineItemsQuantityResponse>;
  /** Updates the quantity of one or more line items in a cart. */
  ecomCartV1UpdateLineItemsQuantity?: Maybe<EcomCartV1UpdateLineItemsQuantityResponse>;
  /**
   * Adds line items to a checkout.
   *
   * > **Note:** For more information on what to pass to `lineItems.catalogReference`, see [eCommerce Integration in the Wix Stores Catalog API](https://dev.wix.com/api/rest/wix-stores/catalog/ecommerce-integration).
   */
  ecomCheckoutV1AddToCheckout?: Maybe<EcomCheckoutV1AddToCheckoutResponse>;
  /**
   * Creates a checkout.
   *
   * > **Note:** For more information on what to pass to `lineItems.catalogReference`, see [eCommerce Integration in the Wix Stores Catalog API](https://dev.wix.com/api/rest/wix-stores/catalog/ecommerce-integration).
   */
  ecomCheckoutV1CreateCheckout?: Maybe<EcomCheckoutV1CreateCheckoutResponse>;
  /**
   * Retrieves the checkout page URL of a specified checkout.
   *
   * By default, a `checkoutUrl` generates for a checkout and directs to a standard Wix checkout page.
   * However, if `overrideCheckoutUrl` has a value, it will replace and set the value of `checkoutUrl`.
   */
  ecomCheckoutV1GetCheckoutUrl?: Maybe<EcomCheckoutV1GetCheckoutUrlResponse>;
  /**
   * Sets `completed` to `true` to mark a checkout as completed.
   *
   * When an order is completed through Wix, the `completed` field in the associated checkout object
   * will automatically be updated to `true`. If an order is completed through a separate system,
   * use this endpoint to manually mark the checkout as completed.
   */
  ecomCheckoutV1MarkCheckoutAsCompleted?: Maybe<Scalars['Void']['output']>;
  /** Removes the coupon from a specified checkout. */
  ecomCheckoutV1RemoveCoupon?: Maybe<EcomCheckoutV1RemoveCouponResponse>;
  /** Removes the gift card from a specified checkout. */
  ecomCheckoutV1RemoveGiftCard?: Maybe<EcomCheckoutV1RemoveGiftCardResponse>;
  /** Removes specified line items from a checkout. */
  ecomCheckoutV1RemoveLineItems?: Maybe<EcomCheckoutV1RemoveLineItemsResponse>;
  /**
   * Removes the `overrideCheckoutUrl` from a specified checkout.
   *
   * When `overrideCheckoutUrl` is removed, the `checkoutUrl` will be set to the default, standard
   * Wix checkout page URL.
   */
  ecomCheckoutV1RemoveOverrideCheckoutUrl?: Maybe<EcomCheckoutV1RemoveOverrideCheckoutUrlResponse>;
  /**
   * Updates a checkout.
   *
   * Use this endpoint to update checkout fields such as billing and shipping info, or to add a coupon code or gift card.
   *
   * To update a checkout's `lineItems`, `completed` status, or to remove coupons and gift cards, see these endpoints:
   * + [Add to Checkout](https://dev.wix.com/api/rest/wix-ecommerce/checkout/add-to-checkout): Add line items to the checkout.
   * + [Update Line Items Quantity](https://dev.wix.com/api/rest/wix-ecommerce/checkout/update-line-items-quantity): Update the quantity of one or more line items in the checkout.
   * + [Remove Line Items](https://dev.wix.com/api/rest/wix-ecommerce/checkout/remove-line-items): Remove a line item from the checkout.
   * + [Mark Checkout As Completed](https://dev.wix.com/api/rest/wix-ecommerce/checkout/mark-checkout-as-completed): To update `completed` to `true` if the checkout was completed through a non-Wix orders or payments system.
   * + [Remove Coupon](https://dev.wix.com/api/rest/wix-ecommerce/checkout/remove-coupon): To remove an applied coupon from the checkout.
   * + [Remove Gift Card](https://dev.wix.com/api/rest/wix-ecommerce/checkout/remove-gift-card): To remove an applied gift card from the checkout.
   *
   * >**Notes:**
   * > + If nothing is passed in the request, the call will fail.
   * > + The `checkout.buyerInfo.email` may not be removed once it is set.
   */
  ecomCheckoutV1UpdateCheckout?: Maybe<EcomCheckoutV1UpdateCheckoutResponse>;
  /**
   * Updates the quantity of one or more line items in a checkout.
   *
   * This endpoint is only for updating the quantity of line items. To entirely remove a line item from
   * the checkout, use [Remove Line Items](https://dev.wix.com/api/rest/wix-ecommerce/checkout/remove-line-items).
   * To add a new line item to the checkout, use [Add to Checkout](https://dev.wix.com/api/rest/wix-ecommerce/checkout/add-to-checkout).
   *
   * This endpoint checks the amount of stock remaining for this line item. If the specified `quantity`
   * is greater than the remaining stock, then the `quantity` returned in the response is the total amount
   * of remaining stock.
   */
  ecomCheckoutV1UpdateLineItemsQuantity?: Maybe<EcomCheckoutV1UpdateLineItemsQuantityResponse>;
  /**
   * Adds [catalog](https://dev.wix.com/api/rest/wix-stores/catalog/ecommerce-integration) line items to a cart.
   *
   * >**Note:** When adding catalog line items to your cart, the `lineItems.catalogReference.appId` and `lineItems.catalogReference.catalogItemId` fields are required.
   */
  ecomCurrentCartV1AddToCart?: Maybe<EcomCartV1AddToCartResponse>;
  /** Adds [catalog](https://bo.wix.com/wix-docs/rest/ecommerce/catalog-spi/introduction) and/or custom line items to the current site visitor's cart. */
  ecomCurrentCartV1AddToCurrentCart?: Maybe<EcomCartV1AddToCartResponse>;
  /**
   * Creates a cart.
   *
   * >**Note:** When adding catalog line items, the `lineItems.catalogReference.appId` and `lineItems.catalogReference.catalogItemId` fields are required.
   */
  ecomCurrentCartV1CreateCart?: Maybe<EcomCartV1CreateCartResponse>;
  /**
   * Creates a checkout from a cart.
   *
   * If a checkout for the specified cart already exists, that checkout is
   * updated with any new information from the cart.
   */
  ecomCurrentCartV1CreateCheckout?: Maybe<EcomCartV1CreateCheckoutResponse>;
  /**
   * Creates a checkout from the current site visitor's cart.
   *
   * If a checkout was already created from the specified cart, that checkout will be
   * updated (synced) with any new information from the cart.
   */
  ecomCurrentCartV1CreateCheckoutFromCurrentCart?: Maybe<EcomCartV1CreateCheckoutResponse>;
  /** Retrieves the current session's active cart. */
  ecomCurrentCartV1CurrentCartGetCurrentCart?: Maybe<EcomCartV1GetCurrentCartResponse>;
  /** Deletes a cart. */
  ecomCurrentCartV1DeleteCart?: Maybe<Scalars['Void']['output']>;
  /** Deletes the current site visitor's cart. */
  ecomCurrentCartV1DeleteCurrentCart?: Maybe<Scalars['Void']['output']>;
  /**
   * Estimates the price totals (including tax) of the current site visitor's cart, based on a selected carrier service,
   * shipping address, and billing information.
   */
  ecomCurrentCartV1EstimateCurrentCartTotals?: Maybe<EcomCartV1EstimateTotalsResponse>;
  /**
   * Estimates a cart's price totals (including tax), based on a selected carrier service,
   * shipping address, and billing information.
   */
  ecomCurrentCartV1EstimateTotals?: Maybe<EcomCartV1EstimateTotalsResponse>;
  /** Removes the coupon from a cart. */
  ecomCurrentCartV1RemoveCoupon?: Maybe<EcomCartV1RemoveCouponResponse>;
  /** Removes the coupon from the current site visitor's cart. */
  ecomCurrentCartV1RemoveCouponFromCurrentCart?: Maybe<EcomCartV1RemoveCouponResponse>;
  /** Removes line items from a cart. */
  ecomCurrentCartV1RemoveLineItems?: Maybe<EcomCartV1RemoveLineItemsResponse>;
  /** Removes line items from the current site visitor's cart. */
  ecomCurrentCartV1RemoveLineItemsFromCurrentCart?: Maybe<EcomCartV1RemoveLineItemsResponse>;
  /** Updates a cart's properties. */
  ecomCurrentCartV1UpdateCart?: Maybe<EcomCartV1UpdateCartResponse>;
  /** Updates the current site visitor's cart properties. */
  ecomCurrentCartV1UpdateCurrentCart?: Maybe<EcomCartV1UpdateCartResponse>;
  /** Updates the quantity of one or more line items on the current site visitor's cart. */
  ecomCurrentCartV1UpdateCurrentCartLineItemQuantity?: Maybe<EcomCartV1UpdateLineItemsQuantityResponse>;
  /** Updates the quantity of one or more line items in a cart. */
  ecomCurrentCartV1UpdateLineItemsQuantity?: Maybe<EcomCartV1UpdateLineItemsQuantityResponse>;
  /** Creates a new discount rule. */
  ecomDiscountRulesV1CreateDiscountRule?: Maybe<EcomDiscountsCreateDiscountRuleResponse>;
  /** Deletes a discount rule. */
  ecomDiscountRulesV1DeleteDiscountRule?: Maybe<Scalars['Void']['output']>;
  /**
   * Updates a discount rule.
   *
   * Each time the discount rule is updated, `revision` increments by 1. The existing `revision` must be included when updating the discount rule.
   * This ensures you're working with the latest discount rule information, and it prevents unintended overwrites.
   */
  ecomDiscountRulesV1UpdateDiscountRule?: Maybe<EcomDiscountsUpdateDiscountRuleResponse>;
  /**
   * Add's a custom activity or a merchant comment to an order.
   *
   * Examples of custom activities:
   * + Platform - notifications, payments
   * + Stores - digital link sent, pickup read, tracking link updated
   * + Bookings - checked-in, no-show, rescheduled, cancellation mail sent, reminders sent
   * + Events - attendee check-in, reminder mail sent, Zoom link set
   */
  ecomOrdersV1AddActivity?: Maybe<EcomOrdersV1AddActivityResponse>;
  ecomOrdersV1AggregateOrders?: Maybe<EcomOrdersV1AggregateOrdersResponse>;
  /** Cancels an order. The `order.status` field changes to `CANCELED`. */
  ecomOrdersV1CancelOrder?: Maybe<EcomOrdersV1CancelOrderResponse>;
  ecomOrdersV1ChargeMemberships?: Maybe<Scalars['Void']['output']>;
  ecomOrdersV1CommitDeltas?: Maybe<EcomOrdersV1CommitDeltasResponse>;
  /**
   * Creates a new order.
   *
   * Some fields are marked as required. Note these further requirements:
   *
   * The `order.shippingInfo.logistics.shippingDestination.address` field must be provided, **unless**:
   * + The order is for pickup - `order.shippingInfo.logistics.pickupDetails.address` is defined
   * + There are no shippable items in the order - `order.lineItems[n].physicalProperties.shippable` boolean is `false`
   * + This is a POS (point of sale) order - `order.channelInfo.type` value is `POS`
   *
   * The `order.billingInfo.address` field must be provided **unless**:
   * + There are no shippable items in the order - `order.lineItems[n].physicalProperties.shippable` boolean is `false`
   * + This is a POS (point of sale) order - `order.channelInfo.type` value is `POS`
   *
   * When catalog items are added - `order.lineItems.catalogReference` is defined - the following rules apply:
   * + When providing description lines - `order.lineItem.descriptionLines.plainText/colorInfo` must have value
   * + If the product is digital ( `order.lineItems.itemType.preset: DIGITAL` ), then `order.lineItem.digitalFile` must be provided
   *
   * When custom line items are added - `order.lineItems.catalogReference` is **not** defined - the following rules apply:
   * + `order.lineItem.physicalProperties` cannot be set
   * + `order.lineItem.fulfillerId` cannot be set
   * + `order.lineItem.totalDiscount` cannot be set
   * + Applied discounts cannot be set for a custom line item - `order.appliedDiscounts.lineItemIds` cannot contain the custom line item ID.
   */
  ecomOrdersV1CreateOrder?: Maybe<EcomOrdersV1CreateOrderResponse>;
  /**
   * Delete's an order's activity.
   *
   * Only custom activities and merchant comments can be deleted.
   */
  ecomOrdersV1DeleteActivity?: Maybe<EcomOrdersV1DeleteActivityResponse>;
  /**
   * Provides payment collectability status for given order. If payment collection is possible
   * response will contain collectable amount for given ecom order. If not - response will contain
   * reason why payment collection is not possible.
   */
  ecomOrdersV1GetPaymentCollectabilityStatus?: Maybe<EcomOrdersPaymentsCollectorV1GetPaymentCollectabilityStatusResponse>;
  /** Checks whether this order can be refunded. */
  ecomOrdersV1GetRefundabilityStatus?: Maybe<EcomOrdersPaymentsCollectorV1GetRefundabilityStatusResponse>;
  /**
   * <!--ONLY:REST-->
   * Internal query orders endpoint without additional logic to hide INIT orders.
   * Returns a list of up to 100 orders, given the provided paging, filtering and sorting.
   *
   * To learn how to query orders, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * <!--END:ONLY:REST-->
   */
  ecomOrdersV1InternalQueryOrders?: Maybe<EcomOrdersV1InternalQueryOrdersResponse>;
  /** Marks multiple orders as paid. `order.paymentStatus` field *eventually* changes to `PAID`. */
  ecomOrdersV1PaymentCollectionBulkMarkOrdersAsPaid?: Maybe<EcomOrdersPaymentsCollectorV1BulkMarkOrdersAsPaidResponse>;
  /**
   * Call this endpoint to create an order in the payment gateway system. The amount of the order would be either:
   * 1. An explicit amount provided in the request, or;
   * 2. If an explicit amount is not provided - the remaining amount to complete the payment of that eCom order.
   * As a result, an ID of the created payment gateway order would be returned.
   * You can then use Wix Payments APIs to approve that order or collect payment, which will eventually change the eCom order state (e.g mark it as paid).
   */
  ecomOrdersV1PaymentCollectionCreatePaymentGatewayOrder?: Maybe<EcomOrdersPaymentsCollectorV1CreatePaymentGatewayOrderResponse>;
  /**
   * Marks the order as paid. `order.paymentStatus` field *eventually* changes to `PAID`.
   * In case the order already has an offline payment transaction associated with it
   * (usually when manual payment method is chosen at checkout) - This transaction will become approved.
   * In case the order has no payment transactions associated with it
   * (usually when the item is set to be paid offline after checkout or when an order is created from the backoffice) - A payment transaction
   * will be created and approved.
   */
  ecomOrdersV1PaymentCollectionMarkOrderAsPaid?: Maybe<EcomOrdersPaymentsCollectorV1MarkOrderAsPaidResponse>;
  /**
   * Prepares payment collection for given ecom order. This is the first of 2-step process of payment collection.
   * Here we ensure that payment collection is possible for given order and store and prepare payment gateway order for future charge.
   * 2nd step is an actual charge of prepared payment gateway order. This could be done either
   * via Wix-Cashier's API (https://bo.wix.com/wix-docs/rest/wix-cashier/pay/charge/charge-for-order)
   * or using Cashier Payments Widget (https://github.com/wix-private/cashier-client/tree/master/packages/cashier-payments-widget)
   */
  ecomOrdersV1PreparePaymentCollection?: Maybe<EcomOrdersPaymentsCollectorV1PreparePaymentCollectionResponse>;
  /**
   * Records and approves new manual payment with provided custom amount on given order.
   * Existing pending payments are ignored.
   * Custom amount is expected to be less or equal remaining amount to be paid on order (affected by approved payments, refunds and gift card payments)
   */
  ecomOrdersV1RecordManuallyCollectedPayment?: Maybe<Scalars['Void']['output']>;
  /**
   * Calls corresponding payment providers and creates refund transactions for requested payments.
   * Updates order transactions based on refund results.
   * For requested payments with `TriggerRefundRequest.payments.external_refund = true` will not call payment providers and
   * will only update order transactions.
   */
  ecomOrdersV1TriggerRefund?: Maybe<EcomOrdersPaymentsCollectorV1TriggerRefundResponse>;
  /** Updates an order's activity. */
  ecomOrdersV1UpdateActivity?: Maybe<EcomOrdersV1UpdateActivityResponse>;
  ecomOrdersV1UpdateOrder?: Maybe<EcomOrdersV1UpdateOrderResponse>;
  ecomOrdersV1UpdateOrderLineItem?: Maybe<EcomOrdersV1UpdateOrderLineItemResponse>;
  /**
   * Adds up to 50 payment records to an order.
   * > **Note:** This does **NOT** perform the actual charging - the order is only updated with records of the payments.
   */
  ecomPaymentsV1AddPayments?: Maybe<EcomOrdersPaymentsV1AddPaymentsResponse>;
  /** Add refunds for payments for an order and changes payments statuses accordingly */
  ecomPaymentsV1AddRefund?: Maybe<EcomOrdersPaymentsV1AddRefundResponse>;
  /** Updates the payment status of multiple order transactions. */
  ecomPaymentsV1BulkUpdatePaymentStatuses?: Maybe<EcomOrdersPaymentsV1BulkUpdatePaymentStatusesResponse>;
  /** Retrieves transactions associated with all specified orders. */
  ecomPaymentsV1ListTransactionsForMultipleOrders?: Maybe<EcomOrdersPaymentsV1ListTransactionsForMultipleOrdersResponse>;
  /** Retrieves transactions associated with a specified order. */
  ecomPaymentsV1ListTransactionsForSingleOrder?: Maybe<EcomOrdersPaymentsV1ListTransactionsForSingleOrderResponse>;
  /** Updates the payment status of an order transaction. */
  ecomPaymentsV1UpdatePaymentStatus?: Maybe<EcomOrdersPaymentsV1UpdatePaymentStatusResponse>;
  /**
   * Returns a recommendation object containing a list of items to recommend to the customer.
   *
   * Get Recommendation determines which items to recommend based on the given recommendation algorithms.
   *
   * Get Recommendation doesn’t run the algorithms. It calls the installed apps that provide them.
   *
   * Apps may provide algorithms for use with their own catalogs, or for use with catalogs from other apps.
   * For example, Wix Stores provides algorithms that can only be used on its own catalogs.
   * To run an algorithm, the app providing it must be installed, and an app providing a supported catalog must be installed.
   * For more information and to see which algorithms are available on your site or project, call [List Available Algorithms](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/recommendations/list-available-algorithms).
   *
   * Get Recommendation operates as follows:
   * 1. Get Recommendation receives as input a list of algorithms as an array. These algorithms can be provided by different apps and can apply to different catalogs.
   * 2. Get Recommendation calls the app that corresponds to the `appId` of the first algorithm in the list of algorithms. It passes that algorithm’s ID and the IDs of any subsequent algorithms in the array for the same app.
   * 3. The app runs the algorithms.
   * 4. Get Recommendation returns items recommendations from the first algorithm (according to its position in the `algorithms` array) that meets the minimum number of recommendations. At that point Get Recommendation stops calling other apps.
   * 5. If none of the algorithms run by the first app meet the minimum recommended items, Get Recommendation finds the next algorithm in the array with a new `appId` (an ID of an app that has not yet been called), and repeats the process.
   * 6. If no algorithms in the `algorithms` array recommend at least the minimum recommended items, Get Recommendations returns an empty array.
   */
  ecomRecommendationsV1GetRecommendation?: Maybe<EcomRecommendationsV1GetRecommendationResponse>;
  /**
   * Returns a list of recommendation algorithms that can be used on your Wix site or project. These algorithms can be used with [Get Recommendation](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/recommendations/get-recommendation) to provide item recommendations to the customer.
   *
   * Algorithms are run by the apps that provide them, and can only be used on catalogs they support.
   * Apps may provide algorithms for use with their own catalogs and/or catalogs from other apps.
   *
   * The app which provides an algorithm is referenced by that algorithm’s `appId`.
   * The apps whose catalogs are supported by an algorithm are referenced by the IDs in that algorithm’s `catalogAppIds` array.
   *
   * For an algorithm to be considered “Available” and returned in this method’s response, the algorithm must meet the following conditions:
   * 1. The algorithm’s `appId` must match the ID of an installed Wix app.
   * 2. At least 1 of the IDs in `catalogAppIds` must match the ID of an installed Wix app.
   *
   * Wix app IDs are <a href="https://dev.wix.com/api/rest/getting-started/wix-business-solutions#getting-started_wix-business-solutions_about-wix-business-solutions" target="_blank">listed here</a>.
   */
  ecomRecommendationsV1ListAvailableAlgorithms?: Maybe<EcomRecommendationsV1ListAvailableAlgorithmsResponse>;
  /**
   * Creates a policy.
   * You can create up to 3 policies per event. If you try to create more than 3, you'll get the "Maximum number of policies for the event has been reached" error.
   */
  eventsPoliciesV2CreatePolicy?: Maybe<EventsV2CreatePolicyResponse>;
  /** Permanently deletes a policy. */
  eventsPoliciesV2DeletePolicy?: Maybe<Scalars['Void']['output']>;
  /**
   * Changes policy order in an event dashboard and agreement checkbox on the checkout form. By default, the policies are arranged by the created date in descending order.
   * > **Note:** It is possible to use both `beforePolicyId` and `afterPolicyId` at the same time but only the last one defined will be executed.
   */
  eventsPoliciesV2ReorderEventPolicies?: Maybe<EventsV2ReorderEventPoliciesResponse>;
  /**
   * Updates a policy.
   * Each time the policy is updated, `revision` increments by 1. The existing `revision` must be included when updating the policy. This ensures you're working with the latest policy and prevents unintended overwrites.
   */
  eventsPoliciesV2UpdatePolicy?: Maybe<EventsV2UpdatePolicyResponse>;
  /** Adds schedule item to the draft schedule. Draft items are not publicly available unless published. */
  eventsScheduleBookmarksV1AddScheduleItem?: Maybe<EventsScheduleAddScheduleItemResponse>;
  /** Bookmarks schedule item for current member. */
  eventsScheduleBookmarksV1CreateBookmark?: Maybe<Scalars['Void']['output']>;
  /** Removes schedule item bookmark from current member. */
  eventsScheduleBookmarksV1DeleteBookmark?: Maybe<Scalars['Void']['output']>;
  /** Deletes schedule item from draft schedule. */
  eventsScheduleBookmarksV1DeleteScheduleItem?: Maybe<Scalars['Void']['output']>;
  /**
   * Clears all changes to the draft schedule.
   * (Does not affect the published schedule.)
   */
  eventsScheduleBookmarksV1DiscardDraft?: Maybe<Scalars['Void']['output']>;
  /** Retrieves schedule item by ID. */
  eventsScheduleBookmarksV1GetScheduleItem?: Maybe<EventsScheduleGetScheduleItemResponse>;
  /** Retrieves a list of bookmarked schedule items for current member. */
  eventsScheduleBookmarksV1ListBookmarks?: Maybe<EventsScheduleListBookmarksResponse>;
  /** Retrieves a list of up to 100 schedule items, with basic filter support. */
  eventsScheduleBookmarksV1ListScheduleItems?: Maybe<EventsScheduleListScheduleItemsResponse>;
  /** Publishes the draft schedule. */
  eventsScheduleBookmarksV1PublishDraft?: Maybe<Scalars['Void']['output']>;
  /** Adjusts time of all draft schedule items (per event). */
  eventsScheduleBookmarksV1RescheduleDraft?: Maybe<Scalars['Void']['output']>;
  /**
   * Updates existing schedule item.
   * All modifications are performed on a draft schedule, even if schedule item has already been published.
   */
  eventsScheduleBookmarksV1UpdateScheduleItem?: Maybe<EventsScheduleUpdateScheduleItemResponse>;
  /** Adds schedule item to the draft schedule. Draft items are not publicly available unless published. */
  eventsScheduleV1AddScheduleItem?: Maybe<EventsScheduleAddScheduleItemResponse>;
  /** Bookmarks schedule item for current member. */
  eventsScheduleV1CreateBookmark?: Maybe<Scalars['Void']['output']>;
  /** Removes schedule item bookmark from current member. */
  eventsScheduleV1DeleteBookmark?: Maybe<Scalars['Void']['output']>;
  /** Deletes schedule item from draft schedule. */
  eventsScheduleV1DeleteScheduleItem?: Maybe<Scalars['Void']['output']>;
  /**
   * Clears all changes to the draft schedule.
   * (Does not affect the published schedule.)
   */
  eventsScheduleV1DiscardDraft?: Maybe<Scalars['Void']['output']>;
  /** Retrieves schedule item by ID. */
  eventsScheduleV1GetScheduleItem?: Maybe<EventsScheduleGetScheduleItemResponse>;
  /** Retrieves a list of bookmarked schedule items for current member. */
  eventsScheduleV1ListBookmarks?: Maybe<EventsScheduleListBookmarksResponse>;
  /** Retrieves a list of up to 100 schedule items, with basic filter support. */
  eventsScheduleV1ListScheduleItems?: Maybe<EventsScheduleListScheduleItemsResponse>;
  /** Publishes the draft schedule. */
  eventsScheduleV1PublishDraft?: Maybe<Scalars['Void']['output']>;
  /** Adjusts time of all draft schedule items (per event). */
  eventsScheduleV1RescheduleDraft?: Maybe<Scalars['Void']['output']>;
  /**
   * Updates existing schedule item.
   * All modifications are performed on a draft schedule, even if schedule item has already been published.
   */
  eventsScheduleV1UpdateScheduleItem?: Maybe<EventsScheduleUpdateScheduleItemResponse>;
  /**
   * Creates a site member.
   *
   * <!--ONLY:REST-->
   * After creation, you can use
   * [Send Set Password Email](https://dev.wix.com/api/rest/members/member-authentication/send-set-password-email)
   * to email the member with a link to set their password.
   * The member can log in to the site
   * when they set their password for the first time.
   *
   * > **Note:**
   * > When creating multiple members,
   * > set your requests at least 1 second apart to keep below rate limits.
   * <!--END:ONLY:REST-->
   */
  membersMembersV1CreateMember?: Maybe<MembersCreateMemberResponse>;
  /** Deletes a member by ID. */
  membersMembersV1DeleteMember?: Maybe<Scalars['Void']['output']>;
  /**
   * Deletes a member's street addresses.
   *
   * <!--ONLY:VELO
   * This function returns a Promise that resolves to a member object
   * when the specified member's addresses are cleared.
   * The `deleteMemberAddresses()` function clears the `addresses` array under the `contact` property.
   * <!--END:ONLY:VELO-->
   */
  membersMembersV1DeleteMemberAddresses?: Maybe<MembersDeleteMemberAddressesResponse>;
  /**
   * Clears a member's email addresses.
   *
   * <!--ONLY:VELO
   * This function returns a Promise that resolves to a member object
   * when the specified member's email addresses are cleared.
   *
   * `deleteMemberEmails()` clears the `emails` array under the `contact` property.
   * Other member
   * [`updatedMember()`](.wix-members-backend/members-obj/updatemember)
   *
   * > **Note:**
   * > The member can still log in with their `loginEmail`,
   * > which is not cleared when this function is called.
   * <!--END:ONLY:VELO-->
   */
  membersMembersV1DeleteMemberEmails?: Maybe<MembersDeleteMemberEmailsResponse>;
  /**
   * Clears a member's phone numbers.
   *
   * <!--ONLY:VELO
   * This function returns a Promise that resolves to a member object
   * when the specified member's phone numbers are cleared.
   *
   * `deleteMemberPhones()` clears the `phones` array under the `contact` property.
   * <!--END:ONLY:VELO-->
   */
  membersMembersV1DeleteMemberPhones?: Maybe<MembersDeleteMemberPhonesResponse>;
  /**
   * Retrieves the currently logged-in member.
   *
   * <!--ONLY:VELO
   * This function returns a Promise that resolves to a member object.
   *
   * > **Note:**
   * > This function replaces the deprecated
   * > `wixUsersBackend.currentUser`.
   * > The deprecated object will continue to work, but it will not receive updates.
   * > To keep any existing code compatible with future changes, see the
   * > [migration instructions](.wix-users-backend/currentuser#wix-users-backend_currentuser_migration-instructions).
   * <!--END:ONLY:VELO-->
   */
  membersMembersV1GetMyMember?: Maybe<MembersGetMyMemberResponse>;
  /**
   * Joins the currently logged-in member to the site community and sets their profile to public.
   *
   * When a member's profile is public, they have access to the site's
   * [Members Area](https://support.wix.com/en/article/about-members-area)
   * features — such as chat, forum, and followers —
   * and their profile is visible to other members and site visitors.
   */
  membersMembersV1JoinCommunity?: Maybe<MembersJoinCommunityResponse>;
  /**
   * Removes the currently logged-in member from the site community and sets their profile to private.
   *
   * When a member's profile is private,
   * they do not have access to the site's
   * [Members Area](https://support.wix.com/en/article/about-members-area)
   * features — such as chat, forum, and followers —
   * and their profile is hidden from other members and site visitors.
   *
   * > **Note:**
   * > If a member leaves the site's community, their content (such as forum posts and blog comments) remain publicly visible.
   */
  membersMembersV1LeaveCommunity?: Maybe<MembersLeaveCommunityResponse>;
  /**
   * Lists site members, given the provided paging and fieldsets.
   *
   * - `PUBLIC` fieldset returns `id` and `profile` object. `status`, `privacyStatus` and `activityStatus` are returned as `UNKNOWN`.
   * - `FULL` fieldset returns all fields.
   */
  membersMembersV1ListMembers?: Maybe<MembersListMembersResponse>;
  /**
   * Updates a member's properties.
   *
   * <!--ONLY:REST-->
   * To clear a field's value, set an empty value with an empty string `""`.
   *
   * To clear the member's addresses, emails, or phone numbers,
   * use these endpoints:
   *
   * - To clear `contact.addresses`, use [`Delete Member Addresses`](https://dev.wix.com/api/rest/members/members/delete-member-addresses).
   * - To clear `contact.emails`, use [`Delete Member Emails`](https://dev.wix.com/api/rest/members/members/delete-member-emails).
   * - To clear `contact.phones`, use [`Delete Member Phones`](https://dev.wix.com/api/rest/members/members/delete-member-phones).
   * <!--END:ONLY:REST-->
   */
  membersMembersV1UpdateMember?: Maybe<MembersUpdateMemberResponse>;
  /** Updates the currently logged in member's slug. */
  membersMembersV1UpdateMySlug?: Maybe<MembersUpdateMySlugResponse>;
  /**
   * Archives a single plan.
   * When a plan is archived, it is no longer visible as a public plan that can be chosen by site members or visitors. Archived plans cannot be purchased.
   * An archived plan cannot be made active again.
   * Plan archiving does not impact existing orders made for the plan. All orders for the plan are still active and keep their perks.
   * Site owners can see archived plans in the Dashboard under Pricing Plans -> Archived Plans.
   */
  pricingPlansPlansV2ArchivePlan?: Maybe<MembershipV2PlansArchivePlanResponse>;
  /**
   * Changes the display order of the plans on the site. To rearrange the order of the plans, provide a list of plan IDs in the desired order.
   * Include all public and hidden plans in the list you provide.
   * Make sure to provide all non-archived plan IDs to avoid unpredictable results
   */
  pricingPlansPlansV2ArrangePlans?: Maybe<Scalars['Void']['output']>;
  /** Sets all pricing plans as not primary. When viewing pricing plans on the site, no plan is highlighted with a customizable ribbon. */
  pricingPlansPlansV2ClearPrimary?: Maybe<Scalars['Void']['output']>;
  /** Creates a pricing plan. */
  pricingPlansPlansV2CreatePlan?: Maybe<MembershipV2PlansCreatePlanResponse>;
  /** Gets statistics about the pricing plans. Currently providing only the total number of pricing plans. */
  pricingPlansPlansV2GetPlanStats?: Maybe<MembershipV2PlansGetPlanStatsResponse>;
  /** Retrieves a list of up to 100 pricing plans (including public, hidden, and archived plans). */
  pricingPlansPlansV2ListPlans?: Maybe<MembershipV2PlansListPlansResponse>;
  /** Retrieves a list of up to 100 public pricing plans. */
  pricingPlansPlansV2ListPublicPlans?: Maybe<MembershipV2PlansListPublicPlansResponse>;
  /** Marks a pricing plan as the primary pricing plan. When viewing pricing plans on the site, the primary plan is highlighted with a customizable ribbon. */
  pricingPlansPlansV2MakePlanPrimary?: Maybe<MembershipV2PlansMakePlanPrimaryResponse>;
  /**
   * Sets visibility for pricing plans. Visible plans are considered public plans.
   * By default, pricing plans are public, meaning they are visible. Plans can be hidden so that site members and visitors cannot choose them.
   * As opposed to archiving, setting visibility can be reversed. This means that a public plan can be hidden, and a hidden plan can be made public (visible). (An archived plan always remains archived and cannot be made active again.)
   * Changing a plan’s visibility does not impact existing orders for the plan. All orders for hidden plans are still active and keep their perks.
   */
  pricingPlansPlansV2SetPlanVisibility?: Maybe<MembershipV2PlansSetPlanVisibilityResponse>;
  /**
   * Updates a pricing plan.
   * Updating a plan does not impact existing orders made for the plan. All orders keep the details of the original plan that was active at the time of purchase.
   */
  pricingPlansPlansV2UpdatePlan?: Maybe<MembershipV2PlansUpdatePlanResponse>;
  /**
   * Creates a URL for redirecting a visitor from an external client site to a Wix page for Wix-managed functionality.
   *
   *
   * The Create Redirect Session endpoint enables your external Wix Headless client site, built on any platform, to integrate Wix-managed frontend functionality for specific processes.
   * For example, your site can temporarily redirect a visitor to Wix for authentication, or for a checkout process for a bookings, eCommerce, events, or paid plans transaction.
   *
   * To initiate a redirect session:
   *
   * 1. Call Create Redirect Session with the details required for Wix to take care of one specific process (for example, authentication or a bookings checkout). Provide one or more callback URLs, so Wix can redirect the user back to your site as appropriate when the process is over.
   * 1. Redirect your visitor to the URL provided in the response. This URL includes query parameters informing Wix where to redirect the visitor back to on your external site.
   * 1. Make sure the pages at the callback URLs you provided take care of the next stages in your visitor flow.
   */
  redirectsRedirectsV1CreateRedirectSession?: Maybe<HeadlessV1CreateRedirectSessionResponse>;
  /** Bulk create new Items */
  restaurantsMenuItemsV1BulkCreateItems?: Maybe<RestaurantsMenusItemV1BulkCreateItemsResponse>;
  /** Bulk delete Items */
  restaurantsMenuItemsV1BulkDeleteItems?: Maybe<RestaurantsMenusItemV1BulkDeleteItemsResponse>;
  /** Bulk update an Item, supports partial update */
  restaurantsMenuItemsV1BulkUpdateItem?: Maybe<RestaurantsMenusItemV1BulkUpdateItemResponse>;
  restaurantsMenuItemsV1ConsumeItemDomainEvents?: Maybe<Scalars['Void']['output']>;
  restaurantsMenuItemsV1ConsumeItemLabelDomainEvents?: Maybe<Scalars['Void']['output']>;
  /** Creates a new Item */
  restaurantsMenuItemsV1CreateItem?: Maybe<RestaurantsMenusItemV1CreateItemResponse>;
  /** Delete an Item */
  restaurantsMenuItemsV1DeleteItem?: Maybe<Scalars['Void']['output']>;
  /** List Items */
  restaurantsMenuItemsV1ListItems?: Maybe<RestaurantsMenusItemV1ListItemsResponse>;
  /**
   * Update an Item, supports partial update
   * Pass the latest `revision` for a successful update
   */
  restaurantsMenuItemsV1UpdateItem?: Maybe<RestaurantsMenusItemV1UpdateItemResponse>;
  restaurantsMenusItemLabelsV1ConsumeLabelDomainEvents?: Maybe<Scalars['Void']['output']>;
  /** Creates a new Label */
  restaurantsMenusItemLabelsV1CreateLabel?: Maybe<RestaurantsMenusItemLabelsV1CreateLabelResponse>;
  /** Delete a Label */
  restaurantsMenusItemLabelsV1DeleteLabel?: Maybe<Scalars['Void']['output']>;
  /** List Labels */
  restaurantsMenusItemLabelsV1ListLabels?: Maybe<RestaurantsMenusItemLabelsV1ListLabelsResponse>;
  /**
   * Update a Label, supports partial update
   * Pass the latest `revision` for a successful update
   */
  restaurantsMenusItemLabelsV1UpdateLabel?: Maybe<RestaurantsMenusItemLabelsV1UpdateLabelResponse>;
  /** Bulk create new Modifiers */
  restaurantsMenusItemModifierV1BulkCreateModifiers?: Maybe<RestaurantsMenusItemModifierV1BulkCreateModifiersResponse>;
  /** Bulk update new Modifiers */
  restaurantsMenusItemModifierV1BulkUpdateModifiers?: Maybe<RestaurantsMenusItemModifierV1BulkUpdateModifiersResponse>;
  restaurantsMenusItemModifierV1ConsumeModifiersDomainEvents?: Maybe<Scalars['Void']['output']>;
  /** Creates a new Modifier */
  restaurantsMenusItemModifierV1CreateModifier?: Maybe<RestaurantsMenusItemModifierV1CreateModifierResponse>;
  /** Delete a Modifier */
  restaurantsMenusItemModifierV1DeleteModifier?: Maybe<Scalars['Void']['output']>;
  /** List Modifiers */
  restaurantsMenusItemModifierV1ListModifiers?: Maybe<RestaurantsMenusItemModifierV1ListModifiersResponse>;
  /**
   * Update a Modifier, supports partial update
   * Pass the latest `revision` for a successful update
   */
  restaurantsMenusItemModifierV1UpdateModifier?: Maybe<RestaurantsMenusItemModifierV1UpdateModifierResponse>;
  /** Bulk create new Menus */
  restaurantsMenusV1BulkCreateMenus?: Maybe<RestaurantsMenusMenuV1BulkCreateMenusResponse>;
  /** Bulk create new Modifier Groups */
  restaurantsMenusV1BulkCreateModifierGroups?: Maybe<RestaurantsMenusV1BulkCreateModifierGroupsResponse>;
  /** Bulk update a Menu, supports partial update */
  restaurantsMenusV1BulkUpdateMenu?: Maybe<RestaurantsMenusMenuV1BulkUpdateMenuResponse>;
  /** Bulk update Modifier Groups */
  restaurantsMenusV1BulkUpdateModifierGroups?: Maybe<RestaurantsMenusV1BulkUpdateModifierGroupsResponse>;
  restaurantsMenusV1ConsumeDeleteOrphanSections?: Maybe<Scalars['Void']['output']>;
  restaurantsMenusV1ConsumeMenuDomainEvents?: Maybe<Scalars['Void']['output']>;
  restaurantsMenusV1ConsumeModifierGroupsDomainEvents?: Maybe<Scalars['Void']['output']>;
  restaurantsMenusV1ConsumeSectionDomainEvents?: Maybe<Scalars['Void']['output']>;
  /** Creates a new Menu */
  restaurantsMenusV1CreateMenu?: Maybe<RestaurantsMenusMenuV1CreateMenuResponse>;
  /** Creates a new ModifierGroup */
  restaurantsMenusV1CreateModifierGroup?: Maybe<RestaurantsMenusV1CreateModifierGroupResponse>;
  /** Delete a Menu */
  restaurantsMenusV1DeleteMenu?: Maybe<Scalars['Void']['output']>;
  /** Delete a ModifierGroup */
  restaurantsMenusV1DeleteModifierGroup?: Maybe<Scalars['Void']['output']>;
  /** List Menus */
  restaurantsMenusV1ListMenus?: Maybe<RestaurantsMenusMenuV1ListMenusResponse>;
  /** List Modifier Group */
  restaurantsMenusV1ListModifierGroups?: Maybe<RestaurantsMenusV1ListModifierGroupResponse>;
  /** Update Extended Fields of the Menu */
  restaurantsMenusV1UpdateExtendedFields?: Maybe<RestaurantsMenusMenuV1UpdateExtendedFieldsResponse>;
  /**
   * Update a Menu, supports partial update
   * Pass the latest `revision` for a successful update
   */
  restaurantsMenusV1UpdateMenu?: Maybe<RestaurantsMenusMenuV1UpdateMenuResponse>;
  /**
   * Update a ModifierGroup, supports partial update
   * Pass the latest `revision` for a successful update
   */
  restaurantsMenusV1UpdateModifierGroup?: Maybe<RestaurantsMenusV1UpdateModifierGroupResponse>;
  /** Bulk create new Sections */
  restaurantsSectionsV1BulkCreateSections?: Maybe<RestaurantsMenusSectionV1BulkCreateSectionsResponse>;
  /** Bulk delete Sections */
  restaurantsSectionsV1BulkDeleteSections?: Maybe<RestaurantsMenusSectionV1BulkDeleteSectionsResponse>;
  /** Bulk update a Section, supports partial update */
  restaurantsSectionsV1BulkUpdateSection?: Maybe<RestaurantsMenusSectionV1BulkUpdateSectionResponse>;
  restaurantsSectionsV1ConsumeDeleteOrphanItems?: Maybe<Scalars['Void']['output']>;
  restaurantsSectionsV1ConsumeItemDomainEvents?: Maybe<Scalars['Void']['output']>;
  restaurantsSectionsV1ConsumeSectionDomainEvents?: Maybe<Scalars['Void']['output']>;
  /** Creates a new Section */
  restaurantsSectionsV1CreateSection?: Maybe<RestaurantsMenusSectionV1CreateSectionResponse>;
  /** Delete a Section */
  restaurantsSectionsV1DeleteSection?: Maybe<Scalars['Void']['output']>;
  /** List Sections */
  restaurantsSectionsV1ListSections?: Maybe<RestaurantsMenusSectionV1ListSectionsResponse>;
  /**
   * Update a Section, supports partial update
   * Pass the latest `revision` for a successful update
   */
  restaurantsSectionsV1UpdateSection?: Maybe<RestaurantsMenusSectionV1UpdateSectionResponse>;
  /** Retrieves a collection with the provided slug. */
  storesCollectionsV1GetCollectionBySlug?: Maybe<CatalogV2GetCollectionBySlugResponse>;
  /** Adds media items to a specified product, either via URL or existing media ID. */
  storesProductsV1AddProductMedia?: Maybe<Scalars['Void']['output']>;
  /**
   * Links media items that are already associated with a specific product to a choice within the same product.
   *
   * Media items can only be set for choices within one option at a time - e.g., if you set media items for some or all of the choices within the Colors option (blue, green, and red), you won't be able to also assign media items to choices within the Size option (S, M, and L).
   *
   * To remove all existing media items, call the [Remove Product Media From Choices](https://dev.wix.com/api/rest/wix-stores/catalog/products/remove-product-media-from-choices) endpoint.
   */
  storesProductsV1AddProductMediaToChoices?: Maybe<Scalars['Void']['output']>;
  /** Adds products to a specified collection. */
  storesProductsV1AddProductsToCollection?: Maybe<Scalars['Void']['output']>;
  /**
   * Adjusts a specified numerical property for up to 100 products at a time.
   * The property can be increased or decreased either by percentage or amount.
   */
  storesProductsV1BulkAdjustProductProperties?: Maybe<CatalogV1BulkAdjustProductPropertiesResponse>;
  /** Updates a specified property for up to 100 products at a time. */
  storesProductsV1BulkUpdateProducts?: Maybe<CatalogV1BulkUpdateProductsResponse>;
  /** Creates a new collection. */
  storesProductsV1CreateCollection?: Maybe<CatalogV1CreateCollectionResponse>;
  /** Creates a new product. */
  storesProductsV1CreateProduct?: Maybe<CatalogV1CreateProductResponse>;
  /** Creates a new product. */
  storesProductsV1CreateProductPlatformized?: Maybe<CatalogV1CreateProductPlatformizedResponse>;
  /** Deletes a collection. */
  storesProductsV1DeleteCollection?: Maybe<Scalars['Void']['output']>;
  /** Deletes a product. */
  storesProductsV1DeleteProduct?: Maybe<Scalars['Void']['output']>;
  /** Delete all options from a specific product. Only available when [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is disabled. */
  storesProductsV1DeleteProductOptions?: Maybe<Scalars['Void']['output']>;
  /** Deletes a product. */
  storesProductsV1DeleteProductPlatformized?: Maybe<Scalars['Void']['output']>;
  /** Retrieves a collection with the provided slug. */
  storesProductsV1GetCollectionBySlug?: Maybe<CatalogV1GetCollectionBySlugResponse>;
  /** Retrieves a product with the provided ID. */
  storesProductsV1GetProduct?: Maybe<CatalogV1GetProductResponse>;
  /** Retrieves a store variant with the provided ID. */
  storesProductsV1GetStoreVariant?: Maybe<CatalogV1GetStoreVariantResponse>;
  /** Gets the availability of relevant product variants based on the product ID and selections provided. See [Use Cases](https://dev.wix.com/api/rest/wix-stores/catalog/use-cases) for an example. */
  storesProductsV1ProductOptionsAvailability?: Maybe<CatalogV1ProductOptionsAvailabilityResponse>;
  /**
   * Retrieves product variants, based on either choices (option-choice key-value pairs) or variant IDs.
   * See [Stores Pagination](https://dev.wix.com/api/rest/wix-stores/pagination) for more information.
   */
  storesProductsV1QueryProductVariants?: Maybe<CatalogV1QueryProductVariantsResponse>;
  /** Retrieves up to 100 store variants, given the provided paging, filtering, and sorting. */
  storesProductsV1QueryStoreVariants?: Maybe<CatalogV1QueryStoreVariantsResponse>;
  /** Deletes a product's brand. */
  storesProductsV1RemoveBrand?: Maybe<Scalars['Void']['output']>;
  /**
   * Removes specified media items from a product.
   * Pass an empty array to remove all media items.
   */
  storesProductsV1RemoveProductMedia?: Maybe<Scalars['Void']['output']>;
  /**
   * Removes media items from all or some of a product's choices.
   * (Media items can only be set for choices within one option at a time - e.g., if you set media items for some or all of the choices within the Colors option (blue, green, and red), you won't be able to also assign media items to choices within the Size option (S, M, and L).)
   */
  storesProductsV1RemoveProductMediaFromChoices?: Maybe<Scalars['Void']['output']>;
  /** Deletes products from a specified collection. */
  storesProductsV1RemoveProductsFromCollection?: Maybe<Scalars['Void']['output']>;
  /** Deletes a product's ribbon. */
  storesProductsV1RemoveRibbon?: Maybe<Scalars['Void']['output']>;
  /** Resets the data (such as the price and the weight) of all variants for a given product to their default values. */
  storesProductsV1ResetAllVariantData?: Maybe<Scalars['Void']['output']>;
  /**
   * Updates specified properties of a collection.
   * To add products to a collection, call the [Add Products to Collection](https://dev.wix.com/api/rest/wix-stores/catalog/collections/add-products-to-collection) endpoint.
   */
  storesProductsV1UpdateCollection?: Maybe<CatalogV1UpdateCollectionResponse>;
  /** Updates specified fields in a product. */
  storesProductsV1UpdateProduct?: Maybe<CatalogV1UpdateProductResponse>;
  /** Updates specified fields in a product. */
  storesProductsV1UpdateProductPlatformized?: Maybe<CatalogV1UpdateProductPlatformizedResponse>;
  /** Updates variants of a specified product. */
  storesProductsV1UpdateVariants?: Maybe<CatalogV1UpdateVariantsResponse>;
  /** Creates a new product. */
  storesProductsV1WriteProxyCreateProductPlatformized?: Maybe<CatalogWriteProxyV1CreateProductPlatformizedResponse>;
  /** Deletes a product. */
  storesProductsV1WriteProxyDeleteProductPlatformized?: Maybe<Scalars['Void']['output']>;
  /** Updates specified fields in a product. */
  storesProductsV1WriteProxyUpdateProductPlatformized?: Maybe<CatalogWriteProxyV1UpdateProductPlatformizedResponse>;
};


export type MutationAuthManagementOAuthAppsV1CreateOAuthAppArgs = {
  input?: InputMaybe<HeadlessV1CreateOAuthAppRequestInput>;
};


export type MutationAuthManagementOAuthAppsV1DeleteOAuthAppArgs = {
  input?: InputMaybe<HeadlessV1DeleteOAuthAppRequestInput>;
};


export type MutationAuthManagementOAuthAppsV1GenerateOAuthAppSecretArgs = {
  input?: InputMaybe<HeadlessV1GenerateOAuthAppSecretRequestInput>;
};


export type MutationAuthManagementOAuthAppsV1UpdateOAuthAppArgs = {
  input?: InputMaybe<HeadlessV1UpdateOAuthAppRequestInput>;
};


export type MutationBlogCategoriesV3CreateCategoryArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogV3CreateCategoryRequestInput>;
};


export type MutationBlogCategoriesV3DeleteCategoryArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogV3DeleteCategoryRequestInput>;
};


export type MutationBlogCategoriesV3GetCategoryBySlugArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogV3GetCategoryBySlugRequestInput>;
};


export type MutationBlogCategoriesV3ListCategoriesArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogV3ListCategoriesRequestInput>;
};


export type MutationBlogCategoriesV3UpdateCategoryArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogV3UpdateCategoryRequestInput>;
};


export type MutationBlogPostsV3GetPostBySlugArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogV3GetPostBySlugRequestInput>;
};


export type MutationBlogPostsV3GetPostMetricsArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogV3GetPostMetricsRequestInput>;
};


export type MutationBlogPostsV3GetTotalPostsArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogGetTotalPostsRequestInput>;
};


export type MutationBlogPostsV3ListPostsArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogV3ListPostsRequestInput>;
};


export type MutationBlogPostsV3QueryPostCountStatsArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogQueryPostCountStatsRequestInput>;
};


export type MutationBlogTagsV3CreateTagArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogCreateTagRequestInput>;
};


export type MutationBlogTagsV3DeleteTagArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogDeleteTagRequestInput>;
};


export type MutationBlogTagsV3GetTagByLabelArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogGetTagByLabelRequestInput>;
};


export type MutationBlogTagsV3GetTagBySlugArgs = {
  input?: InputMaybe<NpmCommunitiesPlatformizedBlogGetTagBySlugRequestInput>;
};


export type MutationBookingsAttendanceV2SetAttendanceArgs = {
  input?: InputMaybe<BookingsAttendanceV2SetAttendanceRequestInput>;
};


export type MutationBookingsServiceOptionsAndVariantsV1CloneServiceOptionsAndVariantsArgs = {
  input?: InputMaybe<BookingsCatalogV1CloneServiceOptionsAndVariantsRequestInput>;
};


export type MutationBookingsServiceOptionsAndVariantsV1CreateServiceOptionsAndVariantsArgs = {
  input?: InputMaybe<BookingsCatalogV1CreateServiceOptionsAndVariantsRequestInput>;
};


export type MutationBookingsServiceOptionsAndVariantsV1DeleteServiceOptionsAndVariantsArgs = {
  input?: InputMaybe<BookingsCatalogV1DeleteServiceOptionsAndVariantsRequestInput>;
};


export type MutationBookingsServiceOptionsAndVariantsV1GetServiceOptionsAndVariantsByServiceIdArgs = {
  input?: InputMaybe<BookingsCatalogV1GetServiceOptionsAndVariantsByServiceIdRequestInput>;
};


export type MutationBookingsServiceOptionsAndVariantsV1UpdateServiceOptionsAndVariantsArgs = {
  input?: InputMaybe<BookingsCatalogV1UpdateServiceOptionsAndVariantsRequestInput>;
};


export type MutationBookingsServicesV2CreateServiceArgs = {
  input?: InputMaybe<BookingsServicesV2CreateServiceRequestInput>;
};


export type MutationBookingsServicesV2DeleteServiceArgs = {
  input?: InputMaybe<BookingsServicesV2DeleteServiceRequestInput>;
};


export type MutationBookingsServicesV2DisablePricingPlansForServiceArgs = {
  input?: InputMaybe<BookingsServicesV2DisablePricingPlansForServiceRequestInput>;
};


export type MutationBookingsServicesV2EnablePricingPlansForServiceArgs = {
  input?: InputMaybe<BookingsServicesV2EnablePricingPlansForServiceRequestInput>;
};


export type MutationBookingsServicesV2UpdateServiceArgs = {
  input?: InputMaybe<BookingsServicesV2UpdateServiceRequestInput>;
};


export type MutationBookingsSessionsV1CreateSessionArgs = {
  input?: InputMaybe<BookingsSchedulesVeloV2CreateSessionRequestInput>;
};


export type MutationBookingsSessionsV1DeleteSessionArgs = {
  input?: InputMaybe<BookingsSchedulesVeloV2DeleteSessionRequestInput>;
};


export type MutationBookingsSessionsV1ListSessionsArgs = {
  input?: InputMaybe<BookingsCalendarV2ListSessionsRequestInput>;
};


export type MutationBookingsSessionsV1UpdateSessionArgs = {
  input?: InputMaybe<BookingsSchedulesVeloV2UpdateSessionRequestInput>;
};


export type MutationBusinessToolsLocationsV1ArchiveLocationArgs = {
  input?: InputMaybe<LocationsArchiveLocationRequestInput>;
};


export type MutationBusinessToolsLocationsV1CreateLocationArgs = {
  input?: InputMaybe<LocationsCreateLocationRequestInput>;
};


export type MutationBusinessToolsLocationsV1ListLocationsArgs = {
  input?: InputMaybe<LocationsListLocationsRequestInput>;
};


export type MutationBusinessToolsLocationsV1SetDefaultLocationArgs = {
  input?: InputMaybe<LocationsSetDefaultLocationRequestInput>;
};


export type MutationBusinessToolsLocationsV1UpdateLocationArgs = {
  input?: InputMaybe<LocationsUpdateLocationRequestInput>;
};


export type MutationCrmExtendedFieldsV4DeleteExtendedFieldArgs = {
  input?: InputMaybe<ContactsFieldsV4DeleteExtendedFieldRequestInput>;
};


export type MutationCrmExtendedFieldsV4FindOrCreateExtendedFieldArgs = {
  input?: InputMaybe<ContactsFieldsV4FindOrCreateExtendedFieldRequestInput>;
};


export type MutationCrmExtendedFieldsV4ListExtendedFieldsArgs = {
  input?: InputMaybe<ContactsFieldsV4ListExtendedFieldsRequestInput>;
};


export type MutationCrmExtendedFieldsV4UpdateExtendedFieldArgs = {
  input?: InputMaybe<ContactsFieldsV4UpdateExtendedFieldRequestInput>;
};


export type MutationCrmLabelsV4DeleteLabelArgs = {
  input?: InputMaybe<ContactsLabelsV4DeleteLabelRequestInput>;
};


export type MutationCrmLabelsV4FindOrCreateLabelArgs = {
  input?: InputMaybe<ContactsLabelsV4FindOrCreateLabelRequestInput>;
};


export type MutationCrmLabelsV4ListLabelsArgs = {
  input?: InputMaybe<ContactsLabelsV4ListLabelsRequestInput>;
};


export type MutationCrmLabelsV4UpdateLabelArgs = {
  input?: InputMaybe<ContactsLabelsV4UpdateLabelRequestInput>;
};


export type MutationDataItemsV2AggregateDataItemsArgs = {
  input?: InputMaybe<CloudDataDataAggregateDataItemsRequestInput>;
};


export type MutationDataItemsV2BulkInsertDataItemReferencesArgs = {
  input?: InputMaybe<CloudDataDataBulkInsertDataItemReferencesRequestInput>;
};


export type MutationDataItemsV2BulkInsertDataItemsArgs = {
  input?: InputMaybe<CloudDataDataBulkInsertDataItemsRequestInput>;
};


export type MutationDataItemsV2BulkRemoveDataItemReferencesArgs = {
  input?: InputMaybe<CloudDataDataBulkRemoveDataItemReferencesRequestInput>;
};


export type MutationDataItemsV2BulkRemoveDataItemsArgs = {
  input?: InputMaybe<CloudDataDataBulkRemoveDataItemsRequestInput>;
};


export type MutationDataItemsV2BulkSaveDataItemsArgs = {
  input?: InputMaybe<CloudDataDataBulkSaveDataItemsRequestInput>;
};


export type MutationDataItemsV2BulkUpdateDataItemsArgs = {
  input?: InputMaybe<CloudDataDataBulkUpdateDataItemsRequestInput>;
};


export type MutationDataItemsV2CountDataItemsArgs = {
  input?: InputMaybe<CloudDataDataCountDataItemsRequestInput>;
};


export type MutationDataItemsV2InsertDataItemArgs = {
  input?: InputMaybe<CloudDataDataInsertDataItemRequestInput>;
};


export type MutationDataItemsV2InsertDataItemReferenceArgs = {
  input?: InputMaybe<CloudDataDataInsertDataItemReferenceRequestInput>;
};


export type MutationDataItemsV2IsReferencedDataItemArgs = {
  input?: InputMaybe<CloudDataDataIsReferencedDataItemRequestInput>;
};


export type MutationDataItemsV2QueryDistinctValuesArgs = {
  input?: InputMaybe<CloudDataDataQueryDistinctValuesRequestInput>;
};


export type MutationDataItemsV2QueryReferencedDataItemsArgs = {
  input?: InputMaybe<CloudDataDataQueryReferencedDataItemsRequestInput>;
};


export type MutationDataItemsV2RemoveDataItemArgs = {
  input?: InputMaybe<CloudDataDataRemoveDataItemRequestInput>;
};


export type MutationDataItemsV2RemoveDataItemReferenceArgs = {
  input?: InputMaybe<CloudDataDataRemoveDataItemReferenceRequestInput>;
};


export type MutationDataItemsV2ReplaceDataItemReferencesArgs = {
  input?: InputMaybe<CloudDataDataReplaceDataItemReferencesRequestInput>;
};


export type MutationDataItemsV2SaveDataItemArgs = {
  input?: InputMaybe<CloudDataDataSaveDataItemRequestInput>;
};


export type MutationDataItemsV2TruncateDataItemsArgs = {
  input?: InputMaybe<CloudDataDataTruncateDataItemsRequestInput>;
};


export type MutationDataItemsV2UpdateDataItemArgs = {
  input?: InputMaybe<CloudDataDataUpdateDataItemRequestInput>;
};


export type MutationEcomCartV1AddToCartArgs = {
  input?: InputMaybe<EcomCartV1AddToCartRequestInput>;
};


export type MutationEcomCartV1AddToCurrentCartArgs = {
  input?: InputMaybe<EcomCartV1AddToCurrentCartRequestInput>;
};


export type MutationEcomCartV1CreateCartArgs = {
  input?: InputMaybe<EcomCartV1CreateCartRequestInput>;
};


export type MutationEcomCartV1CreateCheckoutArgs = {
  input?: InputMaybe<EcomCartV1CreateCheckoutRequestInput>;
};


export type MutationEcomCartV1CreateCheckoutFromCurrentCartArgs = {
  input?: InputMaybe<EcomCartV1CreateCheckoutFromCurrentCartRequestInput>;
};


export type MutationEcomCartV1CurrentCartGetCurrentCartArgs = {
  input?: InputMaybe<Scalars['Void']['input']>;
};


export type MutationEcomCartV1DeleteCartArgs = {
  input?: InputMaybe<EcomCartV1DeleteCartRequestInput>;
};


export type MutationEcomCartV1DeleteCurrentCartArgs = {
  input?: InputMaybe<Scalars['Void']['input']>;
};


export type MutationEcomCartV1EstimateCurrentCartTotalsArgs = {
  input?: InputMaybe<EcomCartV1EstimateCurrentCartTotalsRequestInput>;
};


export type MutationEcomCartV1EstimateTotalsArgs = {
  input?: InputMaybe<EcomCartV1EstimateTotalsRequestInput>;
};


export type MutationEcomCartV1RemoveCouponArgs = {
  input?: InputMaybe<EcomCartV1RemoveCouponRequestInput>;
};


export type MutationEcomCartV1RemoveCouponFromCurrentCartArgs = {
  input?: InputMaybe<Scalars['Void']['input']>;
};


export type MutationEcomCartV1RemoveLineItemsArgs = {
  input?: InputMaybe<EcomCartV1RemoveLineItemsRequestInput>;
};


export type MutationEcomCartV1RemoveLineItemsFromCurrentCartArgs = {
  input?: InputMaybe<EcomCartV1RemoveLineItemsFromCurrentCartRequestInput>;
};


export type MutationEcomCartV1UpdateCartArgs = {
  input?: InputMaybe<EcomCartV1UpdateCartRequestInput>;
};


export type MutationEcomCartV1UpdateCurrentCartArgs = {
  input?: InputMaybe<EcomCartV1UpdateCartRequestInput>;
};


export type MutationEcomCartV1UpdateCurrentCartLineItemQuantityArgs = {
  input?: InputMaybe<EcomCartV1UpdateCurrentCartLineItemQuantityRequestInput>;
};


export type MutationEcomCartV1UpdateLineItemsQuantityArgs = {
  input?: InputMaybe<EcomCartV1UpdateLineItemsQuantityRequestInput>;
};


export type MutationEcomCheckoutV1AddToCheckoutArgs = {
  input?: InputMaybe<EcomCheckoutV1AddToCheckoutRequestInput>;
};


export type MutationEcomCheckoutV1CreateCheckoutArgs = {
  input?: InputMaybe<EcomCheckoutV1CreateCheckoutRequestInput>;
};


export type MutationEcomCheckoutV1GetCheckoutUrlArgs = {
  input?: InputMaybe<EcomCheckoutV1GetCheckoutUrlRequestInput>;
};


export type MutationEcomCheckoutV1MarkCheckoutAsCompletedArgs = {
  input?: InputMaybe<EcomCheckoutV1MarkCheckoutAsCompletedRequestInput>;
};


export type MutationEcomCheckoutV1RemoveCouponArgs = {
  input?: InputMaybe<EcomCheckoutV1RemoveCouponRequestInput>;
};


export type MutationEcomCheckoutV1RemoveGiftCardArgs = {
  input?: InputMaybe<EcomCheckoutV1RemoveGiftCardRequestInput>;
};


export type MutationEcomCheckoutV1RemoveLineItemsArgs = {
  input?: InputMaybe<EcomCheckoutV1RemoveLineItemsRequestInput>;
};


export type MutationEcomCheckoutV1RemoveOverrideCheckoutUrlArgs = {
  input?: InputMaybe<EcomCheckoutV1RemoveOverrideCheckoutUrlRequestInput>;
};


export type MutationEcomCheckoutV1UpdateCheckoutArgs = {
  input?: InputMaybe<EcomCheckoutV1UpdateCheckoutRequestInput>;
};


export type MutationEcomCheckoutV1UpdateLineItemsQuantityArgs = {
  input?: InputMaybe<EcomCheckoutV1UpdateLineItemsQuantityRequestInput>;
};


export type MutationEcomCurrentCartV1AddToCartArgs = {
  input?: InputMaybe<EcomCartV1AddToCartRequestInput>;
};


export type MutationEcomCurrentCartV1AddToCurrentCartArgs = {
  input?: InputMaybe<EcomCartV1AddToCurrentCartRequestInput>;
};


export type MutationEcomCurrentCartV1CreateCartArgs = {
  input?: InputMaybe<EcomCartV1CreateCartRequestInput>;
};


export type MutationEcomCurrentCartV1CreateCheckoutArgs = {
  input?: InputMaybe<EcomCartV1CreateCheckoutRequestInput>;
};


export type MutationEcomCurrentCartV1CreateCheckoutFromCurrentCartArgs = {
  input?: InputMaybe<EcomCartV1CreateCheckoutFromCurrentCartRequestInput>;
};


export type MutationEcomCurrentCartV1CurrentCartGetCurrentCartArgs = {
  input?: InputMaybe<Scalars['Void']['input']>;
};


export type MutationEcomCurrentCartV1DeleteCartArgs = {
  input?: InputMaybe<EcomCartV1DeleteCartRequestInput>;
};


export type MutationEcomCurrentCartV1DeleteCurrentCartArgs = {
  input?: InputMaybe<Scalars['Void']['input']>;
};


export type MutationEcomCurrentCartV1EstimateCurrentCartTotalsArgs = {
  input?: InputMaybe<EcomCartV1EstimateCurrentCartTotalsRequestInput>;
};


export type MutationEcomCurrentCartV1EstimateTotalsArgs = {
  input?: InputMaybe<EcomCartV1EstimateTotalsRequestInput>;
};


export type MutationEcomCurrentCartV1RemoveCouponArgs = {
  input?: InputMaybe<EcomCartV1RemoveCouponRequestInput>;
};


export type MutationEcomCurrentCartV1RemoveCouponFromCurrentCartArgs = {
  input?: InputMaybe<Scalars['Void']['input']>;
};


export type MutationEcomCurrentCartV1RemoveLineItemsArgs = {
  input?: InputMaybe<EcomCartV1RemoveLineItemsRequestInput>;
};


export type MutationEcomCurrentCartV1RemoveLineItemsFromCurrentCartArgs = {
  input?: InputMaybe<EcomCartV1RemoveLineItemsFromCurrentCartRequestInput>;
};


export type MutationEcomCurrentCartV1UpdateCartArgs = {
  input?: InputMaybe<EcomCartV1UpdateCartRequestInput>;
};


export type MutationEcomCurrentCartV1UpdateCurrentCartArgs = {
  input?: InputMaybe<EcomCartV1UpdateCartRequestInput>;
};


export type MutationEcomCurrentCartV1UpdateCurrentCartLineItemQuantityArgs = {
  input?: InputMaybe<EcomCartV1UpdateCurrentCartLineItemQuantityRequestInput>;
};


export type MutationEcomCurrentCartV1UpdateLineItemsQuantityArgs = {
  input?: InputMaybe<EcomCartV1UpdateLineItemsQuantityRequestInput>;
};


export type MutationEcomDiscountRulesV1CreateDiscountRuleArgs = {
  input?: InputMaybe<EcomDiscountsCreateDiscountRuleRequestInput>;
};


export type MutationEcomDiscountRulesV1DeleteDiscountRuleArgs = {
  input?: InputMaybe<EcomDiscountsDeleteDiscountRuleRequestInput>;
};


export type MutationEcomDiscountRulesV1UpdateDiscountRuleArgs = {
  input?: InputMaybe<EcomDiscountsUpdateDiscountRuleRequestInput>;
};


export type MutationEcomOrdersV1AddActivityArgs = {
  input?: InputMaybe<EcomOrdersV1AddActivityRequestInput>;
};


export type MutationEcomOrdersV1AggregateOrdersArgs = {
  input?: InputMaybe<EcomOrdersV1AggregateOrdersRequestInput>;
};


export type MutationEcomOrdersV1CancelOrderArgs = {
  input?: InputMaybe<EcomOrdersV1CancelOrderRequestInput>;
};


export type MutationEcomOrdersV1ChargeMembershipsArgs = {
  input?: InputMaybe<EcomOrdersPaymentsCollectorV1ChargeMembershipsRequestInput>;
};


export type MutationEcomOrdersV1CommitDeltasArgs = {
  input?: InputMaybe<EcomOrdersV1CommitDeltasRequestInput>;
};


export type MutationEcomOrdersV1CreateOrderArgs = {
  input?: InputMaybe<EcomOrdersV1CreateOrderRequestInput>;
};


export type MutationEcomOrdersV1DeleteActivityArgs = {
  input?: InputMaybe<EcomOrdersV1DeleteActivityRequestInput>;
};


export type MutationEcomOrdersV1GetPaymentCollectabilityStatusArgs = {
  input?: InputMaybe<EcomOrdersPaymentsCollectorV1GetPaymentCollectabilityStatusRequestInput>;
};


export type MutationEcomOrdersV1GetRefundabilityStatusArgs = {
  input?: InputMaybe<EcomOrdersPaymentsCollectorV1GetRefundabilityStatusRequestInput>;
};


export type MutationEcomOrdersV1InternalQueryOrdersArgs = {
  input?: InputMaybe<EcomOrdersV1InternalQueryOrdersRequestInput>;
};


export type MutationEcomOrdersV1PaymentCollectionBulkMarkOrdersAsPaidArgs = {
  input?: InputMaybe<EcomOrdersPaymentsCollectorV1BulkMarkOrdersAsPaidRequestInput>;
};


export type MutationEcomOrdersV1PaymentCollectionCreatePaymentGatewayOrderArgs = {
  input?: InputMaybe<EcomOrdersPaymentsCollectorV1CreatePaymentGatewayOrderRequestInput>;
};


export type MutationEcomOrdersV1PaymentCollectionMarkOrderAsPaidArgs = {
  input?: InputMaybe<EcomOrdersPaymentsCollectorV1MarkOrderAsPaidRequestInput>;
};


export type MutationEcomOrdersV1PreparePaymentCollectionArgs = {
  input?: InputMaybe<EcomOrdersPaymentsCollectorV1PreparePaymentCollectionRequestInput>;
};


export type MutationEcomOrdersV1RecordManuallyCollectedPaymentArgs = {
  input?: InputMaybe<EcomOrdersPaymentsCollectorV1RecordManuallyCollectedPaymentRequestInput>;
};


export type MutationEcomOrdersV1TriggerRefundArgs = {
  input?: InputMaybe<EcomOrdersPaymentsCollectorV1TriggerRefundRequestInput>;
};


export type MutationEcomOrdersV1UpdateActivityArgs = {
  input?: InputMaybe<EcomOrdersV1UpdateActivityRequestInput>;
};


export type MutationEcomOrdersV1UpdateOrderArgs = {
  input?: InputMaybe<EcomOrdersV1UpdateOrderRequestInput>;
};


export type MutationEcomOrdersV1UpdateOrderLineItemArgs = {
  input?: InputMaybe<EcomOrdersV1UpdateOrderLineItemRequestInput>;
};


export type MutationEcomPaymentsV1AddPaymentsArgs = {
  input?: InputMaybe<EcomOrdersPaymentsV1AddPaymentsRequestInput>;
};


export type MutationEcomPaymentsV1AddRefundArgs = {
  input?: InputMaybe<EcomOrdersPaymentsV1AddRefundRequestInput>;
};


export type MutationEcomPaymentsV1BulkUpdatePaymentStatusesArgs = {
  input?: InputMaybe<EcomOrdersPaymentsV1BulkUpdatePaymentStatusesRequestInput>;
};


export type MutationEcomPaymentsV1ListTransactionsForMultipleOrdersArgs = {
  input?: InputMaybe<EcomOrdersPaymentsV1ListTransactionsForMultipleOrdersRequestInput>;
};


export type MutationEcomPaymentsV1ListTransactionsForSingleOrderArgs = {
  input?: InputMaybe<EcomOrdersPaymentsV1ListTransactionsForSingleOrderRequestInput>;
};


export type MutationEcomPaymentsV1UpdatePaymentStatusArgs = {
  input?: InputMaybe<EcomOrdersPaymentsV1UpdatePaymentStatusRequestInput>;
};


export type MutationEcomRecommendationsV1GetRecommendationArgs = {
  input?: InputMaybe<EcomRecommendationsV1GetRecommendationRequestInput>;
};


export type MutationEcomRecommendationsV1ListAvailableAlgorithmsArgs = {
  input?: InputMaybe<Scalars['Void']['input']>;
};


export type MutationEventsPoliciesV2CreatePolicyArgs = {
  input?: InputMaybe<EventsV2CreatePolicyRequestInput>;
};


export type MutationEventsPoliciesV2DeletePolicyArgs = {
  input?: InputMaybe<EventsV2DeletePolicyRequestInput>;
};


export type MutationEventsPoliciesV2ReorderEventPoliciesArgs = {
  input?: InputMaybe<EventsV2ReorderEventPoliciesRequestInput>;
};


export type MutationEventsPoliciesV2UpdatePolicyArgs = {
  input?: InputMaybe<EventsV2UpdatePolicyRequestInput>;
};


export type MutationEventsScheduleBookmarksV1AddScheduleItemArgs = {
  input?: InputMaybe<EventsScheduleAddScheduleItemRequestInput>;
};


export type MutationEventsScheduleBookmarksV1CreateBookmarkArgs = {
  input?: InputMaybe<EventsScheduleCreateBookmarkRequestInput>;
};


export type MutationEventsScheduleBookmarksV1DeleteBookmarkArgs = {
  input?: InputMaybe<EventsScheduleDeleteBookmarkRequestInput>;
};


export type MutationEventsScheduleBookmarksV1DeleteScheduleItemArgs = {
  input?: InputMaybe<EventsScheduleDeleteScheduleItemRequestInput>;
};


export type MutationEventsScheduleBookmarksV1DiscardDraftArgs = {
  input?: InputMaybe<EventsScheduleDiscardDraftRequestInput>;
};


export type MutationEventsScheduleBookmarksV1GetScheduleItemArgs = {
  input?: InputMaybe<EventsScheduleGetScheduleItemRequestInput>;
};


export type MutationEventsScheduleBookmarksV1ListBookmarksArgs = {
  input?: InputMaybe<EventsScheduleListBookmarksRequestInput>;
};


export type MutationEventsScheduleBookmarksV1ListScheduleItemsArgs = {
  input?: InputMaybe<EventsScheduleListScheduleItemsRequestInput>;
};


export type MutationEventsScheduleBookmarksV1PublishDraftArgs = {
  input?: InputMaybe<EventsSchedulePublishDraftRequestInput>;
};


export type MutationEventsScheduleBookmarksV1RescheduleDraftArgs = {
  input?: InputMaybe<EventsScheduleRescheduleDraftRequestInput>;
};


export type MutationEventsScheduleBookmarksV1UpdateScheduleItemArgs = {
  input?: InputMaybe<EventsScheduleUpdateScheduleItemRequestInput>;
};


export type MutationEventsScheduleV1AddScheduleItemArgs = {
  input?: InputMaybe<EventsScheduleAddScheduleItemRequestInput>;
};


export type MutationEventsScheduleV1CreateBookmarkArgs = {
  input?: InputMaybe<EventsScheduleCreateBookmarkRequestInput>;
};


export type MutationEventsScheduleV1DeleteBookmarkArgs = {
  input?: InputMaybe<EventsScheduleDeleteBookmarkRequestInput>;
};


export type MutationEventsScheduleV1DeleteScheduleItemArgs = {
  input?: InputMaybe<EventsScheduleDeleteScheduleItemRequestInput>;
};


export type MutationEventsScheduleV1DiscardDraftArgs = {
  input?: InputMaybe<EventsScheduleDiscardDraftRequestInput>;
};


export type MutationEventsScheduleV1GetScheduleItemArgs = {
  input?: InputMaybe<EventsScheduleGetScheduleItemRequestInput>;
};


export type MutationEventsScheduleV1ListBookmarksArgs = {
  input?: InputMaybe<EventsScheduleListBookmarksRequestInput>;
};


export type MutationEventsScheduleV1ListScheduleItemsArgs = {
  input?: InputMaybe<EventsScheduleListScheduleItemsRequestInput>;
};


export type MutationEventsScheduleV1PublishDraftArgs = {
  input?: InputMaybe<EventsSchedulePublishDraftRequestInput>;
};


export type MutationEventsScheduleV1RescheduleDraftArgs = {
  input?: InputMaybe<EventsScheduleRescheduleDraftRequestInput>;
};


export type MutationEventsScheduleV1UpdateScheduleItemArgs = {
  input?: InputMaybe<EventsScheduleUpdateScheduleItemRequestInput>;
};


export type MutationMembersMembersV1CreateMemberArgs = {
  input?: InputMaybe<MembersCreateMemberRequestInput>;
};


export type MutationMembersMembersV1DeleteMemberArgs = {
  input?: InputMaybe<MembersDeleteMemberRequestInput>;
};


export type MutationMembersMembersV1DeleteMemberAddressesArgs = {
  input?: InputMaybe<MembersDeleteMemberAddressesRequestInput>;
};


export type MutationMembersMembersV1DeleteMemberEmailsArgs = {
  input?: InputMaybe<MembersDeleteMemberEmailsRequestInput>;
};


export type MutationMembersMembersV1DeleteMemberPhonesArgs = {
  input?: InputMaybe<MembersDeleteMemberPhonesRequestInput>;
};


export type MutationMembersMembersV1GetMyMemberArgs = {
  input?: InputMaybe<MembersGetMyMemberRequestInput>;
};


export type MutationMembersMembersV1JoinCommunityArgs = {
  input?: InputMaybe<Scalars['Void']['input']>;
};


export type MutationMembersMembersV1LeaveCommunityArgs = {
  input?: InputMaybe<Scalars['Void']['input']>;
};


export type MutationMembersMembersV1ListMembersArgs = {
  input?: InputMaybe<MembersListMembersRequestInput>;
};


export type MutationMembersMembersV1UpdateMemberArgs = {
  input?: InputMaybe<MembersUpdateMemberRequestInput>;
};


export type MutationMembersMembersV1UpdateMySlugArgs = {
  input?: InputMaybe<MembersUpdateMySlugRequestInput>;
};


export type MutationPricingPlansPlansV2ArchivePlanArgs = {
  input?: InputMaybe<MembershipV2PlansArchivePlanRequestInput>;
};


export type MutationPricingPlansPlansV2ArrangePlansArgs = {
  input?: InputMaybe<MembershipV2PlansArrangePlansRequestInput>;
};


export type MutationPricingPlansPlansV2ClearPrimaryArgs = {
  input?: InputMaybe<Scalars['Void']['input']>;
};


export type MutationPricingPlansPlansV2CreatePlanArgs = {
  input?: InputMaybe<MembershipV2PlansCreatePlanRequestInput>;
};


export type MutationPricingPlansPlansV2GetPlanStatsArgs = {
  input?: InputMaybe<Scalars['Void']['input']>;
};


export type MutationPricingPlansPlansV2ListPlansArgs = {
  input?: InputMaybe<MembershipV2PlansListPlansRequestInput>;
};


export type MutationPricingPlansPlansV2ListPublicPlansArgs = {
  input?: InputMaybe<MembershipV2PlansListPublicPlansRequestInput>;
};


export type MutationPricingPlansPlansV2MakePlanPrimaryArgs = {
  input?: InputMaybe<MembershipV2PlansMakePlanPrimaryRequestInput>;
};


export type MutationPricingPlansPlansV2SetPlanVisibilityArgs = {
  input?: InputMaybe<MembershipV2PlansSetPlanVisibilityRequestInput>;
};


export type MutationPricingPlansPlansV2UpdatePlanArgs = {
  input?: InputMaybe<MembershipV2PlansUpdatePlanRequestInput>;
};


export type MutationRedirectsRedirectsV1CreateRedirectSessionArgs = {
  input?: InputMaybe<HeadlessV1CreateRedirectSessionRequestInput>;
};


export type MutationRestaurantsMenuItemsV1BulkCreateItemsArgs = {
  input?: InputMaybe<RestaurantsMenusItemV1BulkCreateItemsRequestInput>;
};


export type MutationRestaurantsMenuItemsV1BulkDeleteItemsArgs = {
  input?: InputMaybe<RestaurantsMenusItemV1BulkDeleteItemsRequestInput>;
};


export type MutationRestaurantsMenuItemsV1BulkUpdateItemArgs = {
  input?: InputMaybe<RestaurantsMenusItemV1BulkUpdateItemRequestInput>;
};


export type MutationRestaurantsMenuItemsV1ConsumeItemDomainEventsArgs = {
  input?: InputMaybe<CommonDomaineventsDomainEventInput>;
};


export type MutationRestaurantsMenuItemsV1ConsumeItemLabelDomainEventsArgs = {
  input?: InputMaybe<CommonDomaineventsDomainEventInput>;
};


export type MutationRestaurantsMenuItemsV1CreateItemArgs = {
  input?: InputMaybe<RestaurantsMenusItemV1CreateItemRequestInput>;
};


export type MutationRestaurantsMenuItemsV1DeleteItemArgs = {
  input?: InputMaybe<RestaurantsMenusItemV1DeleteItemRequestInput>;
};


export type MutationRestaurantsMenuItemsV1ListItemsArgs = {
  input?: InputMaybe<RestaurantsMenusItemV1ListItemsRequestInput>;
};


export type MutationRestaurantsMenuItemsV1UpdateItemArgs = {
  input?: InputMaybe<RestaurantsMenusItemV1UpdateItemRequestInput>;
};


export type MutationRestaurantsMenusItemLabelsV1ConsumeLabelDomainEventsArgs = {
  input?: InputMaybe<CommonDomaineventsDomainEventInput>;
};


export type MutationRestaurantsMenusItemLabelsV1CreateLabelArgs = {
  input?: InputMaybe<RestaurantsMenusItemLabelsV1CreateLabelRequestInput>;
};


export type MutationRestaurantsMenusItemLabelsV1DeleteLabelArgs = {
  input?: InputMaybe<RestaurantsMenusItemLabelsV1DeleteLabelRequestInput>;
};


export type MutationRestaurantsMenusItemLabelsV1ListLabelsArgs = {
  input?: InputMaybe<Scalars['Void']['input']>;
};


export type MutationRestaurantsMenusItemLabelsV1UpdateLabelArgs = {
  input?: InputMaybe<RestaurantsMenusItemLabelsV1UpdateLabelRequestInput>;
};


export type MutationRestaurantsMenusItemModifierV1BulkCreateModifiersArgs = {
  input?: InputMaybe<RestaurantsMenusItemModifierV1BulkCreateModifiersRequestInput>;
};


export type MutationRestaurantsMenusItemModifierV1BulkUpdateModifiersArgs = {
  input?: InputMaybe<RestaurantsMenusItemModifierV1BulkUpdateModifiersRequestInput>;
};


export type MutationRestaurantsMenusItemModifierV1ConsumeModifiersDomainEventsArgs = {
  input?: InputMaybe<CommonDomaineventsDomainEventInput>;
};


export type MutationRestaurantsMenusItemModifierV1CreateModifierArgs = {
  input?: InputMaybe<RestaurantsMenusItemModifierV1CreateModifierRequestInput>;
};


export type MutationRestaurantsMenusItemModifierV1DeleteModifierArgs = {
  input?: InputMaybe<RestaurantsMenusItemModifierV1DeleteModifierRequestInput>;
};


export type MutationRestaurantsMenusItemModifierV1ListModifiersArgs = {
  input?: InputMaybe<RestaurantsMenusItemModifierV1ListModifiersRequestInput>;
};


export type MutationRestaurantsMenusItemModifierV1UpdateModifierArgs = {
  input?: InputMaybe<RestaurantsMenusItemModifierV1UpdateModifierRequestInput>;
};


export type MutationRestaurantsMenusV1BulkCreateMenusArgs = {
  input?: InputMaybe<RestaurantsMenusMenuV1BulkCreateMenusRequestInput>;
};


export type MutationRestaurantsMenusV1BulkCreateModifierGroupsArgs = {
  input?: InputMaybe<RestaurantsMenusV1BulkCreateModifierGroupsRequestInput>;
};


export type MutationRestaurantsMenusV1BulkUpdateMenuArgs = {
  input?: InputMaybe<RestaurantsMenusMenuV1BulkUpdateMenuRequestInput>;
};


export type MutationRestaurantsMenusV1BulkUpdateModifierGroupsArgs = {
  input?: InputMaybe<RestaurantsMenusV1BulkUpdateModifierGroupsRequestInput>;
};


export type MutationRestaurantsMenusV1ConsumeDeleteOrphanSectionsArgs = {
  input?: InputMaybe<RestaurantsMenusMenuV1DeleteOrphanSectionsInput>;
};


export type MutationRestaurantsMenusV1ConsumeMenuDomainEventsArgs = {
  input?: InputMaybe<CommonDomaineventsDomainEventInput>;
};


export type MutationRestaurantsMenusV1ConsumeModifierGroupsDomainEventsArgs = {
  input?: InputMaybe<CommonDomaineventsDomainEventInput>;
};


export type MutationRestaurantsMenusV1ConsumeSectionDomainEventsArgs = {
  input?: InputMaybe<CommonDomaineventsDomainEventInput>;
};


export type MutationRestaurantsMenusV1CreateMenuArgs = {
  input?: InputMaybe<RestaurantsMenusMenuV1CreateMenuRequestInput>;
};


export type MutationRestaurantsMenusV1CreateModifierGroupArgs = {
  input?: InputMaybe<RestaurantsMenusV1CreateModifierGroupRequestInput>;
};


export type MutationRestaurantsMenusV1DeleteMenuArgs = {
  input?: InputMaybe<RestaurantsMenusMenuV1DeleteMenuRequestInput>;
};


export type MutationRestaurantsMenusV1DeleteModifierGroupArgs = {
  input?: InputMaybe<RestaurantsMenusV1DeleteModifierGroupRequestInput>;
};


export type MutationRestaurantsMenusV1ListMenusArgs = {
  input?: InputMaybe<RestaurantsMenusMenuV1ListMenusRequestInput>;
};


export type MutationRestaurantsMenusV1ListModifierGroupsArgs = {
  input?: InputMaybe<RestaurantsMenusV1ListModifierGroupRequestInput>;
};


export type MutationRestaurantsMenusV1UpdateExtendedFieldsArgs = {
  input?: InputMaybe<CommonDataDataextensionsUpdateExtendedFieldsRequestInput>;
};


export type MutationRestaurantsMenusV1UpdateMenuArgs = {
  input?: InputMaybe<RestaurantsMenusMenuV1UpdateMenuRequestInput>;
};


export type MutationRestaurantsMenusV1UpdateModifierGroupArgs = {
  input?: InputMaybe<RestaurantsMenusV1UpdateModifierGroupRequestInput>;
};


export type MutationRestaurantsSectionsV1BulkCreateSectionsArgs = {
  input?: InputMaybe<RestaurantsMenusSectionV1BulkCreateSectionsRequestInput>;
};


export type MutationRestaurantsSectionsV1BulkDeleteSectionsArgs = {
  input?: InputMaybe<RestaurantsMenusSectionV1BulkDeleteSectionsRequestInput>;
};


export type MutationRestaurantsSectionsV1BulkUpdateSectionArgs = {
  input?: InputMaybe<RestaurantsMenusSectionV1BulkUpdateSectionRequestInput>;
};


export type MutationRestaurantsSectionsV1ConsumeDeleteOrphanItemsArgs = {
  input?: InputMaybe<RestaurantsMenusSectionV1DeleteOrphanItemsInput>;
};


export type MutationRestaurantsSectionsV1ConsumeItemDomainEventsArgs = {
  input?: InputMaybe<CommonDomaineventsDomainEventInput>;
};


export type MutationRestaurantsSectionsV1ConsumeSectionDomainEventsArgs = {
  input?: InputMaybe<CommonDomaineventsDomainEventInput>;
};


export type MutationRestaurantsSectionsV1CreateSectionArgs = {
  input?: InputMaybe<RestaurantsMenusSectionV1CreateSectionRequestInput>;
};


export type MutationRestaurantsSectionsV1DeleteSectionArgs = {
  input?: InputMaybe<RestaurantsMenusSectionV1DeleteSectionRequestInput>;
};


export type MutationRestaurantsSectionsV1ListSectionsArgs = {
  input?: InputMaybe<RestaurantsMenusSectionV1ListSectionsRequestInput>;
};


export type MutationRestaurantsSectionsV1UpdateSectionArgs = {
  input?: InputMaybe<RestaurantsMenusSectionV1UpdateSectionRequestInput>;
};


export type MutationStoresCollectionsV1GetCollectionBySlugArgs = {
  input?: InputMaybe<CatalogV2GetCollectionBySlugRequestInput>;
};


export type MutationStoresProductsV1AddProductMediaArgs = {
  input?: InputMaybe<CatalogV1AddProductMediaRequestInput>;
};


export type MutationStoresProductsV1AddProductMediaToChoicesArgs = {
  input?: InputMaybe<CatalogV1AddProductMediaToChoicesRequestInput>;
};


export type MutationStoresProductsV1AddProductsToCollectionArgs = {
  input?: InputMaybe<CatalogV1AddProductsToCollectionRequestInput>;
};


export type MutationStoresProductsV1BulkAdjustProductPropertiesArgs = {
  input?: InputMaybe<CatalogV1BulkAdjustProductPropertiesRequestInput>;
};


export type MutationStoresProductsV1BulkUpdateProductsArgs = {
  input?: InputMaybe<CatalogV1BulkUpdateProductsRequestInput>;
};


export type MutationStoresProductsV1CreateCollectionArgs = {
  input?: InputMaybe<CatalogV1CreateCollectionRequestInput>;
};


export type MutationStoresProductsV1CreateProductArgs = {
  input?: InputMaybe<CatalogV1CreateProductRequestInput>;
};


export type MutationStoresProductsV1CreateProductPlatformizedArgs = {
  input?: InputMaybe<CatalogV1CreateProductPlatformizedRequestInput>;
};


export type MutationStoresProductsV1DeleteCollectionArgs = {
  input?: InputMaybe<CatalogV1DeleteCollectionRequestInput>;
};


export type MutationStoresProductsV1DeleteProductArgs = {
  input?: InputMaybe<CatalogV1DeleteProductRequestInput>;
};


export type MutationStoresProductsV1DeleteProductOptionsArgs = {
  input?: InputMaybe<CatalogV1DeleteProductOptionsRequestInput>;
};


export type MutationStoresProductsV1DeleteProductPlatformizedArgs = {
  input?: InputMaybe<CatalogV1DeleteProductPlatformizedRequestInput>;
};


export type MutationStoresProductsV1GetCollectionBySlugArgs = {
  input?: InputMaybe<CatalogV1GetCollectionBySlugRequestInput>;
};


export type MutationStoresProductsV1GetProductArgs = {
  input?: InputMaybe<CatalogV1GetProductRequestInput>;
};


export type MutationStoresProductsV1GetStoreVariantArgs = {
  input?: InputMaybe<CatalogV1GetStoreVariantRequestInput>;
};


export type MutationStoresProductsV1ProductOptionsAvailabilityArgs = {
  input?: InputMaybe<CatalogV1ProductOptionsAvailabilityRequestInput>;
};


export type MutationStoresProductsV1QueryProductVariantsArgs = {
  input?: InputMaybe<CatalogV1QueryProductVariantsRequestInput>;
};


export type MutationStoresProductsV1QueryStoreVariantsArgs = {
  input?: InputMaybe<CatalogV1QueryStoreVariantsRequestInput>;
};


export type MutationStoresProductsV1RemoveBrandArgs = {
  input?: InputMaybe<CatalogV1RemoveProductBrandRequestInput>;
};


export type MutationStoresProductsV1RemoveProductMediaArgs = {
  input?: InputMaybe<CatalogV1RemoveProductMediaRequestInput>;
};


export type MutationStoresProductsV1RemoveProductMediaFromChoicesArgs = {
  input?: InputMaybe<CatalogV1RemoveProductMediaFromChoicesRequestInput>;
};


export type MutationStoresProductsV1RemoveProductsFromCollectionArgs = {
  input?: InputMaybe<CatalogV1RemoveProductsFromCollectionRequestInput>;
};


export type MutationStoresProductsV1RemoveRibbonArgs = {
  input?: InputMaybe<CatalogV1RemoveProductRibbonRequestInput>;
};


export type MutationStoresProductsV1ResetAllVariantDataArgs = {
  input?: InputMaybe<CatalogV1ResetAllVariantDataRequestInput>;
};


export type MutationStoresProductsV1UpdateCollectionArgs = {
  input?: InputMaybe<CatalogV1UpdateCollectionRequestInput>;
};


export type MutationStoresProductsV1UpdateProductArgs = {
  input?: InputMaybe<CatalogV1UpdateProductRequestInput>;
};


export type MutationStoresProductsV1UpdateProductPlatformizedArgs = {
  input?: InputMaybe<CatalogV1UpdateProductPlatformizedRequestInput>;
};


export type MutationStoresProductsV1UpdateVariantsArgs = {
  input?: InputMaybe<CatalogV1UpdateVariantsRequestInput>;
};


export type MutationStoresProductsV1WriteProxyCreateProductPlatformizedArgs = {
  input?: InputMaybe<CatalogWriteProxyV1CreateProductPlatformizedRequestInput>;
};


export type MutationStoresProductsV1WriteProxyDeleteProductPlatformizedArgs = {
  input?: InputMaybe<CatalogWriteProxyV1DeleteProductPlatformizedRequestInput>;
};


export type MutationStoresProductsV1WriteProxyUpdateProductPlatformizedArgs = {
  input?: InputMaybe<CatalogWriteProxyV1UpdateProductPlatformizedRequestInput>;
};

export type NpmCommunitiesPlatformizedBlogBlogPagingInput = {
  /** Pointer to the next or previous page in the list of results. */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Number of items to return.
   *
   *
   * Default:`50`
   */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Number of items to skip in the current sort order.
   *
   *
   * Default: `0`
   */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type NpmCommunitiesPlatformizedBlogCoverMedia = {
  __typename?: 'NpmCommunitiesPlatformizedBlogCoverMedia';
  /** Whether cover media is custom. If `false` the cover image is set to the first media item that appears in the content. */
  custom?: Maybe<Scalars['Boolean']['output']>;
  /** Whether cover media is displayed. */
  displayed?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Is cover media enabled.
   * Selected by user whether to display cover media on the feed
   * @deprecated Is cover media enabled.
   * Selected by user whether to display cover media on the feed
   */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Image url. */
  image?: Maybe<CommonImage>;
  /** Video url. */
  video?: Maybe<CommonVideo>;
};

export type NpmCommunitiesPlatformizedBlogCoverMediaInput = {
  /** Whether cover media is custom. If `false` the cover image is set to the first media item that appears in the content. */
  custom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether cover media is displayed. */
  displayed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Image url. */
  image?: InputMaybe<CommonImageInput>;
  /** Video url. */
  video?: InputMaybe<CommonVideoInput>;
};

export type NpmCommunitiesPlatformizedBlogCreateTagRequestInput = {
  /**
   * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
   * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
   * only the tag's base fields are returned.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<NpmCommunitiesPlatformizedBlogTagFieldField>>>;
  /** Tag label. The label for each tag in a blog must be unique. */
  label?: InputMaybe<Scalars['String']['input']>;
  /**
   * Tag language.
   *
   * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
   */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Preferred tag slug. For example, `'tag-slug'`. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type NpmCommunitiesPlatformizedBlogCreateTagResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogCreateTagResponse';
  /** Tag info. */
  tag?: Maybe<NpmCommunitiesPlatformizedBlogTag>;
};

export type NpmCommunitiesPlatformizedBlogDeleteTagRequestInput = {
  /** Tag ID. */
  tagId?: InputMaybe<Scalars['String']['input']>;
};

export type NpmCommunitiesPlatformizedBlogEmbedMedia = {
  __typename?: 'NpmCommunitiesPlatformizedBlogEmbedMedia';
  /** Thumbnail details. */
  thumbnail?: Maybe<NpmCommunitiesPlatformizedBlogEmbedThumbnail>;
  /** Video details. */
  video?: Maybe<NpmCommunitiesPlatformizedBlogEmbedVideo>;
};

export type NpmCommunitiesPlatformizedBlogEmbedThumbnail = {
  __typename?: 'NpmCommunitiesPlatformizedBlogEmbedThumbnail';
  /** Thumbnail height. */
  height?: Maybe<Scalars['Int']['output']>;
  /** Thumbnail url. */
  url?: Maybe<Scalars['String']['output']>;
  /** Thumbnail width. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type NpmCommunitiesPlatformizedBlogEmbedVideo = {
  __typename?: 'NpmCommunitiesPlatformizedBlogEmbedVideo';
  /** Video height. */
  height?: Maybe<Scalars['Int']['output']>;
  /** Video url. */
  url?: Maybe<Scalars['String']['output']>;
  /** Video width. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type NpmCommunitiesPlatformizedBlogGetTagByLabelRequestInput = {
  /**
   * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
   * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
   * only the tag's base fields are returned.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<NpmCommunitiesPlatformizedBlogTagFieldField>>>;
  /** Tag label. */
  label?: InputMaybe<Scalars['String']['input']>;
  /**
   * Tag language.
   *
   * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
   * If omitted, tags in all languages are returned.
   */
  language?: InputMaybe<Scalars['String']['input']>;
};

export type NpmCommunitiesPlatformizedBlogGetTagByLabelResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogGetTagByLabelResponse';
  /** Tag info. */
  tag?: Maybe<NpmCommunitiesPlatformizedBlogTag>;
};

export type NpmCommunitiesPlatformizedBlogGetTagBySlugRequestInput = {
  /**
   * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
   * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
   * only the tag's base fields are returned.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<NpmCommunitiesPlatformizedBlogTagFieldField>>>;
  /** Slug of the tag to retrieve. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type NpmCommunitiesPlatformizedBlogGetTagBySlugResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogGetTagBySlugResponse';
  /** Tag info. */
  tag?: Maybe<NpmCommunitiesPlatformizedBlogTag>;
};

export type NpmCommunitiesPlatformizedBlogGetTotalPostsRequestInput = {
  /**
   * Language filter.
   *
   * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
   * Pass a language to receive the total amount of posts in that specified language.
   */
  language?: InputMaybe<Scalars['String']['input']>;
};

export type NpmCommunitiesPlatformizedBlogGetTotalPostsResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogGetTotalPostsResponse';
  /** Total amount of published posts. */
  total?: Maybe<Scalars['Int']['output']>;
};

export type NpmCommunitiesPlatformizedBlogMedia = {
  __typename?: 'NpmCommunitiesPlatformizedBlogMedia';
  /** Whether custom cover media has been specified. If `false`, the first media item in the post's content serves as cover media. */
  custom?: Maybe<Scalars['Boolean']['output']>;
  /** Whether cover media is displayed. */
  displayed?: Maybe<Scalars['Boolean']['output']>;
  /** Embed media details. */
  embedMedia?: Maybe<NpmCommunitiesPlatformizedBlogEmbedMedia>;
  /** Wix Media details. */
  wixMedia?: Maybe<NpmCommunitiesPlatformizedBlogWixMedia>;
};

export type NpmCommunitiesPlatformizedBlogMetaData = {
  __typename?: 'NpmCommunitiesPlatformizedBlogMetaData';
  /** Number of items returned in this response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Pointer to the next or previous page in the list of results. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** Requested offset. */
  offset?: Maybe<Scalars['Int']['output']>;
  /** Total number of items that match the query. */
  total?: Maybe<Scalars['Int']['output']>;
};

export type NpmCommunitiesPlatformizedBlogPeriodPostCount = {
  __typename?: 'NpmCommunitiesPlatformizedBlogPeriodPostCount';
  /** Start of time range in ISO 8601 date and time format. */
  periodStart?: Maybe<Scalars['String']['output']>;
  /** Number of posts published during this month. */
  postCount?: Maybe<Scalars['Int']['output']>;
};

export type NpmCommunitiesPlatformizedBlogQueryPostCountStatsRequestInput = {
  /**
   * Language filter.
   *
   * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
   * Pass a language to only receive the period post count for that specified language.
   */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Number of months to include in response. */
  months?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Order of returned results.
   *
   * - `OLDEST`: posts by date in ascending order.
   * - `NEWEST`: posts by date in descending order.
   *
   * Default: `OLDEST`
   */
  order?: InputMaybe<NpmCommunitiesPlatformizedBlogQueryPostCountStatsRequestOrder>;
  /** Start of time range to return, in ISO 8601 date and time format. */
  rangeStart?: InputMaybe<Scalars['String']['input']>;
  /**
   * Time zone to use when calculating the start of the month.
   *
   * [UTC timezone offset](https://en.wikipedia.org/wiki/List_of_UTC_offsets) format. For example, New York time zone is `-05`.
   */
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export enum NpmCommunitiesPlatformizedBlogQueryPostCountStatsRequestOrder {
  Newest = 'NEWEST',
  Oldest = 'OLDEST',
  Unknown = 'UNKNOWN'
}

export type NpmCommunitiesPlatformizedBlogQueryPostCountStatsResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogQueryPostCountStatsResponse';
  /** List of published post counts by month. */
  stats?: Maybe<Array<Maybe<NpmCommunitiesPlatformizedBlogPeriodPostCount>>>;
};

export type NpmCommunitiesPlatformizedBlogQueryTagsRequestInput = {
  /**
   * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
   * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
   * only the tag's base fields are returned.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<NpmCommunitiesPlatformizedBlogTagFieldField>>>;
  /** Query options. */
  query?: InputMaybe<NpmCommunitiesPlatformizedUpstreamTagPlatformQueryInput>;
};

export type NpmCommunitiesPlatformizedBlogQueryTagsResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogQueryTagsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<NpmCommunitiesPlatformizedBlogTag>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type NpmCommunitiesPlatformizedBlogTag = {
  __typename?: 'NpmCommunitiesPlatformizedBlogTag';
  /** Date the tag was created. */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Tag ID. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Tag label.
   *
   * A blog can't have two tags with the same label.
   */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * Tag language.
   *
   * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
   */
  language?: Maybe<Scalars['String']['output']>;
  /** Number of posts with this tag, including unpublished draft posts. */
  postCount?: Maybe<Scalars['Int']['output']>;
  /** Reserved for internal use. */
  publicationCount?: Maybe<Scalars['Int']['output']>;
  /** Number of published posts with this tag. */
  publishedPostCount?: Maybe<Scalars['Int']['output']>;
  /** Tag slug. For example, `'tag-slug'`. */
  slug?: Maybe<Scalars['String']['output']>;
  /**
   * ID of the tag translations.
   *
   * All translations of a single tag share the same `translationId`.
   */
  translationId?: Maybe<Scalars['String']['output']>;
  /** Date the tag was last updated. */
  updatedDate?: Maybe<Scalars['String']['output']>;
  /** Tag URL. */
  url?: Maybe<CommonPageUrl>;
};

export enum NpmCommunitiesPlatformizedBlogTagFieldField {
  /** Includes SEO data. */
  Seo = 'SEO',
  Unknown = 'UNKNOWN',
  /** Includes Tag URL when present. */
  Url = 'URL'
}

export type NpmCommunitiesPlatformizedBlogV3Category = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3Category';
  /** Category cover image. */
  coverImage?: Maybe<CommonImage>;
  /**
   * __Deprecated.__ Use `coverImage` instead.
   * This property will be removed on June 30, 2023.
   *
   * Category cover image or video.
   */
  coverMedia?: Maybe<NpmCommunitiesPlatformizedBlogCoverMedia>;
  /** Category description. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * Category position in sequence. Categories with a lower display position are displayed first. Categories with a position of `-1` appear at the end of the sequence.
   *
   * Default: `-1`
   */
  displayPosition?: Maybe<Scalars['Int']['output']>;
  /** Category ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Reserved for internal use. */
  internalId?: Maybe<Scalars['String']['output']>;
  /** Category label. Displayed in the Category Menu. */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * Category language.
   *
   * Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
   */
  language?: Maybe<Scalars['String']['output']>;
  /** Reserved for internal use. */
  oldRank?: Maybe<Scalars['Int']['output']>;
  /** Number of posts in the category. */
  postCount?: Maybe<Scalars['Int']['output']>;
  /**
   * __Deprecated.__ Use `displayPosition` instead.
   * This property will be removed on June 30, 2023.
   *
   * Category position in sequence.
   * @deprecated __Deprecated.__ Use `displayPosition` instead.
   * This property will be removed on June 30, 2023.
   *
   * Category position in sequence.
   */
  rank?: Maybe<Scalars['Int']['output']>;
  /** SEO data. */
  seoData?: Maybe<AdvancedSeoSeoSchema>;
  /** Category slug. For example, `'category-slug'`. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Category title. */
  title?: Maybe<Scalars['String']['output']>;
  /** ID of the category's translations. All translations of a single category share the same `translationId`. */
  translationId?: Maybe<Scalars['String']['output']>;
  /** Category URL. */
  url?: Maybe<CommonPageUrl>;
};

export enum NpmCommunitiesPlatformizedBlogV3CategoryFieldField {
  /**
   * Includes internal id field.
   * Reserved for internal use
   */
  InternalId = 'INTERNAL_ID',
  /** Includes SEO data. */
  Seo = 'SEO',
  Unknown = 'UNKNOWN',
  /** Includes Category url. */
  Url = 'URL'
}

export type NpmCommunitiesPlatformizedBlogV3CategoryInput = {
  /** Category cover image. */
  coverImage?: InputMaybe<CommonImageInput>;
  /**
   * __Deprecated.__ Use `coverImage` instead.
   * This property will be removed on June 30, 2023.
   *
   * Category cover image or video.
   */
  coverMedia?: InputMaybe<NpmCommunitiesPlatformizedBlogCoverMediaInput>;
  /** Category description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Category position in sequence. Categories with a lower display position are displayed first. Categories with a position of `-1` appear at the end of the sequence.
   *
   * Default: `-1`
   */
  displayPosition?: InputMaybe<Scalars['Int']['input']>;
  /** Category ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Reserved for internal use. */
  internalId?: InputMaybe<Scalars['String']['input']>;
  /** Category label. Displayed in the Category Menu. */
  label?: InputMaybe<Scalars['String']['input']>;
  /**
   * Category language.
   *
   * Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
   */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Reserved for internal use. */
  oldRank?: InputMaybe<Scalars['Int']['input']>;
  /** Number of posts in the category. */
  postCount?: InputMaybe<Scalars['Int']['input']>;
  /** SEO data. */
  seoData?: InputMaybe<AdvancedSeoSeoSchemaInput>;
  /** Category slug. For example, `'category-slug'`. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Category title. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** ID of the category's translations. All translations of a single category share the same `translationId`. */
  translationId?: InputMaybe<Scalars['String']['input']>;
  /** Category URL. */
  url?: InputMaybe<CommonPageUrlInput>;
};

export type NpmCommunitiesPlatformizedBlogV3CreateCategoryRequestInput = {
  /** Category info. */
  category?: InputMaybe<NpmCommunitiesPlatformizedBlogV3CategoryInput>;
  /**
   * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
   * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
   * only the category’s base fields are returned.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<NpmCommunitiesPlatformizedBlogV3CategoryFieldField>>>;
};

export type NpmCommunitiesPlatformizedBlogV3CreateCategoryResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3CreateCategoryResponse';
  /** Category info. */
  category?: Maybe<NpmCommunitiesPlatformizedBlogV3Category>;
};

export type NpmCommunitiesPlatformizedBlogV3DeleteCategoryRequestInput = {
  /** Category ID. */
  categoryId?: InputMaybe<Scalars['String']['input']>;
};

export type NpmCommunitiesPlatformizedBlogV3GetCategoryBySlugRequestInput = {
  /**
   * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
   * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
   * only the category’s base fields are returned.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<NpmCommunitiesPlatformizedBlogV3CategoryFieldField>>>;
  /** Slug of the category to retrieve. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type NpmCommunitiesPlatformizedBlogV3GetCategoryBySlugResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3GetCategoryBySlugResponse';
  /** Category info. */
  category?: Maybe<NpmCommunitiesPlatformizedBlogV3Category>;
};

export type NpmCommunitiesPlatformizedBlogV3GetPostBySlugRequestInput = {
  /**
   * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
   * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
   * only the post’s base fields are returned.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<NpmCommunitiesPlatformizedBlogV3PostFieldField>>>;
  /** Slug of the post to retrieve. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type NpmCommunitiesPlatformizedBlogV3GetPostBySlugResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3GetPostBySlugResponse';
  /** Post info. */
  post?: Maybe<NpmCommunitiesPlatformizedBlogV3Post>;
};

export type NpmCommunitiesPlatformizedBlogV3GetPostMetricsRequestInput = {
  /** Post ID. */
  postId?: InputMaybe<Scalars['String']['input']>;
};

export type NpmCommunitiesPlatformizedBlogV3GetPostMetricsResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3GetPostMetricsResponse';
  /** Post metrics. */
  metrics?: Maybe<NpmCommunitiesPlatformizedBlogV3Metrics>;
};

export enum NpmCommunitiesPlatformizedBlogV3GetPostsSort {
  /** Sorting by publishing date descending with pinned posts first. The default value */
  Feed = 'FEED',
  /** Sorting by like count descending */
  LikeCount = 'LIKE_COUNT',
  /** Sorting by publishing date ascending */
  PublishedDateAsc = 'PUBLISHED_DATE_ASC',
  /** Sorting by publishing date descending */
  PublishedDateDesc = 'PUBLISHED_DATE_DESC',
  /** Sorting by post rating descending. */
  Rating = 'RATING',
  /** Sorting by title ascending */
  TitleAsc = 'TITLE_ASC',
  /** Sorting by title descending */
  TitleDesc = 'TITLE_DESC',
  /** Sorting by view count descending */
  ViewCount = 'VIEW_COUNT'
}

export type NpmCommunitiesPlatformizedBlogV3ListCategoriesRequestInput = {
  /**
   * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
   * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
   * only the category’s base fields are returned.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<NpmCommunitiesPlatformizedBlogV3CategoryFieldField>>>;
  /**
   * Language filter.
   *
   * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
   * Pass a language to only receive categories that are in that language.
   * If omitted, categories in all languages are returned.
   */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Pagination options. */
  paging?: InputMaybe<NpmCommunitiesPlatformizedBlogBlogPagingInput>;
};

export type NpmCommunitiesPlatformizedBlogV3ListCategoriesResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3ListCategoriesResponse';
  /** List of categories. */
  categories?: Maybe<Array<Maybe<NpmCommunitiesPlatformizedBlogV3Category>>>;
  /** Details on the paged set of results returned. */
  metaData?: Maybe<NpmCommunitiesPlatformizedBlogMetaData>;
};

export type NpmCommunitiesPlatformizedBlogV3ListPostsRequestInput = {
  /**
   * Category filter.
   *
   * Pass an array of category IDs to return only posts with any of the provided categories.
   * If omitted, all posts with or without associated categories are returned.
   */
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Whether to return only featured posts.
   *
   * Default: `false`
   */
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
   * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
   * only the post’s base fields are returned.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<NpmCommunitiesPlatformizedBlogV3PostFieldField>>>;
  /**
   * Hashtag filter.
   *
   * Pass an array of hashtags to return only posts containing any of the provided hashtags.
   * If omitted, all posts with or without hashtags are returned.
   */
  hashtags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Language filter.
   *
   * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
   * Pass a language to only receive posts that are in that language.
   * If omitted, posts in all languages are returned.
   */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Post owner's member ID. */
  memberId?: InputMaybe<Scalars['String']['input']>;
  /** Pagination options. */
  paging?: InputMaybe<NpmCommunitiesPlatformizedBlogBlogPagingInput>;
  /**
   * Sorting options.
   *
   * - `FEED`: Ordered by `firstPublishedDate` in descending order with pinned posts first.
   * - `VIEW_COUNT`: Ordered by total number of views in descending order.
   * - `LIKE_COUNT`: Ordered by total number of likes in descending order.
   * - `PUBLISHED_DATE_ASC`: Ordered by `firstPublishedDate` in ascending order.
   * - `PUBLISHED_DATE_DESC`: Ordered by `firstPublishedDate` in descending order.
   * - `TITLE_ASC`: Ordered by `title` in ascening order.
   * - `TITLE_DESC`: Ordered by `title` in descending order.
   * - `RATING`: reserved for internal use.
   *
   * Default: `FEED`
   */
  sort?: InputMaybe<NpmCommunitiesPlatformizedBlogV3GetPostsSort>;
  /**
   * Tag filter.
   *
   * Pass an array of tag IDs to return only posts with any of the provided tags.
   * If omitted, all posts with or without tags are returned.
   */
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NpmCommunitiesPlatformizedBlogV3ListPostsResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3ListPostsResponse';
  /** Details on the paged set of results returned. */
  metaData?: Maybe<NpmCommunitiesPlatformizedBlogMetaData>;
  /** List of posts. */
  posts?: Maybe<Array<Maybe<NpmCommunitiesPlatformizedBlogV3Post>>>;
};

export type NpmCommunitiesPlatformizedBlogV3Metrics = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3Metrics';
  /** Total number of post comments. */
  comments?: Maybe<Scalars['Int']['output']>;
  /** Total number of post likes. */
  likes?: Maybe<Scalars['Int']['output']>;
  /** Total number of post views. */
  views?: Maybe<Scalars['Int']['output']>;
};

export type NpmCommunitiesPlatformizedBlogV3ModerationDetails = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3ModerationDetails';
  /** Member ID of the person who approved or rejected the post. */
  moderatedBy?: Maybe<Scalars['String']['output']>;
  /** Date the post was approved or rejected. */
  moderationDate?: Maybe<Scalars['String']['output']>;
  /** Status indicating whether the submission was approved or rejected by the moderator. */
  status?: Maybe<NpmCommunitiesPlatformizedBlogV3ModerationStatusStatus>;
  /** Member ID of the person submitting the draft post for review. */
  submittedBy?: Maybe<Scalars['String']['output']>;
  /** Date the post was submitted for review. */
  submittedDate?: Maybe<Scalars['String']['output']>;
};

export enum NpmCommunitiesPlatformizedBlogV3ModerationStatusStatus {
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  Unknown = 'UNKNOWN'
}

export type NpmCommunitiesPlatformizedBlogV3Post = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3Post';
  /** [Category IDs](https://dev.wix.com/api/rest/wix-blog/blog/categories) of the post. */
  categoryIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Whether commenting on the post is enabled. */
  commentingEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Post owner's [contact ID](https://dev.wix.com/api/rest/contacts). */
  contactId?: Maybe<Scalars['String']['output']>;
  /** Reserved for internal use. */
  content?: Maybe<Scalars['String']['output']>;
  /** Reserved for internal use. */
  contentId?: Maybe<Scalars['String']['output']>;
  /** The post's content in plain text. */
  contentText?: Maybe<Scalars['String']['output']>;
  /**
   * __Deprecated.__ Use `media` instead.
   * This property will be removed on June 30, 2023.
   *
   * Post cover media.
   */
  coverMedia?: Maybe<NpmCommunitiesPlatformizedBlogCoverMedia>;
  /**
   * Post excerpt.
   * Can be selected by a site contributor. By default, it is extracted from the content text's first characters.
   *
   * Max: 140 characters
   */
  excerpt?: Maybe<Scalars['String']['output']>;
  /** Whether the post is marked as featured. */
  featured?: Maybe<Scalars['Boolean']['output']>;
  /** Date the post was first published. */
  firstPublishedDate?: Maybe<Scalars['String']['output']>;
  /** Indicates if there is a draft post with changes that have not yet been published. */
  hasUnpublishedChanges?: Maybe<Scalars['Boolean']['output']>;
  /** Hashtags in the post. */
  hashtags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Image placed at the top of the blog page. */
  heroImage?: Maybe<CommonImage>;
  /** Post ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Reserved for internal use. */
  internalCategoryIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Reserved for internal use. */
  internalId?: Maybe<Scalars['String']['output']>;
  /** Reserved for internal use. */
  internalRelatedPostIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Language the post is written in.
   *
   * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
   */
  language?: Maybe<Scalars['String']['output']>;
  /** Date the post was last published. */
  lastPublishedDate?: Maybe<Scalars['String']['output']>;
  /** Post cover media. */
  media?: Maybe<NpmCommunitiesPlatformizedBlogMedia>;
  /** Post owner's [member ID](https://dev.wix.com/api/rest/members). */
  memberId?: Maybe<Scalars['String']['output']>;
  /** Estimated reading time (calculated automatically). */
  minutesToRead?: Maybe<Scalars['Int']['output']>;
  /** Post moderation details. Only relevant to posts submitted by [guest writers](https://support.wix.com/en/article/wix-blog-moderating-blog-posts-from-your-guest-writers). */
  moderationDetails?: Maybe<NpmCommunitiesPlatformizedBlogV3ModerationDetails>;
  /** Reserved for internal use. */
  mostRecentContributorId?: Maybe<Scalars['String']['output']>;
  /** Whether the post is pinned. If `true`, the post is placed at the top of the post list. */
  pinned?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates if the returned content is a paid content preview for non-paying users. */
  preview?: Maybe<Scalars['Boolean']['output']>;
  /** [Pricing plan IDs](https://dev.wix.com/api/rest/wix-pricing-plans). Only relevant if a post is assigned to a specific pricing plan. */
  pricingPlanIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** IDs of posts related to the post. */
  relatedPostIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Post rich content */
  richContent?: Maybe<RichContentV1RichContent>;
  /** Post rich content as a string */
  richContentString?: Maybe<Scalars['String']['output']>;
  /** SEO data. */
  seoData?: Maybe<AdvancedSeoSeoSchema>;
  /** Post slug. For example, `'post-slug'`. */
  slug?: Maybe<Scalars['String']['output']>;
  /** IDs of [tags](https://dev.wix.com/api/rest/wix-blog/blog/tags) the post is tagged with. */
  tagIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Post title. */
  title?: Maybe<Scalars['String']['output']>;
  /** ID of the translations of this post. All translations of a single post share the same `translationId`. */
  translationId?: Maybe<Scalars['String']['output']>;
  /** Post URL. */
  url?: Maybe<CommonPageUrl>;
};

export enum NpmCommunitiesPlatformizedBlogV3PostFieldField {
  /** Includes post owners Contact Id */
  ContactId = 'CONTACT_ID',
  /**
   * Includes Post content as a stringified DraftJS document
   * Reserved for internal use
   */
  Content = 'CONTENT',
  /** Includes Post content text string when present */
  ContentText = 'CONTENT_TEXT',
  /** Deprecated use `METRICS` instead */
  Counters = 'COUNTERS',
  /**
   * Includes internal id field
   * Reserved for internal use
   */
  InternalId = 'INTERNAL_ID',
  /** Includes Post metrics when present */
  Metrics = 'METRICS',
  /** Includes post rich content */
  RichContent = 'RICH_CONTENT',
  /** Includes compressed post rich content string */
  RichContentCompressed = 'RICH_CONTENT_COMPRESSED',
  /** Includes post rich content string */
  RichContentString = 'RICH_CONTENT_STRING',
  /** Includes SEO data */
  Seo = 'SEO',
  Unknown = 'UNKNOWN',
  /** Includes Post url when present */
  Url = 'URL'
}

export type NpmCommunitiesPlatformizedBlogV3QueryCategoriesRequestInput = {
  /**
   * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
   * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
   * only the category’s base fields are returned.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<NpmCommunitiesPlatformizedBlogV3CategoryFieldField>>>;
  /** Query options. */
  query?: InputMaybe<NpmCommunitiesPlatformizedUpstreamCommonPlatformQueryInput>;
};

export type NpmCommunitiesPlatformizedBlogV3QueryCategoriesResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3QueryCategoriesResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<NpmCommunitiesPlatformizedBlogV3Category>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type NpmCommunitiesPlatformizedBlogV3QueryPostsRequestInput = {
  /**
   * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
   * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
   * only the post’s base fields are returned.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<NpmCommunitiesPlatformizedBlogV3PostFieldField>>>;
  /** Query options. */
  query?: InputMaybe<NpmCommunitiesPlatformizedUpstreamCommonPlatformQueryInput>;
};

export type NpmCommunitiesPlatformizedBlogV3QueryPostsResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3QueryPostsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<NpmCommunitiesPlatformizedBlogV3Post>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type NpmCommunitiesPlatformizedBlogV3UpdateCategoryRequestInput = {
  /** Category info. */
  category?: InputMaybe<NpmCommunitiesPlatformizedBlogV3CategoryInput>;
  /** Field mask of fields to update. */
  fieldMask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
   * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
   * only the category’s base fields are returned.
   */
  fieldsets?: InputMaybe<Array<InputMaybe<NpmCommunitiesPlatformizedBlogV3CategoryFieldField>>>;
};

export type NpmCommunitiesPlatformizedBlogV3UpdateCategoryResponse = {
  __typename?: 'NpmCommunitiesPlatformizedBlogV3UpdateCategoryResponse';
  /** Category info. */
  category?: Maybe<NpmCommunitiesPlatformizedBlogV3Category>;
};

export type NpmCommunitiesPlatformizedBlogWixMedia = {
  __typename?: 'NpmCommunitiesPlatformizedBlogWixMedia';
  /** Thumbnail or image details. Required if videoV2 is provided. */
  image?: Maybe<CommonImage>;
  /** Video details. Optional */
  videoV2?: Maybe<CommonVideoV2>;
};

export type NpmCommunitiesPlatformizedUpstreamCommonCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   *
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type NpmCommunitiesPlatformizedUpstreamCommonPagingInput = {
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to skip in the current sort order. */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type NpmCommunitiesPlatformizedUpstreamCommonPlatformQueryInput = {
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<NpmCommunitiesPlatformizedUpstreamCommonCursorPagingInput>;
  /**
   * Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Paging options to limit and skip the number of items. */
  paging?: InputMaybe<NpmCommunitiesPlatformizedUpstreamCommonPagingInput>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type NpmCommunitiesPlatformizedUpstreamTagCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   *
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type NpmCommunitiesPlatformizedUpstreamTagPagingInput = {
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to skip in the current sort order. */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type NpmCommunitiesPlatformizedUpstreamTagPlatformQueryInput = {
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<NpmCommunitiesPlatformizedUpstreamTagCursorPagingInput>;
  /**
   * Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** Paging options to limit and skip the number of items. */
  paging?: InputMaybe<NpmCommunitiesPlatformizedUpstreamTagPagingInput>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of items returned in the response */
  count?: Maybe<Scalars['Int']['output']>;
  /** An indication if we have next page */
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  /** Cursor to next */
  nextCursor?: Maybe<Scalars['String']['output']>;
  /** Offset that was requested */
  offset?: Maybe<Scalars['Int']['output']>;
  /** Cursor to prev */
  prevCursor?: Maybe<Scalars['String']['output']>;
  /** Flag that indicates the server failed to calculate the `total` field */
  tooManyToCount?: Maybe<Scalars['Boolean']['output']>;
  /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set */
  total?: Maybe<Scalars['Int']['output']>;
};

export enum PaymentPayV2SubscriptionFrequency {
  Day = 'DAY',
  Month = 'MONTH',
  Undefined = 'UNDEFINED',
  Week = 'WEEK',
  Year = 'YEAR'
}

export enum PaymentPayV3TransactionTransactionStatus {
  Approved = 'APPROVED',
  Authorized = 'AUTHORIZED',
  Canceled = 'CANCELED',
  Declined = 'DECLINED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Pending = 'PENDING',
  PendingMerchant = 'PENDING_MERCHANT',
  Refunded = 'REFUNDED',
  Undefined = 'UNDEFINED',
  Voided = 'VOIDED'
}

export type Query = {
  __typename?: 'Query';
  /** Retrieves an OAuth app by ID. */
  authManagementOAuthAppsV1OAuthApp?: Maybe<HeadlessV1OAuthApp>;
  /**
   * Retrieves a list of OAuth apps, given the provided paging, filtering, and sorting.
   *
   *
   * Query OAuth Apps runs with these defaults, which you can override:
   * + Results are sorted by `id` in descending order.
   * + `paging.offset` is `0`.
   *
   * For field support for filters and sorting, see [OAuth Apps: Supported Filters and Sorting](https://dev.wix.com/api/rest/auth-management/oauth-apps/filters-&-sorting)
   *
   * To learn about working with _Query_ endpoints in general, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   */
  authManagementOAuthAppsV1OAuthApps?: Maybe<HeadlessV1QueryOAuthAppsResponse>;
  /**
   * Retrieves a list of up to 100 categories, given the provided paging, filtering, and sorting.
   * Query Categories runs with these defaults, which you can override.
   * - `displayPosition` is sorted in `DESC` order.
   * - `paging.limit` is `50`.
   * - `paging.offset` is `0`.
   *
   * For field support for filters and sorting, see
   * [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/wix-blog/blog/categories/filter-and-sort).
   *
   * To learn about working with _Query_ endpoints, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language),
   * [Sorting and Paging](https://dev.wix.com/api/rest/getting-started/sorting-and-paging), and
   * [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   */
  blogCategoriesV3Categories?: Maybe<NpmCommunitiesPlatformizedBlogV3QueryCategoriesResponse>;
  /** Gets a category with the provided ID. */
  blogCategoriesV3Category?: Maybe<NpmCommunitiesPlatformizedBlogV3Category>;
  /** Gets a post by the specified ID. */
  blogPostsV3Post?: Maybe<NpmCommunitiesPlatformizedBlogV3Post>;
  /**
   * Retrieves a list of up to 100 posts, given the provided paging, filtering, and sorting.
   *
   * Query Posts runs with these defaults, which you can override:
   * - `firstPublishedDate` is sorted in descending order, with pinned posts first.
   * - `paging.limit` is `50`.
   * - `paging.offset` is `0`.
   *
   * For field support for filters and sorting, see
   * [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/wix-blog/blog/posts/filter-and-sort).
   *
   * To learn about working with _Query_ endpoints, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language),
   * [Sorting and Paging](https://dev.wix.com/api/rest/getting-started/sorting-and-paging), and
   * [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   * For a detailed list of supported filters and sortable fields, see
   * [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/wix-blog/blog/filter-and-sort).
   */
  blogPostsV3Posts?: Maybe<NpmCommunitiesPlatformizedBlogV3QueryPostsResponse>;
  /** Gets a tag with the provided ID. */
  blogTagsV3Tag?: Maybe<NpmCommunitiesPlatformizedBlogTag>;
  /**
   * Retrieves a list of up to 500 tags, given the provided paging, filtering, and sorting.
   *
   * Query Posts runs wuth these defaults, which you can override:
   * - `postCount` is sorted in `DESC` order.
   * - `paging.limit` is `50`.
   * - `paging.offset` is `0`.
   *
   * For field support for filters and sorting, see
   * [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/wix-blog/blog/tags/filter-and-sort).
   *
   * To learn about working with _Query_ endpoints, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language),
   * [Sorting and Paging](https://dev.wix.com/api/rest/getting-started/sorting-and-paging), and
   * [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   * For a detailed list of supported filters and sortable fields, see
   * [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/wix-blog/blog/filter-and-sort).
   */
  blogTagsV3Tags?: Maybe<NpmCommunitiesPlatformizedBlogQueryTagsResponse>;
  /** Retrieves attendance information by ID. */
  bookingsAttendanceV2Attendance?: Maybe<BookingsAttendanceV2Attendance>;
  /**
   * Retrieves attendance information for booked sessions, given the provided paging, filtering, and sorting.
   *
   *
   * When querying attendance information, you can query from the perspective of:
   * + **A booking.** Specify a booking ID to retrieve attendance information
   * for all sessions related to that booking.
   * + **A session.** Specify a session ID to  retrieve attendance information
   * for all bookings related to that session.
   *
   * For example, query by a course's `bookingId` and `status = "NOT_ATTENDED"` to
   * retrieve the attendance of a given participant in a course. For example, this query
   * helps you determine if a participant booked the course
   * but did not attend most of its sessions, taking away spots for other potential participants.
   *
   * Query Attendance runs with the following defaults, which you can override:
   *
   * - `id` sorted in `ASC` order
   * - `cursorPaging.limit` is `50`
   *
   * For field support, see [supported filters](https://dev.wix.com/api/rest/wix-bookings/attendance/supported-filters).
   *
   * > __Notes__:
   * > + Another way to retrieve attendance information is to call Bookings Reader V2's [Query Extended Bookings](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings) with `withBookingAttendanceInfo` as `true`.
   * > + Up to 100 results can be returned per request.
   * > + Only 1 filter is supported per query. If you define multiple filters in the same query, only the first is processed.
   *
   * To learn about working with query endpoints, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   */
  bookingsAttendanceV2Attendances?: Maybe<BookingsAttendanceV2QueryAttendanceResponse>;
  /** Retrieves a `serviceOptionsAndVariants` object by `service_options_and_variants_id`. */
  bookingsServiceOptionsAndVariantsV1ServiceOptionsAndVariants?: Maybe<BookingsCatalogV1ServiceOptionsAndVariants>;
  /**
   * Retrieves a list of `serviceOptionsAndVariants`, given the provided paging, filtering, and sorting.
   *
   * Query Service Options And Variants runs with these defaults, which you can override:
   *
   * - `id` is sorted in `ASC` order
   * - `cursorPaging.limit` is `100`
   *
   * For a detailed list of supported filtering operations see
   * [supported filters](https://dev.wix.com/api/rest/wix-bookings/service-options-and-variants/supported-filters).
   *
   * To learn about working with _Query_ endpoints, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language),
   * [Sorting and Paging](https://dev.wix.com/api/rest/getting-started/pagination),
   * and [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   */
  bookingsServiceOptionsAndVariantsV1ServiceOptionsAndVariantsList?: Maybe<BookingsCatalogV1QueryServiceOptionsAndVariantsResponse>;
  /** Retrieves a service. */
  bookingsServicesV2Service?: Maybe<BookingsServicesV2Service>;
  /**
   * Retrieves a list of up to 100 services, given the provided paging, filtering, and sorting.
   *
   *
   * Define queries using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * For field support for filters and sorting, see [Supported Filters and Sorting](https://dev.wix.com/api/rest/wix-bookings/services-v2/supported-filters-and-sorting).
   *
   * To retrieve all services use an empty query:
   *
   * ```javascript
   * {
   * "query": {}
   * }
   * ```
   * `Query Services` runs with these defaults, which you can override:
   * + `paging.limit` is `100`.
   * + `paging.offset` is `0`.
   *
   *
   * >**Notes:**
   * > + Use UTC format when filtering with dates.
   * > + Only 1 use of each filter in the same query is supported. If a filter is defined more than once in a query, only the first occurrence is processed.
   */
  bookingsServicesV2Services?: Maybe<BookingsServicesV2QueryServicesResponse>;
  /**
   * Retrieves a session by ID.
   *
   *
   * By default, a session object is returned with the fields specified in the `NO_PI` fieldset. This means it doesn't contain personal information.
   * To retrieve a full session object including all personal information, use the `ALL_PI` fieldset. This requires the CALENDAR.SESSION_READ_PI permission scope.
   */
  bookingsSessionsV1Session?: Maybe<BookingsSchedulesV1Session>;
  /**
   * Retrieves a list of sessions, given the provided time range, filtering, and paging.
   *
   * To query for event instances within a specified time range of up to 1 year, provide a `startDate` and `endDate`.
   *
   * Query Sessions runs with these defaults, which you can override:
   * - Only sessions of type `EVENT` are returned. An event is a single or recurring session that appears in a calendar, for example an appointment or a class.
   * - `instances` is true. This means only single session instances and instances of recurring sessions are returned.
   * - `includeExternal` is false. This means that sessions imported from connected external calendars are not returned.
   * - Session objects are returned with the fields specified in the `NO_PI` fieldset. This means they don't contain personal information.
   * - `query.cursorPaging.limit` is `100`.
   *
   * Note the following limitations, which you can't override:
   * - Sessions are always sorted by `start.timestamp` in `ASC` order.
   * - The maximum time range you can query for session instances is 1 year. If you are querying for recurring session definitions, rather than session instances, this limit doesn't apply.
   * - Pagination is not supported for recurring session definition queries.
   *
   * To query only for working hours sessions, set `type` to `WORKING_HOURS`. A working hours session is a single or recurring session that defines availability in a schedule.
   *
   * To query for all session types, including events and working hours sessions, set `type` to `ALL`.
   *
   * To query for recurring session pattern definitions, set `instances` to `false`. In this case, `fromDate` and `toDate` may be more than 1 year apart.
   *
   * To return session objects including personal information, use the `ALL_PI` fieldset. This requires the Read Bookings Calendar - Including Participants or the Manage Bookings Services and Settings or the Manage Business Calendar [permission scope](https://devforum.wix.com/kb/en/article/available-permissions).
   *
   * For details on fieldsets, see [Sessions: Supported Fieldsets](https://dev.wix.com/api/rest/wix-bookings/calendar/supported-fieldsets).
   *
   * For field support for filters, see [Sessions: Supported Filters](https://dev.wix.com/api/rest/wix-bookings/calendar/supported-filters).
   *
   * To learn about working with _Query_ endpoints in general, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) and
   * [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   */
  bookingsSessionsV1Sessions?: Maybe<BookingsCalendarV2QuerySessionsResponse>;
  /** Retrieves a location. */
  businessToolsLocationsV1Location?: Maybe<LocationsLocation>;
  /** Retrieves locations, given the provided filters, sorting, and paging. */
  businessToolsLocationsV1Locations?: Maybe<LocationsQueryLocationsResponse>;
  /** Retrieves an extended field. */
  crmExtendedFieldsV4ExtendedField?: Maybe<ContactsFieldsV4ExtendedField>;
  /**
   * Retrieves a list of extended fields.
   *
   * For a detailed list of supported operations, see [sorting and filtering for extended fields](https://dev.wix.com/api/rest/contacts/extended-fields/sort-and-filter). To learn more about query language, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   */
  crmExtendedFieldsV4Fields?: Maybe<ContactsFieldsV4QueryExtendedFieldsResponse>;
  /** Retrieves a label. */
  crmLabelsV4ContactLabel?: Maybe<ContactsLabelsV4ContactLabel>;
  /**
   * Retrieves a list of contact labels. Up to 1000 labels can be returned per request.
   *
   * For a detailed list of supported operations, see [sorting and filtering for labels](https://dev.wix.com/api/rest/contacts/labels/sort-and-filter). To learn how to query labels, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   */
  crmLabelsV4Labels?: Maybe<ContactsLabelsV4QueryLabelsResponse>;
  /** Retrieves an item from a collection. */
  dataItemsV2DataItem?: Maybe<CloudDataDataDataItem>;
  /**
   * Retrieves a list of items, on the basis of the filtering, sorting, and paging preferences you provide.
   *
   *
   * For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   */
  dataItemsV2DataItems?: Maybe<CloudDataDataQueryDataItemsResponse>;
  /** Retrieves a cart. */
  ecomCartV1Cart?: Maybe<EcomCartV1Cart>;
  /** Retrieves a checkout. */
  ecomCheckoutV1Checkout?: Maybe<EcomCheckoutV1Checkout>;
  /** Retrieves a cart. */
  ecomCurrentCartV1Cart?: Maybe<EcomCartV1Cart>;
  /** Retrieves a discount rule. */
  ecomDiscountRulesV1DiscountRule?: Maybe<EcomDiscountsDiscountRule>;
  /**
   * Query discount rules using [WQL (Wix Query Language)](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * Total entries (`pagingMetadata.total`) will be returned only for the first page.
   *
   * > **Note:** `discountRule.status` can't be used for querying.
   */
  ecomDiscountRulesV1DiscountRules?: Maybe<EcomDiscountsQueryDiscountRulesResponse>;
  /** Retrieves an order with the provided ID. */
  ecomOrdersV1Order?: Maybe<EcomOrdersV1Order>;
  /**
   * <!--ONLY:REST-->
   * Returns a list of up to 300 orders, given the provided paging, filtering and sorting.
   *
   * To learn how to query orders, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * For a detailed list of supported filters and sorting options,
   * see [Field Support for Filtering and Sorting](https://bo.wix.com/wix-docs/rest/ecommerce/orders/filter-and-sort#ecommerce_orders_filter-and-sort_field-support-for-filtering-and-sorting).
   * <!--END:ONLY:REST-->
   */
  ecomOrdersV1Orders?: Maybe<EcomOrdersV1QueryOrderResponse>;
  /** Retrieves a list of policies according to the provided filters and paging. */
  eventsPoliciesV2Policies?: Maybe<EventsV2QueryPoliciesResponse>;
  /** Retrieves a policy. */
  eventsPoliciesV2Policy?: Maybe<EventsV2Policy>;
  /**
   * Retrieves a list of up to 100 schedule items, given the provided [paging](https://dev.wix.com/api/rest/getting-started/pagination), [filtering](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
   *
   * ** Important **:
   * - All results are for one specific business, resolved from the request context.
   *
   * Query object support:
   * - `filter` - supported, see [filtering and sorting](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
   * - `sort` - supported, see [filtering and sorting](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
   * - `paging` - supported, see [paging](https://dev.wix.com/api/rest/getting-started/pagination).
   * - `fields` - not supported.
   * - `fieldsets` - not supported.
   * - `cursorPaging` - not supported, use offset pagination instead.
   *
   * Defaults:
   * - When filter is not specified, returns all schedule items that caller is authorized to read.
   * - When sorting is not specified, defaults to `time_slot.start` and `time_slot.end` in `ASC` order.
   */
  eventsScheduleBookmarksV1Items?: Maybe<EventsScheduleQueryScheduleItemsResponse>;
  eventsScheduleBookmarksV1ScheduleItem?: Maybe<EventsScheduleScheduleItem>;
  /**
   * Retrieves a list of up to 100 schedule items, given the provided [paging](https://dev.wix.com/api/rest/getting-started/pagination), [filtering](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
   *
   * ** Important **:
   * - All results are for one specific business, resolved from the request context.
   *
   * Query object support:
   * - `filter` - supported, see [filtering and sorting](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
   * - `sort` - supported, see [filtering and sorting](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
   * - `paging` - supported, see [paging](https://dev.wix.com/api/rest/getting-started/pagination).
   * - `fields` - not supported.
   * - `fieldsets` - not supported.
   * - `cursorPaging` - not supported, use offset pagination instead.
   *
   * Defaults:
   * - When filter is not specified, returns all schedule items that caller is authorized to read.
   * - When sorting is not specified, defaults to `time_slot.start` and `time_slot.end` in `ASC` order.
   */
  eventsScheduleV1Items?: Maybe<EventsScheduleQueryScheduleItemsResponse>;
  eventsScheduleV1ScheduleItem?: Maybe<EventsScheduleScheduleItem>;
  /**
   * Retrieves a member by ID.
   *
   * - `PUBLIC` fieldset returns `id`, `contactId`, and the `profile` object. `status`, `privacyStatus` and `activityStatus` are returned as `UNKNOWN`.
   * - `EXTENDED` fieldset returns `id`, `loginEmail`, `status`, `contactId`, `privacyStatus`, `activityStatus`, and the `profile` object.
   * - `FULL` fieldset returns all fields.
   */
  membersMembersV1Member?: Maybe<MembersMember>;
  /**
   * Retrieves a list of up to 100 members, given the provided filters, fieldsets, sorting and paging.
   *
   * - `PUBLIC` fieldset returns `id` and `profile` object. `status`, `privacyStatus` and `activityStatus` are returned as `UNKNOWN`.
   * - `FULL` fieldset returns all fields.
   *
   * Currently supported fields for filtering:
   *
   * - `id`
   * - `profile.nickname`
   * - `profile.slug`
   * - `contact.firstName`
   * - `contact.lastName`
   * - `privacyStatus`
   * - `loginEmail`
   * - `createdDate`
   * - `status`
   * - `userId`
   *
   * Currently supported fields for sorting:
   *
   * - `profile.nickname`
   * - `contact.firstName`
   * - `contact.lastName`
   * - `createdDate`
   * - `lastLoginDate`
   */
  membersMembersV1Members?: Maybe<MembersQueryMembersResponse>;
  /** Retrieves a pricing plan by ID. */
  pricingPlansPlansV2Plan?: Maybe<MembershipV2PlansPlan>;
  /** Retrieves a list of up to 1,000 public pricing plans, given the provided pagination, [sorting, and filtering](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans/filter-and-sort). */
  pricingPlansPlansV2Plans?: Maybe<MembershipV2PlansQueryPublicPlansResponse>;
  /** Get an Item by id */
  restaurantsMenuItemsV1Item?: Maybe<RestaurantsMenusItemV1Item>;
  /** Query Items */
  restaurantsMenuItemsV1Items?: Maybe<RestaurantsMenusItemV1QueryItemsResponse>;
  /** Get a Label by id */
  restaurantsMenusItemLabelsV1Label?: Maybe<RestaurantsMenusItemLabelsV1Label>;
  /** Query Labels */
  restaurantsMenusItemLabelsV1Labels?: Maybe<RestaurantsMenusItemLabelsV1QueryLabelsResponse>;
  /** Get a Modifier by id */
  restaurantsMenusItemModifierV1Modifier?: Maybe<RestaurantsMenusItemModifierV1Modifier>;
  /** Query Modifiers */
  restaurantsMenusItemModifierV1Modifiers?: Maybe<RestaurantsMenusItemModifierV1QueryModifiersResponse>;
  /** Query ModifierGroups */
  restaurantsMenusV1Items?: Maybe<RestaurantsMenusV1QueryModifierGroupsResponse>;
  /** Get a Menu by id */
  restaurantsMenusV1Menu?: Maybe<RestaurantsMenusMenuV1Menu>;
  /** Query Menus */
  restaurantsMenusV1Menus?: Maybe<RestaurantsMenusMenuV1QueryMenusResponse>;
  /** Get a ModifierGroup by id */
  restaurantsMenusV1ModifierGroup?: Maybe<RestaurantsMenusV1ModifierGroup>;
  /** Get a Section by id */
  restaurantsSectionsV1Section?: Maybe<RestaurantsMenusSectionV1Section>;
  /** Query Sections */
  restaurantsSectionsV1Sections?: Maybe<RestaurantsMenusSectionV1QuerySectionsResponse>;
  /** Retrieves a collection with the provided ID. */
  storesCollectionsV1Collection?: Maybe<CatalogV1Collection>;
  /**
   * Retrieves a list of up to 100 collections, given the provided paging, sorting and filtering.
   * See [Stores Pagination](https://dev.wix.com/api/rest/wix-stores/pagination) for more information.
   */
  storesCollectionsV1Collections?: Maybe<CatalogV2QueryCollectionsResponse>;
  /** Retrieves a product with the provided ID. */
  storesProductsV1Product?: Maybe<CatalogV1Product>;
  /** Returns a list of up to 100 products, given the provided paging, sorting and filtering. */
  storesProductsV1Products?: Maybe<CatalogV1QueryProductsPlatformizedResponse>;
};


export type QueryAuthManagementOAuthAppsV1OAuthAppArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAuthManagementOAuthAppsV1OAuthAppsArgs = {
  queryInput?: InputMaybe<HeadlessV1QueryOAuthAppsRequestInput>;
};


export type QueryBlogCategoriesV3CategoriesArgs = {
  queryInput?: InputMaybe<NpmCommunitiesPlatformizedBlogV3QueryCategoriesRequestInput>;
};


export type QueryBlogCategoriesV3CategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBlogPostsV3PostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBlogPostsV3PostsArgs = {
  queryInput?: InputMaybe<NpmCommunitiesPlatformizedBlogV3QueryPostsRequestInput>;
};


export type QueryBlogTagsV3TagArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBlogTagsV3TagsArgs = {
  queryInput?: InputMaybe<NpmCommunitiesPlatformizedBlogQueryTagsRequestInput>;
};


export type QueryBookingsAttendanceV2AttendanceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookingsAttendanceV2AttendancesArgs = {
  queryInput?: InputMaybe<BookingsAttendanceV2QueryAttendanceRequestInput>;
};


export type QueryBookingsServiceOptionsAndVariantsV1ServiceOptionsAndVariantsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookingsServiceOptionsAndVariantsV1ServiceOptionsAndVariantsListArgs = {
  queryInput?: InputMaybe<BookingsCatalogV1QueryServiceOptionsAndVariantsRequestInput>;
};


export type QueryBookingsServicesV2ServiceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookingsServicesV2ServicesArgs = {
  queryInput?: InputMaybe<BookingsServicesV2QueryServicesRequestInput>;
};


export type QueryBookingsSessionsV1SessionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookingsSessionsV1SessionsArgs = {
  queryInput?: InputMaybe<BookingsCalendarV2QuerySessionsRequestInput>;
};


export type QueryBusinessToolsLocationsV1LocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBusinessToolsLocationsV1LocationsArgs = {
  queryInput?: InputMaybe<LocationsQueryLocationsRequestInput>;
};


export type QueryCrmExtendedFieldsV4ExtendedFieldArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCrmExtendedFieldsV4FieldsArgs = {
  queryInput?: InputMaybe<ContactsFieldsV4QueryExtendedFieldsRequestInput>;
};


export type QueryCrmLabelsV4ContactLabelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCrmLabelsV4LabelsArgs = {
  queryInput?: InputMaybe<ContactsLabelsV4QueryLabelsRequestInput>;
};


export type QueryDataItemsV2DataItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDataItemsV2DataItemsArgs = {
  queryInput?: InputMaybe<CloudDataDataQueryDataItemsRequestInput>;
};


export type QueryEcomCartV1CartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEcomCheckoutV1CheckoutArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEcomCurrentCartV1CartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEcomDiscountRulesV1DiscountRuleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEcomDiscountRulesV1DiscountRulesArgs = {
  queryInput?: InputMaybe<EcomDiscountsQueryDiscountRulesRequestInput>;
};


export type QueryEcomOrdersV1OrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEcomOrdersV1OrdersArgs = {
  queryInput?: InputMaybe<EcomOrdersV1QueryOrderRequestInput>;
};


export type QueryEventsPoliciesV2PoliciesArgs = {
  queryInput?: InputMaybe<EventsV2QueryPoliciesRequestInput>;
};


export type QueryEventsPoliciesV2PolicyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventsScheduleBookmarksV1ItemsArgs = {
  queryInput?: InputMaybe<EventsScheduleQueryScheduleItemsRequestInput>;
};


export type QueryEventsScheduleBookmarksV1ScheduleItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventsScheduleV1ItemsArgs = {
  queryInput?: InputMaybe<EventsScheduleQueryScheduleItemsRequestInput>;
};


export type QueryEventsScheduleV1ScheduleItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMembersMembersV1MemberArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMembersMembersV1MembersArgs = {
  queryInput?: InputMaybe<MembersQueryMembersRequestInput>;
};


export type QueryPricingPlansPlansV2PlanArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPricingPlansPlansV2PlansArgs = {
  queryInput?: InputMaybe<MembershipV2PlansQueryPublicPlansRequestInput>;
};


export type QueryRestaurantsMenuItemsV1ItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRestaurantsMenuItemsV1ItemsArgs = {
  queryInput?: InputMaybe<RestaurantsMenusItemV1QueryItemsRequestInput>;
};


export type QueryRestaurantsMenusItemLabelsV1LabelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRestaurantsMenusItemLabelsV1LabelsArgs = {
  queryInput?: InputMaybe<RestaurantsMenusItemLabelsV1QueryLabelsRequestInput>;
};


export type QueryRestaurantsMenusItemModifierV1ModifierArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRestaurantsMenusItemModifierV1ModifiersArgs = {
  queryInput?: InputMaybe<RestaurantsMenusItemModifierV1QueryModifiersRequestInput>;
};


export type QueryRestaurantsMenusV1ItemsArgs = {
  queryInput?: InputMaybe<RestaurantsMenusV1QueryModifierGroupsRequestInput>;
};


export type QueryRestaurantsMenusV1MenuArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRestaurantsMenusV1MenusArgs = {
  queryInput?: InputMaybe<RestaurantsMenusMenuV1QueryMenusRequestInput>;
};


export type QueryRestaurantsMenusV1ModifierGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRestaurantsSectionsV1SectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRestaurantsSectionsV1SectionsArgs = {
  queryInput?: InputMaybe<RestaurantsMenusSectionV1QuerySectionsRequestInput>;
};


export type QueryStoresCollectionsV1CollectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStoresCollectionsV1CollectionsArgs = {
  queryInput?: InputMaybe<CatalogV2QueryCollectionsRequestInput>;
};


export type QueryStoresProductsV1ProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStoresProductsV1ProductsArgs = {
  queryInput?: InputMaybe<CatalogV1QueryProductsPlatformizedRequestInput>;
};

export type RestaurantsMenusItemLabelsV1CreateLabelRequestInput = {
  /** Label to be created */
  label?: InputMaybe<RestaurantsMenusItemLabelsV1LabelInput>;
};

export type RestaurantsMenusItemLabelsV1CreateLabelResponse = {
  __typename?: 'RestaurantsMenusItemLabelsV1CreateLabelResponse';
  /** The created Label */
  label?: Maybe<RestaurantsMenusItemLabelsV1Label>;
};

export type RestaurantsMenusItemLabelsV1DeleteLabelRequestInput = {
  /** Id of the Label to delete */
  labelId?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusItemLabelsV1Label = {
  __typename?: 'RestaurantsMenusItemLabelsV1Label';
  /** Represents the time this Label was created */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Label icon */
  icon?: Maybe<RestaurantsMenusItemLabelsV1UpstreamCommonImage>;
  /** Label ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Label name */
  name?: Maybe<Scalars['String']['output']>;
  /** Represents the current state of a menu. Each time the menu is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision */
  revision?: Maybe<Scalars['Int']['output']>;
  /** Represents the time this Label was last updated */
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type RestaurantsMenusItemLabelsV1LabelInput = {
  /** Represents the time this Label was created */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Label icon */
  icon?: InputMaybe<RestaurantsMenusItemLabelsV1UpstreamCommonImageInput>;
  /** Label ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Label name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Represents the current state of a menu. Each time the menu is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** Represents the time this Label was last updated */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusItemLabelsV1ListLabelsResponse = {
  __typename?: 'RestaurantsMenusItemLabelsV1ListLabelsResponse';
  labels?: Maybe<Array<Maybe<RestaurantsMenusItemLabelsV1Label>>>;
};

export type RestaurantsMenusItemLabelsV1QueryLabelsRequestInput = {
  query?: InputMaybe<RestaurantsMenusItemLabelsV1UpstreamCommonCursorQueryInput>;
};

export type RestaurantsMenusItemLabelsV1QueryLabelsResponse = {
  __typename?: 'RestaurantsMenusItemLabelsV1QueryLabelsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<RestaurantsMenusItemLabelsV1Label>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type RestaurantsMenusItemLabelsV1UpdateLabelRequestInput = {
  /** Label to be updated, may be partial */
  label?: InputMaybe<RestaurantsMenusItemLabelsV1LabelInput>;
  /** Explicit list of fields to update */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RestaurantsMenusItemLabelsV1UpdateLabelResponse = {
  __typename?: 'RestaurantsMenusItemLabelsV1UpdateLabelResponse';
  /** The updated Label */
  label?: Maybe<RestaurantsMenusItemLabelsV1Label>;
};

export type RestaurantsMenusItemLabelsV1UpstreamCommonCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   *
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type RestaurantsMenusItemLabelsV1UpstreamCommonCursorQueryInput = {
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<RestaurantsMenusItemLabelsV1UpstreamCommonCursorPagingInput>;
  /**
   * Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type RestaurantsMenusItemLabelsV1UpstreamCommonImage = {
  __typename?: 'RestaurantsMenusItemLabelsV1UpstreamCommonImage';
  /** Image alt text. */
  altText?: Maybe<Scalars['String']['output']>;
  /** Image filename. */
  filename?: Maybe<Scalars['String']['output']>;
  /** Original image height. */
  height?: Maybe<Scalars['Int']['output']>;
  /** WixMedia image ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Image size in bytes. */
  sizeInBytes?: Maybe<Scalars['String']['output']>;
  /** Image URL. */
  url?: Maybe<Scalars['String']['output']>;
  /** Image URL expiration date (when relevant). */
  urlExpirationDate?: Maybe<Scalars['String']['output']>;
  /** Original image width. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type RestaurantsMenusItemLabelsV1UpstreamCommonImageInput = {
  /** Image alt text. */
  altText?: InputMaybe<Scalars['String']['input']>;
  /** Image filename. */
  filename?: InputMaybe<Scalars['String']['input']>;
  /** Original image height. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** WixMedia image ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Image size in bytes. */
  sizeInBytes?: InputMaybe<Scalars['String']['input']>;
  /** Image URL. */
  url?: InputMaybe<Scalars['String']['input']>;
  /** Image URL expiration date (when relevant). */
  urlExpirationDate?: InputMaybe<Scalars['String']['input']>;
  /** Original image width. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type RestaurantsMenusItemModifierV1BulkCreateModifierResult = {
  __typename?: 'RestaurantsMenusItemModifierV1BulkCreateModifierResult';
  itemMetadata?: Maybe<CommonItemMetadata>;
  modifier?: Maybe<RestaurantsMenusItemModifierV1Modifier>;
};

export type RestaurantsMenusItemModifierV1BulkCreateModifiersRequestInput = {
  modifiers?: InputMaybe<Array<InputMaybe<RestaurantsMenusItemModifierV1ModifierInput>>>;
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantsMenusItemModifierV1BulkCreateModifiersResponse = {
  __typename?: 'RestaurantsMenusItemModifierV1BulkCreateModifiersResponse';
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  results?: Maybe<Array<Maybe<RestaurantsMenusItemModifierV1BulkCreateModifierResult>>>;
};

export type RestaurantsMenusItemModifierV1BulkUpdateModifierResult = {
  __typename?: 'RestaurantsMenusItemModifierV1BulkUpdateModifierResult';
  itemMetadata?: Maybe<CommonItemMetadata>;
  modifier?: Maybe<RestaurantsMenusItemModifierV1Modifier>;
};

export type RestaurantsMenusItemModifierV1BulkUpdateModifiersRequestInput = {
  modifiers?: InputMaybe<Array<InputMaybe<RestaurantsMenusItemModifierV1MaskedModifierInput>>>;
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantsMenusItemModifierV1BulkUpdateModifiersResponse = {
  __typename?: 'RestaurantsMenusItemModifierV1BulkUpdateModifiersResponse';
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  results?: Maybe<Array<Maybe<RestaurantsMenusItemModifierV1BulkUpdateModifierResult>>>;
};

export type RestaurantsMenusItemModifierV1CreateModifierRequestInput = {
  /** Modifier to be created */
  modifier?: InputMaybe<RestaurantsMenusItemModifierV1ModifierInput>;
};

export type RestaurantsMenusItemModifierV1CreateModifierResponse = {
  __typename?: 'RestaurantsMenusItemModifierV1CreateModifierResponse';
  /** The created Modifier */
  modifier?: Maybe<RestaurantsMenusItemModifierV1Modifier>;
};

export type RestaurantsMenusItemModifierV1DeleteModifierRequestInput = {
  /** Id of the Modifier to delete */
  modifierId?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusItemModifierV1Inventory = {
  __typename?: 'RestaurantsMenusItemModifierV1Inventory';
  /** Whether the Modifier is out of stock */
  outOfStock?: Maybe<Scalars['Boolean']['output']>;
};

export type RestaurantsMenusItemModifierV1InventoryInput = {
  /** Whether the Modifier is out of stock */
  outOfStock?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantsMenusItemModifierV1ListModifiersRequestInput = {
  modifierIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paging?: InputMaybe<RestaurantsMenusItemModifierV1UpstreamCommonCursorPagingInput>;
};

export type RestaurantsMenusItemModifierV1ListModifiersResponse = {
  __typename?: 'RestaurantsMenusItemModifierV1ListModifiersResponse';
  metadata?: Maybe<RestaurantsMenusItemModifierV1UpstreamCommonCursorPagingMetadata>;
  modifiers?: Maybe<Array<Maybe<RestaurantsMenusItemModifierV1Modifier>>>;
};

export type RestaurantsMenusItemModifierV1MaskedModifierInput = {
  /** Explicit list of fields to update */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Modifier to be updated */
  modifier?: InputMaybe<RestaurantsMenusItemModifierV1ModifierInput>;
};

export type RestaurantsMenusItemModifierV1Modifier = {
  __typename?: 'RestaurantsMenusItemModifierV1Modifier';
  /** Represents the time this Modifier was created */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Modifier ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Modifier Inventory */
  inventory?: Maybe<RestaurantsMenusItemModifierV1Inventory>;
  /** Modifier Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision */
  revision?: Maybe<Scalars['Int']['output']>;
  /** The type of the modifier */
  type?: Maybe<RestaurantsMenusItemModifierV1ModifierType>;
  /** Represents the time this Modifier was last updated */
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type RestaurantsMenusItemModifierV1ModifierInput = {
  /** Represents the time this Modifier was created */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Modifier ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Modifier Inventory */
  inventory?: InputMaybe<RestaurantsMenusItemModifierV1InventoryInput>;
  /** Modifier Name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** The type of the modifier */
  type?: InputMaybe<RestaurantsMenusItemModifierV1ModifierType>;
  /** Represents the time this Modifier was last updated */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
};

export enum RestaurantsMenusItemModifierV1ModifierType {
  Modifier = 'MODIFIER',
  UnknownVariationAndModifier = 'UNKNOWN_VARIATION_AND_MODIFIER',
  Variant = 'VARIANT'
}

export type RestaurantsMenusItemModifierV1QueryModifiersRequestInput = {
  query?: InputMaybe<RestaurantsMenusItemModifierV1UpstreamCommonCursorQueryInput>;
};

export type RestaurantsMenusItemModifierV1QueryModifiersResponse = {
  __typename?: 'RestaurantsMenusItemModifierV1QueryModifiersResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<RestaurantsMenusItemModifierV1Modifier>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type RestaurantsMenusItemModifierV1UpdateModifierRequestInput = {
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Modifier to be updated, may be partial */
  modifier?: InputMaybe<RestaurantsMenusItemModifierV1ModifierInput>;
};

export type RestaurantsMenusItemModifierV1UpdateModifierResponse = {
  __typename?: 'RestaurantsMenusItemModifierV1UpdateModifierResponse';
  /** The updated Modifier */
  modifier?: Maybe<RestaurantsMenusItemModifierV1Modifier>;
};

export type RestaurantsMenusItemModifierV1UpstreamCommonCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   *
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type RestaurantsMenusItemModifierV1UpstreamCommonCursorPagingMetadata = {
  __typename?: 'RestaurantsMenusItemModifierV1UpstreamCommonCursorPagingMetadata';
  /** Number of items returned in the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Offset that was requested. */
  cursors?: Maybe<RestaurantsMenusItemModifierV1UpstreamCommonCursors>;
  /**
   * Indicates if there are more results after the current page.
   * If `true`, another page of results can be retrieved.
   * If `false`, this is the last page.
   */
  hasNext?: Maybe<Scalars['Boolean']['output']>;
};

export type RestaurantsMenusItemModifierV1UpstreamCommonCursorQueryInput = {
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<RestaurantsMenusItemModifierV1UpstreamCommonCursorPagingInput>;
  /**
   * Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type RestaurantsMenusItemModifierV1UpstreamCommonCursors = {
  __typename?: 'RestaurantsMenusItemModifierV1UpstreamCommonCursors';
  /** Cursor pointing to next page in the list of results. */
  next?: Maybe<Scalars['String']['output']>;
  /** Cursor pointing to previous page in the list of results. */
  prev?: Maybe<Scalars['String']['output']>;
};

export type RestaurantsMenusItemV1BulkCreateItemResult = {
  __typename?: 'RestaurantsMenusItemV1BulkCreateItemResult';
  item?: Maybe<RestaurantsMenusItemV1Item>;
  itemMetadata?: Maybe<CommonItemMetadata>;
};

export type RestaurantsMenusItemV1BulkCreateItemsRequestInput = {
  items?: InputMaybe<Array<InputMaybe<RestaurantsMenusItemV1ItemInput>>>;
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantsMenusItemV1BulkCreateItemsResponse = {
  __typename?: 'RestaurantsMenusItemV1BulkCreateItemsResponse';
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  results?: Maybe<Array<Maybe<RestaurantsMenusItemV1BulkCreateItemResult>>>;
};

export type RestaurantsMenusItemV1BulkDeleteItemResult = {
  __typename?: 'RestaurantsMenusItemV1BulkDeleteItemResult';
  itemMetadata?: Maybe<CommonItemMetadata>;
};

export type RestaurantsMenusItemV1BulkDeleteItemsRequestInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RestaurantsMenusItemV1BulkDeleteItemsResponse = {
  __typename?: 'RestaurantsMenusItemV1BulkDeleteItemsResponse';
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  results?: Maybe<Array<Maybe<RestaurantsMenusItemV1BulkDeleteItemResult>>>;
};

export type RestaurantsMenusItemV1BulkUpdateItemRequestInput = {
  /** Items to be updated. */
  items?: InputMaybe<Array<InputMaybe<RestaurantsMenusItemV1BulkUpdateItemRequestMaskedItemInput>>>;
  /** set to `true` if you wish to receive back the created items in the response */
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantsMenusItemV1BulkUpdateItemRequestMaskedItemInput = {
  /** Item to be updated, may be partial */
  item?: InputMaybe<RestaurantsMenusItemV1ItemInput>;
  /** Explicit list of fields to update. */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RestaurantsMenusItemV1BulkUpdateItemResponse = {
  __typename?: 'RestaurantsMenusItemV1BulkUpdateItemResponse';
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  results?: Maybe<Array<Maybe<RestaurantsMenusItemV1BulkUpdateItemResponseBulkItemResult>>>;
};

export type RestaurantsMenusItemV1BulkUpdateItemResponseBulkItemResult = {
  __typename?: 'RestaurantsMenusItemV1BulkUpdateItemResponseBulkItemResult';
  /** Only exists if `returnEntity` was set to true in the request */
  item?: Maybe<RestaurantsMenusItemV1Item>;
  itemMetadata?: Maybe<CommonItemMetadata>;
};

export type RestaurantsMenusItemV1CreateItemRequestInput = {
  /** Item to be created */
  item?: InputMaybe<RestaurantsMenusItemV1ItemInput>;
};

export type RestaurantsMenusItemV1CreateItemResponse = {
  __typename?: 'RestaurantsMenusItemV1CreateItemResponse';
  /** The created Item */
  item?: Maybe<RestaurantsMenusItemV1Item>;
};

export type RestaurantsMenusItemV1DeleteItemRequestInput = {
  /** Id of the Item to delete */
  itemId?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusItemV1Item = {
  __typename?: 'RestaurantsMenusItemV1Item';
  /** Item additional images */
  additionalImages?: Maybe<Array<Maybe<RestaurantsMenusItemV1UpstreamCommonImage>>>;
  /** Represents the time this Item was created */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Item description */
  description?: Maybe<Scalars['String']['output']>;
  /** Extended fields */
  extendedFields?: Maybe<CommonDataDataextensionsExtendedFields>;
  /** Item ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Item primary image */
  image?: Maybe<RestaurantsMenusItemV1UpstreamCommonImage>;
  /** Item labels */
  labels?: Maybe<Array<Maybe<RestaurantsMenusItemV1Label>>>;
  /** Modifier Groups */
  modifierGroups?: Maybe<Array<Maybe<RestaurantsMenusItemV1ModifierGroup>>>;
  /** Item name */
  name?: Maybe<Scalars['String']['output']>;
  /** Online order settings */
  orderSettings?: Maybe<RestaurantsMenusItemV1OrderSettings>;
  price?: Maybe<Scalars['String']['output']>;
  priceVariants?: Maybe<RestaurantsMenusItemV1PriceVariants>;
  /** Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision */
  revision?: Maybe<Scalars['Int']['output']>;
  sectionsVirtualReference?: Maybe<RestaurantsMenusSectionV1QuerySectionsResponse>;
  /** Represents the time this Item was last updated */
  updatedDate?: Maybe<Scalars['String']['output']>;
  /** Is visible */
  visible?: Maybe<Scalars['Boolean']['output']>;
};


export type RestaurantsMenusItemV1ItemSectionsVirtualReferenceArgs = {
  query?: InputMaybe<RestaurantsMenusSectionV1QuerySectionsRequestInput>;
};

export type RestaurantsMenusItemV1ItemInput = {
  /** Item additional images */
  additionalImages?: InputMaybe<Array<InputMaybe<RestaurantsMenusItemV1UpstreamCommonImageInput>>>;
  /** Represents the time this Item was created */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Item description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Extended fields */
  extendedFields?: InputMaybe<CommonDataDataextensionsExtendedFieldsInput>;
  /** Item ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Item primary image */
  image?: InputMaybe<RestaurantsMenusItemV1UpstreamCommonImageInput>;
  /** Item labels */
  labels?: InputMaybe<Array<InputMaybe<RestaurantsMenusItemV1LabelInput>>>;
  /** Modifier Groups */
  modifierGroups?: InputMaybe<Array<InputMaybe<RestaurantsMenusItemV1ModifierGroupInput>>>;
  /** Item name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Online order settings */
  orderSettings?: InputMaybe<RestaurantsMenusItemV1OrderSettingsInput>;
  price?: InputMaybe<Scalars['String']['input']>;
  priceVariants?: InputMaybe<RestaurantsMenusItemV1PriceVariantsInput>;
  /** Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** Represents the time this Item was last updated */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
  /** Is visible */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantsMenusItemV1Label = {
  __typename?: 'RestaurantsMenusItemV1Label';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<RestaurantsMenusItemLabelsV1Label>;
};

export type RestaurantsMenusItemV1LabelInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusItemV1ListItemsRequestInput = {
  itemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paging?: InputMaybe<RestaurantsMenusItemV1UpstreamCommonCursorPagingInput>;
};

export type RestaurantsMenusItemV1ListItemsResponse = {
  __typename?: 'RestaurantsMenusItemV1ListItemsResponse';
  items?: Maybe<Array<Maybe<RestaurantsMenusItemV1Item>>>;
  pagingMetadata?: Maybe<RestaurantsMenusItemV1UpstreamCommonCursorPagingMetadata>;
};

export type RestaurantsMenusItemV1ModifierAdditionalCost = {
  __typename?: 'RestaurantsMenusItemV1ModifierAdditionalCost';
  /** modifier additional cost. Can be 0 to represent free. */
  additionalCost?: Maybe<Scalars['String']['output']>;
  /** Modifier id */
  modifier?: Maybe<RestaurantsMenusItemModifierV1Modifier>;
  /** Modifier id */
  modifierId?: Maybe<Scalars['String']['output']>;
};

export type RestaurantsMenusItemV1ModifierAdditionalCostInput = {
  /** modifier additional cost. Can be 0 to represent free. */
  additionalCost?: InputMaybe<Scalars['String']['input']>;
  /** Modifier id */
  modifierId?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusItemV1ModifierGroup = {
  __typename?: 'RestaurantsMenusItemV1ModifierGroup';
  /** Modifier Group Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Modifier additional prices. */
  modifierAdditionalCost?: Maybe<Array<Maybe<RestaurantsMenusItemV1ModifierAdditionalCost>>>;
  /** Modifier Group Id */
  modifierGroup?: Maybe<RestaurantsMenusV1ModifierGroup>;
};

export type RestaurantsMenusItemV1ModifierGroupInput = {
  /** Modifier Group Id */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Modifier additional prices. */
  modifierAdditionalCost?: InputMaybe<Array<InputMaybe<RestaurantsMenusItemV1ModifierAdditionalCostInput>>>;
};

export type RestaurantsMenusItemV1OrderSettings = {
  __typename?: 'RestaurantsMenusItemV1OrderSettings';
  /** Whether a customer can add a special request when ordering this item. Defaults to `true`. */
  acceptSpecialRequests?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the item is out of stock. */
  outOfStock?: Maybe<Scalars['Boolean']['output']>;
  /** E-com defined tax group for the product */
  taxGroupId?: Maybe<Scalars['String']['output']>;
};

export type RestaurantsMenusItemV1OrderSettingsInput = {
  /** Whether a customer can add a special request when ordering this item. Defaults to `true`. */
  acceptSpecialRequests?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the item is out of stock. */
  outOfStock?: InputMaybe<Scalars['Boolean']['input']>;
  /** E-com defined tax group for the product */
  taxGroupId?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusItemV1PriceVariant = {
  __typename?: 'RestaurantsMenusItemV1PriceVariant';
  modifier?: Maybe<RestaurantsMenusItemModifierV1Modifier>;
  modifierId?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
};

export type RestaurantsMenusItemV1PriceVariantInput = {
  modifierId?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusItemV1PriceVariants = {
  __typename?: 'RestaurantsMenusItemV1PriceVariants';
  priceVariants?: Maybe<Array<Maybe<RestaurantsMenusItemV1PriceVariant>>>;
};

export type RestaurantsMenusItemV1PriceVariantsInput = {
  priceVariants?: InputMaybe<Array<InputMaybe<RestaurantsMenusItemV1PriceVariantInput>>>;
};

export type RestaurantsMenusItemV1QueryItemsRequestInput = {
  query?: InputMaybe<RestaurantsMenusItemV1UpstreamCommonCursorQueryInput>;
};

export type RestaurantsMenusItemV1QueryItemsResponse = {
  __typename?: 'RestaurantsMenusItemV1QueryItemsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<RestaurantsMenusItemV1Item>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type RestaurantsMenusItemV1UpdateItemRequestInput = {
  /** Item to be updated, may be partial */
  item?: InputMaybe<RestaurantsMenusItemV1ItemInput>;
  /** Explicit list of fields to update */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RestaurantsMenusItemV1UpdateItemResponse = {
  __typename?: 'RestaurantsMenusItemV1UpdateItemResponse';
  /** The updated Item */
  item?: Maybe<RestaurantsMenusItemV1Item>;
};

export type RestaurantsMenusItemV1UpstreamCommonCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   *
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type RestaurantsMenusItemV1UpstreamCommonCursorPagingMetadata = {
  __typename?: 'RestaurantsMenusItemV1UpstreamCommonCursorPagingMetadata';
  /** Number of items returned in the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Offset that was requested. */
  cursors?: Maybe<RestaurantsMenusItemV1UpstreamCommonCursors>;
  /**
   * Indicates if there are more results after the current page.
   * If `true`, another page of results can be retrieved.
   * If `false`, this is the last page.
   */
  hasNext?: Maybe<Scalars['Boolean']['output']>;
};

export type RestaurantsMenusItemV1UpstreamCommonCursorQueryInput = {
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<RestaurantsMenusItemV1UpstreamCommonCursorPagingInput>;
  /**
   * Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type RestaurantsMenusItemV1UpstreamCommonCursors = {
  __typename?: 'RestaurantsMenusItemV1UpstreamCommonCursors';
  /** Cursor pointing to next page in the list of results. */
  next?: Maybe<Scalars['String']['output']>;
  /** Cursor pointing to previous page in the list of results. */
  prev?: Maybe<Scalars['String']['output']>;
};

export type RestaurantsMenusItemV1UpstreamCommonImage = {
  __typename?: 'RestaurantsMenusItemV1UpstreamCommonImage';
  /** Image alt text. */
  altText?: Maybe<Scalars['String']['output']>;
  /** Image filename. */
  filename?: Maybe<Scalars['String']['output']>;
  /** Original image height. */
  height?: Maybe<Scalars['Int']['output']>;
  /** WixMedia image ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Image size in bytes. */
  sizeInBytes?: Maybe<Scalars['String']['output']>;
  /** Image URL. */
  url?: Maybe<Scalars['String']['output']>;
  /** Image URL expiration date (when relevant). */
  urlExpirationDate?: Maybe<Scalars['String']['output']>;
  /** Original image width. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type RestaurantsMenusItemV1UpstreamCommonImageInput = {
  /** Image alt text. */
  altText?: InputMaybe<Scalars['String']['input']>;
  /** Image filename. */
  filename?: InputMaybe<Scalars['String']['input']>;
  /** Original image height. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** WixMedia image ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Image size in bytes. */
  sizeInBytes?: InputMaybe<Scalars['String']['input']>;
  /** Image URL. */
  url?: InputMaybe<Scalars['String']['input']>;
  /** Image URL expiration date (when relevant). */
  urlExpirationDate?: InputMaybe<Scalars['String']['input']>;
  /** Original image width. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type RestaurantsMenusMenuV1BulkCreateMenuResult = {
  __typename?: 'RestaurantsMenusMenuV1BulkCreateMenuResult';
  menu?: Maybe<RestaurantsMenusMenuV1Menu>;
  menuMetadata?: Maybe<CommonItemMetadata>;
};

export type RestaurantsMenusMenuV1BulkCreateMenusRequestInput = {
  menus?: InputMaybe<Array<InputMaybe<RestaurantsMenusMenuV1MenuInput>>>;
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantsMenusMenuV1BulkCreateMenusResponse = {
  __typename?: 'RestaurantsMenusMenuV1BulkCreateMenusResponse';
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  results?: Maybe<Array<Maybe<RestaurantsMenusMenuV1BulkCreateMenuResult>>>;
};

export type RestaurantsMenusMenuV1BulkUpdateMenuRequestInput = {
  /** Menus to be updated. */
  menus?: InputMaybe<Array<InputMaybe<RestaurantsMenusMenuV1BulkUpdateMenuRequestMaskedMenuInput>>>;
  /** set to `true` if you wish to receive back the created menus in the response */
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantsMenusMenuV1BulkUpdateMenuRequestMaskedMenuInput = {
  /** Explicit list of fields to update. */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Menu to be updated, may be partial */
  menu?: InputMaybe<RestaurantsMenusMenuV1MenuInput>;
};

export type RestaurantsMenusMenuV1BulkUpdateMenuResponse = {
  __typename?: 'RestaurantsMenusMenuV1BulkUpdateMenuResponse';
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  results?: Maybe<Array<Maybe<RestaurantsMenusMenuV1BulkUpdateMenuResponseBulkMenuResult>>>;
};

export type RestaurantsMenusMenuV1BulkUpdateMenuResponseBulkMenuResult = {
  __typename?: 'RestaurantsMenusMenuV1BulkUpdateMenuResponseBulkMenuResult';
  /** Only exists if `returnEntity` was set to true in the request */
  menu?: Maybe<RestaurantsMenusMenuV1Menu>;
  menuMetadata?: Maybe<CommonItemMetadata>;
};

export type RestaurantsMenusMenuV1CreateMenuRequestInput = {
  /** Menu to be created */
  menu?: InputMaybe<RestaurantsMenusMenuV1MenuInput>;
};

export type RestaurantsMenusMenuV1CreateMenuResponse = {
  __typename?: 'RestaurantsMenusMenuV1CreateMenuResponse';
  /** The created Menu */
  menu?: Maybe<RestaurantsMenusMenuV1Menu>;
};

export type RestaurantsMenusMenuV1DeleteMenuRequestInput = {
  /** Id of the Menu to delete */
  menuId?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusMenuV1DeleteOrphanSectionsInput = {
  menuId?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusMenuV1ListMenusRequestInput = {
  menuIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paging?: InputMaybe<RestaurantsMenusMenuV1UpstreamCommonCursorPagingInput>;
};

export type RestaurantsMenusMenuV1ListMenusResponse = {
  __typename?: 'RestaurantsMenusMenuV1ListMenusResponse';
  menus?: Maybe<Array<Maybe<RestaurantsMenusMenuV1Menu>>>;
  pagingMetadata?: Maybe<RestaurantsMenusMenuV1UpstreamCommonCursorPagingMetadata>;
};

export type RestaurantsMenusMenuV1Menu = {
  __typename?: 'RestaurantsMenusMenuV1Menu';
  /** Represents the time this Menu was created */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Menu description */
  description?: Maybe<Scalars['String']['output']>;
  /** Data extension */
  extendedFields?: Maybe<CommonDataDataextensionsExtendedFields>;
  /** Menu ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Menu name */
  name?: Maybe<Scalars['String']['output']>;
  /** Order index */
  orderIdx?: Maybe<Scalars['Int']['output']>;
  /** Represents the current state of a menu. Each time the menu is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision */
  revision?: Maybe<Scalars['Int']['output']>;
  /** Section ids */
  sectionIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Section ids */
  sections?: Maybe<RestaurantsMenusSectionV1QuerySectionsResponse>;
  /** Represents the time this Menu was last updated */
  updatedDate?: Maybe<Scalars['String']['output']>;
  /** URL query param for displaying the menu in the livesite */
  urlQueryParam?: Maybe<Scalars['String']['output']>;
  /** Is visible */
  visible?: Maybe<Scalars['Boolean']['output']>;
};


export type RestaurantsMenusMenuV1MenuSectionsArgs = {
  query?: InputMaybe<RestaurantsMenusSectionV1QuerySectionsRequestInput>;
};

export type RestaurantsMenusMenuV1MenuInput = {
  /** Represents the time this Menu was created */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Menu description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Data extension */
  extendedFields?: InputMaybe<CommonDataDataextensionsExtendedFieldsInput>;
  /** Menu ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Menu name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Order index */
  orderIdx?: InputMaybe<Scalars['Int']['input']>;
  /** Represents the current state of a menu. Each time the menu is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** Section ids */
  sectionIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Represents the time this Menu was last updated */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
  /** URL query param for displaying the menu in the livesite */
  urlQueryParam?: InputMaybe<Scalars['String']['input']>;
  /** Is visible */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantsMenusMenuV1QueryMenusRequestInput = {
  query?: InputMaybe<RestaurantsMenusMenuV1UpstreamCommonCursorQueryInput>;
};

export type RestaurantsMenusMenuV1QueryMenusResponse = {
  __typename?: 'RestaurantsMenusMenuV1QueryMenusResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<RestaurantsMenusMenuV1Menu>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type RestaurantsMenusMenuV1UpdateExtendedFieldsResponse = {
  __typename?: 'RestaurantsMenusMenuV1UpdateExtendedFieldsResponse';
  namespace?: Maybe<Scalars['String']['output']>;
  /** only data from UpdateExtendedFieldsRequest namespace_data */
  namespaceData?: Maybe<Scalars['JSON']['output']>;
};

export type RestaurantsMenusMenuV1UpdateMenuRequestInput = {
  /** Explicit list of fields to update */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Menu to be updated, may be partial */
  menu?: InputMaybe<RestaurantsMenusMenuV1MenuInput>;
};

export type RestaurantsMenusMenuV1UpdateMenuResponse = {
  __typename?: 'RestaurantsMenusMenuV1UpdateMenuResponse';
  /** The updated Menu */
  menu?: Maybe<RestaurantsMenusMenuV1Menu>;
};

export type RestaurantsMenusMenuV1UpstreamCommonCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   *
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type RestaurantsMenusMenuV1UpstreamCommonCursorPagingMetadata = {
  __typename?: 'RestaurantsMenusMenuV1UpstreamCommonCursorPagingMetadata';
  /** Number of items returned in the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Offset that was requested. */
  cursors?: Maybe<RestaurantsMenusMenuV1UpstreamCommonCursors>;
  /**
   * Indicates if there are more results after the current page.
   * If `true`, another page of results can be retrieved.
   * If `false`, this is the last page.
   */
  hasNext?: Maybe<Scalars['Boolean']['output']>;
};

export type RestaurantsMenusMenuV1UpstreamCommonCursorQueryInput = {
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<RestaurantsMenusMenuV1UpstreamCommonCursorPagingInput>;
  /**
   * Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type RestaurantsMenusMenuV1UpstreamCommonCursors = {
  __typename?: 'RestaurantsMenusMenuV1UpstreamCommonCursors';
  /** Cursor pointing to next page in the list of results. */
  next?: Maybe<Scalars['String']['output']>;
  /** Cursor pointing to previous page in the list of results. */
  prev?: Maybe<Scalars['String']['output']>;
};

export type RestaurantsMenusSectionV1BulkCreateSectionResult = {
  __typename?: 'RestaurantsMenusSectionV1BulkCreateSectionResult';
  item?: Maybe<RestaurantsMenusSectionV1Section>;
  itemMetadata?: Maybe<CommonItemMetadata>;
};

export type RestaurantsMenusSectionV1BulkCreateSectionsRequestInput = {
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
  sections?: InputMaybe<Array<InputMaybe<RestaurantsMenusSectionV1SectionInput>>>;
};

export type RestaurantsMenusSectionV1BulkCreateSectionsResponse = {
  __typename?: 'RestaurantsMenusSectionV1BulkCreateSectionsResponse';
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  results?: Maybe<Array<Maybe<RestaurantsMenusSectionV1BulkCreateSectionResult>>>;
};

export type RestaurantsMenusSectionV1BulkDeleteSectionResult = {
  __typename?: 'RestaurantsMenusSectionV1BulkDeleteSectionResult';
  itemMetadata?: Maybe<CommonItemMetadata>;
};

export type RestaurantsMenusSectionV1BulkDeleteSectionsRequestInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RestaurantsMenusSectionV1BulkDeleteSectionsResponse = {
  __typename?: 'RestaurantsMenusSectionV1BulkDeleteSectionsResponse';
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  results?: Maybe<Array<Maybe<RestaurantsMenusSectionV1BulkDeleteSectionResult>>>;
};

export type RestaurantsMenusSectionV1BulkUpdateSectionRequestInput = {
  /** set to `true` if you wish to receive back the created sections in the response */
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
  /** Sections to be updated. */
  sections?: InputMaybe<Array<InputMaybe<RestaurantsMenusSectionV1BulkUpdateSectionRequestMaskedSectionInput>>>;
};

export type RestaurantsMenusSectionV1BulkUpdateSectionRequestMaskedSectionInput = {
  /** Explicit list of fields to update. */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Section to be updated, may be partial */
  section?: InputMaybe<RestaurantsMenusSectionV1SectionInput>;
};

export type RestaurantsMenusSectionV1BulkUpdateSectionResponse = {
  __typename?: 'RestaurantsMenusSectionV1BulkUpdateSectionResponse';
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  results?: Maybe<Array<Maybe<RestaurantsMenusSectionV1BulkUpdateSectionResponseBulkSectionResult>>>;
};

export type RestaurantsMenusSectionV1BulkUpdateSectionResponseBulkSectionResult = {
  __typename?: 'RestaurantsMenusSectionV1BulkUpdateSectionResponseBulkSectionResult';
  /** Only exists if `returnEntity` was set to true in the request */
  section?: Maybe<RestaurantsMenusSectionV1Section>;
  sectionMetadata?: Maybe<CommonItemMetadata>;
};

export type RestaurantsMenusSectionV1CreateSectionRequestInput = {
  /** Section to be created */
  section?: InputMaybe<RestaurantsMenusSectionV1SectionInput>;
};

export type RestaurantsMenusSectionV1CreateSectionResponse = {
  __typename?: 'RestaurantsMenusSectionV1CreateSectionResponse';
  /** The created Section */
  section?: Maybe<RestaurantsMenusSectionV1Section>;
};

export type RestaurantsMenusSectionV1DeleteOrphanItemsInput = {
  sectionId?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusSectionV1DeleteSectionRequestInput = {
  /** Id of the Section to delete */
  sectionId?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusSectionV1ListSectionsRequestInput = {
  paging?: InputMaybe<RestaurantsMenusSectionV1UpstreamCommonCursorPagingInput>;
  sectionIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RestaurantsMenusSectionV1ListSectionsResponse = {
  __typename?: 'RestaurantsMenusSectionV1ListSectionsResponse';
  pagingMetadata?: Maybe<RestaurantsMenusSectionV1UpstreamCommonCursorPagingMetadata>;
  sections?: Maybe<Array<Maybe<RestaurantsMenusSectionV1Section>>>;
};

export type RestaurantsMenusSectionV1QuerySectionsRequestInput = {
  query?: InputMaybe<RestaurantsMenusSectionV1UpstreamCommonCursorQueryInput>;
};

export type RestaurantsMenusSectionV1QuerySectionsResponse = {
  __typename?: 'RestaurantsMenusSectionV1QuerySectionsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<RestaurantsMenusSectionV1Section>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type RestaurantsMenusSectionV1Section = {
  __typename?: 'RestaurantsMenusSectionV1Section';
  /** Section additional images */
  additionalImages?: Maybe<Array<Maybe<RestaurantsMenusSectionV1UpstreamCommonImage>>>;
  /** Represents the time this Section was created */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** Section description */
  description?: Maybe<Scalars['String']['output']>;
  /** Section ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Section primary image */
  image?: Maybe<RestaurantsMenusSectionV1UpstreamCommonImage>;
  /** Item ids */
  itemIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Item ids */
  items?: Maybe<RestaurantsMenusItemV1QueryItemsResponse>;
  menusVirtualReference?: Maybe<RestaurantsMenusMenuV1QueryMenusResponse>;
  /** Section name */
  name?: Maybe<Scalars['String']['output']>;
  /** Represents the current state of a section. Each time the section is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision */
  revision?: Maybe<Scalars['Int']['output']>;
  /** Represents the time this Section was last updated */
  updatedDate?: Maybe<Scalars['String']['output']>;
};


export type RestaurantsMenusSectionV1SectionItemsArgs = {
  query?: InputMaybe<RestaurantsMenusItemV1QueryItemsRequestInput>;
};


export type RestaurantsMenusSectionV1SectionMenusVirtualReferenceArgs = {
  query?: InputMaybe<RestaurantsMenusMenuV1QueryMenusRequestInput>;
};

export type RestaurantsMenusSectionV1SectionInput = {
  /** Section additional images */
  additionalImages?: InputMaybe<Array<InputMaybe<RestaurantsMenusSectionV1UpstreamCommonImageInput>>>;
  /** Represents the time this Section was created */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** Section description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Section ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Section primary image */
  image?: InputMaybe<RestaurantsMenusSectionV1UpstreamCommonImageInput>;
  /** Item ids */
  itemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Section name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Represents the current state of a section. Each time the section is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision */
  revision?: InputMaybe<Scalars['Int']['input']>;
  /** Represents the time this Section was last updated */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusSectionV1UpdateSectionRequestInput = {
  /** Explicit list of fields to update */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Section to be updated, may be partial */
  section?: InputMaybe<RestaurantsMenusSectionV1SectionInput>;
};

export type RestaurantsMenusSectionV1UpdateSectionResponse = {
  __typename?: 'RestaurantsMenusSectionV1UpdateSectionResponse';
  /** The updated Section */
  section?: Maybe<RestaurantsMenusSectionV1Section>;
};

export type RestaurantsMenusSectionV1UpstreamCommonCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   *
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type RestaurantsMenusSectionV1UpstreamCommonCursorPagingMetadata = {
  __typename?: 'RestaurantsMenusSectionV1UpstreamCommonCursorPagingMetadata';
  /** Number of items returned in the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Offset that was requested. */
  cursors?: Maybe<RestaurantsMenusSectionV1UpstreamCommonCursors>;
  /**
   * Indicates if there are more results after the current page.
   * If `true`, another page of results can be retrieved.
   * If `false`, this is the last page.
   */
  hasNext?: Maybe<Scalars['Boolean']['output']>;
};

export type RestaurantsMenusSectionV1UpstreamCommonCursorQueryInput = {
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<RestaurantsMenusSectionV1UpstreamCommonCursorPagingInput>;
  /**
   * Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type RestaurantsMenusSectionV1UpstreamCommonCursors = {
  __typename?: 'RestaurantsMenusSectionV1UpstreamCommonCursors';
  /** Cursor pointing to next page in the list of results. */
  next?: Maybe<Scalars['String']['output']>;
  /** Cursor pointing to previous page in the list of results. */
  prev?: Maybe<Scalars['String']['output']>;
};

export type RestaurantsMenusSectionV1UpstreamCommonImage = {
  __typename?: 'RestaurantsMenusSectionV1UpstreamCommonImage';
  /** Image alt text. */
  altText?: Maybe<Scalars['String']['output']>;
  /** Image filename. */
  filename?: Maybe<Scalars['String']['output']>;
  /** Original image height. */
  height?: Maybe<Scalars['Int']['output']>;
  /** WixMedia image ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Image size in bytes. */
  sizeInBytes?: Maybe<Scalars['String']['output']>;
  /** Image URL. */
  url?: Maybe<Scalars['String']['output']>;
  /** Image URL expiration date (when relevant). */
  urlExpirationDate?: Maybe<Scalars['String']['output']>;
  /** Original image width. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type RestaurantsMenusSectionV1UpstreamCommonImageInput = {
  /** Image alt text. */
  altText?: InputMaybe<Scalars['String']['input']>;
  /** Image filename. */
  filename?: InputMaybe<Scalars['String']['input']>;
  /** Original image height. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** WixMedia image ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Image size in bytes. */
  sizeInBytes?: InputMaybe<Scalars['String']['input']>;
  /** Image URL. */
  url?: InputMaybe<Scalars['String']['input']>;
  /** Image URL expiration date (when relevant). */
  urlExpirationDate?: InputMaybe<Scalars['String']['input']>;
  /** Original image width. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type RestaurantsMenusV1BulkCreateModifierGroupsRequestInput = {
  modifierGroups?: InputMaybe<Array<InputMaybe<RestaurantsMenusV1ModifierGroupInput>>>;
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantsMenusV1BulkCreateModifierGroupsResponse = {
  __typename?: 'RestaurantsMenusV1BulkCreateModifierGroupsResponse';
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  results?: Maybe<Array<Maybe<RestaurantsMenusV1BulkCreateModifierGroupsResult>>>;
};

export type RestaurantsMenusV1BulkCreateModifierGroupsResult = {
  __typename?: 'RestaurantsMenusV1BulkCreateModifierGroupsResult';
  itemMetadata?: Maybe<CommonItemMetadata>;
  modifierGroup?: Maybe<RestaurantsMenusV1ModifierGroup>;
};

export type RestaurantsMenusV1BulkUpdateModifierGroupsRequestInput = {
  modifierGroups?: InputMaybe<Array<InputMaybe<RestaurantsMenusV1MaskedModifierGroupInput>>>;
  returnEntity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantsMenusV1BulkUpdateModifierGroupsResponse = {
  __typename?: 'RestaurantsMenusV1BulkUpdateModifierGroupsResponse';
  bulkActionMetadata?: Maybe<CommonBulkActionMetadata>;
  results?: Maybe<Array<Maybe<RestaurantsMenusV1BulkUpdateModifierGroupsResult>>>;
};

export type RestaurantsMenusV1BulkUpdateModifierGroupsResult = {
  __typename?: 'RestaurantsMenusV1BulkUpdateModifierGroupsResult';
  itemMetadata?: Maybe<CommonItemMetadata>;
  modifierGroup?: Maybe<RestaurantsMenusV1ModifierGroup>;
};

export type RestaurantsMenusV1CreateModifierGroupRequestInput = {
  /** ModifierGroup to be created */
  modifierGroup?: InputMaybe<RestaurantsMenusV1ModifierGroupInput>;
};

export type RestaurantsMenusV1CreateModifierGroupResponse = {
  __typename?: 'RestaurantsMenusV1CreateModifierGroupResponse';
  /** The created ModifierGroup */
  modifierGroup?: Maybe<RestaurantsMenusV1ModifierGroup>;
};

export type RestaurantsMenusV1DeleteModifierGroupRequestInput = {
  /** Id of the ModifierGroup to delete */
  modifierGroupId?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusV1ListModifierGroupRequestInput = {
  modifierGroupIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paging?: InputMaybe<RestaurantsMenusV1UpstreamCommonCursorPagingInput>;
};

export type RestaurantsMenusV1ListModifierGroupResponse = {
  __typename?: 'RestaurantsMenusV1ListModifierGroupResponse';
  metadata?: Maybe<RestaurantsMenusV1UpstreamCommonCursorPagingMetadata>;
  modifierGroups?: Maybe<Array<Maybe<RestaurantsMenusV1ModifierGroup>>>;
};

export type RestaurantsMenusV1MaskedModifierGroupInput = {
  /** Explicit list of fields to update */
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** ModifierGroup to be updated */
  modifierGroup?: InputMaybe<RestaurantsMenusV1ModifierGroupInput>;
};

export type RestaurantsMenusV1Modifier = {
  __typename?: 'RestaurantsMenusV1Modifier';
  /** Modifier additional charge. Can be 0 to represent free. */
  additionalCharge?: Maybe<Scalars['String']['output']>;
  /** Modifier ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Modifier ID */
  modifier?: Maybe<RestaurantsMenusItemModifierV1Modifier>;
};

export type RestaurantsMenusV1ModifierGroup = {
  __typename?: 'RestaurantsMenusV1ModifierGroup';
  /** Represents the time this ModifierGroup was created */
  createdDate?: Maybe<Scalars['String']['output']>;
  /** ModifierGroup ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Modifiers */
  modifiers?: Maybe<Array<Maybe<RestaurantsMenusV1Modifier>>>;
  /** Modifier group name */
  name?: Maybe<Scalars['String']['output']>;
  /** Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision */
  revision?: Maybe<Scalars['Int']['output']>;
  rule?: Maybe<RestaurantsMenusV1Rule>;
  /** Represents the time this ModifierGroup was last updated */
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type RestaurantsMenusV1ModifierGroupInput = {
  /** Represents the time this ModifierGroup was created */
  createdDate?: InputMaybe<Scalars['String']['input']>;
  /** ModifierGroup ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Modifiers */
  modifiers?: InputMaybe<Array<InputMaybe<RestaurantsMenusV1ModifierInput>>>;
  /** Modifier group name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision */
  revision?: InputMaybe<Scalars['Int']['input']>;
  rule?: InputMaybe<RestaurantsMenusV1RuleInput>;
  /** Represents the time this ModifierGroup was last updated */
  updatedDate?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusV1ModifierInput = {
  /** Modifier additional charge. Can be 0 to represent free. */
  additionalCharge?: InputMaybe<Scalars['String']['input']>;
  /** Modifier ID */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantsMenusV1QueryModifierGroupsRequestInput = {
  query?: InputMaybe<RestaurantsMenusV1UpstreamCommonCursorQueryInput>;
};

export type RestaurantsMenusV1QueryModifierGroupsResponse = {
  __typename?: 'RestaurantsMenusV1QueryModifierGroupsResponse';
  /** Query results */
  items?: Maybe<Array<Maybe<RestaurantsMenusV1ModifierGroup>>>;
  /** Pagination data */
  pageInfo?: Maybe<PageInfo>;
};

export type RestaurantsMenusV1Rule = {
  __typename?: 'RestaurantsMenusV1Rule';
  /** Whether user required to choose modifier */
  mandatory?: Maybe<Scalars['Boolean']['output']>;
  /** Modifier that customers can add to a dish. For example a topping. Customers can add multiple extras per dish. */
  multiSelectOptions?: Maybe<RestaurantsMenusV1RuleMultiSelect>;
  /** One modifier that customers can select. For example a dish size. Customers can choose only a single selection per dish. */
  singleSelectOptions?: Maybe<Scalars['Void']['output']>;
  /** type of the rule - selection method */
  type?: Maybe<RestaurantsMenusV1RuleType>;
};

export type RestaurantsMenusV1RuleInput = {
  /** Whether user required to choose modifier */
  mandatory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Modifier that customers can add to a dish. For example a topping. Customers can add multiple extras per dish. */
  multiSelectOptions?: InputMaybe<RestaurantsMenusV1RuleMultiSelectInput>;
  /** One modifier that customers can select. For example a dish size. Customers can choose only a single selection per dish. */
  singleSelectOptions?: InputMaybe<Scalars['Void']['input']>;
  /** type of the rule - selection method */
  type?: InputMaybe<RestaurantsMenusV1RuleType>;
};

export type RestaurantsMenusV1RuleMultiSelect = {
  __typename?: 'RestaurantsMenusV1RuleMultiSelect';
  /** Number of selections given to the customer for free. */
  freeSelections?: Maybe<Scalars['Int']['output']>;
  /** Maximum number of extras a customer can choose. Must be greater than or equal to the value of `minSelections`. */
  maxSelections?: Maybe<Scalars['Int']['output']>;
  /** Minimum number of extras a customer must choose. Defaults to `0`. Must be lower or equal to the available modifiers in the group */
  minSelections?: Maybe<Scalars['Int']['output']>;
};

export type RestaurantsMenusV1RuleMultiSelectInput = {
  /** Number of selections given to the customer for free. */
  freeSelections?: InputMaybe<Scalars['Int']['input']>;
  /** Maximum number of extras a customer can choose. Must be greater than or equal to the value of `minSelections`. */
  maxSelections?: InputMaybe<Scalars['Int']['input']>;
  /** Minimum number of extras a customer must choose. Defaults to `0`. Must be lower or equal to the available modifiers in the group */
  minSelections?: InputMaybe<Scalars['Int']['input']>;
};

export enum RestaurantsMenusV1RuleType {
  MultiSelect = 'MULTI_SELECT',
  SingleSelect = 'SINGLE_SELECT',
  UnspecifiedRule = 'UNSPECIFIED_RULE'
}

export type RestaurantsMenusV1UpdateModifierGroupRequestInput = {
  mask?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** ModifierGroup to be updated, may be partial */
  modifierGroup?: InputMaybe<RestaurantsMenusV1ModifierGroupInput>;
};

export type RestaurantsMenusV1UpdateModifierGroupResponse = {
  __typename?: 'RestaurantsMenusV1UpdateModifierGroupResponse';
  /** The updated ModifierGroup */
  modifierGroup?: Maybe<RestaurantsMenusV1ModifierGroup>;
};

export type RestaurantsMenusV1UpstreamCommonCursorPagingInput = {
  /**
   * Pointer to the next or previous page in the list of results.
   *
   * You can get the relevant cursor token
   * from the `pagingMetadata` object in the previous call's response.
   * Not relevant for the first request.
   */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** Number of items to load. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type RestaurantsMenusV1UpstreamCommonCursorPagingMetadata = {
  __typename?: 'RestaurantsMenusV1UpstreamCommonCursorPagingMetadata';
  /** Number of items returned in the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Offset that was requested. */
  cursors?: Maybe<RestaurantsMenusV1UpstreamCommonCursors>;
  /**
   * Indicates if there are more results after the current page.
   * If `true`, another page of results can be retrieved.
   * If `false`, this is the last page.
   */
  hasNext?: Maybe<Scalars['Boolean']['output']>;
};

export type RestaurantsMenusV1UpstreamCommonCursorQueryInput = {
  /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
  cursorPaging?: InputMaybe<RestaurantsMenusV1UpstreamCommonCursorPagingInput>;
  /**
   * Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Sort object in the following format:
   * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
   */
  sort?: InputMaybe<Array<InputMaybe<CommonSortingInput>>>;
};

export type RestaurantsMenusV1UpstreamCommonCursors = {
  __typename?: 'RestaurantsMenusV1UpstreamCommonCursors';
  /** Cursor pointing to next page in the list of results. */
  next?: Maybe<Scalars['String']['output']>;
  /** Cursor pointing to previous page in the list of results. */
  prev?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1AnchorData = {
  __typename?: 'RichContentV1AnchorData';
  /** The target node's ID. */
  anchor?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1AppEmbedData = {
  __typename?: 'RichContentV1AppEmbedData';
  /** Data for embedded Wix Bookings content. */
  bookingData?: Maybe<RichContentV1AppEmbedDataBookingData>;
  /** Data for embedded Wix Events content. */
  eventData?: Maybe<RichContentV1AppEmbedDataEventData>;
  /** An image for the embedded content. */
  image?: Maybe<RichContentV1Media>;
  /** Deprecated: Use `image` instead. */
  imageSrc?: Maybe<Scalars['String']['output']>;
  /** The ID of the embedded content. */
  itemId?: Maybe<Scalars['String']['output']>;
  /** The name of the embedded content. */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of Wix App content being embedded. */
  type?: Maybe<RichContentV1AppEmbedDataAppType>;
  /** The URL for the embedded content. */
  url?: Maybe<Scalars['String']['output']>;
};

export enum RichContentV1AppEmbedDataAppType {
  Booking = 'BOOKING',
  Event = 'EVENT',
  Product = 'PRODUCT'
}

export type RichContentV1AppEmbedDataBookingData = {
  __typename?: 'RichContentV1AppEmbedDataBookingData';
  /** Booking duration in minutes. */
  durations?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1AppEmbedDataEventData = {
  __typename?: 'RichContentV1AppEmbedDataEventData';
  /** Event location. */
  location?: Maybe<Scalars['String']['output']>;
  /** Event schedule. */
  scheduling?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1AudioData = {
  __typename?: 'RichContentV1AudioData';
  /** Audio file details. */
  audio?: Maybe<RichContentV1Media>;
  /** Author name. */
  authorName?: Maybe<Scalars['String']['output']>;
  /** Styling for the audio node's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** Cover image. */
  coverImage?: Maybe<RichContentV1Media>;
  /** Sets whether the audio node's download button is disabled. */
  disableDownload?: Maybe<Scalars['Boolean']['output']>;
  /** An HTML version of the audio node. */
  html?: Maybe<Scalars['String']['output']>;
  /** Track name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1BlockquoteData = {
  __typename?: 'RichContentV1BlockquoteData';
  /** Indentation level. */
  indentation?: Maybe<Scalars['Int']['output']>;
};

export type RichContentV1BulletedListData = {
  __typename?: 'RichContentV1BulletedListData';
  /** Indentation level. */
  indentation?: Maybe<Scalars['Int']['output']>;
};

export type RichContentV1ButtonData = {
  __typename?: 'RichContentV1ButtonData';
  /** Styling for the button's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** Button link details. */
  link?: Maybe<RichContentV1Link>;
  /** Styling for the button. */
  styles?: Maybe<RichContentV1ButtonDataStyles>;
  /** The text to display on the button. */
  text?: Maybe<Scalars['String']['output']>;
  /** The button type. */
  type?: Maybe<RichContentV1ButtonDataType>;
};

export type RichContentV1ButtonDataStyles = {
  __typename?: 'RichContentV1ButtonDataStyles';
  /** Border attributes. */
  border?: Maybe<RichContentV1ButtonDataStylesBorder>;
  /** Color attributes. */
  colors?: Maybe<RichContentV1ButtonDataStylesColors>;
};

export type RichContentV1ButtonDataStylesBorder = {
  __typename?: 'RichContentV1ButtonDataStylesBorder';
  /** Border radius in pixels. */
  radius?: Maybe<Scalars['Int']['output']>;
  /** Border width in pixels. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type RichContentV1ButtonDataStylesColors = {
  __typename?: 'RichContentV1ButtonDataStylesColors';
  /** The background color as a hexadecimal value. */
  background?: Maybe<Scalars['String']['output']>;
  /** The border color as a hexadecimal value. */
  border?: Maybe<Scalars['String']['output']>;
  /** The text color as a hexadecimal value. */
  text?: Maybe<Scalars['String']['output']>;
};

export enum RichContentV1ButtonDataType {
  /** Triggers custom action that is defined in plugin configuration by the consumer */
  Action = 'ACTION',
  /** Regular link button */
  Link = 'LINK'
}

export type RichContentV1CodeBlockData = {
  __typename?: 'RichContentV1CodeBlockData';
  /** Styling for the code block's text. */
  textStyle?: Maybe<RichContentV1TextStyle>;
};

export type RichContentV1CollapsibleListData = {
  __typename?: 'RichContentV1CollapsibleListData';
  /** Styling for the collapsible list's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** The direction of the text in the list. Either left-to-right or right-to-left. */
  direction?: Maybe<RichContentV1CollapsibleListDataDirection>;
  /** If `true`, only one item can be expanded at a time. */
  expandOnlyOne?: Maybe<Scalars['Boolean']['output']>;
  /** Sets which items are expanded when the page loads. */
  initialExpandedItems?: Maybe<RichContentV1CollapsibleListDataInitialExpandedItems>;
  /** If `true`, The collapsible item will appear in search results as an FAQ. */
  isQapageData?: Maybe<Scalars['Boolean']['output']>;
};

export enum RichContentV1CollapsibleListDataDirection {
  /** Left-to-right */
  Ltr = 'LTR',
  /** Right-to-left */
  Rtl = 'RTL'
}

export enum RichContentV1CollapsibleListDataInitialExpandedItems {
  /** All items will expended initally */
  All = 'ALL',
  /** First item will be expended initally */
  First = 'FIRST',
  /** All items collapsed initally */
  None = 'NONE'
}

export type RichContentV1ColorData = {
  __typename?: 'RichContentV1ColorData';
  /** The text's background color as a hexadecimal value. */
  background?: Maybe<Scalars['String']['output']>;
  /** The text's foreground color as a hexadecimal value. */
  foreground?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1Decoration = {
  __typename?: 'RichContentV1Decoration';
  /** Data for an anchor link decoration. */
  anchorData?: Maybe<RichContentV1AnchorData>;
  /** Data for a color decoration. */
  colorData?: Maybe<RichContentV1ColorData>;
  /** Data for a font size decoration. */
  fontSizeData?: Maybe<RichContentV1FontSizeData>;
  /** Font weight for a bold decoration. */
  fontWeightValue?: Maybe<Scalars['Int']['output']>;
  /** Data for an italic decoration. */
  italicData?: Maybe<Scalars['Boolean']['output']>;
  /** Data for an external link decoration. */
  linkData?: Maybe<RichContentV1LinkData>;
  /** Data for a mention decoration. */
  mentionData?: Maybe<RichContentV1MentionData>;
  /** The type of decoration to apply. */
  type?: Maybe<RichContentV1DecorationType>;
  /** Data for an underline decoration. */
  underlineData?: Maybe<Scalars['Boolean']['output']>;
};

export enum RichContentV1DecorationType {
  Anchor = 'ANCHOR',
  Bold = 'BOLD',
  Color = 'COLOR',
  External = 'EXTERNAL',
  FontSize = 'FONT_SIZE',
  Italic = 'ITALIC',
  Link = 'LINK',
  Mention = 'MENTION',
  Spoiler = 'SPOILER',
  Underline = 'UNDERLINE'
}

export type RichContentV1DividerData = {
  __typename?: 'RichContentV1DividerData';
  /** Divider alignment. */
  alignment?: Maybe<RichContentV1DividerDataAlignment>;
  /** Styling for the divider's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** Divider line style. */
  lineStyle?: Maybe<RichContentV1DividerDataLineStyle>;
  /** Divider width. */
  width?: Maybe<RichContentV1DividerDataWidth>;
};

export enum RichContentV1DividerDataAlignment {
  /** Center alignment */
  Center = 'CENTER',
  /** Left alignment */
  Left = 'LEFT',
  /** Right alignment */
  Right = 'RIGHT'
}

export enum RichContentV1DividerDataLineStyle {
  /** Dashed Line */
  Dashed = 'DASHED',
  /** Dotted Line */
  Dotted = 'DOTTED',
  /** Double Line */
  Double = 'DOUBLE',
  /** Single Line */
  Single = 'SINGLE'
}

export enum RichContentV1DividerDataWidth {
  /** Large line */
  Large = 'LARGE',
  /** Medium line */
  Medium = 'MEDIUM',
  /** Small line */
  Small = 'SMALL'
}

export type RichContentV1DocumentStyle = {
  __typename?: 'RichContentV1DocumentStyle';
  /** Styling for block quote nodes. */
  blockquote?: Maybe<RichContentV1TextNodeStyle>;
  /** Styling for code block nodes. */
  codeBlock?: Maybe<RichContentV1TextNodeStyle>;
  /** Styling for H5 nodes. */
  headerFive?: Maybe<RichContentV1TextNodeStyle>;
  /** Styling for H4 nodes. */
  headerFour?: Maybe<RichContentV1TextNodeStyle>;
  /** Styling for H1 nodes. */
  headerOne?: Maybe<RichContentV1TextNodeStyle>;
  /** Styling for H6 nodes. */
  headerSix?: Maybe<RichContentV1TextNodeStyle>;
  /** Styling for H3 nodes. */
  headerThree?: Maybe<RichContentV1TextNodeStyle>;
  /** Styling for H2 nodes. */
  headerTwo?: Maybe<RichContentV1TextNodeStyle>;
  /** Styling for paragraph nodes. */
  paragraph?: Maybe<RichContentV1TextNodeStyle>;
};

export type RichContentV1EmbedData = {
  __typename?: 'RichContentV1EmbedData';
  /** Styling for the oEmbed node's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** An [oEmbed](https://www.oembed.com) object. */
  oembed?: Maybe<RichContentV1Oembed>;
  /** Origin asset source. */
  src?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1FileData = {
  __typename?: 'RichContentV1FileData';
  /** Styling for the file's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** File MIME type. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** File name. */
  name?: Maybe<Scalars['String']['output']>;
  /** File path. */
  path?: Maybe<Scalars['String']['output']>;
  /** Settings for PDF files. */
  pdfSettings?: Maybe<RichContentV1FileDataPdfSettings>;
  /** File size in KB. */
  size?: Maybe<Scalars['Int']['output']>;
  /** The source for the file's data. */
  src?: Maybe<RichContentV1FileSource>;
  /** File type. */
  type?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1FileDataPdfSettings = {
  __typename?: 'RichContentV1FileDataPDFSettings';
  /** Sets whether the PDF download button is disabled. */
  disableDownload?: Maybe<Scalars['Boolean']['output']>;
  /** Sets whether the PDF print button is disabled. */
  disablePrint?: Maybe<Scalars['Boolean']['output']>;
  /**
   * PDF view mode. One of the following:
   * `NONE` : The PDF isn't displayed.
   * `FULL` : A full page view of the PDF is displayed.
   * `MINI` : A mini view of the PDF is displayed.
   */
  viewMode?: Maybe<RichContentV1FileDataPdfSettingsViewMode>;
};

export enum RichContentV1FileDataPdfSettingsViewMode {
  /** Full PDF view */
  Full = 'FULL',
  /** Mini PDF view */
  Mini = 'MINI',
  /** No PDF view */
  None = 'NONE'
}

export type RichContentV1FileSource = {
  __typename?: 'RichContentV1FileSource';
  /** Custom ID. Use `id` instead. */
  custom?: Maybe<Scalars['String']['output']>;
  /** An ID that's resolved to a URL by a resolver function. */
  id?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the file's source is private. */
  private?: Maybe<Scalars['Boolean']['output']>;
  /** The absolute URL for the file's source. */
  url?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1FontSizeData = {
  __typename?: 'RichContentV1FontSizeData';
  /** The units used for the font size. */
  unit?: Maybe<RichContentV1FontSizeDatafontType>;
  /** Font size value. */
  value?: Maybe<Scalars['Int']['output']>;
};

export enum RichContentV1FontSizeDatafontType {
  Em = 'EM',
  Px = 'PX'
}

export type RichContentV1Gif = {
  __typename?: 'RichContentV1GIF';
  /** GIF format URL. */
  gif?: Maybe<Scalars['String']['output']>;
  /** MP4 format URL. */
  mp4?: Maybe<Scalars['String']['output']>;
  /** Thumbnail URL. */
  still?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1GifData = {
  __typename?: 'RichContentV1GIFData';
  /** Styling for the GIF's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** The source of the downsized GIF. */
  downsized?: Maybe<RichContentV1Gif>;
  /** Height in pixels. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The source of the full size GIF. */
  original?: Maybe<RichContentV1Gif>;
  /** Width in pixels. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type RichContentV1GalleryData = {
  __typename?: 'RichContentV1GalleryData';
  /** Styling for the gallery's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** Sets whether the gallery's download button is disabled. */
  disableDownload?: Maybe<Scalars['Boolean']['output']>;
  /** Sets whether the gallery's expand button is disabled. */
  disableExpand?: Maybe<Scalars['Boolean']['output']>;
  /** The items in the gallery. */
  items?: Maybe<Array<Maybe<RichContentV1GalleryDataItem>>>;
  /** Options for defining the gallery's appearance. */
  options?: Maybe<RichContentV1GalleryOptions>;
};

export type RichContentV1GalleryDataItem = {
  __typename?: 'RichContentV1GalleryDataItem';
  /** Item's alternative text. */
  altText?: Maybe<Scalars['String']['output']>;
  /** An image item. */
  image?: Maybe<RichContentV1GalleryDataItemImage>;
  /** Item title. */
  title?: Maybe<Scalars['String']['output']>;
  /** A video item. */
  video?: Maybe<RichContentV1GalleryDataItemVideo>;
};

export type RichContentV1GalleryDataItemImage = {
  __typename?: 'RichContentV1GalleryDataItemImage';
  /** Link details for images that are links. */
  link?: Maybe<RichContentV1Link>;
  /** Image file details. */
  media?: Maybe<RichContentV1Media>;
};

export type RichContentV1GalleryDataItemVideo = {
  __typename?: 'RichContentV1GalleryDataItemVideo';
  /** Video file details. */
  media?: Maybe<RichContentV1Media>;
  /** Video thumbnail file details. */
  thumbnail?: Maybe<RichContentV1Media>;
};

export type RichContentV1GalleryOptions = {
  __typename?: 'RichContentV1GalleryOptions';
  /** Styling for gallery items. */
  item?: Maybe<RichContentV1GalleryOptionsItemStyle>;
  /** Gallery layout. */
  layout?: Maybe<RichContentV1GalleryOptionsLayout>;
  /** Styling for gallery thumbnail images. */
  thumbnails?: Maybe<RichContentV1GalleryOptionsThumbnails>;
};

export type RichContentV1GalleryOptionsItemStyle = {
  __typename?: 'RichContentV1GalleryOptionsItemStyle';
  /** Sets how item images are cropped. */
  crop?: Maybe<RichContentV1GalleryOptionsItemStyleCrop>;
  /** Item ratio */
  ratio?: Maybe<Scalars['Float']['output']>;
  /** The spacing between items in pixels. */
  spacing?: Maybe<Scalars['Int']['output']>;
  /** Desirable dimension for each item in pixels (behvaior changes according to gallery type) */
  targetSize?: Maybe<Scalars['Int']['output']>;
};

export enum RichContentV1GalleryOptionsItemStyleCrop {
  /** Crop to fill */
  Fill = 'FILL',
  /** Crop to fit */
  Fit = 'FIT'
}

export type RichContentV1GalleryOptionsLayout = {
  __typename?: 'RichContentV1GalleryOptionsLayout';
  /** Sets whether horizontal scroll is enabled. */
  horizontalScroll?: Maybe<Scalars['Boolean']['output']>;
  /** The number of columns to display on mobile screens. */
  mobileNumberOfColumns?: Maybe<Scalars['Int']['output']>;
  /** The number of columns to display on full size screens. */
  numberOfColumns?: Maybe<Scalars['Int']['output']>;
  /** Gallery orientation. */
  orientation?: Maybe<RichContentV1GalleryOptionsLayoutOrientation>;
  /** Gallery layout type. */
  type?: Maybe<RichContentV1GalleryOptionsLayoutType>;
};

export enum RichContentV1GalleryOptionsLayoutOrientation {
  /** Columns Orientation */
  Columns = 'COLUMNS',
  /** Rows Orientation */
  Rows = 'ROWS'
}

export enum RichContentV1GalleryOptionsLayoutType {
  /** Collage type */
  Collage = 'COLLAGE',
  /** Column type */
  Column = 'COLUMN',
  /** Fullsize images type */
  Fullsize = 'FULLSIZE',
  /** Grid type */
  Grid = 'GRID',
  /** Magic type */
  Magic = 'MAGIC',
  /** Masonry type */
  Masonry = 'MASONRY',
  /** Panorama type */
  Panorama = 'PANORAMA',
  /** Slider type */
  Slider = 'SLIDER',
  /** Slideshow type */
  Slideshow = 'SLIDESHOW',
  /** Thumbnail type */
  Thumbnail = 'THUMBNAIL'
}

export type RichContentV1GalleryOptionsThumbnails = {
  __typename?: 'RichContentV1GalleryOptionsThumbnails';
  /** Thumbnail alignment. */
  placement?: Maybe<RichContentV1GalleryOptionsThumbnailsAlignment>;
  /** Spacing between thumbnails in pixels. */
  spacing?: Maybe<Scalars['Int']['output']>;
};

export enum RichContentV1GalleryOptionsThumbnailsAlignment {
  /** Bottom alignment */
  Bottom = 'BOTTOM',
  /** Left alignment */
  Left = 'LEFT',
  /** No thumbnail */
  None = 'NONE',
  /** Right alignment */
  Right = 'RIGHT',
  /** Top alignment */
  Top = 'TOP'
}

export type RichContentV1HtmlData = {
  __typename?: 'RichContentV1HTMLData';
  /** Styling for the HTML node's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** The HTML code for the node. */
  html?: Maybe<Scalars['String']['output']>;
  /** Whether this is an AdSense element. Use `source` instead. */
  isAdsense?: Maybe<Scalars['Boolean']['output']>;
  /** The type of HTML code. */
  source?: Maybe<RichContentV1HtmlDataSource>;
  /** The URL for the HTML code for the node. */
  url?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1HeadingData = {
  __typename?: 'RichContentV1HeadingData';
  /** Indentation level from 1-6. */
  indentation?: Maybe<Scalars['Int']['output']>;
  /** Heading level from 1-6. */
  level?: Maybe<Scalars['Int']['output']>;
  /** Styling for the heading text. */
  textStyle?: Maybe<RichContentV1TextStyle>;
};

export enum RichContentV1HtmlDataSource {
  Adsense = 'ADSENSE',
  Html = 'HTML'
}

export type RichContentV1ImageData = {
  __typename?: 'RichContentV1ImageData';
  /** Image's alternative text. */
  altText?: Maybe<Scalars['String']['output']>;
  /** Image caption. */
  caption?: Maybe<Scalars['String']['output']>;
  /** Styling for the image's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** Sets whether the image's download button is disabled. */
  disableDownload?: Maybe<Scalars['Boolean']['output']>;
  /** Sets whether the image expands to full screen when clicked. */
  disableExpand?: Maybe<Scalars['Boolean']['output']>;
  /** Image file details. */
  image?: Maybe<RichContentV1Media>;
  /** Link details for images that are links. */
  link?: Maybe<RichContentV1Link>;
};

export type RichContentV1Link = {
  __typename?: 'RichContentV1Link';
  /** The target node's ID. Used for linking to another node in this object. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** A serialized object used for a custom or external link panel. */
  customData?: Maybe<Scalars['String']['output']>;
  /** The HTML `rel` attribute value for the link. This object specifies the relationship between the current document and the linked document. */
  rel?: Maybe<RichContentV1LinkRel>;
  /**
   * he HTML `target` attribute value for the link. This property defines where the linked document opens as follows:
   * `SELF` - Default. Opens the linked document in the same frame as the link.
   * `BLANK` - Opens the linked document in a new browser tab or window.
   * `PARENT` - Opens the linked document in the link's parent frame.
   * `TOP` - Opens the linked document in the full body of the link's browser tab or window.
   */
  target?: Maybe<RichContentV1LinkTarget>;
  /** The absolute URL for the linked document. */
  url?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1LinkData = {
  __typename?: 'RichContentV1LinkData';
  /** Link details. */
  link?: Maybe<RichContentV1Link>;
};

export type RichContentV1LinkPreviewData = {
  __typename?: 'RichContentV1LinkPreviewData';
  /** Styling for the link preview's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** Preview description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The preview content as HTML. */
  html?: Maybe<Scalars['String']['output']>;
  /** Link details. */
  link?: Maybe<RichContentV1Link>;
  /** Preview thumbnail URL. */
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  /** Preview title. */
  title?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1LinkRel = {
  __typename?: 'RichContentV1LinkRel';
  /** Indicates to search engine crawlers not to follow the link. */
  nofollow?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates that this link protect referral information from being passed to the target website. */
  noreferrer?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates to search engine crawlers that the link is a paid placement such as sponsored content or an advertisement. */
  sponsored?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates that this link is user-generated content and isn't necessarily trusted or endorsed by the page’s author. For example, a link in a fourm post. */
  ugc?: Maybe<Scalars['Boolean']['output']>;
};

export enum RichContentV1LinkTarget {
  /** Opens the linked document in a new window or tab */
  Blank = 'BLANK',
  /** Opens the linked document in the parent frame */
  Parent = 'PARENT',
  /** Opens the linked document in the same frame as it was clicked (this is default) */
  Self = 'SELF',
  /** Opens the linked document in the full body of the window */
  Top = 'TOP'
}

export type RichContentV1ListValue = {
  __typename?: 'RichContentV1ListValue';
  /** Repeated field of dynamically typed values. */
  values?: Maybe<Array<Maybe<RichContentV1Value>>>;
};

export type RichContentV1MapData = {
  __typename?: 'RichContentV1MapData';
  /** Styling for the map's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** Map settings. */
  mapSettings?: Maybe<RichContentV1MapSettings>;
};

export type RichContentV1MapSettings = {
  __typename?: 'RichContentV1MapSettings';
  /** The address to display on the map. */
  address?: Maybe<Scalars['String']['output']>;
  /** Sets whether the map is draggable. */
  draggable?: Maybe<Scalars['Boolean']['output']>;
  /** Initial zoom value. */
  initialZoom?: Maybe<Scalars['Int']['output']>;
  /** Location latitude. */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Location longitude. */
  lng?: Maybe<Scalars['Float']['output']>;
  /** Location name. */
  locationName?: Maybe<Scalars['String']['output']>;
  /** Map type. `HYBRID` is a combination of the `ROADMAP` and `SATELLITE` map types. */
  mapType?: Maybe<RichContentV1MapType>;
  /** Sets whether the location marker is visible. */
  marker?: Maybe<Scalars['Boolean']['output']>;
  /** Sets whether street view control is enabled. */
  streetViewControl?: Maybe<Scalars['Boolean']['output']>;
  /** Sets whether view mode control is enabled. */
  viewModeControl?: Maybe<Scalars['Boolean']['output']>;
  /** Sets whether zoom control is enabled. */
  zoomControl?: Maybe<Scalars['Boolean']['output']>;
};

export enum RichContentV1MapType {
  /** Hybrid map type */
  Hybrid = 'HYBRID',
  /** Roadmap map type */
  Roadmap = 'ROADMAP',
  /** Satellite map type */
  Satelite = 'SATELITE',
  /** Terrain map type */
  Terrain = 'TERRAIN'
}

export type RichContentV1Media = {
  __typename?: 'RichContentV1Media';
  /** Media duration in seconds. Only relevant for audio and video files. */
  duration?: Maybe<Scalars['Float']['output']>;
  /** Media height in pixels. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The source for the media's data. */
  src?: Maybe<RichContentV1FileSource>;
  /** Media width in pixels. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type RichContentV1MentionData = {
  __typename?: 'RichContentV1MentionData';
  /** Mentioned user's ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** The mentioned user's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The version of the user's name that appears after the `@` character in the mention. */
  slug?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1Metadata = {
  __typename?: 'RichContentV1Metadata';
  /** When the object was created. */
  createdTimestamp?: Maybe<Scalars['String']['output']>;
  /** Object ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** When the object was most recently updated. */
  updatedTimestamp?: Maybe<Scalars['String']['output']>;
  /** Schema version. */
  version?: Maybe<Scalars['Int']['output']>;
};

export type RichContentV1Node = {
  __typename?: 'RichContentV1Node';
  /** Data for an app embed node. */
  appEmbedData?: Maybe<RichContentV1AppEmbedData>;
  /** Data for an audio node. */
  audioData?: Maybe<RichContentV1AudioData>;
  /** Data for a block quote node. */
  blockquoteData?: Maybe<RichContentV1BlockquoteData>;
  /** Data for a bulleted list node. */
  bulletedListData?: Maybe<RichContentV1BulletedListData>;
  /** Data for a button node. */
  buttonData?: Maybe<RichContentV1ButtonData>;
  /** Data for a code block node. */
  codeBlockData?: Maybe<RichContentV1CodeBlockData>;
  /** Data for a collapsible list node. */
  collapsibleListData?: Maybe<RichContentV1CollapsibleListData>;
  /** Data for a divider node. */
  dividerData?: Maybe<RichContentV1DividerData>;
  /** Data for an oEmbed node. */
  embedData?: Maybe<RichContentV1EmbedData>;
  /** Data for a custon external node. */
  externalData?: Maybe<RichContentV1Struct>;
  /** Data for a file node. */
  fileData?: Maybe<RichContentV1FileData>;
  /** Data for a gallery node. */
  galleryData?: Maybe<RichContentV1GalleryData>;
  /** Data for a GIF node. */
  gifData?: Maybe<RichContentV1GifData>;
  /** Data for a heading node. */
  headingData?: Maybe<RichContentV1HeadingData>;
  /** Data for an embedded HTML node. */
  htmlData?: Maybe<RichContentV1HtmlData>;
  /** Node ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Data for an image node. */
  imageData?: Maybe<RichContentV1ImageData>;
  /** Data for a link preview node. */
  linkPreviewData?: Maybe<RichContentV1LinkPreviewData>;
  /** Data for a map node. */
  mapData?: Maybe<RichContentV1MapData>;
  /** A list of child nodes. */
  nodes?: Maybe<Array<Maybe<RichContentV1Node>>>;
  /** Data for an ordered list node. */
  orderedListData?: Maybe<RichContentV1OrderedListData>;
  /** Data for a paragraph node. */
  paragraphData?: Maybe<RichContentV1ParagraphData>;
  /** Data for a poll node. */
  pollData?: Maybe<RichContentV1PollData>;
  /** Padding and background color styling for the node. */
  style?: Maybe<RichContentV1NodeStyle>;
  /** Data for a table cell node. */
  tableCellData?: Maybe<RichContentV1TableCellData>;
  /** Data for a table node. */
  tableData?: Maybe<RichContentV1TableData>;
  /** Data for a text node. Used to apply decorations to text. */
  textData?: Maybe<RichContentV1TextData>;
  /** Node type. Use `APP_EMBED` for nodes that embed content from other Wix apps. Use `EMBED` to embed content in [oEmbed](https://oembed.com/) format. */
  type?: Maybe<RichContentV1NodeType>;
  /** Data for a video node. */
  videoData?: Maybe<RichContentV1VideoData>;
};

export type RichContentV1NodeStyle = {
  __typename?: 'RichContentV1NodeStyle';
  /** The background color as a hexadecimal value. */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** The bottom padding value in pixels. */
  paddingBottom?: Maybe<Scalars['String']['output']>;
  /** The top padding value in pixels. */
  paddingTop?: Maybe<Scalars['String']['output']>;
};

export enum RichContentV1NodeType {
  AppEmbed = 'APP_EMBED',
  Audio = 'AUDIO',
  Blockquote = 'BLOCKQUOTE',
  BulletedList = 'BULLETED_LIST',
  Button = 'BUTTON',
  CodeBlock = 'CODE_BLOCK',
  CollapsibleItem = 'COLLAPSIBLE_ITEM',
  CollapsibleItemBody = 'COLLAPSIBLE_ITEM_BODY',
  CollapsibleItemTitle = 'COLLAPSIBLE_ITEM_TITLE',
  CollapsibleList = 'COLLAPSIBLE_LIST',
  Divider = 'DIVIDER',
  Embed = 'EMBED',
  External = 'EXTERNAL',
  File = 'FILE',
  Gallery = 'GALLERY',
  Gif = 'GIF',
  Heading = 'HEADING',
  Html = 'HTML',
  Image = 'IMAGE',
  LinkPreview = 'LINK_PREVIEW',
  ListItem = 'LIST_ITEM',
  Map = 'MAP',
  OrderedList = 'ORDERED_LIST',
  Paragraph = 'PARAGRAPH',
  Poll = 'POLL',
  Table = 'TABLE',
  TableCell = 'TABLE_CELL',
  TableRow = 'TABLE_ROW',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export enum RichContentV1NullValue {
  /** Null value. */
  NullValue = 'NULL_VALUE'
}

export type RichContentV1Oembed = {
  __typename?: 'RichContentV1Oembed';
  /** The name of the author or owner of the resource. */
  authorName?: Maybe<Scalars['String']['output']>;
  /** The URL for the author or owner of the resource. */
  authorUrl?: Maybe<Scalars['String']['output']>;
  /** The height of the resource specified in the `url` property in pixels. */
  height?: Maybe<Scalars['Int']['output']>;
  /** HTML for embedding a video player. The HTML should have no padding or margins. */
  html?: Maybe<Scalars['String']['output']>;
  /** The name of the resource provider. */
  providerName?: Maybe<Scalars['String']['output']>;
  /** The URL for the resource provider. */
  providerUrl?: Maybe<Scalars['String']['output']>;
  /** The height of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailWidth`must also be defined. */
  thumbnailHeight?: Maybe<Scalars['String']['output']>;
  /** The URL for a thumbnail image for the resource. If this property is defined, `thumbnailWidth` and `thumbnailHeight` must also be defined. */
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  /** The width of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailHeight` must also be defined. */
  thumbnailWidth?: Maybe<Scalars['String']['output']>;
  /** Resource title. */
  title?: Maybe<Scalars['String']['output']>;
  /** The resource type. */
  type?: Maybe<Scalars['String']['output']>;
  /** The source URL for the resource. */
  url?: Maybe<Scalars['String']['output']>;
  /** The oEmbed version number.  This value must be `1.0`. */
  version?: Maybe<Scalars['String']['output']>;
  /** The URL for an embedded viedo. */
  videoUrl?: Maybe<Scalars['String']['output']>;
  /** The width of the resource specified in the `url` property in pixels. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type RichContentV1OrderedListData = {
  __typename?: 'RichContentV1OrderedListData';
  /** Indentation level. */
  indentation?: Maybe<Scalars['Int']['output']>;
};

export type RichContentV1ParagraphData = {
  __typename?: 'RichContentV1ParagraphData';
  /** Indentation level from 1-6. */
  indentation?: Maybe<Scalars['Int']['output']>;
  /** Styling for the paragraph text. */
  textStyle?: Maybe<RichContentV1TextStyle>;
};

export type RichContentV1PlaybackOptions = {
  __typename?: 'RichContentV1PlaybackOptions';
  /** Sets whether the media will automatically start playing. */
  autoPlay?: Maybe<Scalars['Boolean']['output']>;
  /** Sets whether media's will be looped. */
  playInLoop?: Maybe<Scalars['Boolean']['output']>;
  /** Sets whether media's controls will be shown. */
  showControls?: Maybe<Scalars['Boolean']['output']>;
};

export type RichContentV1PluginContainerData = {
  __typename?: 'RichContentV1PluginContainerData';
  /** The node's alignment within its container. */
  alignment?: Maybe<RichContentV1PluginContainerDataAlignment>;
  /** The height of the node when it's displayed. */
  height?: Maybe<RichContentV1PluginContainerDataHeight>;
  /** Spoiler cover settings for the node. */
  spoiler?: Maybe<RichContentV1PluginContainerDataSpoiler>;
  /** Sets whether text should wrap around this node when it's displayed. If `textWrap` is `false`, the node takes up the width of its container. */
  textWrap?: Maybe<Scalars['Boolean']['output']>;
  /** The width of the node when it's displayed. */
  width?: Maybe<RichContentV1PluginContainerDataWidth>;
};

export enum RichContentV1PluginContainerDataAlignment {
  /** Center Alignment */
  Center = 'CENTER',
  /** Left Alignment */
  Left = 'LEFT',
  /** Right Alignment */
  Right = 'RIGHT'
}

export type RichContentV1PluginContainerDataHeight = {
  __typename?: 'RichContentV1PluginContainerDataHeight';
  /** A custom height value in pixels. */
  custom?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1PluginContainerDataSpoiler = {
  __typename?: 'RichContentV1PluginContainerDataSpoiler';
  /** The text for the button used to remove the spoiler cover. */
  buttonText?: Maybe<Scalars['String']['output']>;
  /** The description displayed on top of the spoiler cover. */
  description?: Maybe<Scalars['String']['output']>;
  /** Sets whether the spoiler cover is enabled for this node. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

export type RichContentV1PluginContainerDataWidth = {
  __typename?: 'RichContentV1PluginContainerDataWidth';
  /** A custom width value in pixels. */
  custom?: Maybe<Scalars['String']['output']>;
  /**
   * One of the following predefined width options:
   * `CONTENT`: The width of the container matches the content width.
   * `SMALL`: Small width.
   * `ORIGINAL`: The width of the container matches the original asset width.
   * `FULL_WIDTH`: Full width.
   */
  size?: Maybe<RichContentV1PluginContainerDataWidthType>;
};

export enum RichContentV1PluginContainerDataWidthType {
  /** Width matches the content width */
  Content = 'CONTENT',
  /** coast-to-coast display */
  FullWidth = 'FULL_WIDTH',
  /** Width will match the original asset width */
  Original = 'ORIGINAL',
  /** Small Width */
  Small = 'SMALL'
}

export type RichContentV1PollData = {
  __typename?: 'RichContentV1PollData';
  /** Styling for the poll's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** Styling for the poll and voting options. */
  design?: Maybe<RichContentV1PollDataDesign>;
  /** Layout settings for the poll and voting options. */
  layout?: Maybe<RichContentV1PollDataLayout>;
  /** Poll data. */
  poll?: Maybe<RichContentV1PollDataPoll>;
};

export type RichContentV1PollDataDesign = {
  __typename?: 'RichContentV1PollDataDesign';
  /** Styling for voting options. */
  options?: Maybe<RichContentV1PollDataDesignOptionDesign>;
  /** Styling for the poll. */
  poll?: Maybe<RichContentV1PollDataDesignPollDesign>;
};

export type RichContentV1PollDataDesignOptionDesign = {
  __typename?: 'RichContentV1PollDataDesignOptionDesign';
  /** Border radius in pixels. */
  borderRadius?: Maybe<Scalars['Int']['output']>;
};

export type RichContentV1PollDataDesignPollDesign = {
  __typename?: 'RichContentV1PollDataDesignPollDesign';
  /** Background styling. */
  background?: Maybe<RichContentV1PollDataDesignPollDesignBackground>;
  /** Border radius in pixels. */
  borderRadius?: Maybe<Scalars['Int']['output']>;
};

export type RichContentV1PollDataDesignPollDesignBackground = {
  __typename?: 'RichContentV1PollDataDesignPollDesignBackground';
  /** The background color as a hexademical value. */
  color?: Maybe<Scalars['String']['output']>;
  /** Details for a gradient background. */
  gradient?: Maybe<RichContentV1PollDataDesignPollDesignBackgroundGradient>;
  /** An image to use for the background. */
  image?: Maybe<RichContentV1Media>;
  /** Background type. For each option, include the relevant details. */
  type?: Maybe<RichContentV1PollDataDesignPollDesignBackgroundType>;
};

export type RichContentV1PollDataDesignPollDesignBackgroundGradient = {
  __typename?: 'RichContentV1PollDataDesignPollDesignBackgroundGradient';
  /** The gradient angle in degrees. */
  angle?: Maybe<Scalars['Int']['output']>;
  /** The end color as a hexademical value. */
  lastColor?: Maybe<Scalars['String']['output']>;
  /** The start color as a hexademical value. */
  startColor?: Maybe<Scalars['String']['output']>;
};

export enum RichContentV1PollDataDesignPollDesignBackgroundType {
  /** Color background type */
  Color = 'COLOR',
  /** Gradiant background type */
  Gradient = 'GRADIENT',
  /** Image background type */
  Image = 'IMAGE'
}

export type RichContentV1PollDataLayout = {
  __typename?: 'RichContentV1PollDataLayout';
  /** Voting otpions layout settings. */
  options?: Maybe<RichContentV1PollDataLayoutOptionLayout>;
  /** Poll layout settings. */
  poll?: Maybe<RichContentV1PollDataLayoutPollLayout>;
};

export type RichContentV1PollDataLayoutOptionLayout = {
  __typename?: 'RichContentV1PollDataLayoutOptionLayout';
  /** Sets whether to display option images. */
  enableImage?: Maybe<Scalars['Boolean']['output']>;
};

export type RichContentV1PollDataLayoutPollLayout = {
  __typename?: 'RichContentV1PollDataLayoutPollLayout';
  /** The direction of the text displayed in the voting options. Text can be displayed either right-to-left or left-to-right. */
  direction?: Maybe<RichContentV1PollDataLayoutPollLayoutDirection>;
  /** Sets whether to display the main poll image. */
  enableImage?: Maybe<Scalars['Boolean']['output']>;
  /** The layout for displaying the voting options. */
  type?: Maybe<RichContentV1PollDataLayoutPollLayoutType>;
};

export enum RichContentV1PollDataLayoutPollLayoutDirection {
  /** Left-to-right */
  Ltr = 'LTR',
  /** Right-to-left */
  Rtl = 'RTL'
}

export enum RichContentV1PollDataLayoutPollLayoutType {
  /** Grid */
  Grid = 'GRID',
  /** List */
  List = 'LIST'
}

export type RichContentV1PollDataPoll = {
  __typename?: 'RichContentV1PollDataPoll';
  /** Poll creator ID. */
  creatorId?: Maybe<Scalars['String']['output']>;
  /** Poll ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** Main poll image. */
  image?: Maybe<RichContentV1Media>;
  /** Voting options. */
  options?: Maybe<Array<Maybe<RichContentV1PollDataPollOption>>>;
  /** The poll's permissions and display settings. */
  settings?: Maybe<RichContentV1PollDataPollSettings>;
  /** Poll title. */
  title?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1PollDataPollOption = {
  __typename?: 'RichContentV1PollDataPollOption';
  /** Option ID. */
  id?: Maybe<Scalars['String']['output']>;
  /** The image displayed with the option. */
  image?: Maybe<RichContentV1Media>;
  /** Option title. */
  title?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1PollDataPollSettings = {
  __typename?: 'RichContentV1PollDataPollSettings';
  /** Permissions settings for voting. */
  permissions?: Maybe<RichContentV1PollDataPollSettingsPermissions>;
  /** Sets whether voters are displayed in the vote results. */
  showVoters?: Maybe<Scalars['Boolean']['output']>;
  /** Sets whether the vote count is displayed. */
  showVotesCount?: Maybe<Scalars['Boolean']['output']>;
};

export type RichContentV1PollDataPollSettingsPermissions = {
  __typename?: 'RichContentV1PollDataPollSettingsPermissions';
  /** Sets whether one voter can vote multiple times. */
  allowMultipleVotes?: Maybe<Scalars['Boolean']['output']>;
  /** Sets who can view the poll results. */
  view?: Maybe<RichContentV1PollDataPollSettingsPermissionsViewRole>;
  /** Sets who can vote. */
  vote?: Maybe<RichContentV1PollDataPollSettingsPermissionsVoteRole>;
};

export enum RichContentV1PollDataPollSettingsPermissionsViewRole {
  /** Only Poll creator can view the results */
  Creator = 'CREATOR',
  /** Anyone can see the results, even if one didn't vote */
  Everyone = 'EVERYONE',
  /** Anyone who voted can see the results */
  Voters = 'VOTERS'
}

export enum RichContentV1PollDataPollSettingsPermissionsVoteRole {
  /** Anyone */
  All = 'ALL',
  /** Logged in member */
  SiteMembers = 'SITE_MEMBERS'
}

export type RichContentV1RichContent = {
  __typename?: 'RichContentV1RichContent';
  /** Global styling for header, paragraph, block quote, and code block nodes in the object. */
  documentStyle?: Maybe<RichContentV1DocumentStyle>;
  /** Object metadata. */
  metadata?: Maybe<RichContentV1Metadata>;
  /** Node objects representing a rich content document. */
  nodes?: Maybe<Array<Maybe<RichContentV1Node>>>;
};

export type RichContentV1Struct = {
  __typename?: 'RichContentV1Struct';
  /** An unordered map of dynamically typed values. */
  fields?: Maybe<RichContentV1Value>;
};

export type RichContentV1TableCellData = {
  __typename?: 'RichContentV1TableCellData';
  /** The cell's border colors. */
  borderColors?: Maybe<RichContentV1TableCellDataBorderColors>;
  /** Styling for the cell's background color and text alignment. */
  cellStyle?: Maybe<RichContentV1TableCellDataCellStyle>;
};

export type RichContentV1TableCellDataBorderColors = {
  __typename?: 'RichContentV1TableCellDataBorderColors';
  /** Bottom border color as a hexadecimal value. */
  bottom?: Maybe<Scalars['String']['output']>;
  /** Left border color as a hexadecimal value. */
  left?: Maybe<Scalars['String']['output']>;
  /** Right border color as a hexadecimal value. */
  right?: Maybe<Scalars['String']['output']>;
  /** Top border color as a hexadecimal value. */
  top?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1TableCellDataCellStyle = {
  __typename?: 'RichContentV1TableCellDataCellStyle';
  /** Cell background color as a hexadecimal value. */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** Vertical alignment for the cell's text. */
  verticalAlignment?: Maybe<RichContentV1TableCellDataVerticalAlignment>;
};

export enum RichContentV1TableCellDataVerticalAlignment {
  /** Bottom alignment */
  Bottom = 'BOTTOM',
  /** Middle alignment */
  Middle = 'MIDDLE',
  /** Top alignment */
  Top = 'TOP'
}

export type RichContentV1TableData = {
  __typename?: 'RichContentV1TableData';
  /** Sets whether the table's first column is a header. */
  columnHeader?: Maybe<Scalars['Boolean']['output']>;
  /** Styling for the table's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** The table's dimensions. */
  dimensions?: Maybe<RichContentV1TableDataDimensions>;
  /** Deprecated: Use `rowHeader` and `columnHeader` instead. */
  header?: Maybe<Scalars['Boolean']['output']>;
  /** Sets whether the table's first row is a header. */
  rowHeader?: Maybe<Scalars['Boolean']['output']>;
};

export type RichContentV1TableDataDimensions = {
  __typename?: 'RichContentV1TableDataDimensions';
  /** An array representing the minimum width of each column in pixels. */
  colsMinWidth?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** An array representing relative width of each column in relation to the other columns. */
  colsWidthRatio?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** An array representing the height of each row in pixels. */
  rowsHeight?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type RichContentV1TextData = {
  __typename?: 'RichContentV1TextData';
  /** The decorations to apply. */
  decorations?: Maybe<Array<Maybe<RichContentV1Decoration>>>;
  /** The text to apply decorations to. */
  text?: Maybe<Scalars['String']['output']>;
};

export type RichContentV1TextNodeStyle = {
  __typename?: 'RichContentV1TextNodeStyle';
  /** The decorations to apply to the node. */
  decorations?: Maybe<Array<Maybe<RichContentV1Decoration>>>;
  /** Line height for text in the node. */
  lineHeight?: Maybe<Scalars['String']['output']>;
  /** Padding and background color for the node. */
  nodeStyle?: Maybe<RichContentV1NodeStyle>;
};

export type RichContentV1TextStyle = {
  __typename?: 'RichContentV1TextStyle';
  /** A CSS `line-height` value for the text as a unitless ratio. */
  lineHeight?: Maybe<Scalars['String']['output']>;
  /** Text alignment. Defaults to `AUTO`. */
  textAlignment?: Maybe<RichContentV1TextStyleTextAlignment>;
};

export enum RichContentV1TextStyleTextAlignment {
  /** browser default, eqivalent to `initial` */
  Auto = 'AUTO',
  /** Center align */
  Center = 'CENTER',
  /** Text is spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. */
  Justify = 'JUSTIFY',
  /** Left align */
  Left = 'LEFT',
  /** Right align */
  Right = 'RIGHT'
}

export type RichContentV1Value = {
  __typename?: 'RichContentV1Value';
  /** A boolean value. */
  boolValue?: Maybe<Scalars['Boolean']['output']>;
  /** An array of `value` objects. */
  listValue?: Maybe<RichContentV1ListValue>;
  /** A null value. */
  nullValue?: Maybe<RichContentV1NullValue>;
  /** A double value. */
  numberValue?: Maybe<Scalars['Float']['output']>;
  /** A string value. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** A structured value. */
  structValue?: Maybe<RichContentV1Struct>;
};

export type RichContentV1VideoData = {
  __typename?: 'RichContentV1VideoData';
  /** Styling for the video's container. */
  containerData?: Maybe<RichContentV1PluginContainerData>;
  /** Sets whether the video's download button is disabled. */
  disableDownload?: Maybe<Scalars['Boolean']['output']>;
  /** Video options. */
  options?: Maybe<RichContentV1PlaybackOptions>;
  /** Video thumbnail details. */
  thumbnail?: Maybe<RichContentV1Media>;
  /** Video title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Video details. */
  video?: Maybe<RichContentV1Media>;
};

export type SitepropertiesV4BusinessSchedule = {
  __typename?: 'SitepropertiesV4BusinessSchedule';
  /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
  periods?: Maybe<Array<Maybe<SitepropertiesV4TimePeriod>>>;
  /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
  specialHourPeriod?: Maybe<Array<Maybe<SitepropertiesV4SpecialHourPeriod>>>;
};

export type SitepropertiesV4BusinessScheduleInput = {
  /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
  periods?: InputMaybe<Array<InputMaybe<SitepropertiesV4TimePeriodInput>>>;
  /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
  specialHourPeriod?: InputMaybe<Array<InputMaybe<SitepropertiesV4SpecialHourPeriodInput>>>;
};

export enum SitepropertiesV4DayOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type SitepropertiesV4SpecialHourPeriod = {
  __typename?: 'SitepropertiesV4SpecialHourPeriod';
  /** Additional info about the exception. For example, "We close earlier on New Year's Eve." */
  comment?: Maybe<Scalars['String']['output']>;
  /** End date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
  endDate?: Maybe<Scalars['String']['output']>;
  /**
   * Whether the business is closed (or the service is not available) during the exception.
   *
   * Default: `true`.
   */
  isClosed?: Maybe<Scalars['Boolean']['output']>;
  /** Start date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
  startDate?: Maybe<Scalars['String']['output']>;
};

export type SitepropertiesV4SpecialHourPeriodInput = {
  /** Additional info about the exception. For example, "We close earlier on New Year's Eve." */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** End date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
  endDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * Whether the business is closed (or the service is not available) during the exception.
   *
   * Default: `true`.
   */
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Start date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type SitepropertiesV4TimePeriod = {
  __typename?: 'SitepropertiesV4TimePeriod';
  /** Day of the week the period ends on. */
  closeDay?: Maybe<SitepropertiesV4DayOfWeek>;
  /**
   * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
   * midnight at the end of the specified day.
   *
   * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
   */
  closeTime?: Maybe<Scalars['String']['output']>;
  /** Day of the week the period starts on. */
  openDay?: Maybe<SitepropertiesV4DayOfWeek>;
  /**
   * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
   * midnight at the end of the specified day.
   */
  openTime?: Maybe<Scalars['String']['output']>;
};

export type SitepropertiesV4TimePeriodInput = {
  /** Day of the week the period ends on. */
  closeDay?: InputMaybe<SitepropertiesV4DayOfWeek>;
  /**
   * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
   * midnight at the end of the specified day.
   *
   * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
   */
  closeTime?: InputMaybe<Scalars['String']['input']>;
  /** Day of the week the period starts on. */
  openDay?: InputMaybe<SitepropertiesV4DayOfWeek>;
  /**
   * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
   * midnight at the end of the specified day.
   */
  openTime?: InputMaybe<Scalars['String']['input']>;
};

/** SpectaQL directive options */
export type SpectaQlOption = {
  /** key to use, for example "undocumented" */
  key: Scalars['String']['input'];
  /** key value to set, for example "true" */
  value: Scalars['String']['input'];
};

export type ValidationErrorFieldViolation = {
  __typename?: 'ValidationErrorFieldViolation';
  data?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  /** applicable when violated_rule=OTHER */
  ruleName?: Maybe<Scalars['String']['output']>;
  violatedRule?: Maybe<ValidationErrorRuleType>;
};

export type ValidationErrorFieldViolationInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  /** applicable when violated_rule=OTHER */
  ruleName?: InputMaybe<Scalars['String']['input']>;
  violatedRule?: InputMaybe<ValidationErrorRuleType>;
};

export enum ValidationErrorRuleType {
  DecimalGt = 'DECIMAL_GT',
  DecimalGte = 'DECIMAL_GTE',
  DecimalLt = 'DECIMAL_LT',
  DecimalLte = 'DECIMAL_LTE',
  DecimalMaxScale = 'DECIMAL_MAX_SCALE',
  FieldNotAllowed = 'FIELD_NOT_ALLOWED',
  Format = 'FORMAT',
  InvalidEnumValue = 'INVALID_ENUM_VALUE',
  Max = 'MAX',
  MaxLength = 'MAX_LENGTH',
  MaxSize = 'MAX_SIZE',
  Min = 'MIN',
  MinLength = 'MIN_LENGTH',
  MinSize = 'MIN_SIZE',
  OneOfAlignment = 'ONE_OF_ALIGNMENT',
  Other = 'OTHER',
  RequiredField = 'REQUIRED_FIELD',
  Validation = 'VALIDATION'
}

export type CartFragment = { __typename?: 'EcomCartV1Cart', id?: string | null, currency?: string | null, lineItems?: Array<{ __typename?: 'EcomCartV1LineItem', id?: string | null, quantity?: number | null, productName?: { __typename?: 'EcommerceCatalogSpiV1ProductName', original?: string | null } | null, descriptionLines?: Array<{ __typename?: 'EcommerceCatalogSpiV1DescriptionLine', plainText?: { __typename?: 'EcommerceCatalogSpiV1PlainTextValue', original?: string | null } | null, colorInfo?: { __typename?: 'EcommerceCatalogSpiV1Color', original?: string | null } | null } | null> | null, price?: { __typename?: 'EcommercePlatformCommonMultiCurrencyPrice', amount?: string | null } | null, image?: { __typename?: 'CommonImage', url?: string | null, width?: number | null, height?: number | null, altText?: string | null } | null, url?: { __typename?: 'CommonPageUrlV2', relativePath?: string | null } | null } | null> | null } & { ' $fragmentName'?: 'CartFragment' };

export type CollectionFragment = { __typename?: 'CatalogV1Collection', id?: string | null, name?: string | null, slug?: string | null, description?: string | null } & { ' $fragmentName'?: 'CollectionFragment' };

export type ProductFragment = { __typename?: 'CatalogV1Product', id?: string | null, name?: string | null, description?: string | null, slug?: string | null, manageVariants?: boolean | null, lastUpdated?: string | null, stock?: { __typename?: 'CatalogV1Stock', inventoryStatus?: CatalogV1StockInventoryStatus | null } | null, media?: { __typename?: 'CatalogV1Media', mainMedia?: { __typename?: 'CatalogV1MediaItem', image?: { __typename?: 'CatalogV1MediaItemUrlAndSize', url?: string | null, altText?: string | null, width?: number | null, height?: number | null } | null } | null, items?: Array<{ __typename?: 'CatalogV1MediaItem', image?: { __typename?: 'CatalogV1MediaItemUrlAndSize', url?: string | null, altText?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null, price?: { __typename?: 'CatalogV1PriceData', price?: number | null, currency?: string | null } | null, variants?: Array<{ __typename?: 'CatalogV1Variant', id?: string | null, choices?: any | null, variant?: { __typename?: 'CatalogV1VariantDataWithNoStock', priceData?: { __typename?: 'CatalogV1PriceData', price?: number | null, currency?: string | null } | null } | null, stock?: { __typename?: 'CatalogV1VariantStock', trackQuantity?: boolean | null, quantity?: number | null } | null } | null> | null, productOptions?: Array<{ __typename?: 'CatalogV1ProductOption', name?: string | null, optionType?: CatalogV1OptionType | null, choices?: Array<{ __typename?: 'CatalogV1Choice', value?: string | null, description?: string | null } | null> | null } | null> | null } & { ' $fragmentName'?: 'ProductFragment' };

export type AddToCartMutationVariables = Exact<{
  lineItems: Array<EcomCartV1LineItemInput> | EcomCartV1LineItemInput;
}>;


export type AddToCartMutation = { __typename?: 'Mutation', ecomCurrentCartV1AddToCurrentCart?: { __typename?: 'EcomCartV1AddToCartResponse', cart?: (
      { __typename?: 'EcomCartV1Cart' }
      & { ' $fragmentRefs'?: { 'CartFragment': CartFragment } }
    ) | null } | null };

export type RemoveLineItemsFromCurrentCartMutationVariables = Exact<{
  lineIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type RemoveLineItemsFromCurrentCartMutation = { __typename?: 'Mutation', ecomCurrentCartV1RemoveLineItemsFromCurrentCart?: { __typename?: 'EcomCartV1RemoveLineItemsResponse', cart?: (
      { __typename?: 'EcomCartV1Cart' }
      & { ' $fragmentRefs'?: { 'CartFragment': CartFragment } }
    ) | null } | null };

export type UpdateCurrentCartLineItemQuantityMutationVariables = Exact<{
  lineItems: Array<EcomCartV1LineItemQuantityUpdateInput> | EcomCartV1LineItemQuantityUpdateInput;
}>;


export type UpdateCurrentCartLineItemQuantityMutation = { __typename?: 'Mutation', ecomCurrentCartV1UpdateCurrentCartLineItemQuantity?: { __typename?: 'EcomCartV1UpdateLineItemsQuantityResponse', cart?: (
      { __typename?: 'EcomCartV1Cart' }
      & { ' $fragmentRefs'?: { 'CartFragment': CartFragment } }
    ) | null } | null };

export type GetCurrentCartMutationVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentCartMutation = { __typename?: 'Mutation', ecomCartV1CurrentCartGetCurrentCart?: { __typename?: 'EcomCartV1GetCurrentCartResponse', cart?: (
      { __typename?: 'EcomCartV1Cart' }
      & { ' $fragmentRefs'?: { 'CartFragment': CartFragment } }
    ) | null } | null };

export type CollectionBySlugMutationVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionBySlugMutation = { __typename?: 'Mutation', storesProductsV1GetCollectionBySlug?: { __typename?: 'CatalogV1GetCollectionBySlugResponse', collection?: (
      { __typename?: 'CatalogV1Collection' }
      & { ' $fragmentRefs'?: { 'CollectionFragment': CollectionFragment } }
    ) | null } | null };

export type GetcollectionProductsMutationVariables = Exact<{
  slug: Scalars['String']['input'];
  sort: Array<InputMaybe<CommonSortingInput>> | InputMaybe<CommonSortingInput>;
}>;


export type GetcollectionProductsMutation = { __typename?: 'Mutation', storesProductsV1GetCollectionBySlug?: { __typename?: 'CatalogV1GetCollectionBySlugResponse', collection?: (
      { __typename?: 'CatalogV1Collection', productsVirtualReference?: { __typename?: 'CatalogV1QueryProductsPlatformizedResponse', items?: Array<(
          { __typename?: 'CatalogV1Product' }
          & { ' $fragmentRefs'?: { 'ProductFragment': ProductFragment } }
        ) | null> | null } | null }
      & { ' $fragmentRefs'?: { 'CollectionFragment': CollectionFragment } }
    ) | null } | null };

export type CollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsQuery = { __typename?: 'Query', storesCollectionsV1Collections?: { __typename?: 'CatalogV2QueryCollectionsResponse', items?: Array<(
      { __typename?: 'CatalogV1Collection' }
      & { ' $fragmentRefs'?: { 'CollectionFragment': CollectionFragment } }
    ) | null> | null } | null };

export type MenuBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type MenuBySlugQuery = { __typename?: 'Query', dataItemsV2DataItems?: { __typename?: 'CloudDataDataQueryDataItemsResponse', items?: Array<{ __typename?: 'CloudDataDataDataItem', id?: string | null, data?: any | null } | null> | null } | null };

export type PageBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type PageBySlugQuery = { __typename?: 'Query', dataItemsV2DataItems?: { __typename?: 'CloudDataDataQueryDataItemsResponse', items?: Array<{ __typename?: 'CloudDataDataDataItem', id?: string | null, data?: any | null } | null> | null } | null };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { __typename?: 'Query', dataItemsV2DataItems?: { __typename?: 'CloudDataDataQueryDataItemsResponse', items?: Array<{ __typename?: 'CloudDataDataDataItem', id?: string | null, data?: any | null } | null> | null } | null };

export type ProductByHandleQueryVariables = Exact<{
  handle: Scalars['String']['input'];
}>;


export type ProductByHandleQuery = { __typename?: 'Query', storesProductsV1Products?: { __typename?: 'CatalogV1QueryProductsPlatformizedResponse', items?: Array<(
      { __typename?: 'CatalogV1Product' }
      & { ' $fragmentRefs'?: { 'ProductFragment': ProductFragment } }
    ) | null> | null } | null };

export type GetRecommendationMutationVariables = Exact<{
  algorithms: Array<EcomRecommendationsV1AlgorithmInput> | EcomRecommendationsV1AlgorithmInput;
  items: Array<EcommerceCatalogSpiV1CatalogReferenceInput> | EcommerceCatalogSpiV1CatalogReferenceInput;
}>;


export type GetRecommendationMutation = { __typename?: 'Mutation', ecomRecommendationsV1GetRecommendation?: { __typename?: 'EcomRecommendationsV1GetRecommendationResponse', recommendation?: { __typename?: 'EcomRecommendationsV1Recommendation', items?: Array<{ __typename?: 'EcommerceCatalogSpiV1CatalogReference', catalogItemId?: string | null } | null> | null } | null } | null };

export type RecommendedProductsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type RecommendedProductsQuery = { __typename?: 'Query', storesProductsV1Products?: { __typename?: 'CatalogV1QueryProductsPlatformizedResponse', items?: Array<(
      { __typename?: 'CatalogV1Product' }
      & { ' $fragmentRefs'?: { 'ProductFragment': ProductFragment } }
    ) | null> | null } | null };

export type ProductsQueryVariables = Exact<{
  filter: Scalars['JSON']['input'];
  sort: Array<InputMaybe<CommonSortingInput>> | InputMaybe<CommonSortingInput>;
}>;


export type ProductsQuery = { __typename?: 'Query', storesProductsV1Products?: { __typename?: 'CatalogV1QueryProductsPlatformizedResponse', items?: Array<(
      { __typename?: 'CatalogV1Product' }
      & { ' $fragmentRefs'?: { 'ProductFragment': ProductFragment } }
    ) | null> | null } | null };

export type CreateCheckoutFromCurrentCartMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCheckoutFromCurrentCartMutation = { __typename?: 'Mutation', ecomCurrentCartV1CreateCheckoutFromCurrentCart?: { __typename?: 'EcomCartV1CreateCheckoutResponse', checkoutId?: string | null } | null };

export type CreateRedirectSessionMutationVariables = Exact<{
  checkoutId: Scalars['String']['input'];
  postFlowUrl: Scalars['String']['input'];
}>;


export type CreateRedirectSessionMutation = { __typename?: 'Mutation', redirectsRedirectsV1CreateRedirectSession?: { __typename?: 'HeadlessV1CreateRedirectSessionResponse', redirectSession?: { __typename?: 'HeadlessV1RedirectSession', fullUrl?: string | null } | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on EcomCartV1Cart {
  id
  lineItems {
    id
    productName {
      original
    }
    descriptionLines {
      plainText {
        original
      }
      colorInfo {
        original
      }
    }
    quantity
    price {
      amount
    }
    image {
      url
      width
      height
      altText
    }
    url {
      relativePath
    }
  }
  currency
}
    `, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const CollectionFragmentDoc = new TypedDocumentString(`
    fragment Collection on CatalogV1Collection {
  id
  name
  slug
  description
}
    `, {"fragmentName":"Collection"}) as unknown as TypedDocumentString<CollectionFragment, unknown>;
export const ProductFragmentDoc = new TypedDocumentString(`
    fragment Product on CatalogV1Product {
  id
  name
  description
  stock {
    inventoryStatus
  }
  slug
  media {
    mainMedia {
      image {
        url
        altText
        width
        height
      }
    }
    items {
      image {
        url
        altText
        width
        height
      }
    }
  }
  price {
    price
    currency
  }
  manageVariants
  variants {
    id
    choices
    variant {
      priceData {
        price
        currency
      }
    }
    stock {
      trackQuantity
      quantity
    }
  }
  productOptions {
    name
    optionType
    choices {
      value
      description
    }
  }
  lastUpdated
}
    `, {"fragmentName":"Product"}) as unknown as TypedDocumentString<ProductFragment, unknown>;
export const AddToCartDocument = new TypedDocumentString(`
    mutation AddToCart($lineItems: [EcomCartV1LineItemInput!]!) {
  ecomCurrentCartV1AddToCurrentCart(input: {lineItems: $lineItems}) {
    cart {
      ...Cart
    }
  }
}
    fragment Cart on EcomCartV1Cart {
  id
  lineItems {
    id
    productName {
      original
    }
    descriptionLines {
      plainText {
        original
      }
      colorInfo {
        original
      }
    }
    quantity
    price {
      amount
    }
    image {
      url
      width
      height
      altText
    }
    url {
      relativePath
    }
  }
  currency
}`) as unknown as TypedDocumentString<AddToCartMutation, AddToCartMutationVariables>;
export const RemoveLineItemsFromCurrentCartDocument = new TypedDocumentString(`
    mutation RemoveLineItemsFromCurrentCart($lineIds: [String!]!) {
  ecomCurrentCartV1RemoveLineItemsFromCurrentCart(input: {lineItemIds: $lineIds}) {
    cart {
      ...Cart
    }
  }
}
    fragment Cart on EcomCartV1Cart {
  id
  lineItems {
    id
    productName {
      original
    }
    descriptionLines {
      plainText {
        original
      }
      colorInfo {
        original
      }
    }
    quantity
    price {
      amount
    }
    image {
      url
      width
      height
      altText
    }
    url {
      relativePath
    }
  }
  currency
}`) as unknown as TypedDocumentString<RemoveLineItemsFromCurrentCartMutation, RemoveLineItemsFromCurrentCartMutationVariables>;
export const UpdateCurrentCartLineItemQuantityDocument = new TypedDocumentString(`
    mutation UpdateCurrentCartLineItemQuantity($lineItems: [EcomCartV1LineItemQuantityUpdateInput!]!) {
  ecomCurrentCartV1UpdateCurrentCartLineItemQuantity(
    input: {lineItems: $lineItems}
  ) {
    cart {
      ...Cart
    }
  }
}
    fragment Cart on EcomCartV1Cart {
  id
  lineItems {
    id
    productName {
      original
    }
    descriptionLines {
      plainText {
        original
      }
      colorInfo {
        original
      }
    }
    quantity
    price {
      amount
    }
    image {
      url
      width
      height
      altText
    }
    url {
      relativePath
    }
  }
  currency
}`) as unknown as TypedDocumentString<UpdateCurrentCartLineItemQuantityMutation, UpdateCurrentCartLineItemQuantityMutationVariables>;
export const GetCurrentCartDocument = new TypedDocumentString(`
    mutation GetCurrentCart {
  ecomCartV1CurrentCartGetCurrentCart {
    cart {
      ...Cart
    }
  }
}
    fragment Cart on EcomCartV1Cart {
  id
  lineItems {
    id
    productName {
      original
    }
    descriptionLines {
      plainText {
        original
      }
      colorInfo {
        original
      }
    }
    quantity
    price {
      amount
    }
    image {
      url
      width
      height
      altText
    }
    url {
      relativePath
    }
  }
  currency
}`) as unknown as TypedDocumentString<GetCurrentCartMutation, GetCurrentCartMutationVariables>;
export const CollectionBySlugDocument = new TypedDocumentString(`
    mutation CollectionBySlug($slug: String!) {
  storesProductsV1GetCollectionBySlug(input: {slug: $slug}) {
    collection {
      ...Collection
    }
  }
}
    fragment Collection on CatalogV1Collection {
  id
  name
  slug
  description
}`) as unknown as TypedDocumentString<CollectionBySlugMutation, CollectionBySlugMutationVariables>;
export const GetcollectionProductsDocument = new TypedDocumentString(`
    mutation GetcollectionProducts($slug: String!, $sort: [CommonSortingInput]!) {
  storesProductsV1GetCollectionBySlug(input: {slug: $slug}) {
    collection {
      ...Collection
      productsVirtualReference(query: {query: {sort: $sort}}) {
        items {
          ...Product
        }
      }
    }
  }
}
    fragment Collection on CatalogV1Collection {
  id
  name
  slug
  description
}
fragment Product on CatalogV1Product {
  id
  name
  description
  stock {
    inventoryStatus
  }
  slug
  media {
    mainMedia {
      image {
        url
        altText
        width
        height
      }
    }
    items {
      image {
        url
        altText
        width
        height
      }
    }
  }
  price {
    price
    currency
  }
  manageVariants
  variants {
    id
    choices
    variant {
      priceData {
        price
        currency
      }
    }
    stock {
      trackQuantity
      quantity
    }
  }
  productOptions {
    name
    optionType
    choices {
      value
      description
    }
  }
  lastUpdated
}`) as unknown as TypedDocumentString<GetcollectionProductsMutation, GetcollectionProductsMutationVariables>;
export const CollectionsDocument = new TypedDocumentString(`
    query Collections {
  storesCollectionsV1Collections {
    items {
      ...Collection
    }
  }
}
    fragment Collection on CatalogV1Collection {
  id
  name
  slug
  description
}`) as unknown as TypedDocumentString<CollectionsQuery, CollectionsQueryVariables>;
export const MenuBySlugDocument = new TypedDocumentString(`
    query MenuBySlug($slug: String!) {
  dataItemsV2DataItems(
    queryInput: {dataCollectionId: "Menus", includeReferencedItems: ["pages"], query: {filter: {slug: $slug}}}
  ) {
    items {
      id
      data
    }
  }
}
    `) as unknown as TypedDocumentString<MenuBySlugQuery, MenuBySlugQueryVariables>;
export const PageBySlugDocument = new TypedDocumentString(`
    query PageBySlug($slug: String!) {
  dataItemsV2DataItems(
    queryInput: {dataCollectionId: "Pages", query: {filter: {slug: $slug}}}
  ) {
    items {
      id
      data
    }
  }
}
    `) as unknown as TypedDocumentString<PageBySlugQuery, PageBySlugQueryVariables>;
export const PagesDocument = new TypedDocumentString(`
    query Pages {
  dataItemsV2DataItems(queryInput: {dataCollectionId: "Pages"}) {
    items {
      id
      data
    }
  }
}
    `) as unknown as TypedDocumentString<PagesQuery, PagesQueryVariables>;
export const ProductByHandleDocument = new TypedDocumentString(`
    query ProductByHandle($handle: String!) {
  storesProductsV1Products(
    queryInput: {query: {filter: {slug: $handle}, paging: {limit: 1}}}
  ) {
    items {
      ...Product
    }
  }
}
    fragment Product on CatalogV1Product {
  id
  name
  description
  stock {
    inventoryStatus
  }
  slug
  media {
    mainMedia {
      image {
        url
        altText
        width
        height
      }
    }
    items {
      image {
        url
        altText
        width
        height
      }
    }
  }
  price {
    price
    currency
  }
  manageVariants
  variants {
    id
    choices
    variant {
      priceData {
        price
        currency
      }
    }
    stock {
      trackQuantity
      quantity
    }
  }
  productOptions {
    name
    optionType
    choices {
      value
      description
    }
  }
  lastUpdated
}`) as unknown as TypedDocumentString<ProductByHandleQuery, ProductByHandleQueryVariables>;
export const GetRecommendationDocument = new TypedDocumentString(`
    mutation GetRecommendation($algorithms: [EcomRecommendationsV1AlgorithmInput!]!, $items: [EcommerceCatalogSpiV1CatalogReferenceInput!]!) {
  ecomRecommendationsV1GetRecommendation(
    input: {algorithms: $algorithms, items: $items, minimumRecommendedItems: 3}
  ) {
    recommendation {
      items {
        catalogItemId
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetRecommendationMutation, GetRecommendationMutationVariables>;
export const RecommendedProductsDocument = new TypedDocumentString(`
    query RecommendedProducts($filter: JSON) {
  storesProductsV1Products(queryInput: {query: {filter: $filter}}) {
    items {
      ...Product
    }
  }
}
    fragment Product on CatalogV1Product {
  id
  name
  description
  stock {
    inventoryStatus
  }
  slug
  media {
    mainMedia {
      image {
        url
        altText
        width
        height
      }
    }
    items {
      image {
        url
        altText
        width
        height
      }
    }
  }
  price {
    price
    currency
  }
  manageVariants
  variants {
    id
    choices
    variant {
      priceData {
        price
        currency
      }
    }
    stock {
      trackQuantity
      quantity
    }
  }
  productOptions {
    name
    optionType
    choices {
      value
      description
    }
  }
  lastUpdated
}`) as unknown as TypedDocumentString<RecommendedProductsQuery, RecommendedProductsQueryVariables>;
export const ProductsDocument = new TypedDocumentString(`
    query Products($filter: JSON!, $sort: [CommonSortingInput]!) {
  storesProductsV1Products(queryInput: {query: {filter: $filter, sort: $sort}}) {
    items {
      ...Product
    }
  }
}
    fragment Product on CatalogV1Product {
  id
  name
  description
  stock {
    inventoryStatus
  }
  slug
  media {
    mainMedia {
      image {
        url
        altText
        width
        height
      }
    }
    items {
      image {
        url
        altText
        width
        height
      }
    }
  }
  price {
    price
    currency
  }
  manageVariants
  variants {
    id
    choices
    variant {
      priceData {
        price
        currency
      }
    }
    stock {
      trackQuantity
      quantity
    }
  }
  productOptions {
    name
    optionType
    choices {
      value
      description
    }
  }
  lastUpdated
}`) as unknown as TypedDocumentString<ProductsQuery, ProductsQueryVariables>;
export const CreateCheckoutFromCurrentCartDocument = new TypedDocumentString(`
    mutation CreateCheckoutFromCurrentCart {
  ecomCurrentCartV1CreateCheckoutFromCurrentCart(
    input: {channelType: OTHER_PLATFORM}
  ) {
    checkoutId
  }
}
    `) as unknown as TypedDocumentString<CreateCheckoutFromCurrentCartMutation, CreateCheckoutFromCurrentCartMutationVariables>;
export const CreateRedirectSessionDocument = new TypedDocumentString(`
    mutation CreateRedirectSession($checkoutId: String!, $postFlowUrl: String!) {
  redirectsRedirectsV1CreateRedirectSession(
    input: {ecomCheckout: {checkoutId: $checkoutId}, callbacks: {postFlowUrl: $postFlowUrl}}
  ) {
    redirectSession {
      fullUrl
    }
  }
}
    `) as unknown as TypedDocumentString<CreateRedirectSessionMutation, CreateRedirectSessionMutationVariables>;