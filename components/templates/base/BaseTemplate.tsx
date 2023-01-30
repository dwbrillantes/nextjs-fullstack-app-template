export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-bl from-orange-500 via-blue-800 to-black">
      {sampleTextProp}
    </div>
  );
};

export default BaseTemplate;
