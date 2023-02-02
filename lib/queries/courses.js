const courseItem = `{
  _id,
  type,
  title,
  mode,
  country,
  language,
  starting_date
}`;

export const coursesQuery = `*[_type == "courses"][]${courseItem}`;

export default coursesQuery;
