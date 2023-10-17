import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="الوصف" {...a11yProps(0)} />
          <Tab label="التكاثر" {...a11yProps(1)} />
          <Tab label="المشاكل" {...a11yProps(2)} />
          <Tab label="الحلول" {...a11yProps(3)} />
          <Tab label="التسميد" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        شجيرة صغيرة معمرة، مستديمة الخضرة، ترتفع حتى 3 م. الساق قاسية ومتفرعة،
        والأوراق خضراء غامقة بيضاوية متقابلة، والأزهار متجمعة قمية بيضاء ناصعة
        تظهر في الربيع وحتى آواخر الخريف، والثمار صغيرة الحسلة لا تظهر كثيراً،
        والجذور منتشرة محلياً وكثيفة، ومعدل النمو للشجيرة بطيء إلى متوسط، تتوقف
        عن النمو بشكل شبه تام في فصل الشتاء، وتنمو بشكل ملحوظ في فصل الصيف إذا
        توافر لها الماء وأشعة الشمس. شجيرة الفل من الشجيرات التي تزين الحديقة
        الخارجية بشكلها الجذاب وعطر زهرها المميز، وإذا ما احسن تسميدها والعناية
        بها فإن موسم أزهارها يمتد إلى أشهر طويلة.ينجح الفل بشكل جيد تحت الظروف
        البيئية المعتدلة، ويتحمل العوامل البيئية القاسية بشكل جيد من حيث ارتفاع
        درجة الحرارة والرياح والجفاف، إلا أنها قليلة التحمل للملوحة، وتناسبها
        التربة اللومية الغنية الجيدة الصرف ومعرضة للإصابة بالحشرات القشرية والبق
        الدقيقي والذباب الأبيض
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        تحت ظروف البيت الزجاجي الرطب والدافيء في أو آخر الشتاء. القيمة التنسيقية
        تستخدم للزينة في الحدائق والشرفات لأزهارها ذات الشكل الجميل والرائحة
        الطيبة
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        ومن أشهر الآفات التي تصيب الفل، البق الدقيقي، والمن، وبقع الورق،
        والحشرات القرمزية ويمكن مقاومة هذه الآفات بطرق طبيعية حيوية مثل تربية
        حشرة الدعسوقة أو بنت المطر (Lady Bird أو Lady Bug) والحرص على الري
        المنتظم دون إغراق يجنب النبتة الإصابة بالعفن في الأوراق
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        الحل في استخدام مبيد فطري مع أخذ كافة الاحتياطات بلبس القفاز والكمام
        وابعاد المبيد عن الأطفال والرش خارج المنزل. أو استخدام أحد المبيدات
        الطبيعية
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        سماد نباتات الزينة التي اشتريتها حديثاً والتي زرعتها حديثاً في تربة
        جديدة في الغالب غير ضروري لمدة قد تصل إلى ثلاثة أشهر، لكنها بعد ذلك
        تحتاجه بشكل منتظم؛ لأنها تعيش في بيئة ليست بيئتها الأصلية، فهي بيئة
        محدودة لا تلبث أن تنفذ المغذيات منها حيث يستهلكها النبات خلال فترة
        النمو. ونهتم بتسميد النبات خلال فترة النمو النشط والتي غالباً تكون خلال
        الربيع والخريف والصيف، أما فترة الشتاء فهي في أغلب نباتات الزينة فترة
        سكون لا يُظهِرُ فيها النبات أي نمو جديد؛ ولذلك لا نسمدها ونقلل من ريها
      </CustomTabPanel>
    </Box>
  );
}
