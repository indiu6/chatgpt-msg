import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-6 w-6" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">&quot;Explain Something to me&ldquo;</p>
            <p className="infoText">
              &quot;What is the difference between a dog and a cat?&ldquo;
            </p>
            <p className="infoText">
              &quot;What is the color of the sun?&ldquo;
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-6 w-6" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              &quot;Change the ChatGPT Model to use&ldquo;
            </p>
            <p className="infoText">
              &quot;Messeges are stored in Firebase Firestore&ldquo;
            </p>
            <p className="infoText">
              &quot;Hot Toast notifications when ChatGPT is thinking!&ldquo;
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-6 w-6" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              &quot;May occationally generate incorrect information&ldquo;
            </p>
            <p className="infoText">
              &quot;May occationally produce harmful instructions or biased
              content&ldquo;
            </p>
            <p className="infoText">
              &quot;Limited knowledge of world and events after 2021&ldquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
