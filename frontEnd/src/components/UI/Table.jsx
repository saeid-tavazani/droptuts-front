export default function Table({ titles, data, activeData }) {
  return (
    <table class="border-collapse border border-slate-500">
      <thead>
        <tr>
          {titles.map((item, index) => (
            <th key={index} class="border border-slate-600">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {activeData.map((active) => (
              <td class="border border-slate-700">{item[active]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
