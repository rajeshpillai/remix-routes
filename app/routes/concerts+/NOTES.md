# Nested URL's without layout nesting

Sometimes you want the URL to be nested, but you don't want the automatic layout nesting. You can opt out of nesting with a trailing underscore on the parent segment:

- concerts.tsx is the layout for concerts
- concerts_.mine.tsx (opts out of layout)
