export function TaskRequirements() {
  return (
    <>
      <h3>Task Requirements</h3>
      <p>
        <ol>
          <li>
            Create a new React.js project and set up the necessary components
            and files.
          </li>
          <li>
            Fetch data from an API endpoint (e.g. Google Books API or other
            preferable free API).
          </li>
          <li>
            Build the dynamic table component that renders the fetched data with
            multiple columns listing some authors.
          </li>
          <li>
            Implement row selection functionality that highlights the selected
            row.
          </li>
          <li>
            Display detailed data specific to the selected row in the table or a
            separate section, showing books written by this author.
          </li>
          <li>
            Implement breadcrumb functionality to show the selected row's path
            or hierarchy.
          </li>
          <li>
            Handle breadcrumb navigation to allow the user to go back to
            previous levels.
          </li>
          <li>
            Apply appropriate styling using CSS or a CSS framework (e.g.,
            Tailwind CSS, Bootstrap) to make the application visually appealing.
          </li>
          <li>
            Test the application to ensure all components and functionality work
            as expected.
          </li>
        </ol>
      </p>
    </>
  );
}

export default TaskRequirements;
