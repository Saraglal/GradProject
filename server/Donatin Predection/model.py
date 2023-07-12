import sys
import json
import joblib
import numpy as np
import os

try:
    # Load the trained model
    script_directory = os.path.dirname(os.path.abspath(__file__))

    # Construct the absolute path to the model file
    model_file_path = os.path.join(script_directory, 'final_model.sav')

    # Load the trained model
    loaded_model = joblib.load(model_file_path)

    # Read the input data from stdin
    input_data = input()

    # Parse the input data as a JSON array
    transformed_data = json.loads(input_data)

    # Convert the transformed data to a NumPy array
    np_data = np.array(transformed_data)

    # Make predictions using the loaded model and the transformed data
    loaded_model, std_scaler = joblib.load(model_file_path)
    normalized_data = std_scaler.transform(np_data)
    result = loaded_model.predict(normalized_data)

    # Convert the result to a list
    result_list = result.tolist()

    # Print the result as a JSON array
    print(json.dumps(result_list))

except Exception as e:
    # Print the error message
    print('Error executing Python script:', str(e))

    # Print a non-zero exit code to indicate error
    print('Exit code:', 1)
