import { Category } from "@/types/home";
import { Tab, Tabs, tabsClasses } from "@mui/material";

type Props = {
  value: number;
  handleChange: VoidFunction;
  categories: Category[];
};

export default function CategoriesTabs({
  handleChange,
  value,
  categories,
}: Props) {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      sx={{
        [`& .${tabsClasses.scrollButtons}`]: {
          "&.Mui-disabled": { opacity: 0.3 },
        },
      }}
    >
      {categories.map((itm) => {
        return <Tab label={itm.name} />;
      })}
    </Tabs>
  );
}
