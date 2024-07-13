import React, { useState } from "react";
import { Undo2 } from "lucide-react";
import Confetti from "react-confetti";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const titlesMap = {
  openWindow: "חלון פתוח",
  lightsOn: "אורות דולקים",
  babyInCar: "תינוק באוטו",
  other: "אחר",
};

const descriptionMap = {
  openWindow:
    "בזכותך בעל הרכב יוכל לשמור על הרכב שלו מפני גנבים, חיות ונזקי מזג האוויר",
  lightsOn: "בזכותך בעל הרכב ישמור על המצבר מלא, וגם שמרת על הסביבה על הדרך",
  babyInCar: "במקרי חירום יש להזמין משטרה",
  other: "רוצה לדווח על בעיה אחרת? כתוב כאן ונשמח לעזור",
};

const Report = ({ title, goBack }) => {
  const [image, setImage] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleReportSubmit = () => {
    setShowConfetti(true);
    toast.success("דיווח אנונימי נשלח בהצלחה!", {
      position: "top-center",
      autoClose: 5000,
    });
    setTimeout(() => {
      setShowConfetti(false);
      goBack('thankYou');
    }, 5000);
  };

  return (
    <div className="flex flex-col h-85 mt-4">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <div className="mx-auto">
        <h1 className="text-4xl font-bold">דיווח על {titlesMap[title]}</h1>
      </div>
      <div className="mt-8 flex-grow">
        <p className="text-lg">{descriptionMap[title]}</p>
      </div>
      <div className="flex-grow flex flex-col items-center">
        <input
          type="file"
          accept="image/*"
          capture="camera"
          id="upload"
          className="hidden"
          onChange={handleImageUpload}
        />
        <label
          htmlFor="upload"
          className="mt-4 cursor-pointer mb-4 text-lg font-bold bg-primary text-secondary-100 dark:bg-black dark:text-secondary-100 hover:text-primary dark:hover:text-slate-800 hover:bg-white dark:hover:bg-primary p-2 rounded-lg w-48"
        >
          {image ? "שינוי תמונה" : "העלאת תמונה"}
        </label>
        {image ? (
          <img src={image} alt="Uploaded" className="h-64 w-128" />
        ) : (
          <div className="h-64 w-128 flex items-center justify-center">
            <p className="text-gray-500">No image uploaded</p>
          </div>
        )}

        {image && (
          <button
            className="mt-4 text-lg font-bold bg-primary text-secondary-100 dark:bg-black dark:text-secondary-100 hover:text-primary dark:hover:text-slate-800 hover:bg-white dark:hover:bg-primary p-2 rounded-lg w-96"
            onClick={handleReportSubmit}
          >
            דיווח אנונימי
          </button>
        )}
      </div>
      <div className="mb-48 flex justify-center">
        <button className="header-icon" onClick={() => goBack()}>
          <Undo2 size="28" />
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Report;
